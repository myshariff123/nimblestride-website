import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  path: string;
}

export const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
}) => {
  const ogImage = 'https://nimblestride.ca/og-image.png';

  return (
    <Helmet>
      <title>{title} | GridWitness by NimbleStride</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={`${title} | GridWitness`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="GridWitness by NimbleStride" />
      <meta property="og:locale" content="en_CA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@NimbleStride" />
      <meta name="twitter:title" content={`${title} | GridWitness`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta property="linkedin:owner" content="nimblestride" />
    </Helmet>
  );
};
