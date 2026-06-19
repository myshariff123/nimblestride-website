# GridWitness AWS Marketplace Onboarding Page

## Overview

A new AWS Marketplace onboarding gateway page has been added to the GridWitness website. This page allows customers to securely register their AWS environment by providing a cross-account IAM role ARN that GridWitness will use to read CloudWatch telemetry data.

## Page Details

**Route**: `/onboarding`
**URL**: `https://nimblestride.ca/onboarding`
**Type**: Standalone page (outside main site navigation)

## Features

### AWS Marketplace Integration
- Extracts AWS Marketplace token from URL query parameter: `?x-amzn-marketplace-token=xyz`
- Validates token presence before allowing registration
- Sends token + IAM Role ARN to backend API for registration

### User Input
- Cross-Account IAM Role ARN field with placeholder example
- Full form validation
- Clear error messaging for missing tokens or invalid input

### Registration Flow
1. User initiates from AWS Marketplace
2. Redirected to `/onboarding` page with token in query string
3. User enters their cross-account IAM role ARN
4. Clicks "Complete Registration"
5. Page calls `https://api.nimblestride.ca/api/v1/register` with:
   - `marketplace_token`: From URL parameter
   - `role_arn`: From form input

### Status Feedback
- **Idle**: Ready for input
- **Loading**: Shows spinner while connecting to backend
- **Success**: Green success message when registration completes
- **Error**: Red error message for validation failures or network issues

### Support
- Support email contact link at bottom of page: `support@nimblestride.ca`

## Technical Implementation

### Component Structure
- Built as a React functional component using hooks
- Uses `useSearchParams()` to extract AWS Marketplace token
- Form state managed with `useState()`
- Async API call with error handling via `fetch()`

### Styling
- Clean, minimal design matching AWS Marketplace aesthetic
- Uses Tailwind CSS classes (same as main site)
- Responsive layout (works on mobile and desktop)
- Accessible form inputs with proper labels
- Color-coded status messages (green for success, red for error)

### SEO
- Unique page title, description, and keywords
- Open Graph meta tags for sharing
- Twitter Card configuration
- Canonical URL set to `/onboarding`

### Error Handling
1. **Missing Marketplace Token**: User instructed to initiate from AWS Console
2. **Missing IAM Role ARN**: User prompted to enter valid ARN
3. **Network Error**: Graceful fallback with helpful message
4. **API Error**: Backend error message displayed to user

## AWS IAM Role Requirements

The IAM role ARN provided should have:
- Read-only permissions to CloudWatch
- Proper trust relationship allowing GridWitness AWS account to assume the role
- Format: `arn:aws:iam::ACCOUNT_ID:role/ROLE_NAME`

Example:
```
arn:aws:iam::123456789012:role/GridWitness-Read
```

## Backend API Integration

### Endpoint
- **URL**: `https://api.nimblestride.ca/api/v1/register`
- **Method**: POST
- **Content-Type**: application/json

### Request Payload
```json
{
  "marketplace_token": "string",
  "role_arn": "arn:aws:iam::123456789012:role/GridWitness-Read"
}
```

### Response
**Success (200)**:
```json
{
  "status": "success",
  "message": "Registration completed"
}
```

**Error (400)**:
```json
{
  "error": "Invalid IAM role ARN format"
}
```

## Routing Configuration

The onboarding page is configured as a standalone route (not wrapped in the main Layout component):

```typescript
<Route path="/onboarding" element={<Onboarding />} />
```

This means:
- No navbar/footer navigation
- No scroll-to-top button
- No Layout wrapper
- Clean, focused registration experience

## AWS Marketplace Setup

### Redirect URL Configuration
In your AWS Marketplace fulfillment configuration, set the redirect URL to:
```
https://nimblestride.ca/onboarding
```

AWS Marketplace will append the token automatically:
```
https://nimblestride.ca/onboarding?x-amzn-marketplace-token=abc123xyz...
```

### Token Validation
Tokens are single-use and expire after a set time. The backend should validate the token with AWS before completing registration.

## File Structure

```
src/pages/Onboarding.tsx          # Main onboarding component
src/App.tsx                        # Updated with /onboarding route
src/pages/index.ts                 # Updated exports
public/sitemap.xml                 # Updated with /onboarding URL
```

## Email Configuration

All references to `hello@nimblestride.ca` have been replaced with `support@nimblestride.ca`:
- Footer contact information
- About page contact section
- Contact page contact information
- Onboarding page support link

## Build & Deployment

### Build Command
```bash
npm run build
```

### Build Output
- JavaScript: 306.83 KB (85.19 KB gzip)
- CSS: 21.83 KB (4.43 KB gzip)

### Deployment
Deploy the `dist/` folder to your hosting:

```bash
npm run build
# Deploy dist/ folder to Vercel, Netlify, or S3
```

## Testing Checklist

- [ ] Page accessible at `/onboarding` route
- [ ] AWS Marketplace token extracted from URL query parameter
- [ ] Error shown if token is missing
- [ ] Form validation works for empty IAM role ARN
- [ ] Loading state shows spinner during API call
- [ ] Success message displays on successful registration
- [ ] Error message displays on failed registration
- [ ] Network error message displays if API is unreachable
- [ ] Support email link works
- [ ] Page is responsive on mobile
- [ ] Page is accessible (keyboard navigation, screen readers)
- [ ] No console errors or warnings

## Local Testing

To test the onboarding page locally:

```bash
# Start dev server
npm run dev

# Visit with mock token
http://localhost:5173/onboarding?x-amzn-marketplace-token=test_token_123

# Enter a test IAM role ARN
# arn:aws:iam::123456789012:role/GridWitness-Read
```

**Note**: The API call will fail if the backend isn't running, which is expected. The error message will display properly.

## Future Enhancements

Potential improvements for future versions:

1. **IAM Role ARN Validation**: Real-time validation of ARN format
2. **Role Permission Check**: Verify the role has required CloudWatch permissions
3. **Progress Indicator**: Multi-step registration process
4. **Email Confirmation**: Send confirmation to registered email
5. **Documentation Link**: Link to IAM role setup guide
6. **Webhook Support**: Handle AWS Marketplace subscription events
7. **Rate Limiting**: Prevent abuse of registration endpoint
8. **Analytics**: Track registration flow completion rates

## Support

For questions or issues:
- Email: support@nimblestride.ca
- Documentation: See DEPLOYMENT.md for general setup

---

**Version**: 1.0
**Last Updated**: March 14, 2026
**Status**: Production Ready
