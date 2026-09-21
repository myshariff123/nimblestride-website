import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ClearBind } from './pages/ClearBind';
import { ClearMRM } from './pages/ClearMRM';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

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
            <Route path="/products/clearmrm" element={<ClearMRM />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'NimbleStride',
          url: 'https://nimblestride.ca',
          logo: 'https://nimblestride.ca/logo.png',
          parentOrganization: {
            '@type': 'Organization',
            name: 'MGR Infotech',
            url: 'https://mgr.nimblestride.ca',
          },
          description:
            'AI & software division of MGR Infotech, building AI-powered platforms for Canada\'s regulated industries — Insurance (ClearBind, MGA underwriting intelligence) and Banking & Model Risk (ClearMRM, OSFI E-23 model risk management) — plus productivity tools Cadence and CustomTask, the ClearBid public-sector bid-compliance tool, and Canadian Mortgage Finder.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '#417 – 310 Main Street N',
            addressLocality: 'Moose Jaw',
            addressRegion: 'Saskatchewan',
            addressCountry: 'CA',
          },
          telephone: '+1-855-206-8546',
          email: 'support@nimblestride.ca',
          sameAs: ['https://www.linkedin.com/company/nimblestride'],
        })}
      </script>
    </HelmetProvider>
  );
}

export default App;
