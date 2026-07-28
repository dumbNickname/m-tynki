# AGENTS.md — M-TYNK Wrocław Website

## Project Overview

This project is the M-TYNK website (a plastering company in Wrocław, Poland):

- **SolidJS SSG site** (`solid-site/`) — SolidJS with static site generation. This is the only site (the original WordPress export previously kept in `legacy-wordpress/` has been removed).

Live domain: `wroclawtynki.pl`
All user-facing content is in **Polish (pl-PL)**.

---

## SolidJS Site (`solid-site/`)

### Tech Stack

- **Package manager:** pnpm (workspace root: `pnpm-workspace.yaml`)
- **Framework:** SolidJS 1.9 + SolidStart 1.1 + Vinxi 0.5
- **Routing:** @solidjs/router (file-based routes)
- **SEO:** @solidjs/meta (Title, Meta, Link tags)
- **Build output:** Static site generation (SSG) via `preset: "static"` in `app.config.ts`
- **Styling:** CSS Modules (`.module.css` co-located with components) + global.css for variables/reset/utilities
- **Fonts:** Modern system font stack (`ui-sans-serif`, `system-ui`, `-apple-system`, `Segoe UI Variable Display`, fallbacks). No web fonts loaded — performance is prioritised over typographic uniformity. The `public/fonts/` directory still contains historical Inter + Plus Jakarta Sans woff2 files but they are **not referenced anywhere** (no `@font-face` declaration). Safe to delete the dir if not needed for future use.
- **Data:** JSON files in `src/data/` (no CMS, no API calls)
- **TypeScript:** Strict mode enabled

### Build / Dev / Test Commands

```bash
cd solid-site
pnpm install       # Install dependencies (run from repo root or solid-site/)
pnpm dev           # Development server (vinxi dev)
pnpm build         # Static site generation (vinxi build) → .output/public/ (also inlines CSS)
pnpm preview       # Preview built site (vinxi start)
pnpm typecheck     # TypeScript check (tsc --noEmit)
```

There are **no lint or test commands** configured yet.

### Directory Structure

```
solid-site/
├── app.config.ts              # SolidStart config (static preset, prerender routes)
├── package.json
├── tsconfig.json
├── scripts/
│   ├── generate-thumbs.py     # Generates thumbnail images (requires Pillow)
│   ├── generate-seo.mjs       # Generates sitemap.xml, robots.txt, llms.txt (runs before each build)
│   ├── check-internal-links.mjs  # Pre-build guard: fails build if raw <a href="/..."> is used instead of NavLink
│   ├── inline-css.mjs         # Post-build: inlines CSS to eliminate render-blocking <link> tags
│   ├── copy-404.mjs           # Post-build: copies .output/public/404/index.html → .output/public/404.html for GitHub Pages
│   └── generate-redirects.mjs # Post-build: emits meta-refresh redirect stubs for legacy WordPress URLs (static-host 301 equivalent)
├── public/
│   ├── sitemap.xml            # Auto-generated XML sitemap (all 16 routes)
│   ├── robots.txt             # Auto-generated robots.txt with sitemap reference
│   ├── llms.txt               # Auto-generated LLM-friendly site summary
│   └── images/                # All site images (logos, uploads, gallery)
│       ├── mtynk-logo-gladziolit.png
│       ├── m-tynk_logo_greenw-300x81-1.png
│       ├── mtynk-ludzik-gladziolit-300x300-1.png
│       ├── ocena-google-300x300-1-150x150-1.png
│       ├── thumbs/            # Auto-generated thumbnails (400px wide, JPEG q70)
│       └── uploads/           # Post/gallery images (2023/, 2024/, elementor/)
└── src/
    ├── app.tsx                # Root app (Router + MetaProvider)
    ├── entry-client.tsx       # Client entry (hydration)
    ├── entry-server.tsx       # Server entry (HTML document shell, theme init script)
    ├── styles/
    │   └── global.css         # All styles (variables, dark theme overrides, layout, components, responsive)
    ├── data/
    │   ├── site.json          # Site metadata (name, phone, email, URLs, logos)
    │   ├── navigation.json    # Nav links (main, footer, categories)
    │   ├── posts.json         # Blog posts (slug, title, date, categories, gallery, etc.)
    │   ├── gallery.json       # Gallery page image paths
    │   └── reviews.json       # Google reviews (static, extracted from original site)
    ├── utils/
    │   └── images.ts          # Shared image utilities (toThumb path converter)
    ├── components/
    │   ├── Layout.tsx         # Page wrapper (Header + main + Footer + ScrollToTop + CookieBanner)
    │   ├── Header.tsx         # Sticky header (desktop nav + mobile flyout menu + theme toggle)
    │   ├── Footer.tsx         # Site footer (brand, links, social, copyright)
    │   ├── SeoHead.tsx        # SEO meta tags (title, OG, canonical, twitter)
    │   ├── PageHeader.tsx     # Page title banner with breadcrumbs
    │   ├── PostCard.tsx       # Blog post card for listing pages (uses thumbnails)
    │   ├── Gallery.tsx        # Image grid with lightbox (thumbnails in grid, full-res in lightbox)
    │   ├── Reviews.tsx        # Google reviews grid (static data, no third-party scripts)
    │   ├── ThemeToggle.tsx    # Dark/light mode toggle button (sun/moon icons)
    │   ├── CookieBanner.tsx   # Lightweight self-hosted cookie consent banner
    │   └── ScrollToTop.tsx    # Scroll-to-top floating button
    └── routes/
        ├── index.tsx                          # Homepage (/)
        ├── kontakt.tsx                        # Contact page (/kontakt)
        ├── galeria.tsx                        # Gallery page (/galeria)
        ├── tynki-ze-szlichta-pod-malowanie.tsx # Flagship service page (standalone route)
        ├── polityka-prywatnosci.tsx           # Privacy policy
        ├── uslugi/
        │   ├── index.tsx                      # Services hub (/uslugi)
        │   └── [slug].tsx                     # Service landing pages (/uslugi/:slug) — data-driven from servicePages.ts
        ├── realizacje/
        │   ├── index.tsx                      # All posts listing (/realizacje)
        │   ├── [slug].tsx                     # Single post page (/realizacje/:slug)
        │   └── kategoria/
        │       └── [slug].tsx                 # Category filtered listing (/realizacje/kategoria/:slug)
        └── [...404].tsx                       # Catch-all 404 page
```

