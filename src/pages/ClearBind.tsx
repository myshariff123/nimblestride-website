import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { SEOHelmet, HeroSection } from '../components';

export const ClearBind: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="ClearBind — MGA Underwriting Intelligence Platform | NimbleStride"
        description="ClearBind automates commercial insurance submission intake for Canadian MGAs. AI field extraction, live enrichment, Ghost Underwriter analysis, BrokerBridge — all PIPEDA compliant on AWS ca-central-1."
        keywords="ClearBind, MGA underwriting AI, insurance submission automation, commercial lines AI, BrokerBridge, CapacityLens, Canadian InsurTech, MGA platform Alberta"
        canonicalUrl="https://nimblestride.ca/products/clearbind"
        path="/products/clearbind"
      />

      <HeroSection
        eyebrow="InsurTech · NimbleStride Product"
        title="ClearBind — AI Submission Intelligence for Canadian MGAs"
        subtitle="Commercial insurance submissions processed in seconds, not hours. ClearBind extracts every underwriting field, enriches it with live data, and delivers an AI risk opinion — before your underwriter opens a single attachment."
        primaryCtaLabel="Request Beta Access"
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
              <h2>26% of Underwriter Time Goes to Deals That Never Bind</h2>
              <p className="text-secondary mt-4 leading-relaxed mb-5">
                Canadian MGA underwriters spend the majority of their time triaging broker submissions
                manually — reading emails, extracting information, researching businesses, and filling
                spreadsheets — before making any actual underwriting decision.
              </p>
              <p className="text-secondary leading-relaxed">
                For deals that eventually decline or quote away, that work is entirely wasted. ClearBind
                eliminates the manual extraction layer, so underwriters spend their expertise on
                decisions — not data entry.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Avg. time to extract fields from one submission', value: '15–25 min', sub: 'manual process' },
                { label: 'With ClearBind', value: '< 60 sec', sub: 'automated + enriched' },
                { label: 'Submissions that never reach quoting stage', value: '~26%', sub: 'wasted triage effort' },
              ].map((s) => (
                <div key={s.label} className="card p-6 border-l-4 border-teal flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">{s.label}</p>
                    <p className="text-xs text-muted mt-0.5">{s.sub}</p>
                  </div>
                  <div className="text-2xl font-bold text-teal ml-4 text-right flex-shrink-0">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE MODULES ────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">Platform Modules</div>
            <h2>Three Integrated Modules. One Platform.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ClearBind MGA */}
            <div className="card p-8 border-t-4 border-teal">
              <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center mb-5">
                <Shield size={24} className="text-teal" />
              </div>
              <h3 className="font-bold text-body mb-2">ClearBind</h3>
              <p className="text-teal text-sm font-medium mb-4">MGA Submission Intake & Triage</p>
              <p className="text-secondary text-sm leading-relaxed mb-5">
                The core module. Receives broker submissions by email (via Power Automate) or PDF upload,
                extracts all underwriting fields using GPT-4o, enriches with live API data, classifies the
                risk, and assigns a triage stage — all automatically.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                {[
                  'Email ingestion + direct PDF upload with OCR',
                  'Field extraction with confidence scoring (High / Medium / Low)',
                  'NAICS 2022 classification and risk tier',
                  'Google Review, adverse media, business registry checks',
                  'Domain security posture (SPF / DMARC / MX)',
                  'VIN decode for Commercial Auto',
                  'Flood risk for Property / Construction',
                  'Ghost Underwriter · Cyber Scan · Coverage Gap AI',
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2 size={13} className="text-teal flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CapacityLens */}
            <div className="card p-8 border-t-4 border-teal/50">
              <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-body mb-2">CapacityLens</h3>
              <p className="text-teal text-sm font-medium mb-4">Pipeline Health Analytics</p>
              <p className="text-secondary text-sm leading-relaxed mb-5">
                The MGA management dashboard. Gives portfolio administrators real-time visibility into
                submission pipeline health — without querying individual records.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                {[
                  'Submission volume by triage stage',
                  'Class-of-business mix and trend analysis',
                  'Time-in-stage metrics and velocity tracking',
                  'Risk category breakdown (CGL, Auto, Property, Cyber…)',
                  'Conversion funnel from intake to bound',
                  'Exportable pipeline reports',
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2 size={13} className="text-teal/70 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BrokerBridge */}
            <div className="card p-8 border-t-4 border-teal/50">
              <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🌉</span>
              </div>
              <h3 className="font-bold text-body mb-2">BrokerBridge</h3>
              <p className="text-teal text-sm font-medium mb-4">Broker Workflow & Client Intake</p>
              <p className="text-secondary text-sm leading-relaxed mb-5">
                The broker-facing module. Brokers can enter new client risks via magic-paste or PDF upload,
                get AI field completion, check carrier appetite, generate client-ready summaries, and
                download professionally formatted carrier submission PDFs.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                {[
                  'Magic-paste client email → instant field extraction',
                  'AI missing field completion',
                  'Carrier appetite & market placement analysis',
                  'Client-ready risk summary (copyable)',
                  'Carrier submission PDF — 13 carriers supported',
                  'Intact, Aviva, Wawanesa, Northbridge, Zurich, Chubb, Lloyd\'s + more',
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2 size={13} className="text-teal/70 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI WORKSPACE ─────────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="eyebrow mb-4">AI Workspace</div>
            <h2>Senior-Level Underwriting Intelligence, On Demand</h2>
            <p className="text-secondary max-w-2xl mt-4">
              Three specialized AI tools in the ClearBind AI Workspace give underwriters the equivalent of
              a 500-year combined expertise consultation — instantly, on every submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '👻',
                title: 'Ghost Underwriter',
                description:
                  'A complete senior commercial lines underwriting opinion on the risk — appetite decision, key risk factors, suggested rate adjustments, referral triggers, and bind recommendations — drawn from every major Canadian P&C line of business.',
              },
              {
                icon: '🔍',
                title: 'Silent Cyber Exposure Scanner',
                description:
                  'Identifies where silent cyber exposure exists within non-Cyber policy submissions (CGL, Property, E&O, etc.) — flags highest-risk vectors with reference to current cyber incident patterns and Canadian regulatory developments (OSFI B-13, PIPEDA, Quebec Law 25).',
              },
              {
                icon: '🛡️',
                title: 'Coverage Gap Counsellor',
                description:
                  'Reviews the coverage being requested against what the risk profile suggests is needed. Identifies gaps, mismatches, missing endorsements, and opportunities — with reference to Canadian standard policy forms and IBC wordings.',
              },
            ].map((tool) => (
              <div key={tool.title} className="card p-6">
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="font-bold text-body mb-3">{tool.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ───────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="eyebrow mb-4">Infrastructure</div>
            <h2>Built for Canadian Data Sovereignty</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {[
                { label: 'Data Residency', value: 'AWS ca-central-1 (Canada) — PIPEDA compliant' },
                { label: 'AI Models', value: 'OpenAI GPT-4o (extraction & enrichment) · AWS Bedrock Claude (PIPEDA layer)' },
                { label: 'OCR', value: 'AWS Textract for PDF document processing' },
                { label: 'Storage', value: 'AWS S3 · PostgreSQL RDS ca-central-1' },
                { label: 'Auth', value: 'AWS Cognito (ca-central-1) · Multi-tenant JWT isolation' },
                { label: 'API Enrichment', value: 'Google Places v2 · OpenCorporates · News API · NHTSA · Cloudflare DoH · Open-Meteo' },
              ].map((row) => (
                <div key={row.label} className="flex gap-4 py-3 border-b border-gray-100">
                  <div className="w-36 flex-shrink-0 text-sm font-bold text-body">{row.label}</div>
                  <div className="text-sm text-secondary">{row.value}</div>
                </div>
              ))}
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-body mb-5">Insurance Classes Supported</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Commercial Small Business',
                  'Commercial General Liability',
                  'Commercial Auto / Fleet',
                  'Property & BOP',
                  'Cyber Liability',
                  'Construction / Builders Risk',
                  'Professional Liability',
                  'Home / Residential',
                ].map((cls) => (
                  <div key={cls} className="bg-teal-light rounded-lg px-3 py-2 text-xs font-medium text-teal">
                    {cls}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-white mb-4">Ready to Trial ClearBind at Your MGA?</h2>
              <p className="text-navy-200 leading-relaxed">
                We are actively onboarding MGA beta partners in Canada. The trial is straightforward: forward
                a real submission to the ClearBind inbox, and see what the platform returns in under 60 seconds.
                No commitment. No setup cost. Just an honest look at what it does.
              </p>
            </div>
            <div className="space-y-4">
              <Link to="/contact" state={{ contactType: 'clearbind' }} className="btn-primary flex items-center justify-center gap-2 w-full py-4 text-base">
                Request ClearBind Beta Access
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://clearbind.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 w-full py-4 text-base"
              >
                Visit clearbind.ca
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
