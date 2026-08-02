import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHelmet, HeroSection } from '../components';

export const Products: React.FC = () => {
  const location = useLocation();

  // Scroll to the domain section when arriving via a hash link (e.g. /products#insurance).
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <>
      <SEOHelmet
        title="Our Products — Regulated Platforms & Productivity Tools"
        description="NimbleStride's product portfolio: ClearBind (Insurance), ClearMRM (Banking & Finance, OSFI E-23), and GridWitness (Energy & Infrastructure), plus productivity tools Cadence (agile delivery) and CustomTask (back-office automation). Edmonton, Alberta."
        keywords="ClearBind InsurTech, ClearMRM OSFI E-23, GridWitness ESG compliance, Cadence agile, CustomTask automation, NimbleStride products, Canadian software"
        canonicalUrl="https://nimblestride.ca/products"
        path="/products"
      />

      <HeroSection
        eyebrow="Product Portfolio"
        title="Regulated-Industry Platforms & Productivity Tools."
        subtitle="Two tiers, one playbook. Our regulated-industry platforms serve Insurance, Banking & Finance, and Energy & Infrastructure. Our productivity tools give individual practitioners sharper, faster ways to do skilled work."
        primaryCtaLabel="Contact Us"
        primaryCtaTo="/contact"
        secondaryCtaLabel="About NimbleStride"
        secondaryCtaTo="/about"
      />

      {/* ─── PRODUCT 1: ClearBind (Insurance) ─────────────────────────────── */}
      <section id="insurance" className="bg-white py-14 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🛡️</span>
                <div>
                  <div className="eyebrow">Insurance · InsurTech · Product 1 of 3</div>
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
                  href="https://clearbind.ca"
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
                  <p className="text-xs text-secondary mt-0.5">Available at clearbind.ca · Inviting MGA beta partners</p>
                </div>
                <Link to="/contact" state={{ contactType: 'clearbind' }} className="btn-primary text-sm">
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT 2: ClearMRM (Banking & Finance) ──────────────────────── */}
      <section id="banking-finance" className="bg-surface py-14 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏦</span>
                <div>
                  <div className="eyebrow text-amber">Banking &amp; Finance · RegTech · Product 2 of 3</div>
                  <h2 className="text-body">ClearMRM</h2>
                </div>
              </div>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                AI-powered model risk management platform for Canadian Federally Regulated Financial Institutions
                (FRFIs) — purpose-built for OSFI Guideline E-23 (effective May 1, 2027). 70%+ of Canadian FRFIs
                currently manage their model inventory in Excel spreadsheets. ClearMRM replaces that with a
                structured, auditable, AI-assisted platform in 30 days.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                ClearMRM delivers a complete model inventory, automated Tier 1/2/3 risk rating, 6-state
                validation workflow, vendor/third-party governance, OSFI Examiner Export PDF, and an immutable
                audit trail — all powered by AWS Bedrock Claude in ca-central-1 (PIPEDA compliant). Up to
                97% less cost than IBM OpenPages ($72K vs. $1.2M year-1).
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link to="/products/clearmrm" className="btn-primary inline-flex items-center gap-2">
                  Full ClearMRM Overview
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://clearmrm.nimblestride.ca"
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
              <div className="card p-6 border-l-4 border-amber">
                <h3 className="font-bold text-body mb-3">Platform Capabilities (Phases 1–4 Live)</h3>
                <ul className="space-y-2 text-sm text-secondary">
                  {[
                    'Model inventory — 15+ fields per model, version history, soft-delete',
                    'Risk Rating Wizard — 8-question, automated Tier 1/2/3 (OSFI §3.2)',
                    'Validation Workflow — 6-state machine: requested → closed (§3.3)',
                    'Vendor/Third-Party Assessment — OSFI E-23 §5 checklist + AI deep dive',
                    'OSFI Examiner Export — 6-page Supervisory Review Package PDF',
                    'Immutable audit trail — PostgreSQL trigger, append-only (§4.4)',
                    'AI board reports, smart fill, remediation advisor (AWS Bedrock Claude)',
                    'SSO (SAML 2.0), multi-tenant onboarding, admin panel',
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 size={14} className="text-amber flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {['🇨🇦 OSFI E-23', '🔒 PIPEDA', '🏦 All FRFIs'].map((f) => (
                  <div key={f} className="bg-amber/10 border border-amber/20 rounded-lg p-3 font-medium text-amber text-xs">
                    {f}
                  </div>
                ))}
              </div>

              <div className="bg-amber/10 border border-amber/20 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-amber">Status: Live — Phases 1–4 Complete</p>
                  <p className="text-xs text-secondary mt-0.5">Available at clearmrm.nimblestride.ca · Inviting pilot FRFIs</p>
                </div>
                <Link to="/contact" state={{ contactType: 'clearmrm' }} className="bg-amber text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-amber-600 transition-colors">
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT 3: GridWitness (Energy & Infrastructure) ──────────────── */}
      <section id="energy-infrastructure" className="bg-white py-14 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">⚡</span>
                <div>
                  <div className="eyebrow text-purple">Energy &amp; Infrastructure · RegTech · Product 3 of 3</div>
                  <h2 className="text-body">GridWitness</h2>
                </div>
              </div>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                Hardware-anchored ESG compliance evidence for data centres and AI compute infrastructure. As
                regulators in Canada, the US, and EU tighten requirements around infrastructure emissions,
                financial institutions and data centre operators face a new class of compliance obligation that
                existing enterprise software was never designed to address. GridWitness fills that gap.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                GridWitness reads directly from server hardware management controllers, generates
                cryptographically verified Scope 1/2/3 evidence, and packages it in audit-ready formats aligned
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
                <Link to="/portal" className="btn-secondary inline-flex items-center gap-2">
                  Access GridWitness Portal
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

      {/* ─── TIER DIVIDER: PRODUCTIVITY & AUTOMATION ──────────────────────── */}
      <section className="bg-white pt-8 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="eyebrow mb-3">Productivity &amp; Automation</div>
          <h2 className="text-body">Tools for the People Who Do the Work</h2>
          <p className="text-secondary max-w-2xl mx-auto mt-4 text-lg">
            Beyond our regulated-industry platforms, we build focused tools sold directly to the practitioner.
          </p>
        </div>
      </section>

      {/* ─── PRODUCT 4: Cadence (Agile Delivery) ──────────────────────────── */}
      <section id="agile-delivery" className="bg-surface py-14 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🧭</span>
                <div>
                  <div className="eyebrow text-blue">Agile Delivery · Productivity · Live</div>
                  <h2 className="text-body">Cadence</h2>
                </div>
              </div>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                A personal agile co-pilot that tells each delivery role exactly what to do today — deliverables,
                do's, don'ts, and the gates they own — dated to their sprint or PI, across SAFe, Scrum, Kanban,
                LeSS, Nexus and Scrumban.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                Built for the individual practitioner — 28 roles across 6 frameworks — with a weekday morning
                action-plan email and a knowledge base refreshed weekly from vetted practitioner sources.
                Enterprise tool integration is intentionally out of scope: this is for the person, not the PMO.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://cadence.nimblestride.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Visit cadence.nimblestride.ca
                  <ArrowRight size={16} />
                </a>
                <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                  Talk to Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card p-6 border-l-4 border-blue">
                <h3 className="font-bold text-body mb-3">What Cadence Does</h3>
                <ul className="space-y-2 text-sm text-secondary">
                  {[
                    'Role- and day-specific playbook — focus, do, avoid, downstream impact',
                    'Dated gate schedule + day explorer for any day of the sprint/PI',
                    'Impediment resolver — blocker → the gate, the fix, the meeting',
                    'Issue registry to track blockers through to resolution',
                    'Team / ART board — ownership, hand-offs, coverage gaps',
                    'Weekday morning action-plan email + 60-second no-signup preview',
                    'Knowledge base auto-refreshed weekly from vetted sources',
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 size={14} className="text-blue flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {['SAFe · Scrum', 'Kanban · LeSS', 'Nexus · Scrumban'].map((f) => (
                  <div key={f} className="bg-blue/10 border border-blue/20 rounded-lg p-3 font-medium text-blue text-xs">
                    {f}
                  </div>
                ))}
              </div>

              <div className="bg-blue/10 border border-blue/20 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-blue">Status: Live</p>
                  <p className="text-xs text-secondary mt-0.5">30-day free trial, then $49/year · cadence.nimblestride.ca</p>
                </div>
                <a href="https://cadence.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="bg-blue text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-blue/90 transition-colors">
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT 5: CustomTask (Back-office Automation) ────────────────── */}
      <section id="automation" className="bg-white py-14 md:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">⚙️</span>
                <div>
                  <div className="eyebrow text-green-dark">Back-office Automation · Productivity · Live Demo</div>
                  <h2 className="text-body">CustomTask</h2>
                </div>
              </div>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                A general-purpose template-population engine — bring any data (JSON, CSV, PDF invoice, résumé,
                pasted text) and any template (Word, Excel, PDF, HTML), and get back a finished, correctly
                formatted document.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                Born from insurance data-entry, it now spans accounting, HR and logistics — anywhere someone
                copies fields from one place into a form. Claude-powered extraction with an always-on
                rule-based fallback that runs even with no API key, and a REST API for developers.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://customtask.nimblestride.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Try the Live Demo
                  <ArrowRight size={16} />
                </a>
                <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                  Talk to Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card p-6 border-l-4 border-green-dark">
                <h3 className="font-bold text-body mb-3">What CustomTask Does</h3>
                <ul className="space-y-2 text-sm text-secondary">
                  {[
                    'Upload TXT/HTML/DOCX/XLSX/PDF templates; auto-discovers every placeholder field',
                    'Accepts data as JSON, CSV, DOCX, XLSX, PDF, HTML, or pasted text',
                    'Claude-powered extraction with an always-on rule-based fallback',
                    'Format-faithful output (Word → Word, Excel → Excel) + per-field result table',
                    'Graceful degradation if the AI is unavailable',
                    'Self-contained email/password auth; REST API for programmatic use',
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 size={14} className="text-green-dark flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {['Word · Excel · PDF', 'AI + rule-based', 'REST API'].map((f) => (
                  <div key={f} className="bg-green-dark/10 border border-green-dark/20 rounded-lg p-3 font-medium text-green-dark text-xs">
                    {f}
                  </div>
                ))}
              </div>

              <div className="bg-green-dark/10 border border-green-dark/20 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-green-dark">Status: Live Demo (MVP v0.1)</p>
                  <p className="text-xs text-secondary mt-0.5">customtask.nimblestride.ca</p>
                </div>
                <a href="https://customtask.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="bg-green-dark text-white px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity">
                  Open Demo
                </a>
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
            <h2 className="text-white">What Comes Next?</h2>
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
