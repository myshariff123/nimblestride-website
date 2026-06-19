import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHelmet, SocialShare } from '../components';

export const Partnerships: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="Academic, Auditor and Government Partnerships | GridWitness NimbleStride"
        description="GridWitness partners with Schulich School of Business, NRC IRAP, Mitacs Accelerate, and Big4 audit firms to validate hardware-anchored AI compute compliance."
        keywords="NRC IRAP, Mitacs Accelerate, Schulich School of Business, Big4 auditor, academic research partnership, Alberta Innovates"
        canonicalUrl="https://nimblestride.ca/partnerships"
        path="/partnerships"
      />

      <section className="bg-navy text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-4">Partnership Ecosystem</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic, Auditor & Government Alignment</h1>
          <p className="text-navy-200 text-lg max-w-2xl">
            GridWitness is validated through partnerships with leading academic institutions, Big4 audit firms, and
            federal innovation programs.
          </p>
          <div className="mt-8">
            <SocialShare pagePath="/partnerships" pageTitle="Academic, Auditor and Government Partnerships" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Academic Research</div>
            <h2>University Partnerships</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card p-6 border-l-4 border-teal">
              <h3 className="font-bold text-lg mb-3 text-body">Schulich School of Business</h3>
              <p className="text-secondary text-sm mb-4">
                Data analytics and climate disclosure research collaboration. Focus on hardware-level evidence validity
                for multi-jurisdiction compliance.
              </p>
              <p className="text-xs text-muted font-medium">York University, Toronto</p>
            </div>

            <div className="card p-6 border-l-4 border-blue">
              <h3 className="font-bold text-lg mb-3 text-body">University of Alberta</h3>
              <p className="text-secondary text-sm mb-4">
                AI governance and compute infrastructure research. Integration of GridWitness attestation into broader
                sovereign AI compute frameworks.
              </p>
              <p className="text-xs text-muted font-medium">Edmonton, Alberta</p>
            </div>
          </div>

          <div className="bg-teal-light/30 border border-teal/20 rounded-lg p-6">
            <h3 className="font-bold text-body mb-2">Mitacs Accelerate Program</h3>
            <p className="text-secondary text-sm mb-3">
              Open positions for co-investigator partnerships. Academic researchers can apply to work on GridWitness
              validation, framework alignment, and multi-jurisdiction compliance testing.
            </p>
            <Link to="/contact" state={{ contactType: 'academic' }} className="text-teal font-medium text-sm">
              Apply as Co-Investigator →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Audit Partnership</div>
            <h2>Big4 Auditor Integration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-secondary">
                GridWitness is designed to integrate directly into Big4 audit workflows for OSFI B-15, California SB
                253, and EU CSRD engagements.
              </p>

              <div className="space-y-3">
                <div className="card p-4">
                  <h4 className="font-bold text-sm text-body mb-2">Evidence Pre-Structure</h4>
                  <p className="text-xs text-secondary">Aligns with audit procedures. Reduces audit team onboarding time.</p>
                </div>

                <div className="card p-4">
                  <h4 className="font-bold text-sm text-body mb-2">Methodology Documentation</h4>
                  <p className="text-xs text-secondary">Complete trail of data collection, processing, and calculation.</p>
                </div>

                <div className="card p-4">
                  <h4 className="font-bold text-sm text-body mb-2">Hardware Attestation Verification</h4>
                  <p className="text-xs text-secondary">Audit team can independently verify cryptographic signatures.</p>
                </div>

                <div className="card p-4">
                  <h4 className="font-bold text-sm text-body mb-2">Multi-Jurisdiction Alignment</h4>
                  <p className="text-xs text-secondary">
                    Same evidence supports OSFI B-15, SB 253, CSRD audits simultaneously.
                  </p>
                </div>
              </div>

              <Link to="/contact" state={{ contactType: 'auditor' }} className="btn-primary inline-block">
                Discuss Auditor Integration
              </Link>
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-body mb-4">Engagement Workflow</h3>
              <div className="space-y-4 text-sm text-secondary">
                <div>
                  <p className="font-bold text-body">Month 1: Planning & Assessment</p>
                  <p className="text-xs mt-1">Review GridWitness output structure and audit procedure alignment.</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-body">Month 2: Testing & Validation</p>
                  <p className="text-xs mt-1">Verify hardware signatures, test calculations, validate governance trail.</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-body">Month 3: Assurance Opinion</p>
                  <p className="text-xs mt-1">Audit team issues limited assurance opinion. Ready for regulatory filing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Government & Innovation Programs</div>
            <h2>Federal Funding & Support</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 border-l-4 border-teal">
              <h3 className="font-bold text-lg mb-3 text-body">NRC IRAP (Industrial Research Assistance Program)</h3>
              <p className="text-secondary text-sm mb-4">
                Federal program supporting Canadian SME R&D. GridWitness has received IRAP funding for hardware
                evidence collection platform development and multi-jurisdiction framework alignment.
              </p>
              <p className="text-xs text-muted font-medium">National Research Council Canada</p>
            </div>

            <div className="card p-6 border-l-4 border-blue">
              <h3 className="font-bold text-lg mb-3 text-body">Mitacs Accelerate</h3>
              <p className="text-secondary text-sm mb-4">
                Co-investigator program matching SME researchers with academic experts. Open for new partnerships in
                AI governance, compute compliance, and climate disclosure validation.
              </p>
              <p className="text-xs text-muted font-medium">Mitacs — Canadian Research Accelerator</p>
            </div>

            <div className="card p-6 border-l-4 border-green-dark">
              <h3 className="font-bold text-lg mb-3 text-body">Alberta Innovates</h3>
              <p className="text-secondary text-sm mb-4">
                Provincial innovation support for technology development and commercialization. GridWitness is an
                Alberta Innovates-supported company.
              </p>
              <p className="text-xs text-muted font-medium">Government of Alberta</p>
            </div>

            <div className="card p-6 border-l-4 border-purple">
              <h3 className="font-bold text-lg mb-3 text-body">SR&ED (Scientific Research & Experimental Development)</h3>
              <p className="text-secondary text-sm mb-4">
                Federal tax incentive program for R&D investment. GridWitness development qualifies for SR&ED tax
                credits under compute attestation and climate disclosure categories.
              </p>
              <p className="text-xs text-muted font-medium">Canada Revenue Agency</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Roadmap</div>
            <h2>Scope 3 Platform Integration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card p-6 border-l-4 border-amber-600">
              <h3 className="font-bold text-lg mb-3 text-body">Pulsora Integration</h3>
              <p className="text-secondary text-sm">
                GridWitness Scope 2 verified compute data feeds into Pulsora's Scope 3 Category 15 (AI inference)
                emissions calculations. Verified upstream input for downstream customer disclosure.
              </p>
            </div>

            <div className="card p-6 border-l-4 border-amber-600">
              <h3 className="font-bold text-lg mb-3 text-body">Persefoni Integration</h3>
              <p className="text-secondary text-sm">
                GridWitness hardware evidence output pre-structures Scope 2 and 3 data for Persefoni's
                emissions-accounting platform. Direct API integration planned for Q2 2026.
              </p>
            </div>
          </div>

          <div className="bg-amber-light/30 border border-amber-600/20 rounded-lg p-6">
            <p className="text-amber-900 text-sm">
              <span className="font-bold">Current Status:</span> GridWitness focuses on Scope 2 evidence generation.
              Scope 3 integrations are under development. Connect with us to explore downstream partnership
              opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner?</h2>
          <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
            We're actively building partnerships across academia, audit, and government innovation programs.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Explore Partnership Opportunities
          </Link>
        </div>
      </section>
    </>
  );
};
