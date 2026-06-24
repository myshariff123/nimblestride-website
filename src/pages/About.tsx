import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHelmet } from '../components';

export const About: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="About NimbleStride — Canadian AI Innovation Company, Edmonton Alberta"
        description="NimbleStride is an Edmonton-based technology company building AI-powered platforms for Canada's most regulated industries. Four products: ClearBind (InsurTech), ClearMRM (OSFI E-23 Model Risk), NewInCanada Mortgage (FinTech), GridWitness (RegTech)."
        keywords="NimbleStride about, Canadian AI company, Edmonton technology startup, InsurTech Canada, FinTech Alberta, RegTech Canada, NRC IRAP, Alberta Innovates"
        canonicalUrl="https://nimblestride.ca/about"
        path="/about"
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-4">About</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NimbleStride Inc.</h1>
          <p className="text-navy-200 text-lg md:text-xl max-w-3xl leading-relaxed">
            An Edmonton-based technology company building AI-powered platforms for Canada's most regulated
            industries. We apply machine intelligence precisely where regulation is tightest, processes are
            slowest, and the cost of getting it wrong is highest.
          </p>
        </div>
      </section>

      {/* ─── MISSION ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Our Mission</div>
              <h2>Making Canada's Most Complex Regulated Processes Effortless</h2>
              <p className="text-secondary mt-5 leading-relaxed mb-5">
                Canada is one of the world's most regulated economies. That is largely a feature, not a
                bug — robust regulatory frameworks in financial services, insurance, real estate, AI governance,
                and healthcare protect both institutions and citizens. But those same frameworks generate
                enormous administrative overhead.
              </p>
              <p className="text-secondary leading-relaxed mb-5">
                Skilled professionals — underwriters, mortgage brokers, compliance officers, financial analysts
                — spend significant portions of their working day on structured data collection, manual field
                extraction, regulatory lookups, and documentation tasks that software should be doing for them.
              </p>
              <p className="text-secondary leading-relaxed">
                NimbleStride's mission is to return that time to the professionals who need it — so an
                underwriter spends their expertise deciding, not typing; so a newcomer's mortgage broker
                spends their time advising, not chasing documentation; so a compliance officer spends their
                skill interpreting, not compiling. We build AI that augments expert judgment. We never
                try to replace it.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-navy rounded-xl p-8 text-white">
                <div className="text-teal text-xs font-semibold uppercase tracking-wider mb-3">The NimbleStride Principle</div>
                <blockquote className="text-xl font-light leading-relaxed text-navy-200">
                  "Build where the problems are hardest. Build for Canada's regulatory reality. Ship only
                  when practitioners trust it."
                </blockquote>
              </div>

              <div className="card p-6">
                <h3 className="font-bold text-body mb-4">What We Build For</h3>
                <ul className="space-y-3 text-sm text-secondary">
                  {[
                    'Workflows that are genuinely complex — not just legacy',
                    'Industries where AI augments, not replaces, professional judgment',
                    'Canadian regulatory contexts, not adapted US/EU products',
                    'Practitioners who need software that understands their domain',
                  ].map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircle2 size={14} className="text-teal flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS SUMMARY ─────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">Our Portfolio</div>
            <h2>Four Products. Four Regulated Domains.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🛡️',
                name: 'ClearBind',
                domain: 'InsurTech',
                status: 'Live Beta',
                statusColor: 'bg-green-dark text-white',
                description:
                  'AI submission intake and underwriting intelligence for Canadian MGA underwriters and commercial brokers. Three integrated modules: ClearBind (intake), CapacityLens (analytics), BrokerBridge (broker tools).',
                link: '/products/clearbind',
                accentBorder: 'border-teal',
                accentText: 'text-teal',
              },
              {
                icon: '🏦',
                name: 'ClearMRM',
                domain: 'RegTech',
                status: 'Live',
                statusColor: 'bg-amber text-white',
                description:
                  'AI-powered model risk management platform for Canadian FRFIs — purpose-built for OSFI Guideline E-23 (effective May 1, 2027). Phases 1–8 live: model inventory, automated Tier 1/2/3 risk rating, validation workflows, vendor governance, insurance modules, and an immutable audit trail.',
                link: '/products/clearmrm',
                accentBorder: 'border-amber',
                accentText: 'text-amber',
              },
              {
                icon: '🏠',
                name: 'NewInCanada Mortgage',
                domain: 'FinTech',
                status: 'Coming Soon',
                statusColor: 'bg-blue text-white',
                description:
                  'AI-guided mortgage platform for newcomers to Canada. Addresses international income, foreign credit history, and newcomer-specific lender programs — with bilingual guidance through every step.',
                link: '/products/newincanada-mortgage',
                accentBorder: 'border-blue',
                accentText: 'text-blue',
              },
              {
                icon: '⚡',
                name: 'GridWitness',
                domain: 'RegTech',
                status: 'Pilot Stage',
                statusColor: 'bg-purple text-white',
                description:
                  'Hardware-anchored ESG compliance platform for Alberta data centres. Tracks Scope 1/2/3 emissions with a WORM-sealed AESO live grid feed, TCFD and IFRS S2 reports, board attestation, SBTi targets, REC tracking, and carbon offset registry — satisfying OSFI B-15, SB 253, EU CSRD, and ISSB S2.',
                link: '/solutions',
                accentBorder: 'border-purple',
                accentText: 'text-purple',
              },
            ].map((p) => (
              <div key={p.name} className={`card p-7 border-t-4 ${p.accentBorder} flex flex-col`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.statusColor}`}>
                    {p.status}
                  </span>
                </div>
                <div className={`text-xs font-semibold uppercase tracking-wider ${p.accentText} mb-1`}>
                  {p.domain}
                </div>
                <h3 className="font-bold text-body mb-3">{p.name}</h3>
                <p className="text-secondary text-sm leading-relaxed flex-1 mb-5">{p.description}</p>
                <Link to={p.link} className={`flex items-center gap-1 text-sm font-semibold ${p.accentText}`}>
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              Full Product Overview <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY EDMONTON ─────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Why Edmonton</div>
              <h2>Built at the Centre of Canadian AI</h2>
              <p className="text-secondary mt-4 leading-relaxed mb-5">
                Edmonton is home to one of North America's most active AI research ecosystems. The University
                of Alberta's machine intelligence program is globally recognized. Alberta Machine Intelligence
                Institute (Amii) anchors a national network of applied AI research. Federal AI infrastructure
                investments are concentrated in Alberta.
              </p>
              <p className="text-secondary leading-relaxed mb-5">
                NimbleStride is positioned at the intersection of Alberta's academic AI leadership, its
                mature financial services sector, and its strong institutional base — accessing partners,
                talent, and federal innovation programs that would be harder to reach anywhere else.
              </p>

              <div className="pt-4 space-y-2">
                <p className="text-xs text-muted font-semibold uppercase tracking-wider">Supported By</p>
                <div className="flex gap-2 flex-wrap">
                  {['NRC IRAP', 'Alberta Innovates', 'Mitacs', 'Schulich School of Business'].map((s) => (
                    <span key={s} className="bg-teal-light text-teal border border-teal/20 px-3 py-1 rounded-full text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-body mb-5">The Alberta Advantage</h3>
              <ul className="space-y-4 text-sm text-secondary">
                {[
                  {
                    title: 'AI Research Leadership',
                    body: 'University of Alberta, Amii — among North America\'s top AI research institutions. Deep talent pipeline in machine learning and NLP.',
                  },
                  {
                    title: 'Regulated Industry Concentration',
                    body: 'Major Canadian financial institutions operate significant Alberta infrastructure. Strong P&C insurance market with independent MGA community.',
                  },
                  {
                    title: 'Newcomer Demographics',
                    body: 'Alberta receives a substantial share of Canada\'s annual immigration cohort — a large, proximate market for NewInCanada Mortgage.',
                  },
                  {
                    title: 'Federal Innovation Programs',
                    body: 'NRC IRAP, Mitacs Accelerate, sovereign compute investment, and Alberta Innovates all active in the region.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-teal font-bold flex-shrink-0">·</span>
                    <div>
                      <p className="font-bold text-body">{item.title}</p>
                      <p className="mt-0.5">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION ROADMAP ───────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">Growth Roadmap</div>
            <h2>From Four Products to Many</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                phase: '1',
                label: 'Foundation (2024–2026)',
                color: 'border-teal',
                dotColor: 'bg-teal',
                items: [
                  'ClearBind: Live beta — MGA submission intake, BrokerBridge, CapacityLens',
                  'ClearMRM: Phases 1–8 live — full OSFI E-23 compliance suite deployed June 2026',
                  'GridWitness: Pilot live — AESO grid, TCFD, IFRS S2, board attestation, REC tracker',
                  'NewInCanada Mortgage: Active development, early registrations open',
                ],
                period: '2024–2026',
              },
              {
                phase: '2',
                label: 'Expansion (2026–2028)',
                color: 'border-blue',
                dotColor: 'bg-blue',
                items: [
                  'ClearBind: Full production, national MGA network, SOC 2 Type I',
                  'ClearMRM: 5 lighthouse FRFIs by Mar 2027, GA launch at Risk Canada Conference',
                  'GridWitness: Multi-client production deployments, named domain launch',
                  'NewInCanada Mortgage: Public launch, broker network, bilingual support',
                ],
                period: '2026–2028',
              },
              {
                phase: '3',
                label: 'Scale (2028+)',
                color: 'border-purple',
                dotColor: 'bg-purple',
                items: [
                  'Multi-product platform with shared AI infrastructure (AWS Bedrock ca-central-1)',
                  'Expansion into energy, healthcare, and legal compliance domains',
                  'Partnership network across Canada\'s regulated industries',
                  'International expansion into US and UK regulated markets',
                ],
                period: '2028+',
              },
            ].map((phase) => (
              <div key={phase.phase} className={`card p-7 border-l-4 ${phase.color} relative`}>
                <div className={`absolute -top-3 -left-3 ${phase.dotColor} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm`}>
                  {phase.phase}
                </div>
                <h3 className="font-bold text-body mb-4 mt-1">{phase.label}</h3>
                <ul className="space-y-2 text-sm text-secondary mb-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 size={13} className="text-muted flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted font-medium">{phase.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPANY DETAILS ──────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="eyebrow mb-4">Company Details</div>
            <h2>NimbleStride Inc.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-bold text-body mb-4">Incorporation</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: 'Legal Name', value: 'NimbleStride Inc.' },
                  { label: 'Founded', value: '2024' },
                  { label: 'Jurisdiction', value: 'Alberta, Canada' },
                  { label: 'Headquarters', value: 'Edmonton, Alberta, Canada' },
                  { label: 'Sector Focus', value: 'InsurTech · FinTech · RegTech · Model Risk' },
                ].map((d) => (
                  <div key={d.label}>
                    <dt className="font-bold text-body">{d.label}</dt>
                    <dd className="text-secondary">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-body mb-4">Contact</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-bold text-body">Email</dt>
                  <dd className="text-secondary">
                    <a href="mailto:support@nimblestride.ca" className="text-teal hover:text-teal-hover">
                      support@nimblestride.ca
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-body">Platform</dt>
                  <dd className="text-secondary">
                    <a href="https://nimblestride.ca" className="text-teal hover:text-teal-hover" target="_blank" rel="noopener noreferrer">
                      nimblestride.ca
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-body">General Inquiries</dt>
                  <dd><Link to="/contact" className="text-teal hover:text-teal-hover">Contact form</Link></dd>
                </div>
                <div>
                  <dt className="font-bold text-body">Partnership Program</dt>
                  <dd><Link to="/partnerships" className="text-teal hover:text-teal-hover">Learn more</Link></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-5">Let's Build Canada's Regulated Future Together</h2>
          <p className="text-navy-200 mb-10 max-w-2xl mx-auto text-lg">
            Whether you are an MGA ready to trial ClearBind, a Canadian FRFI with a May 2027 OSFI E-23
            deadline, a newcomer exploring your mortgage options, a data centre with ESG compliance
            obligations, or a researcher who sees a problem worth solving — we want to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              Explore Our Products <ArrowRight size={16} />
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
