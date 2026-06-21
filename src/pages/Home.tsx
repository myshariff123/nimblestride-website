import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHelmet } from '../components';

const PRODUCTS = [
  {
    icon: '🛡️',
    name: 'ClearBind',
    domain: 'InsurTech',
    tagline: 'MGA Underwriting Intelligence',
    description:
      'AI-powered submission intake for Canadian MGA underwriters. ClearBind automatically extracts, enriches, and triages commercial insurance submissions — turning hours of manual review into seconds of intelligent pre-screening.',
    features: [
      'AI field extraction from broker emails and PDFs',
      'Live API enrichment — Google Reviews, NAICS, adverse media, domain security',
      'Ghost Underwriter analysis with 500-year combined expertise',
      'Carrier appetite check and client-ready risk summaries',
      'BrokerBridge: complete broker workflow module',
    ],
    status: 'Live Beta',
    statusColor: 'bg-green-dark text-white',
    accentBorder: 'border-teal',
    accentText: 'text-teal',
    accentBg: 'bg-teal-light',
    cta: '/products/clearbind',
    ctaLabel: 'Explore ClearBind',
    audience: 'MGA Underwriters · Commercial Brokers',
  },
  {
    icon: '🏠',
    name: 'NewInCanada Mortgage',
    domain: 'FinTech',
    tagline: 'Mortgage Intelligence for Newcomers',
    description:
      "Canada's first AI-guided mortgage platform purpose-built for newcomers. NewInCanada Mortgage navigates the unique challenges immigrants face — thin Canadian credit history, foreign income, and unfamiliar lending criteria — to connect them with the right lenders and the right products.",
    features: [
      'AI-powered mortgage eligibility assessment for newcomers',
      'Foreign income and international credit history analysis',
      'Lender matching across major Canadian banks and credit unions',
      'Step-by-step documentation guidance in plain language',
      'Bilingual support — English and French',
    ],
    status: 'Coming Soon',
    statusColor: 'bg-blue text-white',
    accentBorder: 'border-blue',
    accentText: 'text-blue',
    accentBg: 'bg-blue/10',
    cta: '/products/newincanada-mortgage',
    ctaLabel: 'Learn More',
    audience: 'Newcomers to Canada · Mortgage Brokers',
  },
  {
    icon: '⚡',
    name: 'GridWitness',
    domain: 'RegTech',
    tagline: 'AI Compute Compliance Infrastructure',
    description:
      'Hardware-anchored compliance evidence for AI compute infrastructure. GridWitness reads directly from server hardware to generate cryptographically verified Scope 2 emissions data — satisfying OSFI B-15, California SB 253, EU CSRD, and ISSB S2 obligations with a single deployment.',
    features: [
      'Real-time hardware telemetry via IPMI and Redfish',
      'Cryptographic attestation — tamper-evident audit trail',
      'Multi-framework output: OSFI B-15, SB 253, CSRD, ISSB S2',
      'Big4 audit firm integration and assurance-grade evidence packages',
      'Zero new hardware required — works with existing infrastructure',
    ],
    status: 'Pilot Stage',
    statusColor: 'bg-purple text-white',
    accentBorder: 'border-purple',
    accentText: 'text-purple',
    accentBg: 'bg-purple/10',
    cta: '/solutions',
    ctaLabel: 'Explore GridWitness',
    audience: 'Financial Institutions · Data Centre Operators',
  },
];

