#!/usr/bin/env node
/**
 * Writes src/data/image-sizes.json: pixel width/height of every page's main
 * image (the `ogImage` passed to SeoHead). SeoHead uses it for og:image:width/
 * height and for the primaryImageOfPage ImageObject, so the numbers always
 * match the actual files.
 *
 * Sources: every `ogImage="..."` literal in src/routes, every post thumbnail
 * (realizacje pages use it as ogImage), and the default share image.
 * Runs automatically as part of `pnpm build`; the output is committed so dev
 * and typecheck work without a build.
 */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Google's minimum for article/page images.
const MIN_PIXELS = 50_000;

function imageSize(file) {
  const b = readFileSync(file);
  if (b.readUInt32BE(0) === 0x89504e47) {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const marker = b[i + 1];
      // SOF0–SOF15, except DHT (C4), JPG (C8) and DAC (CC)
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
      }
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  throw new Error(`${file}: unsupported image format (use JPEG or PNG for page images)`);
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : /\.tsx$/.test(e.name) ? [join(dir, e.name)] : [],
  );
}

const paths = new Set(["images/og-default.jpg"]);
for (const file of walk(resolve(root, "src/routes"))) {
  for (const m of readFileSync(file, "utf-8").matchAll(/ogImage="([^"]+)"/g)) paths.add(m[1]);
}
for (const post of JSON.parse(readFileSync(resolve(root, "src/data/posts.json"), "utf-8"))) {
  paths.add(post.thumbnail);
}

const sizes = {};
for (const p of [...paths].sort()) {
  const size = imageSize(resolve(root, "public", p.replace(/^\//, "")));
  if (size.width * size.height < MIN_PIXELS) {
    throw new Error(`${p} is ${size.width}×${size.height} — page images need at least ${MIN_PIXELS} pixels.`);
  }
  sizes[p] = size;
}

writeFileSync(resolve(root, "src/data/image-sizes.json"), JSON.stringify(sizes, null, 2) + "\n");
console.log(`✓ image-sizes.json (${Object.keys(sizes).length} images)`);
