# nimblestride.ca — Company Website

Static marketing site for [Nimblestride Inc.](https://nimblestride.ca), hosted on Vercel.

## Products

| Product | Domain | Description |
|---|---|---|
| **ClearBind** | [clearbind.ca](https://clearbind.ca) | AI-powered submission intake, enrichment & appetite matching for Canadian P&C insurance MGAs and brokers. Four modules: submission processing, CapacityLens analytics, BrokerBridge with AI rate indication, and LeadPulse with Aria AI Copilot. |
| **GridWitness** | [16-174-1-7.nip.io](https://16-174-1-7.nip.io) (live) · gridwitness.ca (planned) | Hardware-verified carbon telemetry and compliance reporting. Scope 1/2/3, WORM ledger, OSFI B-15, Bill C-59, IFRS S2, and Science-Based Targets for Canadian data centres and financial institutions. |
| **New In Canada Mortgage** | [newincanadamortgage.ca](https://newincanadamortgage.ca) | Mortgage guidance built for newcomers to Canada — no Canadian credit history required. |
| **ClearMRM** | [clearmrm.nimblestride.ca](https://clearmrm.nimblestride.ca) | AI-powered OSFI E-23 Model Risk Management SaaS for Canadian FRFIs. Complete model inventory, automated risk tiering, validation workflows, vendor governance, OSFI Examiner Export PDF, and immutable audit trail. Phases 1–4 live. |

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
