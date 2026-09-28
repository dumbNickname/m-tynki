# SEO Strategy Note — 2026-07-15 (GSC data review + off-page plan)

**Context:** Follow-up to `ACTION-PLAN.md` (2026-06-03). The owner reported that impressions
dipped slightly despite the June round of fixes, and asked whether another model/audit is
needed. Short answer: **no — the June audit is still correct. The gap is execution of
content + off-page items, not analysis.** This note interprets the latest GSC query export,
records the on-page work shipped today, and writes down the off-page plan that cannot live
in the repo.

---

## 1. What the latest GSC data actually says

Query export (top queries by impressions, ~28-day window):

| Query | Impr | Position | Clicks | Read |
|---|---|---|---|---|
| firma tynkarska | 300 | **4.1** | **131** | The ONE winner. Ranks well → converts. |
| tynki maszynowe | 950 | 6.9 | 4 | Huge volume, stuck page-1-bottom. |
| tynki maszynowe wrocław | 516 | 7.6 | 10 | Money keyword, rank not good enough. |
| tynki wrocław | 539 | 9.6 | 9 | Same. |
| tynki gipsowe | 444 | 4.0 | **0** | Position 4 with ZERO clicks = snippet/cannibalization problem. |
| tynkowanie wrocław | 454 | 7.2 | 1 | No dedicated page existed until today. |
| tynk gipsowy | 439 | 38.0 | 0 | Barely ranking. |
| gładzie wrocław | 221 | 20.5 | 2 | Weak — no dedicated page existed until today. |
| tynki wroclaw (no diacritics) | 93 | 1.3 | 4 | Proof the site CAN rank #1 when intent is precise. |

### The core diagnosis: a "position 7–10 plateau"

Almost every commercial keyword sits at position **6–14** — page 1 bottom / page 2. At that
range CTR is ~0–2%, so impressions exist but clicks don't. The June fixes were correct but a
handful of schema/technical tweaks does **not** move a page from position 8 to position 3;
that jump is driven by **content depth + off-page authority + local signals**, which were the
*owner-dependent* items (H3, H4, H5, review refresh, off-site) that had NOT been done.

### Why impressions "sank" — most likely NOT a regression

- **Seasonality.** Plastering/construction search demand in PL softens in mid-summer
  (holiday period) and winter. A small impression dip in a July export is expected.
- **Normal SERP volatility** at positions 7–10 (any competitor movement swings impressions).
- **Do not chase impressions.** Chase *position on the money keywords* and *clicks*. The
  falsifiability metric that matters is: does `tynki maszynowe wrocław` move from ~7.6 toward
  top 3, and does `tynki gipsowe` (pos 4, 0 clicks) start earning clicks once a dedicated page
  owns it instead of the homepage.

### Keyword cannibalization (important)

The homepage was trying to rank for *everything* — `tynki maszynowe`, `tynki gipsowe`,
`tynkowanie`, `gładzie`, `firma tynkarska` — all at once. One URL can't own all of them.
`tynki gipsowe` at position 4 with **zero clicks** is the classic symptom: the homepage
ranks but its title/snippet is a generic brand string, not "Tynki gipsowe Wrocław", so nobody
clicks. The fix is a dedicated, well-titled page per keyword cluster + strong internal links
so Google promotes the *right* URL. That's what today's work sets up.

---

## 2. On-page work shipped today (in the repo)

Goal: fix internal-link structure + kill cannibalization + add pages for untapped clusters.
All changes build and typecheck clean; 44 routes prerender.

### 2.1 New `/uslugi` hub page (`src/routes/uslugi/index.tsx`)
- Hub-and-spoke root that links to every service page. Added to sitemap (priority 0.8).
- Added **"Usługi"** to the main nav pointing at the hub (chose a real hub page over a JS
  dropdown — a hub page passes stronger internal-link equity and doesn't risk the
  intentional full-reload/hydration setup; see AGENTS.md note 16).

### 2.2 Three new service pages (real services only)
Added as data in `src/data/servicePages.ts` (rendered by existing `/uslugi/[slug].tsx`):
- `/uslugi/tynkowanie-wroclaw` — targets `tynkowanie wrocław` (454) + `tynkowanie` (242).
- `/uslugi/gladz-natryskowa-wroclaw` — targets `gładzie wrocław` (221, was pos 20 = easy win).
- `/uslugi/malowanie-scian-wroclaw` — targets `malowanie ścian wrocław` cluster (natryskowe malowanie is a real service).

