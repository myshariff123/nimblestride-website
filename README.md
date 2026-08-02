# nimblestride.ca — Company Website

Marketing site for [Nimblestride Inc.](https://nimblestride.ca), built with React 19 + Vite + TypeScript + Tailwind CSS and deployed to Vercel.

## Live Site

[https://nimblestride.ca](https://nimblestride.ca)

## Products

The site is organized around **three regulated domains**, one product each:

| Domain | Product | Live Platform | Detail Page | Description |
|---|---|---|---|---|
| **Insurance** | **ClearBind** | [clearbind.ca](https://clearbind.ca) | `/products/clearbind` | AI-powered submission intake & appetite matching for Canadian P&C insurance MGAs and brokers |
| **Banking & Finance** | **ClearMRM** | [clearmrm.nimblestride.ca](https://clearmrm.nimblestride.ca) | `/products/clearmrm` | AI model risk management for Canadian FRFIs, purpose-built for OSFI Guideline E-23 |
| **Energy & Infrastructure** | **GridWitness** | `/portal` (in-app) | `/solutions` | Hardware-anchored ESG compliance — telemetry, WORM carbon accounting, and OSFI B-15 / TCFD / IFRS S2 reports for data centres |

> **Note:** _New In Canada Mortgage_ was removed from the corporate site in Aug 2026 (product held back from the marketing narrative). GridWitness "access platform" CTAs now point to the in-app `/portal` route rather than a raw-IP URL.

## Contact

General & support inquiries: **support@nimblestride.ca**

## Tech Stack

- **Frontend:** React 19 + Vite + TypeScript + Tailwind CSS
- **Router:** react-router-dom (SPA with client-side routing)
- **SEO:** react-helmet-async
- **Icons:** lucide-react
- **Hosting:** Vercel (auto-deploy on push to `main`)
- **CI/CD:** GitHub Actions → Vercel CLI

## Project Structure

```
nimblestride-website/
├── src/
│   ├── pages/
│   │   ├── Home.tsx              # Landing page with product cards (by domain)
│   │   ├── Products.tsx          # Products overview (Insurance / Banking / Energy)
│   │   ├── ClearBind.tsx         # ClearBind (Insurance) detail page
│   │   ├── ClearMRM.tsx          # ClearMRM (Banking & Finance) detail page
│   │   ├── Solutions.tsx         # GridWitness (Energy & Infrastructure) detail page
│   │   └── Contact.tsx           # Contact form (per-product routing)
│   ├── components/
│   │   ├── Footer.tsx            # Footer with product links to external domains
│   │   ├── HeroSection.tsx
│   │   ├── SEOHelmet.tsx
│   │   └── ...
│   └── App.tsx                   # Router setup
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions → Vercel deploy pipeline
├── vercel.json                   # Vercel config (cleanUrls, no trailingSlash)
└── README.md
```

## Deploy

Push to `main` → GitHub Actions builds with Vercel CLI → auto-deploys to nimblestride.ca.

```yaml
# .github/workflows/deploy.yml triggers on push to main
# Uses VERCEL_TOKEN GitHub secret (configured in repo Settings → Secrets)
```

## Recent Changes

### Domain-based restructure (Aug 2026)
- **Removed New In Canada Mortgage** across the whole site — page, route, nav, footer, contact form, product cards, sitemap, JSON-LD, and SEO copy.
- **Reorganized by domain**: Insurance (ClearBind) → Banking & Finance (ClearMRM) → Energy & Infrastructure (GridWitness). Home, Products, and About now present the portfolio as three regulated domains rather than four flat products.
- **Fixed broken/incorrect links**: GridWitness "access platform" CTAs (footer, Products, Solutions) previously pointed to a raw-IP `nip.io` URL — now route to the in-app `/portal` (and `/solutions`) routes.
- **Corrected sitewide branding**: `SEOHelmet` and `index.html` had hardcoded "GridWitness by NimbleStride" titles/OG tags left over from when the site was GridWitness-only — now branded "NimbleStride".
- **SEO hygiene**: sitemap refreshed to list the actual product pages and drop the auth-gated `/portal` + `/onboarding` routes (the source of Search Console 401 "blocked" indexing errors).

### Product URL Routing (June 2026)
- **Footer / Products / detail pages**: product links go directly to their live platforms (clearbind.ca, clearmrm.nimblestride.ca) where a public domain exists.