### Prerendered Routes (23 total)

Defined in `app.config.ts`:
- `/`, `/kontakt`, `/realizacje`, `/galeria`, `/tynki-ze-szlichta-pod-malowanie`, `/uslugi`, `/polityka-prywatnosci`, `/404`
- 6 service landing pages: `/uslugi/{slug}` (SEO pages targeting money keywords — see `servicePages.ts`)
- 6 post detail pages: `/realizacje/{slug}`
- 3 category pages: `/realizacje/kategoria/{slug}`

### CSS Architecture

- CSS Modules (`.module.css` files co-located with components and routes)
- Global file `src/styles/global.css` contains only CSS custom properties, reset/normalize, typography, and shared utility classes (`container`, `section`, `grid-2`, `grid-3`, `btn-*`, `text-center`, `divider`)
- CSS custom properties on `:root` for colors, fonts, spacing, shadows
- Dark theme via `[data-theme="dark"]` selector in `global.css` overriding `:root` color variables
- Responsive breakpoints: 1024px (tablet), 768px (mobile) — each module contains its own media queries
- Fonts: system font stack only — see "Tech Stack" above. The `--font-body` and `--font-heading` CSS variables both resolve to the same modern system stack defined in `global.css`.
- TypeScript declarations for CSS modules in `src/css.d.ts`

### Data Model

**site.json**: Company info (name, phone, email, address, social URLs, logo paths)
**navigation.json**: Main nav links, footer links, category definitions (slug + label)
**servicePages.ts** (`src/data/`): Array of the 6 SEO service landing pages rendered by `/uslugi/[slug].tsx`. Each entry: slug, title (meta), h1, description (meta + Service schema), cardTitle, cardSummary, intro, points[], sections[] (heading + paragraphs[]), faq[] (question + answer). These target money keywords (tynki maszynowe, tynki gipsowe, tynkowanie, gładź natryskowa, malowanie ścian, firma tynkarska — all "Wrocław"). Meta descriptions use a `★ … od 1999 — bezpłatna wycena. ☎ 535 157 036.` CTR pattern.
**posts.json**: Array of post objects with: slug, title, date, categories[], thumbnail, excerpt, description (HTML), executor, duration, area, location, gallery[]
**gallery.json**: Array of image paths for the gallery page
**reviews.json**: Array of review objects with: name, date, text, stars (extracted from original Google reviews widget)