> **Deliberately NOT created:** `tynki cementowo-wapienne` page. Owner confirmed M-TYNK does
> **not** offer cementowo-wapienne tynki, so ranking for it would attract wrong leads and hurt
> trust. Also removed the misleading homepage "Tynki Gipsowe utwardzane" card that referenced
> cementowo-wapienne as an alternative; replaced it with a "Tynki maszynowe" card linking to
> that service page.

### 2.3 Homepage service cards now link out
`src/routes/index.tsx` — the 6 service cards were dead (`<div>`, no href). They now link to
their matching `/uslugi/*` (or szlichta) page with a "Dowiedz się więcej →" affordance. This
is the single biggest internal-linking fix: it tells Google those service pages matter and
routes ranking signals to the correct URL per keyword.

### 2.4 Expanded content (H4, partial)
- `tynki-maszynowe-wroclaw` gained a unique "Jak przebiega tynkowanie maszynowe krok po kroku?"
  section (~200 words) — pushes it past the thin/duplicate threshold.
- The 3 new pages each ship with 3 unique content sections + 5 FAQs (~500–650 words each).
- Added `cardTitle` / `cardSummary` fields to the `ServicePage` type for hub/footer cards.

### 2.5 `firma-tynkarska-wroclaw` presented as "O firmie", not a service
`firma tynkarska` is the site's single best keyword (GSC: pos 4.1, **131 clicks** — more than
all other queries combined), so the page is kept and its content/URL/ranking are untouched.
But it's a company descriptor, not a service, so it no longer sits in the service grid:
- On `/uslugi`, `servicePages.filter(slug !== "firma-tynkarska-wroclaw")` removes it from the
  service tiles; it's re-added below as a distinct **"O firmie"** section (green left-border
  card + "Poznaj firmę →" link).
- Still linked from the homepage intro paragraph and the szlichta page and the footer, so it
  is **not** orphaned. The `/uslugi/[slug].tsx` sibling-link list still surfaces it via
  `cardTitle` on the individual service pages.
- Net effect: taxonomy reads correctly ("usługi" = actual services; company page = About)
  while the 131-click ranking asset is fully preserved.
- This doubles as the de-facto About page until the audit's H3 (`/o-nas` + owner `Person`
  schema) is executed.

### 2.6 Footer + sitemap
- Footer now lists all 6 service pages + the hub.
- `scripts/generate-seo.mjs` service-page list updated (sitemap now has 7 `/uslugi/*` URLs).

### Still TODO on-page (owner-dependent, from June plan — unchanged)
- **H3** — name the owner (Jarosław Makarewicz) on-page + `Person` schema. BLOCKED on the
  owner supplying photo + bio + years of experience (see ACTION-PLAN.md H3 checklist).
- **H4 remainder** — expand `tynki-gipsowe-wroclaw` and `firma-tynkarska-wroclaw` bodies with
  more unique depth (comparison content, company timeline). Currently adequate but could go
  deeper once the owner supplies specifics.
- **H5** — replace generic `alt="M-TYNK Wrocław"` on gallery/realizacje images with descriptive
  alt text. Needs owner to describe photos (room, finish, location).
- **M3** — contact form (Formspree/Web3Forms). Phone-only capture leaks off-hours + typers.

---

## 3. Off-page plan — the real lever (NOT in the repo)

For a local service business, on-page SEO is ~30% of ranking. The other ~70% lives outside
this codebase. **This is almost certainly why competitors outrank M-TYNK at position 7–10 on
identical-quality content.** These are the highest-leverage actions, roughly in order.

### 3.1 Google Business Profile (GBP) — #1 priority
The winning keyword (`firma tynkarska`, pos 4, 131 clicks) almost certainly ranks because of
GBP + reviews, not the homepage. For local-pack queries, GBP dominates. Checklist:
- [ ] Profile 100% complete: all service categories, service area (Wrocław + powiat towns),
      hours, description, website link pointing to the trailing-slash homepage.
- [ ] **Primary category** = "Firma tynkarska / Plasterer". Add secondary categories
      (Painter, Drywall contractor) for the malowanie/GK services.
