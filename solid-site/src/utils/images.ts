import posts from "~/data/posts.json";

/** Descriptive alt texts keyed by image path, collected from posts' `galleryAlts`. */
export const galleryAlts: Record<string, string> = {};
for (const post of posts as { gallery: string[]; galleryAlts?: string[] }[]) {
  post.galleryAlts?.forEach((alt, i) => {
    const src = post.gallery[i];
    if (src && alt) galleryAlts[src] = alt;
  });
}

export function toThumb(src: string): string {
  const withoutExt = src.replace(/\.[^.]+$/, "");
  if (src.startsWith("images/")) {
    return "images/thumbs/" + withoutExt.slice("images/".length) + ".jpg";
  }
  return "images/thumbs/" + withoutExt + ".jpg";
}