export const Home: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="NimbleStride — AI-Powered Platforms for Canada's Regulated Industries"
        description="NimbleStride builds intelligent software for Canada's most regulated industries. ClearBind for InsurTech, NewInCanada Mortgage for FinTech, and GridWitness for AI compute compliance."
        keywords="NimbleStride, Canadian InsurTech, ClearBind MGA, NewInCanada Mortgage, GridWitness, AI compliance, Edmonton Alberta, Canadian FinTech, RegTech Canada"
        canonicalUrl="https://nimblestride.ca/"
        path="/"
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal" aria-hidden="true" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal/5 rounded-full translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">Edmonton, Alberta · Canadian Innovation</div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Building the Innovation Stack for Canada's{' '}
              <span className="text-teal">Regulated Industries</span>
            </h1>
            <p className="text-navy-200 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-3xl">
              NimbleStride is a Canadian technology company that applies AI and machine intelligence to the
              problems that matter most — where regulation is tightest, processes are slowest, and the cost
              of getting it wrong is highest.
            </p>
            <p className="text-navy-300 text-base leading-relaxed mb-10 max-w-3xl">
              We currently operate three products across insurance, mortgage finance, and AI governance. Each
              follows the same playbook: find a regulated Canadian industry running on manual processes, apply
              AI precisely where it creates the most durable value, and ship something practitioners actually
              want to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary text-center">
                See Our Products
              </Link>
              <Link to="/about" className="btn-secondary text-center">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-navy-800 text-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal mb-1">3</div>
              <p className="text-navy-200 text-sm font-medium">Active Products</p>
              <p className="text-navy-300 text-xs mt-1">InsurTech · FinTech · RegTech</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal mb-1">3</div>
              <p className="text-navy-200 text-sm font-medium">Industry Domains</p>
              <p className="text-navy-300 text-xs mt-1">Insurance · Mortgage · AI Governance</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal mb-1">1</div>
              <p className="text-navy-200 text-sm font-medium">Country. Deeply.</p>
              <p className="text-navy-300 text-xs mt-1">Built for Canada's regulatory reality</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal mb-1">∞</div>
              <p className="text-navy-200 text-sm font-medium">Problems Remaining</p>
              <p className="text-navy-300 text-xs mt-1">We're just getting started</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="eyebrow mb-4">Our Product Portfolio</div>
            <h2>Three Products. Three Domains. One Mission.</h2>
            <p className="text-secondary max-w-2xl mx-auto mt-4 text-lg">
              Each NimbleStride product targets a distinct regulated Canadian market — but all share the same
              design principle: AI that augments expert judgment without replacing it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className={`card p-8 border-t-4 ${p.accentBorder} flex flex-col`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{p.icon}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.statusColor}`}>
                    {p.status}
                  </span>
                </div>

                <div className={`text-xs font-semibold uppercase tracking-wider ${p.accentText} mb-1`}>
                  {p.domain}
                </div>
                <h3 className="font-bold text-xl text-body mb-1">{p.name}</h3>
                <p className={`text-sm font-medium ${p.accentText} mb-4`}>{p.tagline}</p>

                <p className="text-secondary text-sm leading-relaxed mb-5">{p.description}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-secondary">
                      <CheckCircle2 size={15} className={`${p.accentText} flex-shrink-0 mt-0.5`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={`text-xs text-muted px-3 py-2 rounded-lg ${p.accentBg} mb-5`}>
                  <span className="font-semibold">For: </span>{p.audience}
                </div>

                <Link
                  to={p.cta}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-sm font-bold border-2 ${p.accentBorder} ${p.accentText} hover:${p.accentBg} transition-colors`}
                >
                  {p.ctaLabel}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              Full Product Overview
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── VISION ───────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow mb-5">Our Vision</div>
              <h2 className="text-white mb-6">
                From Three Products to a Thousand — One Regulated Industry at a Time
              </h2>
              <p className="text-navy-200 leading-relaxed mb-5">
                Canada is one of the most highly regulated economies in the world. Financial services, insurance,
                real estate, energy, healthcare, and public infrastructure all operate under frameworks that are
                sophisticated, jurisdiction-specific, and constantly evolving.
              </p>
              <p className="text-navy-200 leading-relaxed mb-5">
                These regulatory environments create friction — enormous amounts of manual work, paper-based
                processes, and compliance overhead that consumes the time of highly trained professionals.
                That friction is exactly where software can create the most durable value.
              </p>
              <p className="text-navy-200 leading-relaxed">
                NimbleStride's playbook is repeatable: identify where Canadian regulation meets outdated
                process; apply AI precisely; ship something practitioners trust. We've done it three times.
                We intend to do it many more times — across every domain where Canadian institutions and
                citizens are underserved by the software available to them.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-navy-800 rounded-xl p-6">
                <div className="text-teal text-2xl font-bold mb-2">The Repeatable Model</div>
                <ul className="space-y-3 text-sm text-navy-200">
                  {[
                    'Identify a regulated Canadian industry with slow, manual, paper-heavy workflows',
                    'Map where AI can augment — not replace — professional judgment',
                    'Build with Canadian regulatory context baked in from day one',
                    'Deploy iteratively with real practitioners, not hypothetical users',
                    'Scale only after the core workflow is genuinely trusted',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-teal font-bold flex-shrink-0">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-teal/20 rounded-lg p-4 text-center">
                  <div className="text-teal font-bold text-lg">Insurance</div>
                  <div className="text-navy-300 text-xs mt-1">ClearBind</div>
                </div>
                <div className="bg-blue/20 rounded-lg p-4 text-center">
                  <div className="text-blue font-bold text-lg">Mortgage</div>
                  <div className="text-navy-300 text-xs mt-1">NewInCanada</div>
                </div>
                <div className="bg-purple/20 rounded-lg p-4 text-center">
                  <div className="text-purple font-bold text-lg">AI Gov.</div>
                  <div className="text-navy-300 text-xs mt-1">GridWitness</div>
                </div>
              </div>

              <div className="bg-teal rounded-xl p-6 text-navy text-center">
                <div className="text-4xl font-bold mb-2">Next?</div>
                <div className="text-sm font-medium opacity-90">
                  Energy regulation · Healthcare data · Public infrastructure · Legal workflows
                </div>
                <div className="text-xs mt-2 opacity-75">
                  If you see a problem in your regulated industry, let's talk.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CANADA ───────────────────────────────────────────────────── */}
      <section className="bg-surface py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">Why Canada</div>
            <h2>A Uniquely Complex Regulatory Landscape Creates Uniquely Large Opportunities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'OSFI & Provincial Regulators',
                body: "Canada's financial institutions operate under some of the most rigorous disclosure and governance requirements in the world — creating demand for precise, auditable compliance tooling.',
              },
              {
                title: 'Newcomer Economy',
                body: "Canada welcomes hundreds of thousands of immigrants annually. Most arrive without Canadian credit history, yet face Canada's complex mortgage and financial services landscape on day one.",
              },
              {
                title: 'P&C Insurance Gap',
                body: 'Canadian MGAs and brokers lag global peers in digital adoption. Submission processing remains largely manual — creating measurable efficiency losses and missed bind opportunities.',
              },
              {
                title: 'AI Governance Frontier',
                body: "Canada's sovereign AI compute strategy, OSFI B-15, and provincial climate disclosure requirements are creating an entirely new compliance obligation category that existing software cannot address.',
              },
            ].map((c) => (
              <div key={c.title} className="card p-6">
                <h3 className="font-bold text-body text-base mb-3">{c.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIPS ─────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="eyebrow mb-3">Supported By</div>
            <h2>Academic, Government & Industry Alignment</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'NRC IRAP', sub: 'Federal Innovation Funding' },
              { name: 'Alberta Innovates', sub: 'Provincial R&D Support' },
              { name: 'Mitacs', sub: 'Academic Partnership' },
              { name: 'University of Alberta', sub: 'Research Collaboration' },
              { name: 'Schulich School of Business', sub: 'Strategy & Policy' },
            ].map((p) => (
              <div key={p.name} className="bg-surface rounded-xl p-5 text-center">
                <div className="font-bold text-body text-sm mb-1">{p.name}</div>
                <div className="text-xs text-muted">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="eyebrow mb-4">Get Involved</div>
          <h2 className="text-white mb-6">Work With Us. Use Our Products. Shape What's Next.</h2>
          <p className="text-navy-200 mb-10 max-w-2xl mx-auto text-lg">
            Whether you're an MGA underwriter ready to trial ClearBind, a newcomer navigating Canada's
            mortgage market, a financial institution with AI compute obligations, or a potential partner —
            we'd like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              Explore Our Products
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