### Adding New Content

**New blog post (realizacja):**
1. Add entry to `src/data/posts.json`
2. Add images to `public/images/uploads/`
3. Run `python3 scripts/generate-thumbs.py` to create thumbnails
4. Add prerender route to `app.config.ts`

**New service landing page (SEO):**
1. Add an entry to the `servicePages` array in `src/data/servicePages.ts` (slug, title, h1, description with `★ … ☎` CTR pattern, cardTitle, cardSummary, intro, points, sections, faq)
2. Add `/uslugi/{slug}` prerender route to `app.config.ts`
3. Add a footer link (and optionally a homepage `services` card / intro-paragraph internal link) — see `navigation.json` and `src/routes/index.tsx`
4. No new route file needed — `/uslugi/[slug].tsx` renders every entry data-driven

**New page:**
1. Create route file in `src/routes/`
2. Use `Layout`, `SeoHead`, `PageHeader` components
3. Add prerender route to `app.config.ts`
4. Add navigation entry to `src/data/navigation.json` if needed

### Important Notes for Agents

1. Run `pnpm typecheck` after any TypeScript changes
2. Run `pnpm build` to verify all routes prerender successfully — this also auto-regenerates `sitemap.xml`, `robots.txt`, and `llms.txt` via `scripts/generate-seo.mjs` (no manual step needed)
3. Images are served from `public/images/` — paths in JSON data start with `/images/`
4. The `entry-server.tsx` defines the HTML document shell (lang, favicons, fonts, theme init script)
6. All components import data directly from JSON files (static imports, no dynamic fetching)
7. The Gallery component manages its own lightbox state
8. Category `"wszystkie"` means "all" — shows all posts without filtering
9. The Reviews component renders static review data from `reviews.json` — no TrustIndex or third-party widget scripts
10. Homepage includes: hero, intro, about, reviews, featured service (Tynki Gipsowe ze szlichtą wygładzającą — flagged via `featured: true` in the `services` array in `src/routes/index.tsx`), 5 secondary service cards in an asymmetric 6-column grid, full "O Nas" section, "Jak działamy?" vertical-rail timeline, and CTA
11. **Dark theme**: Controlled via `data-theme="dark"` on `<html>`. An inline script in `entry-server.tsx` reads `localStorage("mtynk_theme")` before paint to prevent flash. Falls back to `prefers-color-scheme` system preference. ThemeToggle component in Header handles user switching.
12. **Cookie banner**: Self-hosted (`CookieBanner.tsx`), stores consent in `localStorage("mtynk_cookies_accepted")`. No third-party cookie scripts (CookieYes was removed). The site sets no cookies — only uses localStorage for theme preference and cookie consent.
13. **Image thumbnails**: Gallery grid and PostCard listings use 400px-wide JPEG thumbnails from `public/images/thumbs/`. Full-res images load only in the lightbox. Run `python3 scripts/generate-thumbs.py` after adding new images. The `toThumb()` utility in `src/utils/images.ts` converts image paths to their thumbnail equivalents.
14. **Lazy loading**: All below-the-fold `<img>` tags use native `loading="lazy"`. Header logos and hero image are intentionally eager (above the fold, hero uses `fetchpriority="high"`).
15. **No analytics/tracking**: The site has no Google Analytics, Facebook Pixel, or any third-party tracking scripts. The privacy policy (`polityka-prywatnosci.tsx`) reflects this — update it if analytics are added.
16. **Full-reload navigation (intentional)**: The site intentionally uses full page reloads instead of SolidJS client-side routing. `entry-client.tsx` contains a global click handler that intercepts internal `<a>` clicks and forces `window.location.href` navigation, plus a `popstate` handler that reloads on back/forward. `NavLink` uses plain `<a>` tags (not `<A>` from `@solidjs/router`) for the same reason. This is by design for SSG — each page is a fully pre-rendered HTML document. Do NOT remove these handlers or convert NavLink to use the SolidJS router's `<A>` component.
17. **404 page**: Defined as a catch-all route at `src/routes/[...404].tsx` (with `[...404].module.css`). Listed in `app.config.ts` prerender as `/404`. Vinxi outputs it to `.output/public/404/index.html`, but **GitHub Pages only serves a top-level `404.html`** — that's why `scripts/copy-404.mjs` runs at the end of the build to copy the file to `.output/public/404.html`. If you change hosts, verify the new host serves `404.html` from the root on missing paths (Netlify, Cloudflare Pages, Vercel all do; raw S3 / Nginx need explicit config).
18. **Dark theme color tokens invert** (`--color-dark`, `--color-white`, `--color-text`, etc.) — they swap meaning between light and dark mode. **This is a footgun for hardcoded "always dark" UI**: using `var(--color-dark)` as a background for an always-dark element will make it go *white* in dark mode. If you do need an always-dark surface, hardcode the hex (e.g. `#14171c`) and provide an explicit `[data-theme="dark"]` override. We tried this once for the homepage's "Tynki Gipsowe ze szlichtą wygładzającą" featured card and reverted — it read as a forgotten dark accident on the light page rather than intentional emphasis. The current featured-card pattern keeps the card in the page's normal light/dark surface but emphasises it with a 4px primary-green left border, a subtle radial green-tint background gradient, and a pulsing-dot eyebrow. That's the recommended approach for "make this card more important than the others."
19. **Asymmetric services grid**: Homepage services use a 6-column grid where one entry flagged with `featured: true` in the `services` array spans all 6 columns (full-width dark hero card with eyebrow + title + description), and the rest span 2 columns each. Tablet collapses to 4-col grid, mobile to single column. To change which service is featured, edit the `featured` flag in `src/routes/index.tsx`, not the array order.
20. **Vertical rail timeline**: The "Jak działamy?" section uses a flex-column vertical rail with circled numbered markers connected by a `linear-gradient` line that fades at the bottom. Max-width 720px, centered. The connecting line is `.timeline::before` with `position: absolute` — it relies on the items having consistent spacing, so don't add `margin` between timeline items (use `padding` instead).
21. **Legacy URL redirects**: The old WordPress site exposed portfolio posts at top-level slugs (e.g. `/tynkowanie-scian-we-wroclawiu`); the rewrite moved them under `/realizacje/{slug}/`. Google still has the old URLs indexed, and on a static host they would 404 (showing as "Crawled, not indexed" / soft-404 in Search Console). `scripts/generate-redirects.mjs` runs post-build and emits a meta-refresh + `<link rel=canonical>` + `noindex,follow` stub at `.output/public/{old-slug}/index.html` for each — the static-host equivalent of a 301. The map is auto-derived from `posts.json` (`/{slug}` → `/realizacje/{slug}/`); add any old URL whose slug differs from the new one to the `LEGACY_REDIRECTS` object in that script. The script **skips** any path where a real prerendered page already exists, so it can't clobber routes like `/tynki-ze-szlichta-pod-malowanie/`. These stubs are intentionally **not** in `sitemap.xml` (you don't advertise redirected URLs).

