# TODO / Bug Tracker — nimblestride.ca

Running list of known issues and follow-up work. Newest first.

---

## 🐛 BUG: Google Search Console — pages not being indexed

**Reported:** 2026-07-27 (via Search Console email, "New reasons prevent pages from being indexed")
**GSC data last update:** 2026-07-23
**Status:** Open — not started
**Priority:** Medium (SEO / discoverability)

### Summary
Google Search Console reports 12 pages on `nimblestride.ca` are excluded from indexing for
the following new reasons. All validation states are "Not Started".

| Reason | Source | Pages |
|---|---|---|
| Not found (404) | Website | 6 |
| Blocked due to unauthorized request (401) | Website | 3 |
| Page with redirect | Website | 2 |
| Duplicate without user-selected canonical | Website | 1 |

### Context / likely causes (to confirm in GSC "Page indexing" report → click each reason to see exact URLs)

This is a Vite SPA on Vercel. `vercel.json` rewrites **every** path to `/index.html`
(returns HTTP 200), so genuine server-side 404s should not occur for in-app routes.
That points the reasons at specific behaviors:

- **401 Blocked (3 pages)** — Likely the auth-gated routes `/portal` and `/onboarding`
  (and/or a variant). If these sit behind auth that returns 401 to Googlebot, they can't
  be indexed. Decide: should they even be in the sitemap? They are currently listed in
  `public/sitemap.xml`. If gated, remove from sitemap and/or add `<meta name="robots" content="noindex">`.
- **Page with redirect (2 pages)** — Likely product links that now redirect to external
  domains (clearbind.ca, gridwitness.ca, newincanadamortgage.ca) per the June 2026 URL
  routing change, or an apex/www (or trailing-slash) redirect. Confirm which URLs.
- **Not found — 404 (6 pages)** — Likely previously-indexed URLs that were removed/renamed
  (e.g. old `/products/*` internal pages replaced by external domain links). Google retries
  old URLs. These may resolve on their own, or need a proper 301 to the new location.
- **Duplicate without user-selected canonical (1 page)** — A URL variant (e.g. with/without
  trailing slash, or `?` params, or apex vs www) served without a `<link rel="canonical">`.
  `SEOHelmet.tsx` exists — verify it emits a self-referencing canonical on every page.

### Suggested fixes (once exact URLs are known)
- [ ] Open GSC → Page indexing → click each of the 4 reasons and export the exact URL list.
- [ ] Audit `public/sitemap.xml` — remove any gated (`/portal`, `/onboarding`) or
      non-canonical URLs; keep only publicly indexable pages.
- [ ] Ensure `SEOHelmet.tsx` sets a self-referencing `<link rel="canonical">` on every route.
- [ ] Add 301 redirects for removed/renamed old URLs (or `noindex` if intentionally gone).
- [ ] Confirm a single canonical host (apex `nimblestride.ca` vs `www`) and 301 the other.
- [ ] Add `noindex` to auth-gated routes if they should not appear in search.
- [ ] After fixes deploy, use GSC "Validate Fix" on each reason.

### References
- GSC report: Search Console → nimblestride.ca → Indexing → Pages
- Relevant files: `public/sitemap.xml`, `public/robots.txt`, `vercel.json`,
  `src/App.tsx` (routes), `src/components/SEOHelmet.tsx`
