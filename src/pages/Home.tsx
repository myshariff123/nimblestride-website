import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHelmet } from '../components';

/**
 * Domain-first landing page.
 * The home page surfaces the three regulated DOMAINS we serve — not individual
 * products. Visitors choose a domain to discover the platform behind it.
 * Full JIT-safe Tailwind class strings live in the ACCENT map (no template classes).
 */
const ACCENT = {
  teal: {
    text: 'text-teal',
    iconWrap: 'bg-teal-light text-teal',
    chip: 'bg-teal-light text-teal',
    hoverBorder: 'hover:border-teal',
    dot: 'bg-teal',
  },
  amber: {
    text: 'text-amber',
    iconWrap: 'bg-amber-light text-amber',
    chip: 'bg-amber-light text-amber',
    hoverBorder: 'hover:border-amber',
    dot: 'bg-amber',
  },
  purple: {
    text: 'text-purple',
    iconWrap: 'bg-purple/10 text-purple',
    chip: 'bg-purple/10 text-purple',
    hoverBorder: 'hover:border-purple',
    dot: 'bg-purple',
  },
  blue: {
    text: 'text-blue',
    iconWrap: 'bg-blue/10 text-blue',
    chip: 'bg-blue/10 text-blue',
    hoverBorder: 'hover:border-blue',
    dot: 'bg-blue',
  },
  green: {
    text: 'text-green-dark',
    iconWrap: 'bg-green-dark/10 text-green-dark',
    chip: 'bg-green-dark/10 text-green-dark',
    hoverBorder: 'hover:border-green-dark',
    dot: 'bg-green-dark',
  },
} as const;

const DOMAINS = [
  {
    icon: '🛡️',
    name: 'Insurance',
    tagline: 'AI underwriting intelligence for MGAs & brokers',
    problem:
      'Canadian MGAs and commercial brokers still triage submissions by hand. We turn hours of manual review into seconds of intelligent pre-screening — extraction, enrichment, and carrier-appetite matching before a human opens a single attachment.',
    chips: ['P&C Commercial', 'MGA Underwriting', 'Broker Intake'],
    accent: 'teal' as const,
    to: '/products#insurance',
  },
  {
    icon: '🏦',
    name: 'Banking & Finance',
    tagline: 'Model risk management for Canadian FRFIs',
    problem:
      'OSFI Guideline E-23 makes model risk governance mandatory by May 2027 — yet most institutions still run their model inventory in spreadsheets. We take FRFIs from Excel to examiner-ready, with an auditable trail, in about 30 days.',
    chips: ['OSFI E-23', 'Model Risk', 'All FRFIs'],
    accent: 'amber' as const,
    to: '/products#banking-finance',
  },
  {
    icon: '⚡',
    name: 'Energy & Infrastructure',
    tagline: 'Hardware-anchored ESG & climate compliance',
    problem:
      'The data-centre and AI-compute buildout collides with OSFI B-15 and global climate-disclosure rules. We read emissions evidence directly from server hardware and package it as tamper-evident, assurance-grade reports.',
    chips: ['OSFI B-15', 'ISSB S2 / CSRD', 'Data Centres'],
    accent: 'purple' as const,
    to: '/products#energy-infrastructure',
  },
];

const TOOLS = [
  {
    icon: '🧭',
    name: 'Agile Delivery',
    tagline: 'A personal co-pilot for every delivery role',
    problem:
      'Scrum Masters, RTEs, Product Owners and Business Analysts juggle 28 roles across 6 frameworks — and still ask "what should I be doing today?" We give each practitioner a dated, role-specific playbook: focus, do, avoid, and the gates they own.',
    chips: ['SAFe · Scrum · Kanban', 'LeSS · Nexus · Scrumban', '28 Roles'],
    accent: 'blue' as const,
    to: '/products#agile-delivery',
  },
  {
    icon: '⚙️',
    name: 'Back-office Automation',
    tagline: 'Any data, any template — one finished document',
    problem:
      'HR, accounting and logistics teams burn hours copying fields from one place into another. We take any data — JSON, CSV, PDF, résumé, pasted text — and any template — Word, Excel, PDF — and return a finished, correctly-formatted document.',
    chips: ['Word · Excel · PDF', 'AI + rule-based', 'REST API'],
    accent: 'green' as const,
    to: '/products#automation',
  },
];

