import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHelmet, HeroSection } from '../components';

export const MortgageApp: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="NewInCanada Mortgage — AI Mortgage Platform for Newcomers | NimbleStride"
        description="NewInCanada Mortgage helps newcomers to Canada navigate the mortgage process — AI eligibility assessment, international income analysis, lender matching, and bilingual guidance. A NimbleStride FinTech product."
        keywords="NewInCanada Mortgage, newcomer mortgage Canada, immigrant mortgage, NimbleStride FinTech, Canadian mortgage AI, new to Canada home buying, newcomer home loan, Edmonton Alberta"
        canonicalUrl="https://nimblestride.ca/products/newincanada-mortgage"
        path="/products/newincanada-mortgage"
      />

      <section className="relative bg-navy text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow text-blue mb-5">FinTech · NimbleStride Product</div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              NewInCanada Mortgage —{' '}
              <span className="text-blue">Your First Canadian Home, Simplified</span>
            </h1>
            <p className="text-navy-200 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-3xl">
              Canada's mortgage system was built for people who've lived here for decades. NewInCanada
              Mortgage was built for the people who just arrived — with AI that understands international
              income, foreign credit, and the unique pathways available to newcomers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" state={{ contactType: 'mortgage' }} className="bg-blue text-white px-6 py-3 rounded-md font-medium hover:bg-blue/90 transition-colors text-center">
                Register Your Interest
              </Link>
              <Link to="/products" className="btn-secondary text-center">
                All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow text-blue mb-4">The Gap</div>
              <h2>Canada Welcomes Hundreds of Thousands of Newcomers Each Year. The Mortgage System Doesn't.</h2>
              <p className="text-secondary mt-4 leading-relaxed mb-5">
                Canada is one of the world's top immigration destinations. Yet the mortgage market — and the
                software tools that support it — was designed entirely around applicants with established
                Canadian credit history, domestic employment records, and locally verifiable income sources.
              </p>
              <p className="text-secondary leading-relaxed mb-5">
                Newcomers face a compounding set of barriers: no Canadian credit score, foreign employment
                history that standard systems can't process, income sources in foreign currency, and a
                complex lender landscape with no clear guide. The result is that many eligible newcomers are
                declined by lenders whose systems simply cannot evaluate them accurately.
              </p>
              <p className="text-secondary leading-relaxed">
                NewInCanada Mortgage exists to close that gap — applying AI to the problem of properly
                assessing and matching newcomer applicants with the lenders and programs designed for them.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  stat: '400K+',
                  label: 'Permanent residents admitted to Canada annually',
                  context: 'Many arrive with homeownership as a near-term goal',
                },
                {
                  stat: '~60%',
                  label: 'Of newcomers face mortgage challenges in first 3 years',
                  context: 'Primary barrier: no established Canadian credit profile',
                },
                {
                  stat: '0',
                  label: 'AI-native platforms built specifically for newcomer mortgage journeys',
                  context: 'Until now',
                },
              ].map((s) => (
                <div key={s.label} className="card p-6 border-l-4 border-blue">
                  <div className="text-3xl font-bold text-blue mb-2">{s.stat}</div>
                  <p className="text-sm font-medium text-body">{s.label}</p>
                  <p className="text-xs text-muted mt-1">{s.context}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow text-blue mb-4">How It Works</div>
            <h2>From Arrival to Approval — A Guided AI Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Profile & Eligibility',
                description:
                  'Answer a structured questionnaire about your immigration status, income sources, employment history, and homeownership goals. Our AI assesses your eligibility profile using newcomer-specific criteria.',
              },
              {
                step: '2',
                title: 'Income & Credit Analysis',
                description:
                  'Upload foreign income documentation — employment letters, bank statements, international credit reports. Our AI converts, validates, and contextualizes your financial profile for Canadian lenders.',
              },
              {
                step: '3',
                title: 'Lender Matching',
                description:
                  'We match your profile against major Canadian banks, credit unions, mortgage finance companies, and specialist newcomer programs — surfacing the options most likely to approve your application.',
              },
              {
                step: '4',
                title: 'Documentation & Guidance',
                description:
                  'Receive a personalized document checklist, plain-language explanations of each requirement, and step-by-step guidance through the application process — in English or French.',
              },
            ].map((s) => (
              <div key={s.step} className="card p-6">
                <div className="w-10 h-10 bg-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-body mb-3 text-base">{s.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow text-blue mb-4">Platform Capabilities</div>
              <h2>Built for the Newcomer Reality</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Every feature in NewInCanada Mortgage was designed around the specific challenges newcomers
                face — not retrofitted from a platform built for a different customer.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  {
                    title: 'International Income Recognition',
                    body: 'Processes foreign employment income in any currency, including self-employment income, contract income, and rental income from outside Canada.',
                  },
                  {
                    title: 'Foreign Credit History Analysis',
                    body: 'Works with international credit reports and references from applicants\' country of origin to build a comprehensive creditworthiness picture.',
                  },
                  {
                    title: 'Newcomer Program Mapping',
                    body: 'Maps eligibility to bank newcomer mortgage programs, CMHC Newcomer Guidelines, and provincial first-home buyer programs open to permanent residents.',
                  },
                  {
                    title: 'Plain Language, Bilingual',
                    body: 'Every step is explained in plain language, without mortgage industry jargon. Available in English and French to serve Canada\'s two official language communities.',
                  },
                  {
                    title: 'Broker Portal',
                    body: 'Mortgage brokers who serve newcomer clients can manage multiple applicants, track progress, and receive AI-generated pre-application summaries for lender submission.',
                  },
                ].map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm text-body">{f.title}</p>
                      <p className="text-sm text-secondary mt-0.5">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="card p-6 border-t-4 border-blue">
                <h3 className="font-bold text-body mb-4">Lender Network Coverage</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Big 5 Banks',
                    'Credit Unions',
                    'Mortgage Finance Companies',
                    'B Lenders',
                    'Monoline Lenders',
                    'Newcomer Programs',
                    'CMHC-Insured Products',
                    'Co-op Housing',
                  ].map((l) => (
                    <div key={l} className="bg-blue/10 rounded-lg px-3 py-2 text-xs font-medium text-blue">
                      {l}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-bold text-body mb-4">Immigration Status Coverage</h3>
                <ul className="space-y-2 text-sm text-secondary">
                  {[
                    'Permanent Residents (all classes)',
                    'Express Entry applicants (pre-PR)',
                    'Provincial Nominee Program (PNP)',
                    'Spousal / Family sponsorship',
                    'Skilled Worker programs',
                    'Investor / Entrepreneur class',
                    'Canadian Experience Class (CEC)',
                    'Refugee and protected persons',
                  ].map((s) => (
                    <li key={s} className="flex gap-2">
                      <CheckCircle2 size={13} className="text-blue flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow text-blue mb-4">Who We Serve</div>
            <h2>Three Audiences. One Platform.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🌍',
                title: 'New Permanent Residents',
                description:
                  'Individuals and families who have recently received permanent residency and are ready to purchase their first Canadian home — but face barriers in the conventional mortgage application process.',
                cta: 'Start Your Assessment',
                ctaLink: '/contact',
              },
              {
                icon: '🤝',
                title: 'Mortgage Brokers',
                description:
                  'Licensed mortgage brokers who serve newcomer clients and need an efficient, accurate way to assess eligibility, identify the right lender match, and prepare a compelling application package.',
                cta: 'Broker Portal Access',
                ctaLink: '/contact',
              },
              {
                icon: '🏦',
                title: 'Lenders & Financial Institutions',
                description:
                  'Banks, credit unions, and mortgage finance companies looking to expand their newcomer business with better pre-screened applicants and richer application packages from day one.',
                cta: 'Partnership Inquiry',
                ctaLink: '/contact',
              },
            ].map((a) => (
              <div key={a.title} className="card p-8 border-t-4 border-blue flex flex-col">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-bold text-body mb-3">{a.title}</h3>
                <p className="text-secondary text-sm leading-relaxed flex-1 mb-5">{a.description}</p>
                <Link
                  to={a.ctaLink}
                  state={{ contactType: 'mortgage' }}
                  className="flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue/80 transition-colors"
                >
                  {a.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATUS & CTA ─────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow text-blue mb-4">Launch Status</div>
              <h2 className="text-white mb-5">Coming Soon — Register Your Interest Now</h2>
              <p className="text-navy-200 leading-relaxed mb-5">
                NewInCanada Mortgage is in active development. We are onboarding early users and mortgage
                broker partners to shape the platform before public launch.
              </p>
              <p className="text-navy-200 leading-relaxed">
                If you are a newcomer preparing to buy your first Canadian home, a mortgage broker who wants
                early access, or a lender interested in partnership — we want to hear from you now, while
                the product is still being shaped.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-blue/20 border border-blue/30 rounded-xl p-5">
                <p className="text-blue font-bold text-sm mb-3">What Early Registrants Get</p>
                <ul className="space-y-2 text-sm text-navy-200">
                  {[
                    'Priority access at beta launch',
                    'Direct input into feature development',
                    'Dedicated onboarding support',
                    'Early-adopter pricing',
                  ].map((b) => (
                    <li key={b} className="flex gap-2">
                      <CheckCircle2 size={14} className="text-blue flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                state={{ contactType: 'mortgage' }}
                className="bg-blue text-white flex items-center justify-center gap-2 w-full py-4 rounded-md font-bold text-base hover:bg-blue/90 transition-colors"
              >
                Register Your Interest
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://newincanadamortgage.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 w-full py-4 text-base font-bold"
              >
                Visit newincanadamortgage.ca
                <ArrowRight size={18} />
              </a>
              <Link to="/products" className="btn-secondary flex items-center justify-center gap-2 w-full py-3">
                See All NimbleStride Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
