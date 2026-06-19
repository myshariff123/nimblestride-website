import React from 'react';

interface BadgeProps {
  status: 'active' | 'partial' | 'planned' | 'emerging';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ status, children }) => {
  const statusStyles = {
    active: 'bg-green-dark/10 text-green-dark border border-green-dark/20',
    partial: 'bg-amber-light text-amber-600 border border-amber-600/20',
    planned: 'bg-blue/10 text-blue border border-blue/20',
    emerging: 'bg-purple/10 text-purple border border-purple/20',
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${statusStyles[status]}`}>
      {children}
    </span>
  );
};
