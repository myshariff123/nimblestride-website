import React from 'react';
import { SEOHelmet, HeroSection, FrameworkCard, SocialShare, FAQAccordion } from '../components';

export const Regulatory: React.FC = () => {
  const canadaFrameworks = [
    {
      title: 'OSFI B-15: Climate Risk Management',
      badge: 'Active — D-SIBs FY-end 2024',
      badgeStatus: 'active' as const,
      issuedBy: 'Office of the Superintendent of Financial Institutions (OSFI)',
      appliesTo: 'All federally regulated financial institutions (FRFIs) including all seven Canadian D-SIBs and federally regulated insurers',
      coreRequirement:
        'OSFI B-15 March 2025 update requires location-based Scope 2 GHG disclosure with documented inputs and assumptions. For financial institutions with significant AI compute infrastructure, this creates a hardware-level evidence requirement that utility bills and building-level estimates cannot satisfy.',
      gridWitnessCoverage: ['Hardware-anchored Scope 2 evidence', 'Auditor Evidence Package', 'Governance trail', 'Transition risk quantification'],
    },
    {
      title: 'Bill C-59: Competition Act Amendments',
      badge: 'Active — June 2024',
      badgeStatus: 'active' as const,
      issuedBy: 'Parliament of Canada',
      appliesTo: 'All businesses making public environmental representations',
      coreRequirement:
        'Reverse-onus standard for environmental claims — organisations making public Scope 2 or climate claims about their AI compute operations must substantiate them with adequate and proper testing. Penalties up to $10 million per violation.',
      gridWitnessCoverage: ['Hardware-signed evidence record substantiates public claims with adequate and proper testing under C-59 standard'],
    },
    {
      title: 'CSDS 1 & 2: Canadian Sustainability Disclosure Standards',
      badge: 'Voluntary — December 2024',
      badgeStatus: 'planned' as const,
      issuedBy: 'Canadian Sustainability Standards Board (CSSB)',
      appliesTo: 'Canadian public companies (voluntary; mandatory adoption pending CSA regulatory action)',
      coreRequirement:
        'CSDS 2 (climate-related disclosures, aligned with ISSB IFRS S2) requires location-based Scope 2 disclosure with the same evidentiary standard as OSFI B-15.',
      gridWitnessCoverage: ['Same hardware evidence architecture satisfies both OSFI B-15 and CSDS 2 simultaneously'],
    },
  ];

  const usaFrameworks = [
    {
      title: 'California SB 253: Climate Corporate Data Accountability Act',
      badge: 'Active — Aug 10 2026',
      badgeStatus: 'active' as const,
      issuedBy: 'California Air Resources Board (CARB)',
      appliesTo: 'US-organised entities with $1B+ global revenue doing business in California',
      coreRequirement:
        'Annual public disclosure of Scope 1 and Scope 2 GHG emissions required by August 10, 2026, using the GHG Protocol. Limited assurance required from 2027.',
      gridWitnessCoverage: ['Hardware-anchored Scope 2 evidence', 'GHG Protocol-compliant methodology', 'Assurance-ready evidence package'],
      note: 'SB 253 creates the same hardware-level evidence gap as OSFI B-15. Utility bills cannot produce the GHG Protocol-compliant, assurance-ready Scope 2 data.',
    },
    {
      title: 'California SB 261: Climate-Related Financial Risk Act',
      badge: 'Currently Enjoined — Monitor',
      badgeStatus: 'partial' as const,
      issuedBy: 'California Air Resources Board (CARB)',
      appliesTo: 'US-organised entities with $500M+ global revenue doing business in California',
      coreRequirement:
        'Biennial disclosure of climate-related financial risks per TCFD. Currently subject to a preliminary injunction by the Ninth Circuit Court of Appeals.',
      gridWitnessCoverage: ['When enforcement resumes, GridWitness evidence packages satisfy climate risk quantification requirements'],
      note: 'Compliance is currently voluntary. Entities should monitor the appeal outcome. The injunction applies only to SB 261 — SB 253 is unaffected.',
    },
    {
      title: 'SEC Climate Disclosure Rule',
      badge: 'Stayed — Under Review',
      badgeStatus: 'partial' as const,
      issuedBy: 'US Securities and Exchange Commission',
      appliesTo: 'US public company registrants (when in effect)',
      coreRequirement:
        'The SEC adopted climate disclosure rules on March 6, 2024 requiring Scope 1 and 2 disclosure for large filers if material. The rule was stayed in April 2024.',
      gridWitnessCoverage: ['Hardware evidence architecture designed to satisfy any future reinstated federal rule'],
      note: 'The SEC rule does not currently have an active enforcement date. California SB 253 provides a more immediately actionable compliance driver.',
    },
  ];

  const euFrameworks = [
    {
      title: 'EU CSRD: Corporate Sustainability Reporting Directive',
      badge: 'Wave 1 Active — Wave 2 to 2028',
      badgeStatus: 'planned' as const,
      issuedBy: 'European Commission',
      appliesTo: 'EU entities with 1,000+ employees AND €450M+ net turnover (post-Omnibus 2025)',
      coreRequirement:
        'Mandatory sustainability reporting under European Sustainability Reporting Standards (ESRS), including ESRS E1 for climate. Requires Scope 1, 2, and 3 GHG emissions disclosure.',
      gridWitnessCoverage: ['Hardware-anchored Scope 2 evidence for ESRS E1', 'Assurance-ready output', 'AI compute transition risk quantification'],
      note: 'Omnibus I (December 2025) narrowed scope and delayed Wave 2 to 2028. Revised ESRS expected by September 2026.',
    },
    {
      title: 'ISSB IFRS S1 & S2: Global Sustainability Disclosure Standards',
      badge: '30+ Jurisdictions Adopting',
      badgeStatus: 'planned' as const,
      issuedBy: 'International Sustainability Standards Board (ISSB)',
      appliesTo: 'Any entity in an adopting jurisdiction (30+ countries including UK, Australia, Brazil, Japan, Canada)',
      coreRequirement:
        'IFRS S2 (Climate-related Disclosures) requires location-based and market-based Scope 2 disclosure with the same evidentiary standard as every adopting jurisdiction.',
      gridWitnessCoverage: ['IFRS S2 location-based Scope 2 evidence', 'Governance evidence trail', 'Transition risk output'],
    },
    {
      title: 'CSDDD: Corporate Sustainability Due Diligence Directive',
      badge: 'Transposing — July 2027',
      badgeStatus: 'emerging' as const,
      issuedBy: 'European Commission',
      appliesTo: 'EU companies with 5,000+ employees and €1.5B+ turnover (July 2028)',
      coreRequirement:
        'Requires active prevention and remediation of negative environmental impacts across value chains, including adoption of Paris-aligned climate transition plans.',
      gridWitnessCoverage: ['Hardware evidence layer supporting compute infrastructure transition plan implementation'],
    },
  ];

  const faqItems = [
    {
      question: 'Does our OSFI B-15 compliance work cover our California SB 253 obligations?',
      answer:
        'Not automatically. While both require location-based Scope 2 emissions disclosure with documented methodology, OSFI B-15 applies to federally regulated financial institutions in Canada, while SB 253 applies to US-organised entities with $1B+ global revenue. The evidence standard is substantially similar. A GridWitness deployment generates evidence structured to satisfy both frameworks from a single hardware attestation architecture.',
    },
    {
      question: 'Is the SEC climate disclosure rule relevant to Canadian companies?',
      answer:
        'The SEC rule applies to US public company registrants, including some Canadian companies that file on Form 20-F. However, the rule is currently stayed pending judicial review. Canadian companies with California operations face a more immediately active obligation under SB 253 (August 2026 deadline). This regulatory area should be monitored carefully.',
    },
    {
      question: 'Does EU CSRD apply to Canadian or US companies?',
      answer:
        'Yes — for non-EU companies with €150M+ EU turnover and either a large EU subsidiary or €40M+ turnover. These companies must report at the consolidated level by 2029 (FY2028). Companies should verify their specific EU entity structure with qualified counsel.',
    },
    {
      question: 'What is the difference between OSFI B-15 and CSDS 2?',
      answer:
        'OSFI B-15 is a supervisory guideline for all federally regulated financial institutions effective FY-end 2024. CSDS 2 is the Canadian Sustainability Standards Board voluntary equivalent of IFRS S2. The Scope 2 evidentiary requirements are substantively aligned. A GridWitness evidence package satisfies both simultaneously.',
    },
    {
      question: 'Can GridWitness help with California SB 253 Scope 3 requirements?',
      answer:
        'SB 253 requires Scope 3 disclosure from 2027. GridWitness generates hardware-verified Scope 2 data from AI compute infrastructure — this becomes the verified upstream input to Scope 3 Category 15 calculations for companies in your value chain. We are building integration with leading Scope 3 platforms. Current focus is Scope 2 — Scope 3 integration is on the roadmap.',
    },
  ];

  return (
    <>
      <SEOHelmet
        title="Multi-Jurisdiction AI Compute Regulations — Canada, USA, EU | GridWitness"
        description="Comprehensive guide to AI compute compliance regulations: OSFI B-15, Bill C-59, California SB 253, SB 261, EU CSRD, ISSB S1/S2, and CSDS. Updated March 2026."
        keywords="OSFI B-15, California SB 253, EU CSRD, ISSB S2, Bill C-59, AI compute regulation, Scope 2 disclosure, multi-jurisdiction compliance"
        canonicalUrl="https://nimblestride.ca/regulatory"
        path="/regulatory"
      />

      <HeroSection
        eyebrow="The Regulatory Landscape"
        title="Every AI Compute Compliance Framework — Explained"
        subtitle="Current enforcement status across Canada, the United States, and the European Union — and how GridWitness addresses each."
        primaryCtaLabel="Download Regulatory Summary"
        primaryCtaTo="/contact"
        accentStripe={true}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="eyebrow mb-4">Why Now</div>
            <h2>Three Continents. One Infrastructure Gap.</h2>
            <p className="text-secondary max-w-2xl mt-4">
              The convergence of climate risk disclosure, competition law, and AI governance frameworks across Canada,
              the United States, and Europe is creating a new compliance obligation: the ability to demonstrate — with
              verifiable, hardware-level evidence — what your AI infrastructure consumes, emits, and does.
            </p>
          </div>
          <SocialShare pagePath="/regulatory" pageTitle="Multi-Jurisdiction AI Compute Regulatory Frameworks" />
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Canada</div>
            <h2>Canadian Regulatory Frameworks</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {canadaFrameworks.map((fw, idx) => (
              <FrameworkCard key={idx} {...fw} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">United States</div>
            <h2>US Regulatory Frameworks</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {usaFrameworks.map((fw, idx) => (
              <FrameworkCard key={idx} {...fw} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">European Union</div>
            <h2>EU Regulatory Frameworks</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {euFrameworks.map((fw, idx) => (
              <FrameworkCard key={idx} {...fw} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">FAQ</div>
            <h2>Common Questions</h2>
          </div>
          <FAQAccordion items={faqItems} />
          <div className="mt-8">
            <SocialShare pagePath="/regulatory" pageTitle="Multi-Jurisdiction AI Compute Regulatory Frameworks" />
          </div>
        </div>
      </section>

      <section className="bg-amber-light/30 border border-amber-600/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-amber-900 mb-4">Disclaimer</h3>
          <p className="text-xs text-amber-900">
            This page is for informational purposes only and does not constitute legal or regulatory advice. All
            regulatory status information reflects the authors' understanding as of March 2026 and may change. Verify
            current requirements with qualified counsel. GridWitness is a proof-of-concept platform — regulatory
            compliance requires a qualified auditor.
          </p>
        </div>
      </section>
    </>
  );
};
