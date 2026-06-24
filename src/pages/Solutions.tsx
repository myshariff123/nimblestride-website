import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHelmet, HeroSection, SocialShare } from '../components';
import { Badge } from '../components';

export const Solutions: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="GridWitness — Live ESG Compliance Platform for Alberta Data Centres"
        description="GridWitness is a live ESG compliance platform for Alberta data centres. AESO live grid intensity, Scope 1/2/3 tracking, TCFD reports, IFRS S2 tracker, board attestation, SBTi targets, REC tracking — built for OSFI B-15, SB 253, EU CSRD, and ISSB S2."
        keywords="GridWitness, ESG compliance Alberta, AESO grid intensity, Scope 2 compliance, TCFD report, IFRS S2, OSFI B-15, carbon budget, SBTi targets, REC tracker, board attestation"
        canonicalUrl="https://nimblestride.ca/solutions"
        path="/solutions"
      />

      <HeroSection
        eyebrow="The GridWitness Platform — Live Pilot"
        title="ESG Compliance Infrastructure for Alberta Data Centres"
        subtitle="Live platform tracking Scope 1, 2 &amp; 3 emissions with AESO live grid intensity, WORM-sealed audit trail, TCFD &amp; IFRS S2 reports, board attestation, SBTi targets, REC tracking, and carbon offset registry — all in one place."
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
                <h3 className="font-bold text-body">Scope 1, 2 &amp; 3 Tracking</h3>
                <Badge status="active">Live</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Manual Scope 1 entry (natural gas, diesel), WORM-sealed Scope 2 telemetry via AESO live grid
                intensity, and Scope 3 Cat. 11 AWS cloud carbon sync via Cost Explorer.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">OSFI B-15</Badge>
                <Badge status="active">GHG Protocol</Badge>
                <Badge status="active">Bill C-59</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">TCFD &amp; IFRS S2 Reports</h3>
                <Badge status="active">Live</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Full 4-pillar TCFD framework with scenario analysis and one-click PDF report. IFRS S2/ISSB
                32-paragraph tracker with SASB TC-SI metrics and capital deployment data — PDF generation included.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">TCFD</Badge>
                <Badge status="active">IFRS S2</Badge>
                <Badge status="active">ISSB</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">Board Attestation &amp; WORM Vault</h3>
                <Badge status="active">Live</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Token email → /attest page → SHA-256 seal stored in S3 Object Lock COMPLIANCE (7-year retention).
                OSFI compliance PDF with 9-section Merkle hash chain, presigned download URL.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">S3 Object Lock</Badge>
                <Badge status="active">OSFI B-15</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">SBTi Targets &amp; Carbon Budget</h3>
                <Badge status="active">Live</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Science-Based Targets (1.5°C, Well-Below 2°C, or custom pathway) with annual trajectory, tCO2e
                reduction %, and carbon budget with SNS threshold alerts and filing calendar.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">SBTi</Badge>
                <Badge status="active">CSRD</Badge>
                <Badge status="active">ISSB S2</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">REC Tracker &amp; Offset Registry</h3>
                <Badge status="active">Live</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Market-based vs. location-based Scope 2 calculation with Bill C-59–compliant REC flag. Carbon
                offset registry across 8 registries — gross vs. net position with retired offset tracking.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">Bill C-59</Badge>
                <Badge status="active">GHG Protocol</Badge>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-body">Assurance-Ready Evidence Package</h3>
                <Badge status="active">Live</Badge>
              </div>
              <p className="text-secondary text-sm mb-4">
                Pre-structured evidence with complete methodology documentation and cryptographic receipt downloads.
                Designed for Big4 limited assurance engagement across OSFI B-15, SB 253, CSRD, and ISSB S2.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">Big4 Ready</Badge>
                <Badge status="active">SB 253</Badge>
                <Badge status="active">CSRD</Badge>
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
                GridWitness is live at pilot stage. The platform provides secure multi-tenant access via Cognito SSO,
                a 3-step onboarding wizard, and a full ESG compliance dashboard — from live AESO grid data to
                board-sealed attestation PDFs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">Live AESO Grid Intensity</h4>
                    <p className="text-xs text-secondary">Real-time Alberta grid carbon intensity via AESO API — Scope 2 emissions calculated live, not estimated.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">WORM-Sealed Telemetry</h4>
                    <p className="text-xs text-secondary">SQS → Lambda → DynamoDB WORM pipeline with S3 Object Lock COMPLIANCE (7-year) and Merkle hash chain.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">Multi-Framework PDF Reports</h4>
                    <p className="text-xs text-secondary">One-click TCFD, IFRS S2, and OSFI B-15 PDFs with board attestation token email and SHA-256 vault seal.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-body">Regulatory Filing Calendar</h4>
                    <p className="text-xs text-secondary">Derived deadlines for OSFI B-15, TCFD, IFRS S2 — with EventBridge daily reminders and filing confirmation.</p>
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
                    <h4 className="font-bold text-body mb-1">AWS Cognito SSO</h4>
                    <p className="text-sm text-secondary">3-step onboarding wizard. Session cookie (8h), route guards, per-tenant Enforcement Mode toggle.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-bold text-body mb-1">Live AESO Grid Feed</h4>
                    <p className="text-sm text-secondary">EventBridge every 5 minutes → grid oracle Lambda → real-time Alberta carbon intensity (SMP-proxy derived).</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-bold text-body mb-1">Carbon Tax Calculator</h4>
                    <p className="text-sm text-secondary">GGPPA schedule-based carbon liability with SBTi savings projection to 2030.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">🏛️</div>
                  <div>
                    <h4 className="font-bold text-body mb-1">AWS ca-central-1 Only</h4>
                    <p className="text-sm text-secondary">All data — DynamoDB, S3 WORM vault, SNS alerts, API Gateway — stays in Canada. PIPEDA compliant.</p>
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