export const Home: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="AI-Powered Platforms for Canada's Regulated Industries"
        description="NimbleStride builds intelligent software for Canada's most regulated industries across three domains — Insurance, Banking & Finance, and Energy & Infrastructure. Edmonton, Alberta."
        keywords="NimbleStride, Canadian InsurTech, OSFI E-23 model risk, ESG compliance, RegTech Canada, regulated industries software, Edmonton Alberta"
        canonicalUrl="https://nimblestride.ca/"
        path="/"
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy to-navy-800 text-white py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal" aria-hidden="true" />
        <div className="absolute -right-20 -top-20 w-[28rem] h-[28rem] bg-teal/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-purple/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wide text-teal-hover">
                Edmonton, Alberta · Canadian Innovation
              </span>
            </div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              The Innovation Stack for Canada's{' '}
              <span className="text-teal">Regulated Industries</span>
            </h1>
            <p className="text-navy-200 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-3xl">
              NimbleStride applies AI and machine intelligence to the problems that matter most — where
              regulation is tightest, processes are slowest, and the cost of getting it wrong is highest.
            </p>
            <p className="text-navy-300 text-base leading-relaxed mb-10 max-w-3xl">
              We build AI platforms for three regulated industries — and focused productivity tools for the
              people who work in them. Start with the domain or tool that's yours, and see how we rebuild its
              most manual workflows around AI that practitioners actually trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#domains" className="btn-primary text-center shadow-lg shadow-teal/20">
                Explore Our Domains
              </a>
              <Link to="/about" className="btn-secondary text-center border-white/30 text-white hover:bg-white/10">
                Our Story
              </Link>
            </div>

            {/* Domain quick-links */}
            <div className="flex flex-wrap gap-3 mt-12">
              {DOMAINS.map((d) => (
                <Link
                  key={d.name}
                  to={d.to}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-navy-200 hover:border-teal/50 hover:text-white transition-colors"
                >
                  <span>{d.icon}</span>
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-navy-800 text-white py-8 md:py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal mb-1">3</div>
              <p className="text-navy-200 text-sm font-medium">Regulated Domains</p>
              <p className="text-navy-300 text-xs mt-1">Insurance · Banking &amp; Finance · Energy</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal mb-1">100%</div>
              <p className="text-navy-200 text-sm font-medium">Canadian Data Residency</p>
              <p className="text-navy-300 text-xs mt-1">AWS ca-central-1 · PIPEDA compliant</p>
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

      {/* ─── DOMAINS ──────────────────────────────────────────────────────── */}
      <section id="domains" className="bg-white py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="eyebrow mb-4">Where We Work</div>
            <h2>Three Regulated Domains. Pick Yours.</h2>
            <p className="text-secondary max-w-2xl mx-auto mt-4 text-lg">
              We don't lead with product names — we lead with the problem. Choose the domain that
              matches your world, and we'll show you the platform we built for it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {DOMAINS.map((d) => {
              const a = ACCENT[d.accent];
              return (
                <Link
                  key={d.name}
                  to={d.to}
                  className={`group bg-white rounded-2xl border-2 border-gray-100 ${a.hoverBorder} shadow-sm hover:shadow-xl p-8 flex flex-col transition-all duration-200 hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 ${a.iconWrap}`}>
                    {d.icon}
                  </div>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${a.text} mb-2`}>
                    Domain
                  </div>
                  <h3 className="font-bold text-2xl text-body mb-2">{d.name}</h3>
                  <p className={`text-sm font-medium ${a.text} mb-4`}>{d.tagline}</p>
                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{d.problem}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {d.chips.map((c) => (
                      <span key={c} className={`text-xs font-medium px-2.5 py-1 rounded-full ${a.chip}`}>
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className={`inline-flex items-center gap-2 text-sm font-bold ${a.text}`}>
                    Explore the {d.name} domain
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTIVITY & AUTOMATION ────────────────────────────────────── */}
      <section id="tools" className="bg-surface py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="eyebrow mb-4">Productivity &amp; Automation</div>
            <h2>Focused Tools for the People Who Do the Work</h2>
            <p className="text-secondary max-w-2xl mx-auto mt-4 text-lg">
              Beyond our regulated-industry platforms, we build sharp, single-purpose tools that make skilled
              work faster — sold directly to the practitioner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TOOLS.map((t) => {
              const a = ACCENT[t.accent];
              return (
                <Link
                  key={t.name}
                  to={t.to}
                  className={`group bg-white rounded-2xl border-2 border-gray-100 ${a.hoverBorder} shadow-sm hover:shadow-xl p-8 flex flex-col transition-all duration-200 hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 ${a.iconWrap}`}>
                    {t.icon}
                  </div>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${a.text} mb-2`}>
                    Product
                  </div>
                  <h3 className="font-bold text-2xl text-body mb-2">{t.name}</h3>
                  <p className={`text-sm font-medium ${a.text} mb-4`}>{t.tagline}</p>
                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{t.problem}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {t.chips.map((c) => (
                      <span key={c} className={`text-xs font-medium px-2.5 py-1 rounded-full ${a.chip}`}>
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className={`inline-flex items-center gap-2 text-sm font-bold ${a.text}`}>
                    Learn more
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
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
                From Three Domains to Many — One Regulated Industry at a Time
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
                We intend to do it many more — across every domain where Canadian institutions and citizens
                are underserved by the software available to them.
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-teal/20 rounded-lg p-4 text-center">
                  <div className="text-teal font-bold text-lg">Insurance</div>
                  <div className="text-navy-300 text-xs mt-1">Underwriting intelligence</div>
                </div>
                <div className="bg-amber/20 rounded-lg p-4 text-center">
                  <div className="text-amber font-bold text-lg">Banking &amp; Finance</div>
                  <div className="text-navy-300 text-xs mt-1">Model risk &amp; OSFI E-23</div>
                </div>
                <div className="bg-purple/20 rounded-lg p-4 text-center">
                  <div className="text-purple font-bold text-lg">Energy &amp; Infra.</div>
                  <div className="text-navy-300 text-xs mt-1">ESG &amp; climate compliance</div>
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
                body: "Canada's financial institutions operate under some of the most rigorous disclosure and governance requirements in the world — creating demand for precise, auditable compliance tooling.",
              },
              {
                title: 'Model Risk Mandate',
                body: 'OSFI Guideline E-23 makes model risk management mandatory for every Canadian FRFI by May 2027. Most still run their model inventory in spreadsheets — an entire industry needs auditable tooling, fast.',
              },
              {
                title: 'P&C Insurance Gap',
                body: 'Canadian MGAs and brokers lag global peers in digital adoption. Submission processing remains largely manual — creating measurable efficiency losses and missed bind opportunities.',
              },
              {
                title: 'Energy & Data-Centre Boom',
                body: "Alberta's data-centre and AI-compute buildout collides with OSFI B-15 and climate-disclosure rules, creating a new class of ESG compliance obligation that existing software was never designed to address.",
              },
            ].map((c) => (
              <div key={c.title} className="card p-6 hover:shadow-md transition-shadow">
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
              <div key={p.name} className="bg-surface rounded-xl p-5 text-center hover:bg-teal-light transition-colors">
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
          <h2 className="text-white mb-6">Find Your Domain. Solve the Problem. Shape What's Next.</h2>
          <p className="text-navy-200 mb-10 max-w-2xl mx-auto text-lg">
            Whether you're an MGA underwriter, a Canadian FRFI facing the OSFI E-23 deadline, a data-centre
            operator with ESG obligations, or a potential partner — start with your domain, and we'll take
            it from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#domains" className="btn-primary">
              Explore Our Domains
            </a>
            <Link to="/contact" className="btn-secondary border-white/30 text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
