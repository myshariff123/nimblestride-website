import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(path + '/');

  const products = [
    {
      path: '/products/clearbind',
      label: 'ClearBind',
      sub: 'InsurTech · MGA Underwriting Intelligence',
      icon: '🛡️',
      accent: 'text-teal',
    },
    {
      path: '/products/newincanada-mortgage',
      label: 'NewInCanada Mortgage',
      sub: 'FinTech · Newcomer Mortgage Platform',
      icon: '🏠',
      accent: 'text-blue',
    },
    {
      path: '/solutions',
      label: 'GridWitness',
      sub: 'RegTech · AI Compute Compliance',
      icon: '⚡',
      accent: 'text-purple',
    },
  ];

  const productsActive =
    isActive('/products') || isActive('/solutions') || isActive('/regulatory');

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2" aria-label="NimbleStride">
            <div>
              <div className="font-bold text-navy text-lg tracking-tight">NIMBLESTRIDE</div>
              <div className="text-xs text-muted font-light tracking-wide">Canadian Innovation</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                isActive('/') ? 'text-teal border-b-2 border-teal' : 'text-body hover:text-teal'
              }`}
            >
              Home
            </Link>

            {/* Products dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded ${
                  productsActive ? 'text-teal border-b-2 border-teal' : 'text-body hover:text-teal'
                }`}
                aria-haspopup="true"
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {products.map((p) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-surface transition-colors"
                    >
                      <span className="text-xl mt-0.5">{p.icon}</span>
                      <div>
                        <div className={`text-sm font-bold ${p.accent}`}>{p.label}</div>
                        <div className="text-xs text-muted mt-0.5">{p.sub}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1 px-4">
                    <Link
                      to="/products"
                      className="block py-2 text-xs text-teal font-semibold hover:text-teal-hover"
                    >
                      All Products Overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                isActive('/about') ? 'text-teal border-b-2 border-teal' : 'text-body hover:text-teal'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                isActive('/contact') ? 'text-teal border-b-2 border-teal' : 'text-body hover:text-teal'
              }`}
            >
              Contact
            </Link>

            <Link to="/contact" className="btn-primary ml-4" aria-label="Get in Touch">
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-navy text-white py-4 px-4 space-y-1">
            <Link to="/" className="block px-3 py-2 text-sm font-medium rounded hover:bg-navy-800">
              Home
            </Link>
            <div className="px-3 pt-3 pb-1 text-xs uppercase tracking-wider text-navy-300 font-semibold">
              Products
            </div>
            {products.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                className="flex items-center gap-2 px-6 py-2 text-sm rounded hover:bg-navy-800"
              >
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </Link>
            ))}
            <Link
              to="/products"
              className="block px-6 py-1.5 text-xs text-teal font-medium hover:text-teal-hover"
            >
              All Products →
            </Link>
            <div className="pt-2 border-t border-navy-700 mt-2">
              <Link to="/about" className="block px-3 py-2 text-sm font-medium rounded hover:bg-navy-800">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium rounded hover:bg-navy-800">
                Contact
              </Link>
            </div>
            <Link to="/contact" className="block w-full btn-primary text-center mt-4">
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
