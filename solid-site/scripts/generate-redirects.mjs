#!/usr/bin/env node
/**
 * Post-build: generates static HTML redirect stubs for legacy URLs into
 * .output/public/<old-path>/index.html.
 *
 * Why: GitHub Pages is a static host and cannot emit server-side 301s.
 * The old WordPress site exposed each portfolio post at a top-level slug
 * (e.g. /tynkowanie-scian-we-wroclawiu). The SolidJS rewrite moved them
 * under /realizacje/<slug>/. Google still has the old top-level URLs in
 * its index, and they now 404 — showing up in Search Console as
 * "Crawled, not indexed" / soft-404. A meta-refresh + canonical stub is
 * the accepted static-host equivalent of a 301 and lets Google forward
 * the old URLs' history to the new ones.
 *
 * The redirect map is derived from posts.json (old top-level slug ->
 * /realizacje/<slug>/) plus an explicit LEGACY_REDIRECTS map for any
 * old URL whose slug differs from the new one.
 *
 * Honors BASE_PATH so beta builds keep working under a subpath.
 *
 * Run after vinxi build: node scripts/generate-redirects.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const outputDir = resolve(root, ".output", "public");
const base = (process.env.BASE_PATH || "").replace(/\/$/, "");

const posts = JSON.parse(readFileSync(resolve(root, "src/data/posts.json"), "utf-8"));

// old WordPress top-level slug -> new in-app path (leading slash, no base).
const redirects = {};

// 1. Every portfolio post used to live at its bare slug at the site root.
for (const p of posts) {
  redirects[`/${p.slug}`] = `/realizacje/${p.slug}/`;
}

// 2. Explicit overrides / extra legacy URLs whose old slug differs from the
//    new one. Add entries here as Search Console surfaces more dead URLs.
const LEGACY_REDIRECTS = {
  // /uslugi/ pages consolidated into the flagship service page
  "/uslugi": "/tynki-ze-szlichta-pod-malowanie/",
  "/uslugi/tynki-maszynowe-wroclaw": "/tynki-ze-szlichta-pod-malowanie/",
  "/uslugi/tynki-gipsowe-wroclaw": "/tynki-ze-szlichta-pod-malowanie/",
  "/uslugi/tynkowanie-wroclaw": "/tynki-ze-szlichta-pod-malowanie/",
  "/uslugi/gladz-natryskowa-wroclaw": "/tynki-ze-szlichta-pod-malowanie/",
  "/uslugi/malowanie-scian-wroclaw": "/tynki-ze-szlichta-pod-malowanie/",
  "/uslugi/firma-tynkarska-wroclaw": "/tynki-ze-szlichta-pod-malowanie/",
};
Object.assign(redirects, LEGACY_REDIRECTS);

const stub = (target) => {
  const href = `${base}${target}`;
  return `<!DOCTYPE html>
<html lang="pl-PL">
<head>
<meta charset="utf-8">
<title>Przekierowanie…</title>
<link rel="canonical" href="https://wroclawtynki.pl${target}">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=${href}">
<script>location.replace(${JSON.stringify(href)})</script>
</head>
<body>
<p>Ta strona została przeniesiona. <a href="${href}">Przejdź do nowej lokalizacji</a>.</p>
</body>
</html>
`;
};

if (!existsSync(outputDir)) {
  console.warn(`generate-redirects: output dir missing at ${outputDir} — run after build`);
  process.exit(0);
}

let count = 0;
for (const [from, to] of Object.entries(redirects)) {
  const dir = resolve(outputDir, from.replace(/^\//, ""));
  const file = resolve(dir, "index.html");
  // Safety: never clobber a real prerendered page that happens to share the path.
  if (existsSync(file)) {
    console.warn(`generate-redirects: skipping ${from} — real page already exists`);
    continue;
  }
  mkdirSync(dir, { recursive: true });
  writeFileSync(file, stub(to));
  count++;
}

console.log(`generate-redirects: ${count} legacy redirect stub(s) emitted`);
