import React from 'react';

interface CalloutBoxProps {
  accentColor: 'teal' | 'amber' | 'blue' | 'purple' | 'green';
  children: React.ReactNode;
  className?: string;
}

export const CalloutBox: React.FC<CalloutBoxProps> = ({ accentColor, children, className = '' }) => {
  const colorStyles = {
    teal: 'border-teal bg-teal-light/30',
    amber: 'border-amber-600 bg-amber-light/40',
    blue: 'border-blue bg-blue/5',
    purple: 'border-purple bg-purple/5',
    green: 'border-green-dark bg-green-dark/5',
  };

  return (
    <div className={`callout ${colorStyles[accentColor]} p-4 rounded-r-lg ${className}`}>
      {children}
    </div>
  );
};