---

## Git Remotes & Deployment Workflow

This project has **two remote repositories**:

| Remote   | URL                                                  | Purpose              |
|----------|------------------------------------------------------|----------------------|
| `beta`   | `https://github.com/dumbNickname/m-tynki-beta.git`  | Preview / staging    |
| `origin` | `https://github.com/dumbNickname/m-tynki.git`       | Production           |

**`beta` is the default push target** (`remote.pushDefault = beta`). This means:

- `git push` → pushes to **beta** (preview site on GitHub Pages at `dumbNickname.github.io/m-tynki-beta`)
- `git push origin` → pushes to **production** (served at `wroclawtynki.pl`)

### Base Path Handling

The GitHub Actions workflow (`.github/workflows/deploy.yml`) detects which repo it's running in:
- **Beta repo** (`dumbNickname/m-tynki-beta`): builds with `BASE_PATH=/m-tynki-beta` so the site works under a subpath on GitHub Pages
- **Production repo** (`dumbNickname/m-tynki`): builds with `BASE_PATH=/` for the custom domain

The `BASE_PATH` env var flows into:
- `app.config.ts` → Vite `base` and Vinxi `server.baseURL`
- `entry-server.tsx` → `<base href>` tag (resolves all relative image/link paths) + `noindex` meta on beta
- `NavLink` component → prepends base to internal `href`s

### Typical Workflow

1. Make changes on `master`
2. `git push` — deploys to beta for preview
3. Verify on beta GitHub Pages URL
4. `git push origin` — deploys to production

---

## Git Conventions

- Commit messages in English
- Descriptive commit messages explaining the change purpose
