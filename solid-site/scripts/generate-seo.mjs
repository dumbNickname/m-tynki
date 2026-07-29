#!/usr/bin/env node
/**
 * Generates sitemap.xml, robots.txt, and llms.txt into public/
 * Run after adding new routes/posts: node scripts/generate-seo.mjs
 * Also runs automatically as part of `npm run build`.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const read = (rel) => JSON.parse(readFileSync(resolve(root, rel), "utf-8"));

const site = read("src/data/site.json");
const posts = read("src/data/posts.json");
const navigation = read("src/data/navigation.json");
const servicePages = [
  "tynki-maszynowe-wroclaw",
  "tynki-gipsowe-wroclaw",
  "tynkowanie-wroclaw",
  "gladz-natryskowa-wroclaw",
  "malowanie-scian-wroclaw",
  "firma-tynkarska-wroclaw",
];

const SITE_URL = site.url;
const TODAY = new Date().toISOString().slice(0, 10);

// Mirror of solid-site/src/utils/url.ts withTrailingSlash() — kept as a
// duplicate because this is a Node ESM build script and importing the .ts
// utility through tsx is overkill. If the rule changes, update both.
const withTrailingSlash = (path) => {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("mailto:") || path.startsWith("tel:")) return path;
  if (path.includes("#") || path.includes("?")) return path;
  if (path === "/" || path.endsWith("/")) return path;
  return path + "/";
};

const pages = [
  { loc: "/", priority: "1.0" },
  { loc: "/kontakt", priority: "0.8" },
  { loc: "/realizacje", priority: "0.8" },
  { loc: "/galeria", priority: "0.7" },
  { loc: "/tynki-ze-szlichta-pod-malowanie", priority: "0.9" },
  { loc: "/uslugi", priority: "0.8" },
  { loc: "/polityka-prywatnosci", priority: "0.3" },
];

const serviceEntries = servicePages.map((slug) => ({
  loc: `/uslugi/${slug}`,
  priority: "0.85",
}));

const postEntries = posts.map((p) => ({
  loc: `/realizacje/${p.slug}`,
  lastmod: p.date,
  priority: "0.6",
}));

const categoryEntries = navigation.categories
  .filter((c) => c.slug !== "wszystkie")
  .map((c) => ({
    loc: c.href,
    priority: "0.5",
  }));

const allEntries = [...pages, ...serviceEntries, ...postEntries, ...categoryEntries];

// --- sitemap.xml ---
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (e) => `  <url>
    <loc>${SITE_URL}${withTrailingSlash(e.loc)}</loc>
    <lastmod>${e.lastmod || TODAY}</lastmod>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(root, "public/sitemap.xml"), sitemapXml);
console.log(`sitemap.xml: ${allEntries.length} URLs`);

// --- robots.txt ---
// AI crawler policy: implicit allow-all is fine for an SMB seeking AI-search
// visibility, but documenting the policy with explicit Allow rules prevents
// future maintainers from reflexively blocking these crawlers. If at some
// point you want to block training-only use while keeping search visibility,
// flip the rule for that specific crawler from `Allow: /` to `Disallow: /`.
const robotsTxt = `User-agent: *
Disallow:

# AI / LLM crawlers — explicit allow (currently the desired policy)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(resolve(root, "public/robots.txt"), robotsTxt);
console.log("robots.txt: generated");

// --- llms.txt ---
// Format per https://llmstxt.org/ : an H1 (project name), a blockquote summary,
// optional free-form Markdown, then H2 sections whose contents are *lists of
// links* in the form `- [name](url): optional notes`. Bare URLs are NOT valid
// file-list items — every link must be a Markdown hyperlink.
const url = (loc) => `${SITE_URL}${withTrailingSlash(loc)}`;

const servicePageMeta = {
  "tynki-maszynowe-wroclaw": "Tynki maszynowe Wrocław",
  "tynki-gipsowe-wroclaw": "Tynki gipsowe Wrocław",
  "tynkowanie-wroclaw": "Tynkowanie Wrocław",
  "gladz-natryskowa-wroclaw": "Gładź natryskowa Wrocław",
  "malowanie-scian-wroclaw": "Malowanie ścian Wrocław",
  "firma-tynkarska-wroclaw": "Firma tynkarska Wrocław",
};

const mainPageMeta = {
  "/": "Strona główna",
  "/kontakt": "Kontakt",
  "/realizacje": "Realizacje",
  "/galeria": "Galeria",
  "/tynki-ze-szlichta-pod-malowanie": "Tynki ze szlichtą pod malowanie",
  "/uslugi": "Usługi",
  "/polityka-prywatnosci": "Polityka prywatności",
};

const mainLinks = pages
  .map((p) => `- [${mainPageMeta[p.loc] || p.loc}](${url(p.loc)})`)
  .join("\n");

const serviceLinks = serviceEntries
  .map((e) => {
    const slug = e.loc.replace("/uslugi/", "");
    return `- [${servicePageMeta[slug] || slug}](${url(e.loc)})`;
  })
  .join("\n");

const realizacjeLinks = posts
  .map((p) => `- [${p.title}](${url(`/realizacje/${p.slug}`)}): ${p.location}, ${p.date}`)
  .join("\n");

const categoryLinks = categoryEntries
  .map((e) => {
    const cat = navigation.categories.find((c) => c.href === e.loc);
    return `- [${cat ? cat.label : e.loc}](${url(e.loc)})`;
  })
  .join("\n");

const socialLinks = [
  `- [Facebook](${site.facebookUrl})`,
  `- [Instagram](${site.instagramUrl})`,
  `- [Opinie Google](${site.googleReviewUrl})`,
].join("\n");

const llmsTxt = `# ${site.name}

> ${site.description}

Firma tynkarska M-TYNK działa od 1999 roku we Wrocławiu i okolicach. Specjalizuje się w tynkach maszynowych gipsowych, tynkach gipsowych ze szlichtą wygładzającą pod malowanie, gładzi natryskowej, zabudowach z płyt gipsowo-kartonowych oraz natryskowym malowaniu ścian.

- Lokalizacja: ${site.address}
- Telefon: ${site.phone}
- E-mail: ${site.email}

## Strony główne

${mainLinks}

## Usługi

${serviceLinks}

## Realizacje

${realizacjeLinks}

## Kategorie realizacji

${categoryLinks}

## Media społecznościowe

${socialLinks}
`;

writeFileSync(resolve(root, "public/llms.txt"), llmsTxt);
console.log("llms.txt: generated");
