# M-TYNK Wrocław — Website

Website for [M-TYNK](https://wroclawtynki.pl), a plastering company in Wrocław, Poland.

Built with **SolidJS** + **SolidStart** and deployed as a **static site** (SSG).

## Quick Start

```bash
cd solid-site
pnpm install
pnpm dev
```

Opens a local dev server with hot reload.

## Build & Preview

```bash
pnpm build      # generates static site → .output/public/
pnpm preview    # serves the built site locally
```

## Checks

```bash
pnpm typecheck  # TypeScript strict-mode check (tsc --noEmit)
```

No linter or test runner is configured yet.

## Project Structure

```
solid-site/
├── public/images/       # Static images (logos, gallery, uploads)
├── src/
│   ├── components/      # Reusable UI components (Header, Footer, Gallery, etc.)
│   ├── data/            # JSON data files (posts, navigation, site config)
│   ├── routes/          # File-based pages (/, /kontakt, /realizacje, …)
│   └── styles/          # global.css (variables, reset, shared utilities)
└── app.config.ts        # SolidStart config & prerender route list
```

Styles use **CSS Modules** (`.module.css` files co-located with components). The global CSS file contains only design tokens, resets, and shared utility classes.

## Adding Content

**New blog post:** add an entry to `src/data/posts.json`, put images in `public/images/uploads/`, and register the route in `app.config.ts`.

**New page:** create a route in `src/routes/`, add it to `app.config.ts`, and optionally to `src/data/navigation.json`.
