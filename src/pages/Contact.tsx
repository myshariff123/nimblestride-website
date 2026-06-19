import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOHelmet } from '../components';

interface LocationState {
  contactType?: string;
}

const FORM_TYPES = [
  { key: 'clearbind', label: 'ClearBind', icon: '🛡️', sub: 'InsurTech · MGA Beta Access' },
  { key: 'mortgage', label: 'NewInCanada Mortgage', icon: '🏠', sub: 'FinTech · Register Interest' },
  { key: 'institutional', label: 'GridWitness Pilot', icon: '⚡', sub: 'RegTech · Institutional' },
  { key: 'general', label: 'General', icon: '✉️', sub: 'Any other inquiry' },
] as const;

type FormKey = typeof FORM_TYPES[number]['key'];

export const Contact: React.FC = () => {
  const location = useLocation();
  const defaultType = (location.state as LocationState | null)?.contactType;
  const validType = FORM_TYPES.find((f) => f.key === defaultType)?.key ?? 'general';
  const [activeForm, setActiveForm] = useState<FormKey>(validType as FormKey);

  const inputClass =
    'w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-sm';
  const selectClass = inputClass;
  const textareaClass = `${inputClass} resize-none`;

  return (
    <>
      <SEOHelmet
        title="Contact NimbleStride — ClearBind, Mortgage Platform, GridWitness"
        description="Contact NimbleStride for ClearBind MGA beta access, NewInCanada Mortgage early registration, GridWitness institutional pilots, or any general inquiry. Edmonton, Alberta."
        keywords="contact NimbleStride, ClearBind beta, NewInCanada Mortgage, GridWitness pilot, NimbleStride partnership, Edmonton Alberta InsurTech"
        canonicalUrl="https://nimblestride.ca/contact"
        path="/contact"
      />

      <section className="bg-navy text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-4">Contact Us</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-navy-200 text-lg max-w-2xl">
            Whether you want to trial a product, explore a partnership, or just ask a question — choose
            the pathway below that matches your interest.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {FORM_TYPES.map((type) => (
              <button
                key={type.key}
                onClick={() => setActiveForm(type.key as FormKey)}
                className={`p-4 rounded-xl font-medium transition-all text-left border-2 ${
                  activeForm === type.key
                    ? 'bg-teal text-white border-teal'
                    : 'bg-surface text-body border-gray-100 hover:border-teal/40'
                }`}
              >
                <div className="text-xl mb-1">{type.icon}</div>
                <div className="text-sm font-bold">{type.label}</div>
                <div className={`text-xs mt-0.5 ${activeForm === type.key ? 'text-white/80' : 'text-muted'}`}>
                  {type.sub}
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {/* ClearBind Form */}
              {activeForm === 'clearbind' && (
                <form action="https://formspree.io/f/clearbind_beta" method="POST" className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-body mb-2">ClearBind Beta Access</h3>
                    <p className="text-secondary text-sm">
                      For MGA underwriters and commercial brokers in Canada interested in trialling ClearBind —
                      AI-powered submission intake and underwriting intelligence.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Organization Name *</label>
                    <input type="text" name="organization" required className={inputClass} placeholder="Your MGA or brokerage name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Your Role</label>
                    <select name="role" className={selectClass}>
                      <option>MGA Underwriter</option>
                      <option>Commercial Broker</option>
                      <option>MGA Principal / Manager</option>
                      <option>Brokerage Principal / Manager</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Primary Lines of Business</label>
                    <select name="lines" className={selectClass}>
                      <option>Commercial General Liability</option>
                      <option>Commercial Property</option>
                      <option>Commercial Auto / Fleet</option>
                      <option>Cyber Liability</option>
                      <option>Construction / Builders Risk</option>
                      <option>Professional Liability</option>
                      <option>Mixed / Multi-Line</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Your Name *</label>
                    <input type="text" name="name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Email *</label>
                    <input type="email" name="email" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Province</label>
                    <select name="province" className={selectClass}>
                      {['Alberta', 'British Columbia', 'Ontario', 'Quebec', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Other'].map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Approximate monthly submission volume</label>
                    <select name="volume" className={selectClass}>
                      <option>Under 50</option>
                      <option>50–200</option>
                      <option>200–500</option>
                      <option>500+</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Tell us about your current intake process</label>
                    <textarea name="message" rows={3} className={textareaClass} placeholder="What does your submission triage look like today? What problems are you trying to solve?" />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3 text-base">
                    Request ClearBind Beta Access
                  </button>
                </form>
              )}

              {/* Mortgage Form */}
              {activeForm === 'mortgage' && (
                <form action="https://formspree.io/f/mortgage_interest" method="POST" className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-body mb-2">NewInCanada Mortgage — Register Interest</h3>
                    <p className="text-secondary text-sm">
                      Register for early access to Canada's first AI-guided mortgage platform for newcomers.
                      Tell us who you are so we can prioritize access accordingly.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">I am a *</label>
                    <select name="audience_type" required className={selectClass}>
                      <option>Newcomer to Canada looking for mortgage help</option>
                      <option>Mortgage Broker serving newcomer clients</option>
                      <option>Lender / Financial Institution</option>
                      <option>Settlement agency or newcomer support organization</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Your Name *</label>
                    <input type="text" name="name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Email *</label>
                    <input type="email" name="email" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Province of Residence / Operation</label>
                    <select name="province" className={selectClass}>
                      {['Alberta', 'British Columbia', 'Ontario', 'Quebec', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Other'].map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Preferred language</label>
                    <select name="language" className={selectClass}>
                      <option>English</option>
                      <option>French</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Tell us more about your situation or interest</label>
                    <textarea name="message" rows={3} className={textareaClass} placeholder="What brings you here? Any specific challenge or question?" />
                  </div>
                  <button type="submit" className="w-full py-3 rounded-md font-bold bg-blue text-white hover:bg-blue/90 transition-colors text-base">
                    Register My Interest
                  </button>
                </form>
              )}

              {/* GridWitness / Institutional Form */}
              {activeForm === 'institutional' && (
                <form action="https://formspree.io/f/gridwitness_pilot" method="POST" className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-body mb-2">GridWitness Institutional Pilot</h3>
                    <p className="text-secondary text-sm">
                      For financial institutions, data centre operators, and enterprises with OSFI B-15,
                      California SB 253, or EU CSRD AI compute compliance obligations.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Organization Name *</label>
                    <input type="text" name="organization" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Industry</label>
                    <select name="industry" className={selectClass}>
                      <option>Financial Services (Bank / Insurance / Asset Manager)</option>
                      <option>Data Centre / Infrastructure Operator</option>
                      <option>Energy / Utilities</option>
                      <option>Technology / Cloud</option>
                      <option>Public Sector / Sovereign AI</option>
                      <option>Audit / Professional Services</option>
                      <option>Academic / Research</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Primary Regulatory Framework</label>
                    <select name="framework" className={selectClass}>
                      <option>OSFI B-15 (Canada)</option>
                      <option>CSDS 1&amp;2 / Bill C-59 (Canada)</option>
                      <option>California SB 253 (USA)</option>
                      <option>EU CSRD / ESRS (Europe)</option>
                      <option>ISSB S1/S2 (Global)</option>
                      <option>Multiple Frameworks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Your Name *</label>
                    <input type="text" name="name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Email *</label>
                    <input type="email" name="email" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Phone</label>
                    <input type="tel" name="phone" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Tell us about your compliance program</label>
                    <textarea name="message" rows={3} className={textareaClass} />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3 text-base">
                    Submit Pilot Inquiry
                  </button>
                </form>
              )}

              {/* General Form */}
              {activeForm === 'general' && (
                <form action="https://formspree.io/f/nimblestride_general" method="POST" className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-body mb-2">General Inquiry</h3>
                    <p className="text-secondary text-sm">
                      Any other question, feedback, partnership idea, or problem you'd like to discuss.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Your Name *</label>
                    <input type="text" name="name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Email *</label>
                    <input type="email" name="email" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Subject</label>
                    <input type="text" name="subject" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Message</label>
                    <textarea name="message" rows={5} className={textareaClass} />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3 text-base">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="card p-6 sticky top-24 space-y-5">
                <div>
                  <h3 className="font-bold text-body mb-3">Contact Information</h3>
                  <div className="space-y-3 text-sm text-secondary">
                    <div>
                      <p className="font-bold text-body">Email</p>
                      <a href="mailto:support@nimblestride.ca" className="text-teal hover:text-teal-hover">
                        support@nimblestride.ca
                      </a>
                    </div>
                    <div>
                      <p className="font-bold text-body">Location</p>
                      <p>Edmonton, Alberta, Canada</p>
                    </div>
                    <div>
                      <p className="font-bold text-body">Response Time</p>
                      <p>We respond within 2 business days</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Our Products</p>
                  <div className="space-y-2 text-sm">
                    <button onClick={() => setActiveForm('clearbind')} className="flex items-center gap-2 text-teal hover:text-teal-hover w-full text-left">
                      🛡️ ClearBind — MGA Beta →
                    </button>
                    <button onClick={() => setActiveForm('mortgage')} className="flex items-center gap-2 text-blue hover:text-blue/80 w-full text-left">
                      🏠 NewInCanada Mortgage →
                    </button>
                    <button onClick={() => setActiveForm('institutional')} className="flex items-center gap-2 text-purple hover:text-purple/80 w-full text-left">
                      ⚡ GridWitness Pilot →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
