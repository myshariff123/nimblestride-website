import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHelmet } from '../components';

const UPDATED = 'September 21, 2026';

export const Privacy: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="Privacy Policy"
        description="NimbleStride's privacy policy — how we collect, use, and protect personal information in compliance with PIPEDA and Canadian privacy law. A division of MGR Infotech, Moose Jaw, SK."
        keywords="NimbleStride privacy policy, PIPEDA, Canadian data privacy, MGR Infotech, data residency"
        canonicalUrl="https://nimblestride.ca/privacy"
        path="/privacy"
      />

      <section className="bg-navy text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-4">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-navy-300 text-sm">Last updated: {UPDATED}</p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-legal space-y-8 text-secondary text-sm leading-relaxed">
          <p>
            NimbleStride ("NimbleStride", "we", "us") is the AI &amp; software division of MGR Infotech. We are
            committed to protecting the privacy of visitors to this website and users of our platforms, in
            compliance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and
            applicable provincial privacy laws.
          </p>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">1. Information We Collect</h2>
            <p>
              We collect only the information you choose to provide — for example, when you submit a contact or
              product-access request (your name, email, organization, role, and message). Our marketing website
              does not use advertising trackers. Standard web-server logs (IP address, browser type, pages
              requested) may be retained for security and analytics.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your inquiry, evaluate product-access or pilot
              requests, and communicate with you about our platforms. We do not sell your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">3. Data Residency &amp; Security</h2>
            <p>
              Our production platforms are hosted in Canada on AWS (ca-central-1). We apply encryption in transit
              and at rest and restrict access to personal information to those who need it. No security measure is
              perfect, but we take reasonable steps to protect the information entrusted to us.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">4. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of the personal information we hold about you,
              subject to legal and contractual limits. To make a request, email{' '}
              <a href="mailto:support@nimblestride.ca" className="text-teal hover:text-teal-hover">support@nimblestride.ca</a>.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">5. Third-Party Links</h2>
            <p>
              This website links to our product platforms and to our parent company, MGR Infotech. Those sites have
              their own privacy practices, and we are not responsible for their content or policies.
            </p>
          </div>

          <div>
            <h2 className="text-body text-xl font-bold mb-3">6. Contact</h2>
            <p>
              Questions about this policy can be directed to our privacy contact:
            </p>
            <p className="mt-2">
              NimbleStride (a division of MGR Infotech)<br />
              #417 – 310 Main Street N, Moose Jaw, SK<br />
              Email: <a href="mailto:support@nimblestride.ca" className="text-teal hover:text-teal-hover">support@nimblestride.ca</a><br />
              Phone: <a href="tel:+18552068546" className="text-teal hover:text-teal-hover">(855) 206-8546</a>
            </p>
          </div>

          <p className="text-xs text-muted pt-4 border-t border-gray-100">
            This policy is provided for general information and does not constitute legal advice. See our{' '}
            <Link to="/terms" className="text-teal hover:text-teal-hover">Terms of Use</Link>.
          </p>
        </div>
      </section>
    </>
  );
};
