import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHelmet } from '../components';

export const About: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="About NimbleStride — AI & Software Division of MGR Infotech"
        description="NimbleStride is the AI & software division of MGR Infotech (Moose Jaw, SK), building AI-powered platforms for Canada's regulated industries — Insurance (ClearBind) and Banking & Finance (ClearMRM, OSFI E-23) — plus Cadence, CustomTask, ClearBid, and Canadian Mortgage Finder."
        keywords="NimbleStride about, MGR Infotech, Canadian AI company, Moose Jaw Saskatchewan, InsurTech Canada, RegTech, model risk management, ClearBid, Canadian Mortgage Finder, NRC IRAP, Mitacs"
        canonicalUrl="https://nimblestride.ca/about"
        path="/about"
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-4">About</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NimbleStride</h1>
          <p className="text-navy-200 text-lg md:text-xl max-w-3xl leading-relaxed">
            The AI &amp; software division of <strong className="text-white">MGR Infotech</strong> — building
            AI-powered platforms for Canada's most regulated industries. We apply machine intelligence precisely
            where regulation is tightest, processes are slowest, and the cost of getting it wrong is highest.
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
                bug — robust regulatory frameworks in financial services, insurance, public procurement and
                consumer finance protect both institutions and citizens. But those same frameworks generate
                enormous administrative overhead.
              </p>
              <p className="text-secondary leading-relaxed mb-5">
                Skilled professionals — underwriters, model-risk analysts, compliance officers, financial analysts
                — spend significant portions of their working day on structured data collection, manual field
                extraction, regulatory lookups, and documentation tasks that software should be doing for them.
              </p>
              <p className="text-secondary leading-relaxed">
                NimbleStride's mission is to return that time to the professionals who need it. We build AI that
                augments expert judgment. We never try to replace it.
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
            <h2>Regulated-Industry Platforms &amp; Focused Tools</h2>
            <p className="text-secondary max-w-2xl mx-auto mt-4">
              Platforms built for Canada's regulated industries, productivity tools sold directly to the
              practitioner, and emerging platforms in public-sector procurement and consumer mortgage finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🛡️',
                name: 'ClearBind',
                domain: 'Insurance · InsurTech',
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
                domain: 'Banking & Finance · RegTech',
                status: 'Live',
                statusColor: 'bg-amber text-white',
                description:
                  'AI-powered model risk management for Canadian FRFIs — purpose-built for OSFI Guideline E-23 (effective May 1, 2027). Model inventory, automated risk rating, validation workflows, vendor governance, and an immutable audit trail.',
                link: '/products/clearmrm',
                accentBorder: 'border-amber',
                accentText: 'text-amber',
              },
              {
                icon: '🧭',
                name: 'Cadence',
                domain: 'Productivity · Agile Delivery',
                status: 'Live',
                statusColor: 'bg-blue text-white',
                description:
                  'A personal agile co-pilot that tells each delivery role exactly what to do today across SAFe, Scrum, Kanban, LeSS, Nexus and Scrumban. 28 roles, 6 frameworks, sold to the individual practitioner.',
                link: '/products#agile-delivery',
                accentBorder: 'border-blue',
                accentText: 'text-blue',
              },
              {
                icon: '⚙️',
                name: 'CustomTask',
                domain: 'Productivity · Automation',
                status: 'Live Demo',
                statusColor: 'bg-green-dark text-white',
                description:
                  'A general-purpose template-population engine — bring any data and any template and get back a finished, correctly formatted document. Claude-powered extraction with an always-on rule-based fallback, plus a REST API.',
                link: '/products#automation',
                accentBorder: 'border-green-dark',
                accentText: 'text-green-dark',
              },
              {
                icon: '📋',
                name: 'ClearBid',
                domain: 'Public Sector · Procurement',
                status: 'Coming Soon',
                statusColor: 'bg-indigo text-white',
                description:
                  'A mandatory-criteria compliance shredder for Canadian public-sector bids. Upload an RFP, ITT or RFQ and get back a page-cited matrix of every pass/fail requirement, submission-format rule, and hard deadline.',
                link: '/products#clearbid',
                accentBorder: 'border-indigo',
                accentText: 'text-indigo',
              },
              {
                icon: '🏠',
                name: 'Canadian Mortgage Finder',
                domain: 'Consumer Fintech · Mortgage',
                status: 'Live',
                statusColor: 'bg-rose text-white',
                description:
                  'AI mortgage qualification and broker matching for self-employed Canadians and new permanent residents. An 80+ data-point engine runs CMHC, OSFI B-20 stress test, program eligibility and approval probability at newincanadamortgage.ca.',
                link: '/products#mortgage-finder',
                accentBorder: 'border-rose',
                accentText: 'text-rose',
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

      {/* ─── THE MGR GROUP ────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow mb-4">Corporate Structure</div>
              <h2>A Division of MGR Infotech</h2>
              <p className="text-secondary mt-5 leading-relaxed mb-5">
                NimbleStride is the AI &amp; software division of <strong>MGR Infotech</strong> — an independent
                technology advisor and value-added reseller across Saskatchewan and Alberta, headquartered in
                Moose Jaw, SK. MGR delivers managed IT and networks, cloud and Microsoft 365, cybersecurity and
                data backup, servers and custom hardware, and physical security (CCTV &amp; access).
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                MGR Infotech brings decades of hands-on infrastructure and managed-services experience; NimbleStride
                brings applied AI for Canada's regulated industries. Together the group spans the full stack — from
                the network closet to examiner-ready compliance software.
              </p>
              <a
                href="https://mgr.nimblestride.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Visit MGR Infotech
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-body mb-5">The Group at a Glance</h3>
              <ul className="space-y-4 text-sm text-secondary">
                {[
                  {
                    title: 'MGR Infotech — Parent Company',
                    body: 'IT services & equipment across SK & AB — managed IT, cloud & Microsoft 365, cybersecurity & backup, networks, hardware, and security / CCTV. #417 – 310 Main Street N, Moose Jaw, SK · (855) 206-8546 · info@mgrinfotech.net',
                  },
                  {
                    title: 'NimbleStride — AI & Software Division',
                    body: 'Regulated-industry platforms (ClearBind, ClearMRM), productivity tools (Cadence, CustomTask), and emerging platforms (ClearBid, Canadian Mortgage Finder). support@nimblestride.ca',
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

      {/* ─── WHY THE PRAIRIES ─────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Why the Prairies</div>
              <h2>Built by a Prairie IT Partner, for Canada</h2>
              <p className="text-secondary mt-4 leading-relaxed mb-5">
                Rooted in Moose Jaw, Saskatchewan and serving businesses across Saskatchewan and Alberta,
                NimbleStride combines MGR Infotech's practical, on-the-ground technology delivery with applied
                AI — building for the Canadian regulatory reality rather than adapting US or EU products.
              </p>
              <p className="text-secondary leading-relaxed mb-5">
                All of our platforms keep data in Canada (AWS ca-central-1) and are built PIPEDA-compliant from
                day one.
              </p>

              <div className="pt-4 space-y-2">
                <p className="text-xs text-muted font-semibold uppercase tracking-wider">Supported By</p>
                <div className="flex gap-2 flex-wrap">
                  {['NRC IRAP', 'Mitacs', 'Alberta Innovates'].map((s) => (
                    <span key={s} className="bg-teal-light text-teal border border-teal/20 px-3 py-1 rounded-full text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-body mb-5">The Prairie Advantage</h3>
              <ul className="space-y-4 text-sm text-secondary">
                {[
                  {
                    title: 'Rooted in Managed IT',
                    body: 'MGR Infotech has delivered managed IT, networks, cloud, and security across Saskatchewan and Alberta for years — real infrastructure experience behind every platform.',
                  },
                  {
                    title: 'Regulated-Industry Focus',
                    body: 'Canadian P&C insurance and federally regulated financial institutions face tightening OSFI and provincial requirements — exactly where auditable, AI-assisted tooling creates durable value.',
                  },
                  {
                    title: '100% Canadian Data Residency',
                    body: 'Every platform runs in AWS ca-central-1 with PIPEDA compliance designed in — no customer data leaves Canada.',
                  },
                  {
                    title: 'Federal Innovation Programs',
                    body: 'NRC IRAP, Mitacs Accelerate, and Alberta Innovates support R&D across the group.',
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

      {/* ─── GROWTH ROADMAP ───────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">Growth Roadmap</div>
            <h2>From a Handful of Platforms to Many</h2>
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
                  'ClearMRM: Live — OSFI E-23 model-risk platform for Canadian FRFIs',
                  'Cadence & CustomTask: Live productivity tools',
                  'Shared AI foundation on AWS Bedrock (Claude, ca-central-1)',
                ],
                period: '2024–2026',
              },
              {
                phase: '2',
                label: 'Expansion (2026–2028)',
                color: 'border-indigo',
                dotColor: 'bg-indigo',
                items: [
                  'ClearBid: Public-sector bid-compliance platform to launch',
                  'Canadian Mortgage Finder: Scale broker network nationally',
                  'ClearMRM: Lighthouse FRFIs ahead of the May 2027 E-23 deadline',
                  'Begin discovery in a further regulated Canadian domain',
                ],
                period: '2026–2028',
              },
              {
                phase: '3',
                label: 'Scale (2028+)',
                color: 'border-amber',
                dotColor: 'bg-amber',
                items: [
                  'Multi-product platform with shared AI infrastructure (AWS Bedrock ca-central-1)',
                  'Expansion into healthcare data and legal compliance domains',
                  'Partnership network across Canada\'s regulated industries',
                  'Selective expansion into US and UK regulated markets',
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
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="eyebrow mb-4">Company Details</div>
            <h2>NimbleStride</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-bold text-body mb-4">Organization</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: 'Division Of', value: 'MGR Infotech' },
                  { label: 'Founded', value: '2024' },
                  { label: 'Headquarters', value: '#417 – 310 Main Street N, Moose Jaw, SK, Canada' },
                  { label: 'Service Area', value: 'Saskatchewan & Alberta · serving all of Canada' },
                  { label: 'Sector Focus', value: 'Insurance · Banking & Finance · Productivity · Public Sector · Consumer Fintech' },
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
                  <dt className="font-bold text-body">Phone</dt>
                  <dd className="text-secondary">
                    <a href="tel:+18552068546" className="text-teal hover:text-teal-hover">(855) 206-8546</a> · toll-free
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-body">Parent Company</dt>
                  <dd className="text-secondary">
                    <a href="https://mgr.nimblestride.ca" className="text-teal hover:text-teal-hover" target="_blank" rel="noopener noreferrer">
                      MGR Infotech
                    </a>{' '}
                    · info@mgrinfotech.net
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-body">General Inquiries</dt>
                  <dd><Link to="/contact" className="text-teal hover:text-teal-hover">Contact form</Link></dd>
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
            deadline, a public-sector bidder, or a potential partner — we want to talk.
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
