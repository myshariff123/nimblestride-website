import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHelmet, HeroSection } from '../components';

export const ClearMRM: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="ClearMRM — OSFI E-23 Model Risk Management Platform | NimbleStride"
        description="ClearMRM is a live SaaS platform for Canadian FRFIs to comply with OSFI Guideline E-23 (May 2027). Complete model inventory, automated risk tiering, validation workflows, AI board reports, and an immutable audit trail. 30-day implementation."
        keywords="ClearMRM, OSFI E-23, model risk management, Canadian FRFI, model inventory, risk rating, validation workflow, AWS Bedrock, PIPEDA, RegTech Canada"
        canonicalUrl="https://nimblestride.ca/products/clearmrm"
        path="/products/clearmrm"
      />

      <HeroSection
        eyebrow="RegTech · NimbleStride Product"
        title="ClearMRM — OSFI E-23 Model Risk Management for Canadian FRFIs"
        subtitle="From Excel to compliant in 30 days. ClearMRM is the only Canadian-native, OSFI-specific model risk management platform purpose-built for the May 2027 regulatory deadline."
        primaryCtaLabel="Request Pilot Access"
        primaryCtaTo="/contact"
        secondaryCtaLabel="See All Products"
        secondaryCtaTo="/products"
      />

      {/* ─── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The Problem</div>
              <h2>OSFI E-23 Is Effective May 1, 2027 — and 70%+ of FRFIs Are Not Ready</h2>
              <p className="text-secondary mt-4 leading-relaxed mb-5">
                Every Canadian Federally Regulated Financial Institution — banks, trust companies, insurers,
                mortgage insurers, and federal pension administrators — must maintain a comprehensive, auditable
                model inventory by May 2027. The penalty for non-compliance is regulatory capital add-ons.
              </p>
              <p className="text-secondary leading-relaxed">
                Most Tier 2 FRFIs currently manage their model inventory in Excel. Enterprise alternatives
                (IBM OpenPages, SAS MRM) start at $800K–$2.5M with 12–24 month implementations — inaccessible
                to 90% of the market. ClearMRM closes that gap.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'FRFIs managing model inventory in Excel today', value: '70%+', sub: 'BDO Canada / MNP research' },
                { label: 'Average model validation backlog at Canadian FRFIs', value: '22 mo.', sub: 'IIA Canada 2025 survey' },
                { label: 'IBM OpenPages year-1 cost vs. ClearMRM', value: '$1.1M saved', sub: '$1.2M vs. $72K/yr' },
                { label: 'Implementation time — ClearMRM vs. enterprise', value: '30 days', sub: 'vs. 12–24 months' },
              ].map((s) => (
                <div key={s.label} className="card p-6 border-l-4 border-amber flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">{s.label}</p>
                    <p className="text-xs text-muted mt-0.5">{s.sub}</p>
                  </div>
                  <div className="text-2xl font-bold text-amber ml-4 text-right flex-shrink-0">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">Platform Capabilities</div>
            <h2>Phases 1–8 Live — Full Platform in Production</h2>
            <p className="text-secondary max-w-2xl mx-auto mt-4">
              Every feature maps to a specific OSFI E-23 requirement. All 8 development phases deployed as of June 2026. Nothing is decorative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Model Inventory',
                osfi: '§3.1',
                desc: '15+ structured fields per model — ownership, methodology, deployment, validation status, risk tier. Soft-delete only; decommissioned models remain auditable.',
                features: ['Structured registry with version history', 'Soft archive (never hard-deleted)', 'Search, filter, bulk CSV import from Excel'],
              },
              {
                title: 'Risk Rating Engine',
                osfi: '§3.2',
                desc: '8-question wizard with automated Tier 1/2/3 scoring (max 22 pts). AI reasoning generated by Claude Haiku (AWS Bedrock ca-central-1) explaining the tier in plain English for board directors.',
                features: ['Algorithmic tier computation', 'Immutable rating history', 'AI plain-English explanation (Bedrock Haiku)'],
              },
              {
                title: 'Validation Workflow',
                osfi: '§3.3',
                desc: '6-state compliance machine: Requested → Assigned → In Progress → Findings Submitted → Approved → Closed. AI pre-assessment on request, AI findings analyzer on submission.',
                features: ['Full state machine with role enforcement', 'AI pre-assessment scope generator', 'AI findings analyzer + approval readiness check'],
              },
              {
                title: 'Vendor Assessment',
                osfi: '§5',
                desc: '7-question OSFI §5 checklist for every third-party and vendor model. AI deep-dive analysis generates compliance score, critical gaps, remediation plan, and concentration risk.',
                features: ['Structured §5 checklist per vendor model', 'AI vendor risk deep dive (Bedrock Sonnet)', 'Concentration risk and trend analysis'],
              },
              {
                title: 'Immutable Audit Trail',
                osfi: '§4.4',
                desc: 'PostgreSQL trigger blocks UPDATE and DELETE on audit_events at the database level — not just application level. Every action, rating, validation, and change is permanently recorded.',
                features: ['DB-level append-only enforcement', 'Paginated, filterable audit log', 'Satisfies OSFI E-23 §4.4 immutability requirement'],
              },
              {
                title: 'Board Report & OSFI Examiner Export',
                osfi: '§4',
                desc: 'One-click PDF generation: 3-page Board Report for risk committees, and a 6-page OSFI Supervisory Review Package with AI narrative and attestation page — ready for an examiner visit.',
                features: ['Board Risk Committee PDF (AI summary)', 'OSFI Examiner Export (6-page supervisory package)', 'AI executive narrative (Bedrock Sonnet)'],
              },
              {
                title: 'Multi-Tenant Onboarding & SSO',
                osfi: '§3',
                desc: 'Self-serve 2-step registration with auto-provisioned demo models. Enterprise single sign-on via SAML 2.0. Admin panel for user management, SSO configuration, and tenant oversight.',
                features: ['Self-serve tenant registration (auto demo models)', 'SSO / SAML 2.0 enterprise sign-on', 'Admin Command Centre — user & tenant management'],
              },
              {
                title: 'Model Change Management & Regulatory Calendar',
                osfi: '§4.2',
                desc: 'Version history with AI materiality assessment per OSFI §4.2. Derived validation schedules with AI weekly CRO briefing. Exam Sprint Mode: AI-generated 30/60/90-day action plans.',
                features: ['Change version history + AI materiality check', 'Regulatory filing calendar with deadline reminders', 'Exam Sprint Mode — examiner question prep + action plan'],
              },
              {
                title: 'AI Portfolio Intelligence',
                osfi: '§3–5',
                desc: 'AI Action Queue replaces passive KPI dashboards with prioritized directives. AI Portfolio Doctor grades overall health A–F. Natural language model search. Document Intelligence extracts structured data from pasted regulatory text.',
                features: ['AI Action Queue (Sonnet-generated priority directives)', 'Portfolio Doctor — health grade A–F, concentration risk', 'Natural language search + Document Intelligence'],
              },
              {
                title: 'Insurance-Specific Modules',
                osfi: '§3.2',
                desc: '14 insurance-specific model taxonomy categories with IFRS 17 linkage. Actuarial assumption versioning with approval workflows. Structured backtesting log. Model dependency cascade risk map.',
                features: ['14-category insurance model taxonomy (IFRS 17)', 'Actuarial Assumption Register + approval workflow', 'Backtesting log + Model Dependency Map'],
              },
              {
                title: 'OSFI Readiness & B-10 Vendor Package',
                osfi: '§3–5',
                desc: 'OSFI Readiness Assessment with grade A–F and critical gap list. PSI Population Stability Index (Stable / Monitor / Action). Board-ready B-10 Third-Party Risk Package. Policy Gap Checker against full E-23 framework.',
                features: ['OSFI Readiness grade + gap report', 'PSI drift analysis per model (quantitative)', 'B-10 vendor risk package + Policy Gap Checker'],
              },
            ].map((f) => (
              <div key={f.title} className="card p-6 border-l-4 border-amber">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-body">{f.title}</h3>
                  <span className="text-xs font-bold bg-amber/10 text-amber px-2 py-0.5 rounded">OSFI {f.osfi}</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-4">{f.desc}</p>
                <ul className="space-y-1.5">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex gap-2 text-xs text-secondary">
                      <CheckCircle2 size={12} className="text-amber flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI FEATURES ──────────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">AI Intelligence Layer</div>
            <h2>Every Workflow Has an AI Co-Pilot</h2>
            <p className="text-secondary max-w-2xl mt-4">
              All AI runs on AWS Bedrock in ca-central-1. No data leaves Canada. OpenAI is never used
              (PIPEDA + OPC/CAI Joint Investigation of OpenAI, May 2026).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { model: 'Haiku', title: 'Dashboard Briefing', desc: 'Daily CRO morning briefing — top risk signal and action needed.' },
              { model: 'Haiku', title: 'AI Smart Fill', desc: 'Type a model name → auto-populate purpose, methodology, risk factors.' },
              { model: 'Sonnet', title: 'Remediation Advisor', desc: 'Per-model priority actions, OSFI gaps, estimated effort, compliance score.' },
              { model: 'Sonnet', title: 'AI Board Report Summary', desc: 'Auto-generated executive paragraph for the Board Risk Committee PDF.' },
              { model: 'Haiku', title: 'Validation Pre-Assessment', desc: 'Generates validation scope and key risk areas on request submission.' },
              { model: 'Sonnet', title: 'Findings Analyzer', desc: 'Severity rating, OSFI §references, completeness score, approval recommendation.' },
              { model: 'Sonnet', title: 'Approval Readiness Check', desc: 'Verifies all E-23 requirements are met before the approver signs off.' },
              { model: 'Sonnet', title: 'Vendor §5 Deep Dive', desc: 'OSFI §5 compliance score, critical gaps, remediation plan, concentration risk.' },
              { model: 'Sonnet', title: 'AI Action Queue', desc: 'Replaces passive KPI dashboards with prioritized, Sonnet-generated compliance directives.' },
              { model: 'Sonnet', title: 'Portfolio Doctor', desc: 'Overall health grade A–F, critical findings list, concentration risk, and peer benchmark.' },
              { model: 'Sonnet', title: 'Validation Report Generator', desc: 'Complete formal validation reports auto-generated and stored in the database.' },
              { model: 'Sonnet', title: 'MRM Policy Generator', desc: '13-section OSFI E-23–compliant MRM Policy with board attestation, generated on demand.' },
              { model: 'Sonnet', title: 'AI Examiner Preparation', desc: 'Readiness score, likely examiner questions, and 30-day action plan before an OSFI visit.' },
              { model: 'Sonnet', title: 'Risk Appetite Statement', desc: '6-question MRA Wizard → AI-generated board-approved Risk Appetite Statement (OSFI §3.1).' },
              { model: 'Haiku', title: 'Materiality Assessment', desc: 'AI materiality check on every model change — satisfies OSFI §4.2 change management.' },
              { model: 'Sonnet', title: 'AI Audit Summary', desc: '12-month narrative audit summary auto-generated for examiner review packages.' },
            ].map((ai) => (
              <div key={ai.title} className="card p-5">
                <div className="text-xs font-bold text-amber mb-2">Claude {ai.model}</div>
                <h4 className="font-bold text-body text-sm mb-2">{ai.title}</h4>
                <p className="text-xs text-secondary leading-relaxed">{ai.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPETITIVE POSITION ─────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="eyebrow mb-4">Competitive Position</div>
            <h2>Purpose-Built for Canada. Priced for Tier 2.</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-6 font-bold text-body">Platform</th>
                  <th className="text-left py-3 pr-6 font-bold text-body">Year-1 Cost</th>
                  <th className="text-left py-3 pr-6 font-bold text-body">Implementation</th>
                  <th className="text-left py-3 pr-6 font-bold text-body">OSFI-Native</th>
                  <th className="text-left py-3 font-bold text-body">Canadian Hosted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'IBM OpenPages', cost: '$800K–$2.5M', impl: '12–24 months', osfi: '✗', ca: '✗', highlight: false },
                  { name: 'SAS MRM', cost: '$500K–$1.5M', impl: '9–18 months', osfi: '✗', ca: '✗', highlight: false },
                  { name: 'ValidMind', cost: '$80K–$200K', impl: '3–6 months', osfi: '✗ (US-framed)', ca: '✗', highlight: false },
                  { name: 'ClearMRM', cost: '$30K–$180K', impl: '30 days', osfi: '✓ by design', ca: '✓ ca-central-1', highlight: true },
                ].map((row) => (
                  <tr key={row.name} className={row.highlight ? 'bg-amber/5 font-semibold' : ''}>
                    <td className={`py-3 pr-6 ${row.highlight ? 'text-amber' : 'text-body'}`}>{row.name}</td>
                    <td className="py-3 pr-6 text-secondary">{row.cost}</td>
                    <td className="py-3 pr-6 text-secondary">{row.impl}</td>
                    <td className={`py-3 pr-6 ${row.osfi.startsWith('✓') ? 'text-green-dark font-bold' : 'text-muted'}`}>{row.osfi}</td>
                    <td className={`py-3 ${row.ca.startsWith('✓') ? 'text-green-dark font-bold' : 'text-muted'}`}>{row.ca}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── TARGET MARKET ────────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Target Market</div>
              <h2>~170 Tier 2 FRFIs. $28.8M Canadian TAM.</h2>
              <p className="text-secondary mt-4 leading-relaxed mb-6">
                ClearMRM targets Tier 2 institutions ($1B–$100B assets) with 2–5 model risk professionals —
                institutions that cannot afford IBM/SAS and cannot build internally before May 2027.
              </p>
              <div className="space-y-3">
                {[
                  { segment: 'Tier 2 Banks & Trust Companies', count: '~35', acv: '$72K–$144K/yr' },
                  { segment: 'Federal Insurers under OSFI', count: '~70', acv: '$60K–$120K/yr' },
                  { segment: 'Credit Union Centrals', count: '~50', acv: '$30K–$72K/yr' },
                  { segment: 'Federal Pension Administrators', count: '~15', acv: '$36K–$96K/yr' },
                ].map((t) => (
                  <div key={t.segment} className="flex items-center justify-between card p-4 border-l-4 border-amber">
                    <div>
                      <p className="font-semibold text-body text-sm">{t.segment}</p>
                      <p className="text-xs text-muted">{t.count} institutions</p>
                    </div>
                    <div className="text-amber font-bold text-sm text-right">{t.acv}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Compliance Timeline</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { date: 'Sep 2025', event: 'OSFI publishes final E-23 Guideline', done: true },
                    { date: 'Jun 2026', event: 'ClearMRM Phases 1–8 fully deployed — all capabilities live', done: true },
                    { date: 'Jul–Oct 2026', event: 'Sales window open — 3–6 month FRFI procurement cycles', done: false },
                    { date: 'Nov 2026–Jan 2027', event: 'Lighthouse pilot clients (1 bank, 1 insurer, 1 credit union)', done: false },
                    { date: 'Feb/Mar 2027', event: 'Risk Canada Conference — GA launch, case study presentation', done: false },
                    { date: 'May 1, 2027', event: 'OSFI E-23 effective date — hard compliance deadline', done: false },
                  ].map((item) => (
                    <div key={item.date} className="flex gap-4">
                      <div className={`text-xs font-bold flex-shrink-0 w-20 ${item.done ? 'text-teal' : 'text-navy-300'}`}>{item.date}</div>
                      <div className={`text-xs ${item.done ? 'text-white' : 'text-navy-300'}`}>{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-amber/10 border border-amber/20 rounded-xl p-6">
                <h3 className="font-bold text-body mb-2">Infrastructure</h3>
                <ul className="space-y-1 text-sm text-secondary">
                  {[
                    'AWS EC2 + RDS PostgreSQL 15 — ca-central-1',
                    'AI: AWS Bedrock Claude (Haiku + Sonnet) — ca-central-1',
                    'Auth: AWS Cognito + MFA, SSO SAML 2.0',
                    '100% Canadian data residency — PIPEDA contractually guaranteed',
                    'Nginx + Let\'s Encrypt SSL, PM2 process manager',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 size={13} className="text-amber flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="eyebrow mb-4">Get Started</div>
          <h2 className="text-white mb-6">30 Days to OSFI E-23 Compliance</h2>
          <p className="text-navy-200 mb-4 max-w-2xl mx-auto text-lg">
            ClearMRM is live at{' '}
            <a href="https://clearmrm.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
              clearmrm.nimblestride.ca
            </a>
            . Pilot access is open for Canadian FRFIs.
          </p>
          <p className="text-navy-300 mb-10 max-w-xl mx-auto text-sm">
            Pricing: $30K/yr (Community, under $1B assets) · $72K/yr (Regional, $1B–$20B) · $144K/yr
            (National, $20B–$100B) · Custom for $100B+ FRFIs. Lighthouse pilot discount available for
            co-design participants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" state={{ contactType: 'clearmrm' }} className="btn-primary">
              Request Pilot Access
            </Link>
            <a
              href="https://clearmrm.nimblestride.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Visit Live Platform
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
