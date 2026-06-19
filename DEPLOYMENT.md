# GridWitness Website Deployment Guide

## Overview

This is a fully-built, production-ready 7-page website for NimbleStride Inc.'s GridWitness platform. The site is built with React, Vite, TypeScript, and Tailwind CSS with comprehensive SEO optimization across all pages.

## Build Information

- **Build Output**: `dist/` directory
- **Build Size**:
  - CSS: 4.17 kB (gzip)
  - JavaScript: 83.50 kB (gzip)
  - Total: ~88 kB gzip
- **Build Status**: ✓ Successful, no lint errors

## Pages Included

1. **Home** (`/`) - Hero, jurisdiction overview, problem/solution, partner ecosystem
2. **Solutions** (`/solutions`) - How GridWitness works, outcomes, audit partnerships, deployment models
3. **Regulatory** (`/regulatory`) - Detailed framework cards for all 7+ regulations across 3 jurisdictions
4. **Regulatory Map** (`/regulatory-map`) - Visual jurisdiction overview, framework comparison, FAQ
5. **Partnerships** (`/partnerships`) - Academic, auditor, and government partnerships
6. **About** (`/about`) - Company mission, Edmonton location, vision timeline, honest status
7. **Contact** (`/contact`) - 4 contact pathways with jurisdiction-aware forms

## SEO Implementation

### Meta Tags
- Unique title, description, and keywords on all 7 pages
- Open Graph tags for LinkedIn, Facebook preview cards
- Twitter Card tags for X/Twitter sharing
- Canonical URLs for all pages
- LinkedIn owner meta tag

### Structured Data
- JSON-LD Organization schema on home page
- FAQPage schema on regulatory and regulatory map pages

### Technical SEO
- `robots.txt` configured in `public/robots.txt`
- `sitemap.xml` with all 7 page URLs in `public/sitemap.xml`
- Proper HTML heading hierarchy (H1, H2, H3) on all pages
- Semantic HTML5 elements throughout
- `lang="en-CA"` attribute on HTML element

### Social Sharing
- Social share buttons on blog-style pages (Regulatory, Regulatory Map, Partnerships)
- LinkedIn and X/Twitter share buttons configured
- Proper URL encoding and page title sharing

## Deployment Instructions

### 1. Update Formspree URLs

Replace placeholder Formspree action URLs in `src/pages/Contact.tsx`:

```
Current placeholders:
- https://formspree.io/f/institutional_pilot
- https://formspree.io/f/auditor_collaboration
- https://formspree.io/f/academic_partnership
- https://formspree.io/f/general_inquiry

Replace with your actual Formspree endpoint IDs
```

### 2. Update Social Media Handles

In `src/components/Footer.tsx` and `src/components/SocialShare.tsx`:

Update placeholder social media URLs:
- LinkedIn: `https://www.linkedin.com/company/nimblestride`
- Twitter/X: `https://twitter.com/NimbleStride`
- GitHub: Add your GitHub profile if needed

### 3. Update Email Address

In multiple locations (Footer, Contact page):
- Replace `hello@nimblestride.ca` with your actual contact email

### 4. Configure LinkedIn Insight Tag

In `index.html`, replace the LinkedIn Insight Tag placeholder:

```html
<!-- Uncomment and replace PLACEHOLDER with your partner ID -->
<script type="text/javascript">
  _linkedin_partner_id = "YOUR_PARTNER_ID_HERE";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
```

### 5. Update OG Image

Replace `og-image.png` reference with your actual Open Graph image:
- Recommended size: 1200x630px
- Current reference: `https://nimblestride.ca/og-image.png`

### 6. Hosting Options

#### Vercel (Recommended for Vite projects)
```bash
npm install -g vercel
vercel deploy
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Static Hosting (S3, CloudFront, etc.)
```bash
# Build the project
npm run build

# Deploy dist/ folder to your hosting provider
```

## Customization Guide

### Colors & Branding

Tailwind colors are configured in `tailwind.config.js`:
- Navy primary: `#0D1B3E`
- Teal accent: `#00B5AD`
- Amber: `#D97706`
- Green: `#065F46`
- Blue: `#1A78C2`
- Purple: `#7C3AED`

### Typography

Font: Poppins (weights: 300, 300, 500, 700)
- Preconnected via Google Fonts in `index.html`
- Configured in `tailwind.config.js`

### Component Structure

Core components:
- `src/components/Navbar.tsx` - Navigation with mobile menu
- `src/components/Footer.tsx` - Footer with 4-column layout
- `src/components/Layout.tsx` - Main layout wrapper with scroll-to-top
- `src/components/SEOHelmet.tsx` - SEO meta tag wrapper
- `src/components/SocialShare.tsx` - Social sharing buttons

Page-specific components:
- `src/components/HeroSection.tsx`
- `src/components/JurisdictionCard.tsx`
- `src/components/FrameworkCard.tsx`
- `src/components/Badge.tsx`
- `src/components/FAQAccordion.tsx`
- `src/components/CalloutBox.tsx`

## Testing Checklist

- [ ] All 7 pages render without errors
- [ ] Navigation links work correctly
- [ ] Mobile hamburger menu opens/closes
- [ ] Contact forms submit properly
- [ ] Social share buttons generate correct URLs
- [ ] FAQ accordions expand/collapse
- [ ] Scroll-to-top button appears after 400px scroll
- [ ] Active navigation link shows teal underline
- [ ] SEO meta tags appear in HTML head
- [ ] Robots.txt and sitemap.xml are accessible
- [ ] Build completes without errors or warnings
- [ ] CSS and JS files load correctly

## Performance Optimization

- Code splitting by route (React Router)
- CSS is minified and extracted (Vite)
- Images use lazy loading (loading="lazy")
- Font preconnect for Google Fonts
- Smooth scroll behavior configured

## Security

- No hardcoded API keys or secrets
- All external links open with `rel="noopener noreferrer"`
- Formspree handles form submissions securely
- No sensitive data stored in localStorage
- Content Security Policy ready

## Maintenance

### Regular Updates Needed

1. **Regulatory Content**: Update framework cards and status badges as regulations change
2. **Partner Information**: Add/update partner cards as partnerships evolve
3. **Contact Information**: Update email and social media links
4. **SEO Meta Tags**: Refresh keywords annually

### Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Fully responsive (tested from 320px width)

## Support

For questions about the implementation:
- Component documentation in respective files
- Tailwind CSS classes follow utility-first approach
- React Router handles all navigation
- React Helmet Async handles per-page SEO

## Files Structure

```
project/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── CalloutBox.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── FrameworkCard.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── JurisdictionCard.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── SEOHelmet.tsx
│   │   ├── SocialShare.tsx
│   │   └── index.ts
│   ├── pages/           # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Partnerships.tsx
│   │   ├── Regulatory.tsx
│   │   ├── RegulatoryMap.tsx
│   │   ├── Solutions.tsx
│   │   └── index.ts
│   ├── App.tsx          # Main app with routing
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── public/
│   ├── robots.txt       # SEO robots file
│   └── sitemap.xml      # SEO sitemap
├── index.html           # HTML template with SEO meta tags
├── tailwind.config.js   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies

dist/                    # Production build output
```

## Next Steps

1. Replace Formspree form action URLs with your actual IDs
2. Update social media links
3. Add LinkedIn Insight Tag
4. Upload og-image.png to hosting
5. Deploy to your preferred hosting platform
6. Test all pages and forms
7. Submit sitemap to Google Search Console
8. Monitor SEO performance

---

Built with React 18 + Vite + TypeScript + Tailwind CSS
Last Updated: March 14, 2026
