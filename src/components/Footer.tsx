import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="font-bold text-white text-xl tracking-tight mb-1">NIMBLESTRIDE</div>
            <div className="text-sm text-teal mb-4 font-medium">
              Intelligent Software for Canada's Regulated Industries
            </div>
            <div className="text-sm text-navy-300 mb-5">
              Edmonton, Alberta, Canada
              <br />
              <a href="mailto:support@nimblestride.ca" className="hover:text-teal transition-colors">
                support@nimblestride.ca
              </a>
            </div>
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
            <p className="text-xs text-navy-300 mt-5 max-w-xs leading-relaxed">
              We build where regulation, data, and human expertise intersect — turning Canada's most complex
              industry workflows into streamlined, AI-powered digital experiences.
            </p>
          </div>

          {/* Products column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Our Products</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://clearbind.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors group">
                  <div className="font-semibold text-navy-200 group-hover:text-teal">🛡️ ClearBind</div>
                  <div className="text-xs text-navy-300 mt-0.5">InsurTech · MGA Underwriting · clearbind.ca</div>
                </a>
              </li>
              <li>
                <a href="https://newincanadamortgage.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors group">
                  <div className="font-semibold text-navy-200 group-hover:text-teal">🏠 NewInCanada Mortgage</div>
                  <div className="text-xs text-navy-300 mt-0.5">FinTech · Newcomer Finance · newincanadamortgage.ca</div>
                </a>
              </li>
              <li>
                <a href="https://gridwitness.ca" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors group">
                  <div className="font-semibold text-navy-200 group-hover:text-teal">⚡ GridWitness</div>
                  <div className="text-xs text-navy-300 mt-0.5">RegTech · AI Compute Compliance · gridwitness.ca</div>
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
              <li><Link to="/partnerships" className="hover:text-teal transition-colors">Partnerships</Link></li>
              <li><Link to="/contact" className="hover:text-teal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* GridWitness column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">GridWitness</h4>
            <ul className="space-y-2 text-sm text-navy-300">
              <li><Link to="/solutions" className="hover:text-teal transition-colors">Platform Overview</Link></li>
              <li><Link to="/regulatory" className="hover:text-teal transition-colors">Regulatory Frameworks</Link></li>
              <li><Link to="/regulatory-map" className="hover:text-teal transition-colors">Regulatory Map</Link></li>
              <li><Link to="/partnerships" className="hover:text-teal transition-colors">Academic Partners</Link></li>
              <li><Link to="/contact" state={{ contactType: 'institutional' }} className="hover:text-teal transition-colors">Institutional Pilot</Link></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/nimblestride"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 hover:text-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/NimbleStride"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 hover:text-teal transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8">
          <p className="text-xs text-navy-300 text-center max-w-4xl mx-auto leading-relaxed">
            NimbleStride Inc. builds proof-of-concept and production-stage software. All regulatory, financial,
            and compliance information is provided for informational purposes only and does not constitute legal,
            financial, or regulatory advice. Verify all obligations with qualified counsel.
          </p>
          <p className="text-xs text-navy-400 text-center mt-4">
            © {currentYear} NimbleStride Inc. All rights reserved. · Edmonton, Alberta, Canada
          </p>
        </div>
      </div>
    </footer>
  );
};
