import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PhoneCall, FileCheck2, Timer, CreditCard, Sparkles } from 'lucide-react';
import { SEOHelmet, HeroSection } from '../components';

const STEPS = [
  {
    icon: PhoneCall,
    title: 'The caller presses 1',
    body:
      'Your business line answers with your greeting and phone menu. When a caller chooses to speak with a consultant, a short message tells them they are being connected and that your consultation terms are on their way by text.',
  },
  {
    icon: FileCheck2,
    title: 'Terms accepted before advice starts',
    body:
      'One text, one link: your consultation fee, the free time, your refund policy and a recording notice. The client types their full legal name and email and accepts. Their record is updated, a note is time-stamped, and a copy of the terms is emailed to them.',
  },
  {
    icon: Timer,
    title: 'The free window, on your terms',
    body:
      'You consult as usual. When the free time you set is nearly over, you get a text alert, and a note is added to the client record so the timing is never in doubt.',
  },
  {
    icon: CreditCard,
    title: 'Paid time when you decide',
    body:
      'If the conversation should continue, one tick on the client record sends a secure card-payment link by text and email. The payment is recorded on the client file automatically. Nothing is ever charged without the client paying through the link.',
  },
  {
    icon: Sparkles,
    title: 'Notes and documents, drafted for you',
    body:
      'After the call, the transcript becomes an AI intake draft — program interest, status in Canada, key facts, open questions and documents mentioned — ready for your review. Send a secure upload link and each document is checked and summarised for you to confirm.',
  },
];

const CRM_VIEW = [
  'Every caller becomes a client record, matched by phone number — no duplicate entry',
  'Each call logged on the client record',
  'Terms status at a glance: not sent, sent or accepted — with the name the client typed',
  'Time-stamped notes for terms, payments, uploads and alerts',
  'AI intake fields and a review task waiting after each call',
  'Payment status and amount on the client file',
];

const PRINCIPLES = [
  { title: 'You decide on paid time', body: 'The payment link is only ever sent when you choose. No automatic charges.' },
  { title: 'AI drafts, you decide', body: 'Intake drafts and document checks are suggestions for your review — never advice to your client.' },
  { title: 'Terms first', body: 'Clients accept your consultation terms, with their legal name, before paid time is offered.' },
  { title: 'One record per client', body: 'Calls, terms, payments, notes and documents all land in the same client file.' },
];

const ROADMAP = [
  'Assistance for the consultant during the live call',
  'Sending call summaries and documents into the case-management software practices already use',
  'Call routing and alerts for firms with several consultants',
  'Retainer agreements with e-signature after the consultation',
  'More languages for client messages and terms',
];

export const ConsultLine: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="ConsultLine — Phone Intake & Paid Consultations for Immigration Consultants"
        description="ConsultLine turns every call into a client record: consultation terms accepted by text, a free-time alert, a payment link when you decide, and an AI intake draft after the call. Built by NimbleStride for Canadian immigration consultants (RCICs)."
        keywords="ConsultLine, RCIC software, immigration consultant phone system, paid consultation, consultation agreement by SMS, immigration consultant CRM, client intake automation, NimbleStride, MGR Infotech"
        canonicalUrl="https://nimblestride.ca/products/consultline"
        path="/products/consultline"
      />

      <HeroSection
        eyebrow="Professional Services · NimbleStride Product"
        title="ConsultLine — Every Call Becomes a Client File"
        subtitle="Built for Canadian immigration consultants. Callers accept your consultation terms by text, you get an alert when the free time is ending, a payment link goes out when you decide, and an AI intake draft is waiting after the call."
        primaryCtaLabel="Book a Demo"
        primaryCtaTo="/contact"
        primaryCtaState={{ contactType: 'consultline' }}
        secondaryCtaLabel="See All Products"
        secondaryCtaTo="/products"
      />

      {/* ─── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Why ConsultLine</div>
              <h2>The First Call Is Where a Practice Wins or Loses Time</h2>
              <p className="text-secondary mt-4 leading-relaxed mb-5">
                For a solo consultant or a small practice, the first conversation does a lot of work: it builds
                trust, sets expectations and decides whether the person becomes a client. It is also where free
                time stretches, terms go unwritten, and notes are typed up again after the call.
              </p>
              <p className="text-secondary leading-relaxed">
                ConsultLine handles the admin around that conversation — terms, timing, payment, notes and
                documents — so you can stay focused on the person on the line.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Consultation terms', value: 'Accepted by text', sub: 'before paid time is offered' },
                { label: 'Paid extension', value: 'One tick', sub: 'payment link by text and email' },
                { label: 'Intake notes', value: 'Drafted for you', sub: 'from the call transcript' },
              ].map((s) => (
                <div key={s.label} className="card p-6 border-l-4 border-purple flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">{s.label}</p>
                    <p className="text-xs text-muted mt-0.5">{s.sub}</p>
                  </div>
                  <div className="text-xl font-bold text-purple ml-4 text-right flex-shrink-0">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW A CALL WORKS ─────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">How a Call Works</div>
            <h2>From First Ring to Client File, in Five Steps</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="card p-6 border-t-4 border-purple flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple/10 text-purple flex items-center justify-center flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-bold text-purple uppercase tracking-wider">Step {i + 1}</span>
                  </div>
                  <h3 className="font-bold text-body mb-2 text-base">{s.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{s.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ─── WHAT YOU SEE ─────────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Your Client Records</div>
              <h2>Everything From the Call, in One Place</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                ConsultLine works with your business phone line and your CRM. There is no new app to learn: the
                calls, terms, payments and notes simply appear on the client record you already open.
              </p>
            </div>
            <div className="card p-6 border-l-4 border-purple">
              <ul className="space-y-3 text-sm text-secondary">
                {CRM_VIEW.map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2 size={16} className="text-purple flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRINCIPLES ───────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">You Stay in Control</div>
            <h2>Designed Around the Consultant's Judgement</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="card p-6">
                <h3 className="font-bold text-body mb-2 text-base">{p.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROADMAP + STATUS ─────────────────────────────────────────────── */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">In Active Development</div>
              <h2>What We're Building Next</h2>
              <p className="text-secondary mt-4 leading-relaxed mb-6">
                ConsultLine is in its pilot phase and growing quickly, shaped by the consultants who use it.
                Current work includes:
              </p>
              <ul className="space-y-3 text-sm text-secondary">
                {ROADMAP.map((r) => (
                  <li key={r} className="flex gap-2">
                    <ArrowRight size={16} className="text-purple flex-shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="card p-6">
                <h3 className="font-bold text-body mb-2">Who It's For</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Regulated Canadian Immigration Consultants running a solo or small practice who take new-client
                  calls themselves. The same approach suits other appointment-based professional services, and
                  we're glad to talk if that's you.
                </p>
              </div>
              <div className="bg-purple/10 border border-purple/20 rounded-lg p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-purple">Status: Pilot</p>
                  <p className="text-xs text-secondary mt-0.5">Demos available · Pilot pricing on request</p>
                </div>
                <Link
                  to="/contact"
                  state={{ contactType: 'consultline' }}
                  className="bg-purple text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-purple/90 transition-colors flex-shrink-0"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">See a Call From First Ring to Client File</h2>
          <p className="text-navy-200 text-lg mb-8">
            We'll walk you through a real call end to end — the greeting, the terms by text, the free-time alert,
            the payment link and the intake draft — and talk through how it would fit your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              state={{ contactType: 'consultline' }}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              Book a Demo
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://www.mgrinfotech.net/consultline.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              Setup &amp; Support by MGR Infotech ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