- [ ] Add **Services** list inside GBP mirroring the site's service pages (same names).
- [ ] Post photos regularly (weekly if possible) — freshly plastered walls, the agregat,
      before/after. GBP photo velocity is a ranking + engagement signal.
- [ ] Use **GBP Posts** (oferty/aktualności) ~2×/month — even short updates.
- [ ] Fill the **Q&A** section proactively (seed it with the FAQs already written for the
      service pages — they're ready to copy-paste).

### 3.2 Reviews — velocity beats everything
Review count + freshness vs. competitors is usually THE differentiator between position 8 and 3.
- [ ] Systematically ask every finished-job customer for a Google review. A simple SMS with
      the review link (`https://g.page/r/CQJV4JkgnlhYEAg/review`) right after handover.
- [ ] Target 2–3 new reviews/month, sustained. This compounds.
- [ ] **Reply to every review** as the owner (Google weights owner responses; also E-E-A-T).
- [ ] Then reflect them on-site: refresh `reviews.json` quarterly (June plan M4) so the
      homepage doesn't show only 2023 reviews (looks inactive to 2026 visitors).

### 3.3 Local citations / NAP consistency
Get M-TYNK listed with **identical** Name/Address/Phone across Polish directories. Consistency
is the signal, not volume. Priority directories:
- [ ] Panorama Firm (panoramafirm.pl)
- [ ] Oferteo.pl (also a lead source for tynkarze)
- [ ] Fixly.pl / OLX usługi
- [ ] Aleo.com, pkt.pl, biznes-firma.pl
- [ ] Apple Maps + Bing Places (same DNS-verified NAP)
- [ ] Ensure the exact same address string everywhere: `Obornicka 77C/4A, 51-114 Wrocław`.

### 3.4 Backlinks (a few good local ones)
- [ ] Suppliers/manufacturers (Knauf, Atlas, Cekol applicator listings if available).
- [ ] Local Wrocław business directories / branżowe portale budowlane.
- [ ] Any GC/developer partners M-TYNK works with — a "wykonawca tynków" credit + link.
- Quality > quantity. 5 relevant local links beat 100 spammy ones.

### 3.5 YouTube (June plan L8) — the realistic off-site authority lever
- [ ] 5–10 short clips: "Jak wygląda tynk ze szlichtą gładziolitu", project walk-throughs.
      M-TYNK already has the visual material from realizacje.
- [ ] Link from `sameAs` in JSON-LD and from `llms.txt`.
- AI assistants correlate strongly with video/off-site presence for citations.

---

## 4. Do we need another GPT / another audit? — explicit answer

**No.** Rationale, for the record:
- The June audit (`ACTION-PLAN.md`) is thorough, evidence-based, and still accurate. Another
  model would regenerate the same conclusions.
- The unfinished items are **execution work requiring real-world inputs** (owner's name/photo,
  actual customer reviews, GBP access, citation submissions) — no model can produce those.
- Risk of "one more AI optimization pass": content bloat, keyword cannibalization, and
  fabricated E-E-A-T (fake certifications/claims) that actively *hurt* trust.
- The correct next step is **operational discipline**, not more analysis: run the
  `GSC-PLAYBOOK.md` weekly/monthly checks, execute the GBP + reviews loop above, and let the
  new pages age (4–8 weeks) before judging results.

---

## 5. How we'll know this worked (falsifiability)

Set a review date ~8 weeks out. Expect:
- New `/uslugi/*` pages **indexed** (check GSC → Pages) and starting to collect impressions
  for their target queries (`tynkowanie wrocław`, `gładzie wrocław`, `malowanie ścian wrocław`).
- `tynki gipsowe` (pos 4, 0 clicks) starts earning clicks once `/uslugi/tynki-gipsowe-wroclaw`
  is promoted by Google as the canonical target for that query (watch which URL shows in GSC
  for that query — success = the service page, not the homepage).
- With GBP + reviews executed: `tynki maszynowe wrocław` / `tynki wrocław` drift from
  position ~7–9 toward top 5. This is the slow, real lever.
- If new pages are indexed but flat after 8 weeks AND off-page wasn't executed, the conclusion
  is "on-page ceiling reached — off-page is now the bottleneck," which points right back to §3.

---

*Grounded in the existing June 2026 audit framework. No new tooling required. Priorities:
GBP > reviews > citations > the on-page pages shipped today > backlinks/YouTube.*
