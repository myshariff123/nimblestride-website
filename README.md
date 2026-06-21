# nimblestride.ca — Company Website

Static marketing site for [Nimblestride Inc.](https://nimblestride.ca), hosted on Vercel.

## Products

| Product | Domain | Description |
|---|---|---|
| **ClearBind** | [clearbind.ca](https://clearbind.ca) | AI-powered submission intake & appetite matching for Canadian P&C insurance MGAs and brokers |
| **GridWitness** | [gridwitness.ca](https://gridwitness.ca) | Real-time hardware telemetry, immutable carbon accounting, and one-click OSFI B-15 / TCFD / IFRS S2 reports for data centres |
| **New In Canada Mortgage** | [newincanadamortgage.ca](https://newincanadamortgage.ca) | Mortgage guidance built for newcomers to Canada |

## Contact

General & support inquiries: **support@nimblestride.ca**

## Tech Stack

- Plain HTML/CSS — no build step, instant deploys
- Hosted on Vercel (static)
- Domain: nimblestride.ca (DNS → Vercel)

## Project Structure

```
nimblestride-website/
├── index.html       # Main landing page
├── vercel.json      # Vercel routing config
└── README.md        # This file
```

## Deploy

Push to `main` → Vercel auto-deploys.

Manual deploy:
```bash
npx vercel --prod
```
