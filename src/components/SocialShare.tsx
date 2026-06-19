import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface SocialShareProps {
  pagePath: string;
  pageTitle: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ pagePath, pageTitle }) => {
  const baseUrl = 'https://nimblestride.ca';
  const pageUrl = `${baseUrl}${pagePath}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(pageTitle);

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=NimbleStride`;

  return (
    <div className="flex gap-4 items-center py-6">
      <span className="text-sm font-medium text-muted">Share:</span>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="inline-flex items-center gap-2 text-white bg-[#0A66C2] hover:bg-[#004182] px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        <Linkedin size={18} />
        <span>LinkedIn</span>
      </a>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X / Twitter"
        className="inline-flex items-center gap-2 text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        <Twitter size={18} />
        <span>X</span>
      </a>
    </div>
  );
};
