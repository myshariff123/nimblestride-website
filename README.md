# nimblestride.ca — Company Website

Marketing site for [Nimblestride Inc.](https://nimblestride.ca), built with React 19 + Vite + TypeScript + Tailwind CSS and deployed to Vercel.

## Live Site

[https://nimblestride.ca](https://nimblestride.ca)

## Products

| Product | Domain | Detail Page | Description |
|---|---|---|---|
| **ClearBind** | [clearbind.ca](https://clearbind.ca) | `/products/clearbind` | AI-powered submission intake & appetite matching for Canadian P&C insurance MGAs and brokers |
| **GridWitness** | [gridwitness.ca](https://gridwitness.ca) | `/solutions` | Real-time hardware telemetry, immutable carbon accounting, and one-click OSFI B-15 / TCFD / IFRS S2 reports for data centres |
| **New In Canada Mortgage** | [newincanadamortgage.ca](https://newincanadamortgage.ca) | `/products/newincanada-mortgage` | AI-guided mortgage platform built for newcomers to Canada |

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
│   │   ├── Home.tsx              # Landing page with product cards
│   │   ├── Products.tsx          # Products overview (all three)
│   │   ├── ClearBind.tsx         # ClearBind product detail page
│   │   ├── MortgageApp.tsx       # New In Canada Mortgage detail page
│   │   ├── Solutions.tsx         # GridWitness platform detail page
│   │   └── Contact.tsx           # Contact form
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

### Product URL Routing (June 2026)
- **Footer**: All three product links in "Our Products" column now go directly to their external domains (clearbind.ca, gridwitness.ca, newincanadamortgage.ca) instead of internal pages.
- **Products.tsx overview page**: Each product section has a direct link to its product domain.
- **ClearBind.tsx detail page**: CTA button now links directly to [clearbind.ca](https://clearbind.ca).
- **MortgageApp.tsx detail page**: Added prominent "Visit newincanadamortgage.ca" button alongside the interest registration CTA.
- **Solutions.tsx (GridWitness) detail page**: Added prominent "Visit gridwitness.ca" button alongside the portal access CTA.