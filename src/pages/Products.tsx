import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHelmet, HeroSection } from '../components';

export const Products: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="Our Products — NimbleStride InsurTech, FinTech & RegTech"
        description="NimbleStride's product portfolio: ClearBind (MGA underwriting intelligence), NewInCanada Mortgage (newcomer FinTech), and GridWitness (AI compute compliance). Edmonton, Alberta."
        keywords="ClearBind InsurTech, NewInCanada Mortgage, GridWitness AI compliance, NimbleStride products, Canadian software, MGA platform, newcomer mortgage Canada"
        canonicalUrl="https://nimblestride.ca/products"
        path="/products"
      />

      <HeroSection
        eyebrow="Product Portfolio"
        title="Three Products. Three Regulated Domains. One Company."
        subtitle="Each NimbleStride product was built to address a genuine Canadian market gap — where regulation is real, the processes are manual, and practitioners have been waiting for software that actually understands their world."
        primaryCtaLabel="Contact Us"
        primaryCtaTo="/contact"
        secondaryCtaLabel="About NimbleStride"
        secondaryCtaTo="/about"
      />

      {/* ─── PRODUCT 1: ClearBind ─────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🛡️</span>
                <div>
                  <div className="eyebrow">InsurTech · Product 1 of 3</div>
                  <h2 className="text-body">ClearBind</h2>
                </div>
              </div>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                AI-powered submission intelligence for Canadian MGA underwriters and commercial insurance
                brokers. ClearBind processes broker submissions — by email or PDF — extracts every key
                underwriting field, enriches the data with live API sources, and delivers an AI-assisted
                risk view before a human has opened a single attachment.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                The platform has three integrated modules: <strong>ClearBind</strong> for MGA submission
                intake and triage, <strong>CapacityLens</strong> for pipeline health analytics, and{' '}
                <strong>BrokerBridge</strong> for broker-side client intake and carrier submission packaging.
                All modules run on AWS in Canada (ca-central-1), PIPEDA compliant.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link to="/products/clearbind" className="btn-primary inline-flex items-center gap-2">
                  Full ClearBind Overview
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://nimblestride.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Live Platform
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card p-6 border-l-4 border-teal">
                <h3 className="font-bold text-body mb-3">ClearBind — MGA Submission Intake</h3>
                <ul className="space-y-2 text-sm text-secondary">
                  {[
                    'Email ingestion via Power Automate + direct PDF upload',
                    'GPT-4o field extraction with confidence scoring',
                    'NAICS classification and risk tier assignment',
                    'Google Reviews, adverse media, domain security API enrichment',
                    'Ghost Underwriter · Cyber Scan · Coverage Gap AI tools',
                    'Audit trail and stage-based submission workflow',
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 size={14} className="text-teal flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card p-5 border-l-4 border-teal/50">
                  <h4 className="font-bold text-body text-sm mb-2">CapacityLens</h4>
                  <p className="text-xs text-secondary">
                    Pipeline health dashboard — submission volume, stage breakdown, class-of-business mix, and time-in-stage metrics.
                  </p>
                </div>
                <div className="card p-5 border-l-4 border-teal/50">
                  <h4 className="font-bold text-body text-sm mb-2">BrokerBridge</h4>
                  <p className="text-xs text-secondary">
                    Broker intake, AI field completion, carrier appetite check, client risk summary, and carrier submission PDF packager.
                  </p>
                </div>
              </div>

              <div className="bg-teal-light border border-teal/20 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-teal">Status: Live Beta</p>
                  <p className="text-xs text-secondary mt-0.5">Available at nimblestride.ca · Inviting MGA beta partners</p>
                </div>
                <Link to="/contact" state={{ contactType: 'clearbind' }} className="btn-primary text-sm">
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT 2: NewInCanada Mortgage ─────────────────────────────── */}
      <section className="bg-surface py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏠</span>
                <div>
                  <div className="eyebrow text-blue">FinTech · Product 2 of 3</div>
                  <h2 className="text-body">NewInCanada Mortgage</h2>
                </div>
              </div>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                Canada's first AI-guided mortgage platform built specifically for newcomers. The conventional
                mortgage market was designed for applicants with established Canadian credit history, domestic
                employment, and local income verification — which excludes a significant portion of Canada's
                fastest-growing demographic on arrival.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                NewInCanada Mortgage changes that equation. The platform assesses eligibility using
                international income, foreign credit history, and newcomer-specific lending programs from
                major Canadian banks, credit unions, and specialist lenders — guiding applicants through
                every step of the process in plain language.
              </p>

              <Link to="/products/newincanada-mortgage" className="btn-primary inline-flex items-center gap-2">
                Full Product Overview
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:order-1 space-y-4">
              <div className="card p-6 border-l-4 border-blue">
                <h3 className="font-bold text-body mb-3">Platform Capabilities</h3>
                <ul className="space-y-2 text-sm text-secondary">
                  {[
                    'AI mortgage eligibility assessment for newcomers and non-residents',
                    'Foreign income analysis — salaried, self-employed, international',
                    'International credit history recognition and scoring',
                    'Lender matching across major banks, credit unions, and MFCs',
                    'Document checklist generation specific to applicant profile',
                    'Step-by-step guidance in English and French',
                    'Mortgage broker portal for client management',
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 size={14} className="text-blue flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue/10 border border-blue/20 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-blue">Status: Coming Soon</p>
                  <p className="text-xs text-secondary mt-0.5">Beta launch — register your interest</p>
                </div>
                <Link to="/contact" state={{ contactType: 'mortgage' }} className="bg-blue text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-blue/90 transition-colors">
                  Register Interest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT 3: GridWitness ───────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">⚡</span>
                <div>
                  <div className="eyebrow text-purple">RegTech · Product 3 of 3</div>
                  <h2 className="text-body">GridWitness</h2>
                </div>
              </div>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                Hardware-anchored compliance evidence for AI compute infrastructure. As regulators in Canada,
                the US, and EU tighten requirements around AI infrastructure emissions, financial institutions
                and data centre operators face a new class of compliance obligation that existing enterprise
                software was never designed to address. GridWitness fills that gap.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                GridWitness reads directly from server hardware management controllers, generates
                cryptographically verified Scope 2 evidence, and packages it in audit-ready formats aligned
                with OSFI B-15, California SB 253, EU CSRD, and ISSB S2 — all from infrastructure you
                already own.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link to="/solutions" className="btn-primary inline-flex items-center gap-2">
                  Platform Details
                  <ArrowRight size={16} />
                </Link>
                <Link to="/regulatory" className="btn-secondary inline-flex items-center gap-2">
                  Regulatory Coverage
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card p-6 border-l-4 border-purple">
                <h3 className="font-bold text-body mb-3">Technical Capabilities</h3>
                <ul className="space-y-2 text-sm text-secondary">
                  {[
                    'Real-time server telemetry via IPMI / Redfish on every compute node',
                    'Cryptographic hardware attestation — tamper-evident audit chain',
                    'GHG Protocol Scope 2 calculation at server level (location + market-based)',
                    'Multi-framework output: OSFI B-15, SB 253, EU CSRD, ISSB S1/S2',
                    'Big4 audit firm integration — assurance-grade evidence packages',
                    'On-premise deployment — no data export to third parties required',
                    'Zero new hardware procurement required',
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 size={14} className="text-purple flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {['🇨🇦 OSFI B-15', '🇺🇸 SB 253', '🇪🇺 CSRD'].map((f) => (
                  <div key={f} className="bg-purple/10 border border-purple/20 rounded-lg p-3 font-medium text-purple text-xs">
                    {f}
                  </div>
                ))}
              </div>

              <div className="bg-purple/10 border border-purple/20 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-purple">Status: Pilot Stage</p>
                  <p className="text-xs text-secondary mt-0.5">Institutional pilot partnerships open</p>
                </div>
                <Link to="/contact" state={{ contactType: 'institutional' }} className="bg-purple text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-purple/90 transition-colors">
                  Request Briefing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMING NEXT ──────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">The Roadmap</div>
            <h2 className="text-white">What Comes After Three?</h2>
            <p className="text-navy-200 max-w-2xl mx-auto mt-4">
              Our model is repeatable. If a Canadian industry runs on regulated, manual, paper-heavy processes —
              we see a product opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { domain: 'Energy & Utilities', idea: 'Alberta energy regulatory compliance and emissions reporting automation', timeline: 'Exploring' },
              { domain: 'Healthcare Data', idea: 'PHIPA-compliant AI tools for Canadian health data workflows and clinical documentation', timeline: 'Exploring' },
              { domain: 'Legal Workflows', idea: 'AI-assisted document review and compliance checking for Canadian legal practices', timeline: 'Exploring' },
              { domain: 'Your Industry', idea: "We're actively looking for the next problem worth solving. If you see it, we want to hear from you.", timeline: 'Let\'s Talk' },
            ].map((item) => (
              <div key={item.domain} className="bg-navy-800 rounded-xl p-6">
                <div className="text-teal text-xs font-semibold uppercase tracking-wider mb-2">{item.timeline}</div>
                <h3 className="font-bold text-lg mb-3">{item.domain}</h3>
                <p className="text-navy-300 text-sm leading-relaxed">{item.idea}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Tell Us About a Problem You're Seeing
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
