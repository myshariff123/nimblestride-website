import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ClearBind } from './pages/ClearBind';
import { MortgageApp } from './pages/MortgageApp';
import { Solutions } from './pages/Solutions';
import { Regulatory } from './pages/Regulatory';
import { RegulatoryMap } from './pages/RegulatoryMap';
import { Partnerships } from './pages/Partnerships';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Onboarding } from './pages/Onboarding';
import { Portal } from './pages/Portal';

const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/clearbind" element={<ClearBind />} />
            <Route path="/products/newincanada-mortgage" element={<MortgageApp />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/regulatory" element={<Regulatory />} />
            <Route path="/regulatory-map" element={<RegulatoryMap />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </Router>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'NimbleStride Inc.',
          url: 'https://nimblestride.ca',
          logo: 'https://nimblestride.ca/logo.png',
          description:
            'Canadian technology company building AI-powered platforms for regulated industries — InsurTech, FinTech, and AI compute governance.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Edmonton',
            addressRegion: 'Alberta',
            addressCountry: 'CA',
          },
          sameAs: ['https://www.linkedin.com/company/nimblestride'],
        })}
      </script>
    </HelmetProvider>
  );
}

export default App;
