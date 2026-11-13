import posts from "~/data/posts.json";

/** Descriptive alt texts keyed by image path, collected from posts' `galleryAlts`. */
export const galleryAlts: Record<string, string> = {};
for (const post of posts as { gallery: string[]; galleryAlts?: string[] }[]) {
  post.galleryAlts?.forEach((alt, i) => {
    const src = post.gallery[i];
    if (src && alt) galleryAlts[src] = alt;
  });
}

// Variants are always JPEG. Non-.jpg sources keep their extension in the name
// (wyr.png -> wyr-png.jpg) so they can't collide with a same-named .jpg.
// Must stay in sync with to_variant_path() in scripts/generate-thumbs.py.
function toVariant(src: string, folder: string): string {
  const match = src.match(/\.([^./]+)$/);
  const ext = match ? match[1].toLowerCase() : "";
  const base = match ? src.slice(0, -match[0].length) : src;
  const name = (ext === "jpg" || ext === "" ? base : `${base}-${ext}`) + ".jpg";
  return `images/${folder}/` + (name.startsWith("images/") ? name.slice("images/".length) : name);
}

/** 400px-wide JPEG thumbnail. */
export function toThumb(src: string): string {
  return toVariant(src, "thumbs");
}

/** 800px-wide JPEG (post card images only). */
export function toMedium(src: string): string {
  return toVariant(src, "medium");
}
