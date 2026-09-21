import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname, hash, key } = useLocation();

  // On every navigation: scroll to the hash target (retrying until it renders),
  // or to the top of the page when there is no hash. This fixes both the
  // "menu link lands on the page but doesn't jump to the product" issue and the
  // "scroll position carries over between pages" issue.
  useEffect(() => {
    if (hash) {
      let tries = 0;
      const scrollToHash = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (tries++ < 20) {
          window.setTimeout(scrollToHash, 60);
        }
      };
      window.setTimeout(scrollToHash, 0);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname, hash, key]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-teal text-white rounded-full p-3 hover:bg-teal-hover transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};
