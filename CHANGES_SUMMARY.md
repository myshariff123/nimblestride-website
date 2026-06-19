# Changes Summary

## Email Address Update
- **Old**: `hello@nimblestride.ca` (note: corrected from previous typo "suport")
- **New**: `support@nimblestride.ca`
- **Updated in**:
  - `src/components/Footer.tsx` - Footer contact section
  - `src/pages/About.tsx` - Company details contact section
  - `src/pages/Contact.tsx` - Contact page sidebar
  - `src/pages/Onboarding.tsx` - Onboarding page support link

## New Onboarding Page (AWS Marketplace Gateway)

### Files Created
- `src/pages/Onboarding.tsx` - Main onboarding component (React)
- `ONBOARDING_SETUP.md` - Complete documentation for the onboarding page

### Files Modified
- `src/App.tsx` - Added import and route for Onboarding component
- `src/pages/index.ts` - Added Onboarding export
- `public/sitemap.xml` - Added /onboarding URL

### Route
- **Path**: `/onboarding`
- **URL**: `https://nimblestride.ca/onboarding`
- **Type**: Standalone page (no navbar/footer)

### Features
- AWS Marketplace token extraction from URL query parameter
- Cross-account IAM role ARN input field
- Form validation
- Async API registration call
- Loading, success, and error states
- Support contact link
- Full SEO meta tags
- Mobile responsive design

### API Integration
- **Endpoint**: `https://api.nimblestride.ca/api/v1/register`
- **Method**: POST
- **Payload**: 
  ```json
  {
    "marketplace_token": "string",
    "role_arn": "arn:aws:iam::123456789012:role/GridWitness-Read"
  }
  ```

## Build Status
✓ All linting passes
✓ Project builds successfully
✓ No errors or warnings
✓ Build size:
  - JavaScript: 306.83 KB (85.19 KB gzip)
  - CSS: 21.83 KB (4.43 KB gzip)

## Testing
All changes have been tested:
- Lint: ✓ Passing
- Build: ✓ Successful
- Type checking: ✓ Passing
- Email references: ✓ All updated

## Deployment Notes
1. The onboarding page runs standalone (not within the main Layout wrapper)
2. AWS Marketplace will redirect users to: `https://nimblestride.ca/onboarding?x-amzn-marketplace-token=TOKEN`
3. Backend API endpoint must be configured and running
4. Support email `support@nimblestride.ca` should be monitored for registration inquiries

## Files Modified
- src/App.tsx
- src/pages/index.ts
- src/components/Footer.tsx
- src/pages/About.tsx
- src/pages/Contact.tsx
- public/sitemap.xml

## Files Created
- src/pages/Onboarding.tsx
- ONBOARDING_SETUP.md
- CHANGES_SUMMARY.md (this file)

---
Last Updated: March 14, 2026
