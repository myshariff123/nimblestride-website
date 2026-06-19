import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  primaryCtaLabel: string;
  primaryCtaTo: string;
  secondaryCtaLabel?: string;
  secondaryCtaTo?: string;
  accentStripe?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  eyebrow,
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaTo,
  secondaryCtaLabel,
  secondaryCtaTo,
  accentStripe = true,
}) => {
  return (
    <section className="relative bg-navy text-white py-12 md:py-20 lg:py-28 overflow-hidden">
      {accentStripe && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal" aria-hidden="true"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-4 md:space-y-6 max-w-3xl">
          <div className="eyebrow">{eyebrow}</div>

          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">{title}</h1>

          {subtitle && (
            <p className="text-navy-200 text-lg md:text-xl font-light leading-relaxed">{subtitle}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link to={primaryCtaTo} className="btn-primary text-center">
              {primaryCtaLabel}
            </Link>
            {secondaryCtaLabel && secondaryCtaTo && (
              <Link to={secondaryCtaTo} className="btn-secondary text-center">
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
