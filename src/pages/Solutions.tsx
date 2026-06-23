import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHelmet, HeroSection, SocialShare } from '../components';
import { Badge } from '../components';

export const Solutions: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="How GridWitness Works — AI Compute Attestation Platform"
        description="Hardware-anchored Scope 2 evidence from server-level telemetry to audit-ready output. Built for OSFI B-15, California SB 253, EU CSRD, and ISSB S1/S2 compliance."
        keywords="hardware attestation, Scope 2 compliance, AI workload attestation, audit evidence package, compute telemetry, emissions disclosure"
        canonicalUrl="https://nimblestride.ca/solutions"
        path="/solutions"
      />

      <HeroSection
        eyebrow="The GridWitness Platform"
        title="From Hardware Telemetry to Audit-Ready Evidence"
        subtitle="Real-time server-level data collection, cryptographic integrity verification, and multi-framework compliance packaging in one integrated platform."
        primaryCtaLabel="Request Demo"
        primaryCtaTo="/contact"
        secondaryCtaLabel="See Regulatory Coverage"
        secondaryCtaTo="/regulatory"
      />

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">How It Works</div>
            <h2>Four-Step Evidence Generation Pipeline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 relative">
              <div className="bg-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold mb-3 text-body">Server-Level Telemetry</h3>
              <p className="text-secondary text-sm">
                Real-time data collection from hardware management controllers (IPMI, Redfish) on every compute node.
              </p>
              {window.innerWidth >= 1024 && (
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="text-gray-300" size={20} />
                </div>
              )}
            </div>

            <div className="card p-6 relative">
              <div className="bg-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold mb-3 text-body">Cryptographic Attestation</h3>
              <p className="text-secondary text-sm">
                Hardware signatures verify data integrity. Tamper-evident audit trail from collection through delivery.
              </p>
              {window.innerWidth >= 1024 && (
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="text-gray-300" size={20} />
                </div>
              )}
            </div>

            <div className="card p-6 relative">
              <div className="bg-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-bold mb-3 text-body">Scope 2 Calculation</h3>
              <p className="text-secondary text-sm">
                GHG Protocol methodology applied to verified server energy data. Location-based and market-based
                options.
              </p>
              {window.innerWidth >= 1024 && (
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="text-gray-300" size={20} />
                </div>
              )}
            </div>

            <div className="card p-6">
              <div className="bg-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="font-bold mb-3 text-body">Multi-Framework Output</h3>
              <p className="text-secondary text-sm">
                Pre-structured evidence packages for OSFI B-15, SB 253, CSRD, and ISSB S2. Audit-ready formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Outcomes</div>
            <h2>What You Get</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">Hardware Evidence Package</h3>
                <Badge status="active">OSFI B-15</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Cryptographically verified server-level energy consumption data with complete methodology documentation
                for regulatory audit.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">SB 253</Badge>
                <Badge status="active">CSRD</Badge>
                <Badge status="active">ISSB S2</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">Governance Trail</h3>
                <Badge status="active">OSFI B-15</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Complete audit record showing data collection methodology, transformation steps, assumptions, and sign-off
                evidence.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">CSRD</Badge>
                <Badge status="planned">ISSB S1</Badge>
                <Badge status="planned">CSDS</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">Transition Risk Module</h3>
                <Badge status="planned">SB 261</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                AI compute infrastructure energy and emissions tracking feeds into organization-wide climate risk
                quantification.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="planned">CSRD</Badge>
                <Badge status="planned">ISSB S2</Badge>
                <Badge status="planned">TCFD</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">Assurance-Ready Format</h3>
                <Badge status="active">All Frameworks</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Evidence structured to support Big4 auditor limited assurance engagement. Reduces audit time and cost.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">Deloitte</Badge>
                <Badge status="active">EY</Badge>
                <Badge status="active">KPMG</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">AI Workload Attestation</h3>
                <Badge status="planned">Roadmap 2026</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Link verified compute infrastructure data to specific AI workloads. Support for Scope 3 Category 15
                inference emissions.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="planned">Pulsora</Badge>
                <Badge status="planned">Persefoni</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">Real-Time Dashboard</h3>
                <Badge status="planned">Roadmap 2026</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Continuous monitoring of infrastructure Scope 2 emissions. Governance and compliance dashboard for
                executive reporting.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="planned">On-Premise</Badge>
                <Badge status="planned">Cloud</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Get Started</div>
            <h2>Access the GridWitness Portal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-secondary mb-6">
                Generate compliance audits and verify your AI compute infrastructure efficiency in real-time. The GridWitness Portal provides secure access to OSFI B-15 attestation tools and immediate efficiency ratio calculations.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">Generate Audits Instantly</h4>
                    <p className="text-xs text-secondary">Submit your client ID and IAM role for immediate OSFI B-15 certification.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">View Efficiency Ratios</h4>
                    <p className="text-xs text-secondary">Real-time Tokens/kWh calculations across multiple hardware profiles.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">Secure Vault Receipts</h4>
                    <p className="text-xs text-secondary">Download audit reports with cryptographic attestation and integrity verification.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/portal"
                  className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-md font-bold hover:bg-teal-dark transition-colors"
                >
                  Access Portal
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://16-174-1-7.nip.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-teal text-teal px-6 py-3 rounded-md font-bold hover:bg-teal/10 transition-colors"
                >
                  Access GridWitness Platform
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="card p-8 bg-white">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-2xl">🔐</div>
                  <div>
                    <h4 className="font-bold text-body mb-1">Cross-Account Security</h4>
                    <p className="text-sm text-secondary">Assumes read-only IAM role for secure CloudWatch metric extraction.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-bold text-body mb-1">Hardware Flexibility</h4>
                    <p className="text-sm text-secondary">Support for CPU, T4 GPU, and A100 GPU cluster profiles.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-bold text-body mb-1">Compliance Ready</h4>
                    <p className="text-sm text-secondary">Audit-prepared evidence packages for regulatory submission.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-body mb-1">Instant Results</h4>
                    <p className="text-sm text-secondary">No setup required. Start generating audits in seconds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Auditor Partnership</div>
            <h2>How We Work With Big4 Firms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-secondary">
                GridWitness is designed to integrate directly into Big4 audit workflows. We generate the evidence
                package; the auditor provides the assurance opinion.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">Evidence Pre-Structure</h4>
                    <p className="text-xs text-secondary">
                      Our output aligns with audit procedures. Reduces audit team onboarding time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">Methodology Documentation</h4>
                    <p className="text-xs text-secondary">
                      Complete trail of how data was collected, processed, and calculated.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">Hardware Attestation Verification</h4>
                    <p className="text-xs text-secondary">
                      Audit team can independently verify cryptographic signatures. No black box.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">Multi-Jurisdiction Alignment</h4>
                    <p className="text-xs text-secondary">
                      Same evidence package supports OSFI B-15, SB 253, CSRD, ISSB audits simultaneously.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/contact" state={{ contactType: 'auditor' }} className="btn-primary inline-block mt-4">
                Explore Auditor Integration
              </Link>
            </div>

            <div className="bg-surface rounded-lg p-8">
              <h3 className="font-bold mb-4 text-body">Typical Audit Engagement</h3>
              <div className="space-y-4 text-sm text-secondary">
                <div>
                  <p className="font-bold text-body">Month 1: Planning</p>
                  <p>Audit team reviews GridWitness output structure. Define sampling procedures.</p>
                </div>
                <div>
                  <p className="font-bold text-body">Month 2: Testing</p>
                  <p>Verify hardware signatures. Validate GHG Protocol calculations. Test governance trail.</p>
                </div>
                <div>
                  <p className="font-bold text-body">Month 3: Assurance Opinion</p>
                  <p>
                    Audit team issues limited assurance opinion on Scope 2 evidence. Ready for regulatory filing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Deployment Models</div>
            <h2 className="text-white">Sovereign Compute & On-Premise Accountability</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-800 rounded-lg p-8">
              <h3 className="font-bold mb-4 text-lg">Sovereign Compute Programs</h3>
              <p className="text-navy-200 mb-4">
                Federal AI infrastructure operators receive verified accountability for energy consumption, compute
                activity, and associated emissions. GridWitness provides the measurement and attestation layer.
              </p>
              <ul className="space-y-2 text-sm text-navy-300">
                <li className="flex gap-2">
                  <span className="text-teal">·</span>
                  <span>Verified infrastructure utilization tracking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal">·</span>
                  <span>Hardware-level energy consumption attestation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal">·</span>
                  <span>Scope 2 emissions calculation aligned with federal reporting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal">·</span>
                  <span>Audit-ready evidence for federal accountability</span>
                </li>
              </ul>
            </div>

            <div className="bg-navy-800 rounded-lg p-8">
              <h3 className="font-bold mb-4 text-lg">On-Premise & Co-Located Deployment</h3>
              <p className="text-navy-200 mb-4">
                Enterprises with on-premises or co-located AI infrastructure can deploy GridWitness directly. No
                cloud requirement. No data export to third parties.
              </p>
              <ul className="space-y-2 text-sm text-navy-300">
                <li className="flex gap-2">
                  <span className="text-teal">·</span>
                  <span>Direct hardware access via existing management networks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal">·</span>
                  <span>On-premises evidence generation and storage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal">·</span>
                  <span>No external connectivity required for core functionality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal">·</span>
                  <span>Direct integration with enterprise audit workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">Pilot Program</div>
            <h2>Three Pathways to GridWitness</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 border-l-4 border-green-dark">
              <h3 className="font-bold mb-4 text-body">Institutional Pilot</h3>
              <p className="text-sm text-secondary mb-4">
                Financial institutions and large enterprises with OSFI B-15 or multi-jurisdiction compliance
                obligations.
              </p>
              <ul className="text-xs text-secondary space-y-2 mb-4">
                <li>✓ 4-week technical assessment</li>
                <li>✓ Infrastructure compatibility testing</li>
                <li>✓ Evidence package evaluation</li>
                <li>✓ Audit firm introduction</li>
              </ul>
              <Link to="/contact" state={{ contactType: 'institutional' }} className="text-teal font-medium text-sm">
                Inquire now →
              </Link>
            </div>

            <div className="card p-6 border-l-4 border-blue">
              <h3 className="font-bold mb-4 text-body">Auditor Collaboration</h3>
              <p className="text-sm text-secondary mb-4">
                Big4 firms and audit partnerships exploring integration of GridWitness evidence into audit workflows.
              </p>
              <ul className="text-xs text-secondary space-y-2 mb-4">
                <li>✓ Evidence package evaluation</li>
                <li>✓ Audit procedure integration</li>
                <li>✓ Technology partnership</li>
                <li>✓ Multi-client deployment</li>
              </ul>
              <Link to="/contact" state={{ contactType: 'auditor' }} className="text-teal font-medium text-sm">
                Discuss partnership →
              </Link>
            </div>

            <div className="card p-6 border-l-4 border-purple">
              <h3 className="font-bold mb-4 text-body">Academic Partnership</h3>
              <p className="text-sm text-secondary mb-4">
                Researchers and academic institutions via Mitacs or NRC IRAP collaborative programs.
              </p>
              <ul className="text-xs text-secondary space-y-2 mb-4">
                <li>✓ Co-investigator pathway</li>
                <li>✓ Mitacs Accelerate placement</li>
                <li>✓ Research collaboration</li>
                <li>✓ Publication alignment</li>
              </ul>
              <Link to="/contact" state={{ contactType: 'academic' }} className="text-teal font-medium text-sm">
                Apply now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <SocialShare pagePath="/solutions" pageTitle="How GridWitness Works — AI Compute Attestation Platform" />
      </div>
    </>
  );
};
