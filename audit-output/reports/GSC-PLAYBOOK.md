# Google Search Console Playbook — wroclawtynki.pl

**Created:** 2026-06-03 (after C1 + H1 + H2 + M5-partial + M1 + M2 + M6 landed in production)
**Purpose:** Verify the SEO audit fixes against GSC reality, then turn the action plan's "leading indicators" into a recurring monitoring discipline.

GSC: https://search.google.com/search-console

---

## Phase 1 — Today (15-20 min, immediate verification)

### Pre-step: confirm the property is verified

- Open GSC, make sure `wroclawtynki.pl` is verified — preferably as a **Domain property**, not URL-prefix.
- Domain properties cover all subdomains and protocols at once; URL-prefix only covers exactly one.
- Verification via DNS TXT record at OVH is the cleanest method (one record, never breaks).
- If only URL-prefix is verified, add Domain too — they coexist fine and aggregate data is better.

### 1.1 Trigger immediate re-crawl of the new sitemap

1. GSC → **Sitemaps** (left nav).
2. Enter `https://wroclawtynki.pl/sitemap.xml`, click **Submit**.
3. If already submitted and showing stale data, click the existing row → **Resubmit**.

**Falsifiability check:** Within 5 min, the row should show **Success** + 18 discovered URLs.

### 1.2 Force re-validation of "Page with redirect" exclusions

The audit's C1 fix is the single biggest item to verify in GSC.

1. GSC → **Pages** (or **Indexing → Pages**).
2. Scroll to **Why pages aren't indexed**.
3. Click **Page with redirect**.
4. You'll likely see ~17 URLs flagged. Click **Validate fix** at the top of the view.
5. Google enqueues a priority recrawl of all flagged URLs.

**Why it matters:** Without clicking Validate Fix, the count drops slowly as Google randomly re-crawls. With it clicked, expect the count to drop to 0 within ~10 days instead of ~6 weeks.

### 1.3 URL Inspection for 5-10 priority URLs

GSC → **URL Inspection** at the top → paste URL → **Request Indexing** if not on Google or canonical-mismatched.

Worth doing manually for these 8 priority URLs (one at a time, ~30 seconds each; GSC daily quota is ~10 manual requests so this fits):

- https://wroclawtynki.pl/
- https://wroclawtynki.pl/kontakt/
- https://wroclawtynki.pl/realizacje/
- https://wroclawtynki.pl/galeria/
- https://wroclawtynki.pl/tynki-ze-szlichta-pod-malowanie/
- https://wroclawtynki.pl/uslugi/tynki-maszynowe-wroclaw/
- https://wroclawtynki.pl/uslugi/tynki-gipsowe-wroclaw/
- https://wroclawtynki.pl/uslugi/firma-tynkarska-wroclaw/

### 1.4 Validate the schema work via Rich Results Test

GSC's own **Enhancements** section is slow to update. Faster verification via the standalone tool:

https://search.google.com/test/rich-results — paste each priority URL above and confirm:

- **Organization (LocalBusiness / HomeAndConstructionBusiness)** detected, no errors
- **Review snippet** detected with 10 reviews + 5.0 aggregate rating (verifies H1+H2)
- **FAQPage** detected on `/uslugi/*` and `/tynki-ze-szlichta-pod-malowanie/`
- **BreadcrumbList** detected on subpages (homepage correctly has none now)

Errors = malformed schema, requires a fix. Warnings ("recommended field missing") are safe to ignore short-term.

### 1.5 Capture today's baseline numbers

**The single most important step. Skip it and you can't tell what actually moved later.**

Screenshot or note from GSC right now:

- **Performance** (last 28 days, default range, Country filter: Poland):
  - Total clicks: __
  - Total impressions: __
  - Average CTR: __ %
  - Average position: __
- **Pages → Total indexed:** __
- **Pages → Why pages aren't indexed**, breakdown by reason. Especially:
  - Page with redirect: __  ← this is the C1 falsifiability target
  - Other exclusion reasons + counts
- **Performance → Search appearance** dropdown — note which appearance types already exist (probably no "Review snippet" today; should appear within 2-3 weeks)

Two weeks from now (target date **2026-06-17**), compare against these baseline numbers. The action plan's falsifiability checks all reference these metrics.

---

## Phase 2 — The next 60 days (recurring discipline)

### Weekly (5 min, e.g. Monday morning)

1. **Performance** → switch range to "Compare last 7 days vs previous 7 days" → look at click delta. If clicks drop >20%, drill into **Pages** filter to find which URL collapsed.
2. **Pages → Why pages aren't indexed** → check that "Page with redirect" count is trending toward 0 (target: 17 → 0 within 14 days post-deploy).
3. **Top growing queries** → Performance tab → sort by impression delta. New queries showing up (especially district names like "tynki krzyki", "firma tynkarska psie pole") confirm M2 is working.

