import React from 'react';
import { Badge } from './Badge';

interface Framework {
  name: string;
  status: 'active' | 'partial' | 'planned' | 'emerging';
}

interface JurisdictionCardProps {
  flag: string;
  title: string;
  frameworks: Framework[];
  affectedEntities: string;
  note?: string;
  accentColor: 'teal' | 'blue' | 'purple';
}

export const JurisdictionCard: React.FC<JurisdictionCardProps> = ({
  flag,
  title,
  frameworks,
  affectedEntities,
  note,
  accentColor,
}) => {
  const accentStyles = {
    teal: 'border-l-teal',
    blue: 'border-l-blue',
    purple: 'border-l-purple',
  };

  return (
    <div className={`card border-l-4 ${accentStyles[accentColor]} p-6 space-y-4`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{flag}</span>
        <h3 className="text-xl font-bold text-body">{title}</h3>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase text-muted mb-3">Frameworks</h4>
        <div className="space-y-2">
          {frameworks.map((fw, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span className="text-body">{fw.name}</span>
              <Badge status={fw.status}>{fw.status === 'active' ? 'Active' :
                fw.status === 'partial' ? 'Active (Monitor)' :
                fw.status === 'planned' ? 'Planned' : 'Voluntary'}</Badge>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-gray-200">
        <p className="text-xs text-secondary font-medium">Who it affects:</p>
        <p className="text-sm text-secondary">{affectedEntities}</p>
      </div>

      {note && (
        <div className="pt-2 border-t border-gray-200">
          <p className="text-xs text-amber-600 font-medium">Note:</p>
          <p className="text-xs text-secondary">{note}</p>
        </div>
      )}
    </div>
  );
};
