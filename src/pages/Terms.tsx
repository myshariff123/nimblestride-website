import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHelmet } from '../components';

const UPDATED = 'September 21, 2026';

export const Terms: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="Terms of Use"
        description="Terms of Use for the NimbleStride website — acceptable use, intellectual property, disclaimers, and limitation of liability. A division of MGR Infotech, Moose Jaw, SK."
        keywords="NimbleStride terms of use, terms and conditions, disclaimer, MGR Infotech"
        canonicalUrl="https://nimblestride.ca/terms"
        path="/terms"
      />

      <section className="bg-navy text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-4">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-navy-300 text-sm">Last updated: {UPDATED}</p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-secondary text-sm leading-relaxed">
          <p>
            These Terms of Use govern your access to and use of the NimbleStride website (the "Site"). NimbleStride
            is the AI &amp; software division of MGR Infotech. By using the Site, you agree to these terms.
          </p>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">1. Use of the Site</h2>
            <p>
              You may use the Site for lawful, informational purposes. You agree not to misuse the Site, attempt to
              gain unauthorized access, or disrupt its operation.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">2. Intellectual Property</h2>
            <p>
              All content on this Site — text, graphics, logos, and product names including ClearBind, ClearMRM,
              Cadence, CustomTask, ClearBid, and Canadian Mortgage Finder — is the property of NimbleStride / MGR
              Infotech or its licensors and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">3. No Professional Advice</h2>
            <p>
              Information on this Site — including any references to OSFI guidelines, PIPEDA, insurance, financial,
              or regulatory matters — is provided for general information only and does not constitute legal,
              financial, insurance, or regulatory advice. Verify all obligations with qualified counsel before
              relying on them.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">4. Disclaimer</h2>
            <p>
              The Site is provided "as is" without warranties of any kind, express or implied. We do not warrant
              that the Site will be uninterrupted, error-free, or free of harmful components.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, NimbleStride and MGR Infotech will not be liable for any
              indirect, incidental, or consequential damages arising from your use of the Site.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Province of Saskatchewan and the federal laws of Canada
              applicable therein.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">7. Contact</h2>
            <p>
              Questions about these terms can be directed to{' '}
              <a href="mailto:support@nimblestride.ca" className="text-teal hover:text-teal-hover">support@nimblestride.ca</a>{' '}
              or <a href="tel:+18552068546" className="text-teal hover:text-teal-hover">(855) 206-8546</a>.
            </p>
          </div>

          <p className="text-xs text-muted pt-4 border-t border-gray-100">
            See also our{' '}
            <Link to="/privacy" className="text-teal hover:text-teal-hover">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
};