### Bi-weekly (15 min, every other Friday)

1. **Search appearance → Review snippet** — start tracking impressions here. First non-zero data confirms H1+H2 landed.
2. **Coverage → Indexed pages** — should be 18 (one per sitemap URL). Drop indicates an indexing problem snuck in.
3. **Manual brand-search test** (incognito window):
   - Search "M-TYNK Wrocław"
   - Confirm GBP knowledge panel appears on the right
   - Confirm review stars (yellow 5.0★) show in the result snippet
   - Confirm the result links to the trailing-slash URL
4. **Manual AI-citation test (qualitative, quarterly more realistic):**
   - Ask ChatGPT: "Polecasz firmę tynkarską we Wrocławiu?" — see if M-TYNK is cited
   - Ask Perplexity: "Tynki maszynowe Wrocław cena" — same
   - Ask Google AI Mode (when available in PL): "firma tynkarska Wrocław"

### Monthly (30 min)

1. **GSC → Settings → Crawl stats** — verify Googlebot crawl rate is healthy (>10 requests/day for a site this size). Drop in crawl rate means something on the host is rejecting Googlebot.
2. **GSC → Performance → Devices** — if mobile clicks are dramatically below desktop, that's a mobile-UX gap (relevant once you tackle H4 / contact form).
3. Month-over-month delta vs today's baseline — clicks, impressions, average position, indexed-page count. Direction matters more than absolute numbers at this scale.

---

## Two GSC integrations specifically considered (and rejected)

### Indexing API association

Found in **Settings → Associations**. **Skip it.**
- Reason: IndexNow (M1) already handles Bing/Yandex/Naver/Seznam, and Google reads the sitemap fast enough for a 18-URL site. The Indexing API requires GCP setup + a quota; not worth it at this scale.

### GA4 association

**Skip it.**
- Reason: the privacy policy explicitly says no analytics, no cookies. Adding GA4 just for GSC integration would contradict the policy and undo a real Trust signal. The policy is a known E-E-A-T differentiator per the audit — preserve it.

---

## Insights tab — quick weekly glance

GSC has an **Insights** view (top-level nav, separate from Performance) that surfaces "your top trending queries this week" without filter setup. Worth a 30-second glance during the weekly check — sometimes catches a query spike you'd miss in raw filtering.

---

## What GSC will NOT tell you (and what to use instead)

| Question | GSC has it? | Use instead |
|---|---|---|
| Real-time Core Web Vitals | Slow (~28-day lag) | https://pagespeed.web.dev/?url=https%3A%2F%2Fwroclawtynki.pl%2F — pulls live CrUX + runs Lighthouse, ~30 sec, free |
| AI Overview / ChatGPT citations | No tracking | Manual quarterly brand-query testing (Phase 2 bi-weekly) |
| Bing / Yandex performance | No (Google-only) | Bing Webmaster Tools — free, https://www.bing.com/webmasters, same DNS TXT verification as GSC. With M1 live, Bing already has fresh sitemap data within hours of each deploy |

---

## Single most important recommendation

**Wait two weeks before drawing conclusions.** Google's indexing pipeline has weekly cadence built in. The trailing-slash fix landed today; "Page with redirect" count won't move meaningfully until ~3-5 days after Google re-crawls each URL. Review snippet eligibility takes ~7-10 days to show in SERP. Don't panic if Monday's numbers look identical to today's — that's expected.

Set a calendar reminder for **2026-06-17** (two weeks out). At that point we should see:

- Page with redirect: 17 → ~0
- Indexed pages: stable or up (no regressions from C1)
- First "Review snippet" impressions appearing
- First impressions for at least one Wrocław district query (Krzyki / Fabryczna / Psie Pole / Śródmieście / Stare Miasto)

If those metrics don't move within 2 weeks, **that's the signal to investigate** — not before.

---

## Specific action-plan items this playbook validates

| Action plan item | GSC signal that confirms it landed | Timeline |
|---|---|---|
| C1 (trailing slashes) | "Page with redirect" exclusion count drops from ~17 → 0 | 7-14 days |
| H1 (GBP sameAs) | Brand-search "M-TYNK Wrocław" shows GBP knowledge panel | 14-30 days |
| H2 (per-review markup) | Performance → Search appearance shows non-zero "Review snippet" impressions | 7-14 days |
| M5 (schema housekeeping) | Rich Results Test passes with zero errors for Organization | Immediate (test once today) |
| M1 (IndexNow) | First GitHub Actions deploy log shows `HTTP 200` from indexnow.org POST | Next deploy |
| M2 (Wrocław districts) | First impressions for queries containing district names (Krzyki, Fabryczna, etc.) | 30-60 days |
| M6 (AI-crawler robots) | No regression in branded-query AI citations (ChatGPT, Perplexity) | Quarterly check |
