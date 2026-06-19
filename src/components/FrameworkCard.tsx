import React from 'react';
import { Badge } from './Badge';
import { Link } from 'react-router-dom';

interface FrameworkCardProps {
  title: string;
  badge: string;
  badgeStatus: 'active' | 'partial' | 'planned' | 'emerging';
  issuedBy: string;
  appliesTo: string;
  coreRequirement: string;
  gridWitnessCoverage: string[];
  note?: string;
}

export const FrameworkCard: React.FC<FrameworkCardProps> = ({
  title,
  badge,
  badgeStatus,
  issuedBy,
  appliesTo,
  coreRequirement,
  gridWitnessCoverage,
  note,
}) => {
  return (
    <div className="card p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-body pr-4">{title}</h3>
        <Badge status={badgeStatus}>{badge}</Badge>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs font-bold uppercase text-muted">Issued By</p>
          <p className="text-sm text-secondary">{issuedBy}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase text-muted">Applies To</p>
          <p className="text-sm text-secondary">{appliesTo}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase text-muted">Core Requirement</p>
          <p className="text-sm text-secondary">{coreRequirement}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase text-muted mb-2">GridWitness Coverage</p>
          <ul className="text-sm text-secondary space-y-1">
            {gridWitnessCoverage.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-teal">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {note && (
          <div className="bg-amber-light/30 border border-amber-600/20 rounded p-3 -mx-1">
            <p className="text-xs text-amber-600 font-medium">{note}</p>
          </div>
        )}
      </div>

      <Link
        to="/contact"
        state={{ framework: title }}
        className="text-teal font-medium text-sm hover:text-teal-hover transition-colors inline-flex items-center gap-1"
      >
        Discuss your obligations →
      </Link>
    </div>
  );
};
