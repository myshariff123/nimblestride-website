import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOHelmet } from '../components';

interface LocationState {
  contactType?: string;
}

const FORM_TYPES = [
  { key: 'clearbind', label: 'ClearBind', icon: '🛡️', sub: 'Insurance · MGA Beta Access' },
  { key: 'clearmrm', label: 'ClearMRM', icon: '🏦', sub: 'Banking & Finance · OSFI E-23 Pilot' },
  { key: 'general', label: 'General', icon: '✉️', sub: 'Any other inquiry' },
] as const;

type FormKey = typeof FORM_TYPES[number]['key'];

const SUBJECTS: Record<FormKey, string> = {
  clearbind: 'ClearBind Beta Access Request',
  clearmrm: 'ClearMRM OSFI E-23 Pilot Request',
  general: 'General Inquiry',
};

export const Contact: React.FC = () => {
  const location = useLocation();
  const defaultType = (location.state as LocationState | null)?.contactType;
  const validType = FORM_TYPES.find((f) => f.key === defaultType)?.key ?? 'general';
  const [activeForm, setActiveForm] = useState<FormKey>(validType as FormKey);

  const inputClass =
    'w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-sm';
  const selectClass = inputClass;
  const textareaClass = `${inputClass} resize-none`;

  // Submissions open the visitor's email client addressed to support@nimblestride.ca
  // with all field values pre-filled — no third-party form backend required.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, key: FormKey) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines: string[] = [];
    data.forEach((value, label) => {
      const v = value.toString().trim();
      if (v) lines.push(`${label}: ${v}`);
    });
    const subject = encodeURIComponent(SUBJECTS[key]);
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:support@nimblestride.ca?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEOHelmet
        title="Contact NimbleStride — ClearBind, ClearMRM & More"
        description="Contact NimbleStride for ClearBind MGA beta access, ClearMRM OSFI E-23 pilot access, or any general inquiry. A division of MGR Infotech — Moose Jaw, SK."
        keywords="contact NimbleStride, ClearBind beta, ClearMRM OSFI E-23, MGR Infotech, NimbleStride partnership, Moose Jaw Saskatchewan"
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
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
                <form onSubmit={(e) => handleSubmit(e, 'clearbind')} className="space-y-5">
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
                      {['Saskatchewan', 'Alberta', 'British Columbia', 'Ontario', 'Quebec', 'Manitoba', 'Nova Scotia', 'New Brunswick', 'Other'].map((p) => (
                        <option key={p}>{p}</option>
                      ))}
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

              {/* ClearMRM Form */}
              {activeForm === 'clearmrm' && (
                <form onSubmit={(e) => handleSubmit(e, 'clearmrm')} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-body mb-2">ClearMRM — OSFI E-23 Pilot Access</h3>
                    <p className="text-secondary text-sm">
                      For Canadian Federally Regulated Financial Institutions (FRFIs) building toward OSFI
                      Guideline E-23 compliance before the May 1, 2027 deadline. ClearMRM is live at{' '}
                      <a href="https://clearmrm.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="text-amber hover:underline">
                        clearmrm.nimblestride.ca
                      </a>.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Institution Name *</label>
                    <input type="text" name="institution" required className={inputClass} placeholder="Your bank, insurer, credit union, or pension fund" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Institution Type</label>
                    <select name="institution_type" className={selectClass}>
                      <option>Tier 2 Bank / Trust Company ($1B–$100B assets)</option>
                      <option>Federal Insurer under OSFI</option>
                      <option>Credit Union Central</option>
                      <option>Federal Pension Administrator</option>
                      <option>Tier 1 Bank ($100B+ assets)</option>
                      <option>Other FRFI</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Current Model Inventory Tool</label>
                    <select name="current_tool" className={selectClass}>
                      <option>Excel spreadsheet(s)</option>
                      <option>Internal system (home-built)</option>
                      <option>IBM OpenPages</option>
                      <option>SAS MRM</option>
                      <option>ValidMind</option>
                      <option>Nothing formal yet</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-body mb-1.5">Your Role *</label>
                    <select name="role" required className={selectClass}>
                      <option>Chief Risk Officer (CRO)</option>
                      <option>Head of Model Risk</option>
                      <option>Model Risk Manager</option>
                      <option>Chief Compliance Officer</option>
                      <option>CFO / Finance Executive</option>
                      <option>IT / Technology Lead</option>
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
                    <label className="block text-sm font-bold text-body mb-1.5">Tell us about your OSFI E-23 readiness situation</label>
                    <textarea name="message" rows={3} className={textareaClass} placeholder="How many models in scope? What's your current inventory process? Any specific gaps you're trying to close before May 2027?" />
                  </div>
                  <button type="submit" className="w-full py-3 rounded-md font-bold bg-amber text-white hover:bg-amber/90 transition-colors text-base">
                    Request ClearMRM Pilot Access
                  </button>
                </form>
              )}

              {/* General Form */}
              {activeForm === 'general' && (
                <form onSubmit={(e) => handleSubmit(e, 'general')} className="space-y-5">
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

              <p className="text-xs text-muted mt-4">
                Submitting opens your email app with the details pre-filled to{' '}
                <a href="mailto:support@nimblestride.ca" className="text-teal hover:text-teal-hover">support@nimblestride.ca</a>.
                If nothing opens, email us directly — we reply within two business days.
              </p>
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
                      <p className="font-bold text-body">Phone</p>
                      <a href="tel:+18552068546" className="text-teal hover:text-teal-hover">(855) 206-8546</a>
                      <span className="text-muted"> · toll-free</span>
                    </div>
                    <div>
                      <p className="font-bold text-body">Head Office</p>
                      <p>#417 – 310 Main Street N<br />Moose Jaw, SK</p>
                      <p className="text-muted text-xs mt-0.5">Serving Saskatchewan &amp; Alberta</p>
                    </div>
                    <div>
                      <p className="font-bold text-body">Response Time</p>
                      <p>We respond within two business days</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Parent Company</p>
                  <a href="https://mgr.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="text-sm text-teal hover:text-teal-hover">
                    MGR Infotech ↗
                  </a>
                  <p className="text-xs text-muted mt-1">info@mgrinfotech.net</p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Our Products</p>
                  <div className="space-y-2 text-sm">
                    <button onClick={() => setActiveForm('clearbind')} className="flex items-center gap-2 text-teal hover:text-teal-hover w-full text-left">
                      🛡️ ClearBind — MGA Beta →
                    </button>
                    <button onClick={() => setActiveForm('clearmrm')} className="flex items-center gap-2 text-amber hover:text-amber/80 w-full text-left">
                      🏦 ClearMRM — OSFI E-23 Pilot →
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
