# AGENTS.md — M-TYNK Wrocław Website

## Project Overview

This project contains **two versions** of the M-TYNK website (a plastering company in Wrocław, Poland):

1. **Legacy static HTML** (`legacy-wordpress/`) — Original WordPress + Elementor export. Static HTML files, no build system.
2. **SolidJS SSG site** (`solid-site/`) — Modern rewrite using SolidJS with static site generation.

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
- **Data:** JSON files in `src/data/` (no CMS, no API calls)
- **TypeScript:** Strict mode enabled

### Build / Dev / Test Commands

```bash
cd solid-site
pnpm install       # Install dependencies (run from repo root or solid-site/)
pnpm dev           # Development server (vinxi dev)
pnpm build         # Static site generation (vinxi build) → .output/public/
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
│   └── generate-seo.mjs      # Generates sitemap.xml, robots.txt, llms.txt (runs before each build)
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
        ├── tynki-ze-szlichta-pod-malowanie.tsx # Service page
        ├── polityka-prywatnosci.tsx           # Privacy policy
        ├── realizacje/
        │   ├── index.tsx                      # All posts listing (/realizacje)
        │   └── [slug].tsx                     # Single post page (/realizacje/:slug)
        └── category/
            └── [slug].tsx                     # Category filtered listing (/category/:slug)
```

### Prerendered Routes (16 total)

Defined in `app.config.ts`:
- `/`, `/kontakt`, `/realizacje`, `/galeria`, `/tynki-ze-szlichta-pod-malowanie`, `/polityka-prywatnosci`
- 6 post detail pages: `/realizacje/{slug}`
- 4 category pages: `/category/{slug}`

### CSS Architecture

- CSS Modules (`.module.css` files co-located with components and routes)
- Global file `src/styles/global.css` contains only CSS custom properties, reset/normalize, typography, and shared utility classes (`container`, `section`, `grid-2`, `grid-3`, `btn-*`, `text-center`, `divider`)
- CSS custom properties on `:root` for colors, fonts, spacing, shadows
- Dark theme via `[data-theme="dark"]` selector in `global.css` overriding `:root` color variables
- Responsive breakpoints: 1024px (tablet), 768px (mobile) — each module contains its own media queries
- Fonts: Inter (body), Plus Jakarta Sans (headings) from Google Fonts
- TypeScript declarations for CSS modules in `src/css.d.ts`

### Data Model

**site.json**: Company info (name, phone, email, address, social URLs, logo paths)
**navigation.json**: Main nav links, footer links, category definitions (slug + label)
**posts.json**: Array of post objects with: slug, title, date, categories[], thumbnail, excerpt, description (HTML), executor, duration, area, location, gallery[]
**gallery.json**: Array of image paths for the gallery page
**reviews.json**: Array of review objects with: name, date, text, stars (extracted from original Google reviews widget)

### Adding New Content

**New blog post:**
1. Add entry to `src/data/posts.json`
2. Add images to `public/images/uploads/`
3. Run `python3 scripts/generate-thumbs.py` to create thumbnails
4. Add prerender route to `app.config.ts`

**New page:**
1. Create route file in `src/routes/`
2. Use `Layout`, `SeoHead`, `PageHeader` components
3. Add prerender route to `app.config.ts`
4. Add navigation entry to `src/data/navigation.json` if needed

### Important Notes for Agents

1. Run `pnpm typecheck` after any TypeScript changes
2. Run `pnpm build` to verify all routes prerender successfully
3. Images are served from `public/images/` — paths in JSON data start with `/images/`
4. Legacy WordPress files live in `legacy-wordpress/` — reference only, do not edit
5. The `entry-server.tsx` defines the HTML document shell (lang, favicons, fonts, theme init script)
6. All components import data directly from JSON files (static imports, no dynamic fetching)
7. The Gallery component manages its own lightbox state
8. Category `"wszystkie"` means "all" — shows all posts without filtering
9. The Reviews component renders static review data from `reviews.json` — no TrustIndex or third-party widget scripts
10. Homepage includes: hero, intro, about, reviews, featured service (Gładź natryskowa), 6 service cards, full "O Nas" section, "Jak działamy?" accordion, and CTA
11. **Dark theme**: Controlled via `data-theme="dark"` on `<html>`. An inline script in `entry-server.tsx` reads `localStorage("mtynk_theme")` before paint to prevent flash. Falls back to `prefers-color-scheme` system preference. ThemeToggle component in Header handles user switching.
12. **Cookie banner**: Self-hosted (`CookieBanner.tsx`), stores consent in `localStorage("mtynk_cookies_accepted")`. No third-party cookie scripts (CookieYes was removed). The site sets no cookies — only uses localStorage for theme preference and cookie consent.
13. **Image thumbnails**: Gallery grid and PostCard listings use 400px-wide JPEG thumbnails from `public/images/thumbs/`. Full-res images load only in the lightbox. Run `python3 scripts/generate-thumbs.py` after adding new images. The `toThumb()` utility in `src/utils/images.ts` converts image paths to their thumbnail equivalents.
14. **Lazy loading**: All below-the-fold `<img>` tags use native `loading="lazy"`. Header logos and hero image are intentionally eager (above the fold, hero uses `fetchpriority="high"`).
15. **No analytics/tracking**: The site has no Google Analytics, Facebook Pixel, or any third-party tracking scripts. The privacy policy (`polityka-prywatnosci.tsx`) reflects this — update it if analytics are added.

---

## Legacy Static HTML Site (`legacy-wordpress/`)

The original WordPress export. Kept for reference. See below for structure.

### Key Files

- `index.html` — Homepage
- `kontakt.html` — Contact page
- `realizacje.html` — Portfolio page
- `galeria.html` — Gallery page
- `tynki-ze-szlichta-pod-malowanie.html` — Service page
- `polityka-prywatnosci.html` — Privacy policy
- `wp-content/` — Static assets (CSS, images)
- `wp-includes/` — WordPress core JS/CSS

### Notes

- No build system, no package manager
- Do not edit vendor files in `wp-content/plugins/`, `wp-content/themes/astra/`, or `wp-includes/`
- These files are reference only for the migration

---

## Git Conventions

- Commit messages in English
- Descriptive commit messages explaining the change purpose
