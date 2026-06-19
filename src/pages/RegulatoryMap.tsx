import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHelmet, SocialShare, FAQAccordion } from '../components';

export const RegulatoryMap: React.FC = () => {
  const faqItems = [
    {
      question: 'Does our OSFI B-15 compliance work cover our California SB 253 obligations?',
      answer:
        'Not automatically. While both require location-based Scope 2 emissions disclosure, the jurisdictions differ. OSFI B-15 applies to Canadian FRFIs; SB 253 applies to US companies with $1B+ revenue in California. The evidence standard is similar — GridWitness structures output to satisfy both from one deployment.',
    },
    {
      question: 'Is the SEC climate disclosure rule relevant to us?',
      answer:
        'The SEC rule is currently stayed. Canadian companies filing Form 20-F should monitor developments. California SB 253 provides more immediate compliance pressure (August 2026 deadline).',
    },
    {
      question: 'Does EU CSRD apply to our Canadian operations?',
      answer:
        'Yes, if you have €150M+ EU turnover with a material EU subsidiary. Consolidated reporting required by 2029 (FY2028). Verify with qualified counsel.',
    },
    {
      question: 'What is the difference between OSFI B-15 and CSDS 2?',
      answer:
        'OSFI B-15 is mandatory for Canadian FRFIs. CSDS 2 is voluntary. Scope 2 requirements align. GridWitness satisfies both.',
    },
    {
      question: 'Does GridWitness support Scope 3 compliance?',
      answer:
        'Currently we focus on Scope 2. Verified Scope 2 data feeds into Scope 3 Category 15 (AI inference) for downstream customers. Scope 3 integration roadmap for 2026.',
    },
  ];

  return (
    <>
      <SEOHelmet
        title="Global AI Compute Regulatory Map — Canada USA EU | GridWitness"
        description="Interactive overview of AI compute compliance frameworks across Canada (OSFI B-15, CSDS), USA (California SB 253), and EU (CSRD, ISSB) with current enforcement status."
        keywords="global AI regulation, OSFI B-15, CSRD, SB 253, ISSB S2, CSDS Canada, compliance timeline, AI data center regulation"
        canonicalUrl="https://nimblestride.ca/regulatory-map"
        path="/regulatory-map"
      />

      <section className="bg-navy text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Global AI Compute Regulatory Map</h1>
          <p className="text-navy-200 text-lg mb-8">
            At a glance — every framework, every jurisdiction, current status. Updated March 2026.
          </p>
          <SocialShare pagePath="/regulatory-map" pageTitle="Global AI Compute Regulatory Map" />
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-teal mb-6">CANADA</h2>
              <div className="space-y-3 mb-6">
                <div className="bg-green-dark/10 text-green-dark border border-green-dark/20 px-3 py-2 rounded text-sm font-medium">
                  OSFI B-15 — Active
                </div>
                <div className="bg-green-dark/10 text-green-dark border border-green-dark/20 px-3 py-2 rounded text-sm font-medium">
                  Bill C-59 — Active
                </div>
                <div className="bg-blue/10 text-blue border border-blue/20 px-3 py-2 rounded text-sm font-medium">
                  CSDS 1 & 2 — Voluntary
                </div>
                <div className="bg-green-dark/10 text-green-dark border border-green-dark/20 px-3 py-2 rounded text-sm font-medium">
                  AMF Québec — Active
                </div>
                <div className="bg-green-dark/10 text-green-dark border border-green-dark/20 px-3 py-2 rounded text-sm font-medium">
                  Sovereign AI — Active
                </div>
              </div>
              <p className="text-xs text-secondary">
                <span className="font-bold">Who it affects:</span> AI compute data centers, banks, insurers
              </p>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-bold text-blue mb-6">UNITED STATES</h2>
              <div className="space-y-3 mb-6">
                <div className="bg-green-dark/10 text-green-dark border border-green-dark/20 px-3 py-2 rounded text-sm font-medium">
                  California SB 253 — Active Aug 2026
                </div>
                <div className="bg-amber/10 text-amber-600 border border-amber-600/20 px-3 py-2 rounded text-sm font-medium">
                  California SB 261 — Enjoined
                </div>
                <div className="bg-amber/10 text-amber-600 border border-amber-600/20 px-3 py-2 rounded text-sm font-medium">
                  SEC Climate Rule — Stayed
                </div>
              </div>
              <p className="text-xs text-secondary">
                <span className="font-bold">Who it affects:</span> $1B+ revenue companies doing business in California
              </p>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-bold text-purple mb-6">EUROPEAN UNION</h2>
              <div className="space-y-3 mb-6">
                <div className="bg-blue/10 text-blue border border-blue/20 px-3 py-2 rounded text-sm font-medium">
                  EU CSRD / ESRS — Wave 1 Active
                </div>
                <div className="bg-blue/10 text-blue border border-blue/20 px-3 py-2 rounded text-sm font-medium">
                  ISSB S1 / S2 — Global Baseline
                </div>
                <div className="bg-purple/10 text-purple border border-purple/20 px-3 py-2 rounded text-sm font-medium">
                  CSDDD — Transposing 2027
                </div>
              </div>
              <p className="text-xs text-secondary">
                <span className="font-bold">Who it affects:</span> 1,000+ employees, €450M+ turnover (Omnibus 2025)
              </p>
            </div>
          </div>

          <div className="bg-teal-light/30 border border-teal/20 rounded-lg p-8 text-center">
            <p className="text-secondary mb-4">
              GridWitness generates hardware-anchored AI compute evidence that satisfies the Scope 2 evidentiary
              standard across all three jurisdictions with a single deployment.
            </p>
            <Link to="/solutions" className="btn-primary inline-block">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">What Each Framework Requires</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-3 px-4 font-bold text-body">Framework</th>
                  <th className="text-left py-3 px-4 font-bold text-body">Hardware Scope 2</th>
                  <th className="text-left py-3 px-4 font-bold text-body">Assurance</th>
                  <th className="text-left py-3 px-4 font-bold text-body">Governance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-secondary">OSFI B-15</td>
                  <td className="py-3 px-4 text-secondary">Required</td>
                  <td className="py-3 px-4 text-secondary">Moving mandatory</td>
                  <td className="py-3 px-4 text-secondary">Required</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-secondary">SB 253</td>
                  <td className="py-3 px-4 text-secondary">Required</td>
                  <td className="py-3 px-4 text-secondary">Limited from 2027</td>
                  <td className="py-3 px-4 text-secondary">Required</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-secondary">EU CSRD / ESRS</td>
                  <td className="py-3 px-4 text-secondary">Required</td>
                  <td className="py-3 px-4 text-secondary">Limited assurance</td>
                  <td className="py-3 px-4 text-secondary">Required</td>
                </tr>
                <tr className="bg-teal/5">
                  <td className="py-3 px-4 font-bold text-teal">GridWitness</td>
                  <td className="py-3 px-4 font-bold text-teal">Full Coverage</td>
                  <td className="py-3 px-4 font-bold text-teal">Audit-Ready</td>
                  <td className="py-3 px-4 font-bold text-teal">Trail Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">FAQ</h2>
          <FAQAccordion items={faqItems} />
          <div className="mt-8">
            <SocialShare pagePath="/regulatory-map" pageTitle="Global AI Compute Regulatory Map" />
          </div>
        </div>
      </section>
    </>
  );
};
