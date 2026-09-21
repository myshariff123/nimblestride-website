import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Phone, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-1">
              <svg width="34" height="34" viewBox="0 0 100 100" className="flex-shrink-0" aria-hidden="true">
                <rect x="25" y="26" width="13" height="48" rx="2.5" fill="#FFFFFF" />
                <rect x="62" y="26" width="13" height="48" rx="2.5" fill="#FFFFFF" />
                <path d="M25 26 L38 26 L75 74 L62 74 Z" fill="#00B5AD" />
              </svg>
              <span className="font-bold text-white text-xl tracking-tight">NIMBLESTRIDE</span>
            </div>
            <div className="text-sm text-teal mb-4 font-medium">
              AI Software for Canada's Regulated Industries
            </div>
            <p className="text-xs text-navy-300 mb-5 leading-relaxed">
              The AI &amp; software division of{' '}
              <a href="https://mgr.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="text-navy-200 hover:text-teal">
                MGR Infotech
              </a>{' '}
              — turning Canada's most complex regulated workflows into streamlined, AI-powered experiences.
            </p>
            <a
              href="https://www.linkedin.com/company/nimblestride"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#004182] transition-colors"
              aria-label="Follow NimbleStride on LinkedIn"
            >
              <Linkedin size={16} />
              Follow on LinkedIn
            </a>
          </div>

          {/* Products column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Our Products</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://clearbind.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors group">
                  <div className="font-semibold text-navy-200 group-hover:text-teal">🛡️ ClearBind</div>
                  <div className="text-xs text-navy-300 mt-0.5">Insurance · MGA Underwriting · clearbind.ca</div>
                </a>
              </li>
              <li>
                <a href="https://clearmrm.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors group">
                  <div className="font-semibold text-navy-200 group-hover:text-teal">🏦 ClearMRM</div>
                  <div className="text-xs text-navy-300 mt-0.5">Banking &amp; Finance · OSFI E-23 · clearmrm.nimblestride.ca</div>
                </a>
              </li>
              <li>
                <a href="https://cadence.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors group">
                  <div className="font-semibold text-navy-200 group-hover:text-teal">🧭 Cadence</div>
                  <div className="text-xs text-navy-300 mt-0.5">Productivity · Agile Delivery · cadence.nimblestride.ca</div>
                </a>
              </li>
              <li>
                <a href="https://customtask.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors group">
                  <div className="font-semibold text-navy-200 group-hover:text-teal">⚙️ CustomTask</div>
                  <div className="text-xs text-navy-300 mt-0.5">Productivity · Automation · customtask.nimblestride.ca</div>
                </a>
              </li>
              <li>
                <Link to="/products#clearbid" className="hover:text-teal transition-colors group">
                  <div className="font-semibold text-navy-200 group-hover:text-teal">📋 ClearBid</div>
                  <div className="text-xs text-navy-300 mt-0.5">Public Sector · Bid Compliance · Coming Soon</div>
                </Link>
              </li>
              <li>
                <a href="https://newincanadamortgage.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors group">
                  <div className="font-semibold text-navy-200 group-hover:text-teal">🏠 Canadian Mortgage Finder</div>
                  <div className="text-xs text-navy-300 mt-0.5">Consumer Fintech · newincanadamortgage.ca</div>
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-navy-300">
              <li><Link to="/" className="hover:text-teal transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-teal transition-colors">All Products</Link></li>
              <li><Link to="/about" className="hover:text-teal transition-colors">About NimbleStride</Link></li>
              <li><Link to="/contact" className="hover:text-teal transition-colors">Contact Us</Link></li>
              <li>
                <a href="https://mgr.nimblestride.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
                  MGR Infotech (Parent) ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-navy-300">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-teal flex-shrink-0 mt-0.5" />
                <a href="mailto:support@nimblestride.ca" className="hover:text-teal transition-colors">support@nimblestride.ca</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-teal flex-shrink-0 mt-0.5" />
                <a href="tel:+18552068546" className="hover:text-teal transition-colors">(855) 206-8546 <span className="text-navy-400">· toll-free</span></a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-teal flex-shrink-0 mt-0.5" />
                <span>
                  #417 – 310 Main Street N<br />
                  Moose Jaw, SK<br />
                  <span className="text-navy-400">Serving Saskatchewan &amp; Alberta</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8">
          <p className="text-xs text-navy-300 text-center max-w-4xl mx-auto leading-relaxed">
            NimbleStride is the AI &amp; software division of MGR Infotech. All regulatory, financial, and compliance
            information is provided for informational purposes only and does not constitute legal, financial, or
            regulatory advice. Verify all obligations with qualified counsel.
          </p>
          <p className="text-xs text-navy-400 text-center mt-4">
            © {currentYear} NimbleStride · MGR Infotech. All rights reserved. · Moose Jaw, Saskatchewan, Canada
          </p>
        </div>
      </div>
    </footer>
  );
};
