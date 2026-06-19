import React, { useState } from 'react';
import { CheckCircle2, Loader } from 'lucide-react';
import { SEOHelmet } from '../components';

export const Portal: React.FC = () => {
  const [clientId, setClientId] = useState('');
  const [roleArn, setRoleArn] = useState('');
  const [instanceType, setInstanceType] = useState('default');
  const [duration, setDuration] = useState(1.0);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ efficiency_ratio: string; s3_url: string } | null>(null);

  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    const payload = {
      client_id: clientId,
      role_arn: roleArn,
      instance_type: instanceType,
      duration_hours: duration,
    };

    try {
      const response = await fetch('https://api.nimblestride.ca/api/v1/attest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.attestation) {
        const s3Url = data.attestation.s3_location.replace(
          's3://saas-worm-logs-313096473797/',
          'https://saas-worm-logs-313096473797.s3.ca-central-1.amazonaws.com/'
        );

        setResult({
          efficiency_ratio: data.attestation.efficiency_ratio,
          s3_url: s3Url,
        });
      } else {
        alert('Error: Unable to complete audit. Please check your inputs.');
      }
    } catch {
      alert('Error connecting to GridWitness API.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEOHelmet
        title="GridWitness Portal | Compliance Dashboard"
        description="Generate OSFI B-15 audits and certify workload efficiency. Access your compliance reports and vault receipts."
        keywords="OSFI B-15, compliance, audit, workload certification, efficiency rating, portal"
        canonicalUrl="https://nimblestride.ca/portal"
        path="/portal"
      />

      <div className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Generate OSFI B-15 Audit</h2>

          <form onSubmit={handleRunAudit} className="space-y-4">
            <div>
              <label htmlFor="clientId" className="block font-bold text-gray-700 mb-1">
                Client ID
              </label>
              <input
                type="text"
                id="clientId"
                placeholder="e.g., Suncor-Energy-001"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                disabled={isLoading}
                className="w-full px-2.5 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />
            </div>

            <div>
              <label htmlFor="roleArn" className="block font-bold text-gray-700 mb-1">
                Cross-Account IAM Role ARN
              </label>
              <input
                type="text"
                id="roleArn"
                placeholder="arn:aws:iam::..."
                value={roleArn}
                onChange={(e) => setRoleArn(e.target.value)}
                disabled={isLoading}
                className="w-full px-2.5 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />
            </div>

            <div>
              <label htmlFor="instanceType" className="block font-bold text-gray-700 mb-1">
                Hardware Profile
              </label>
              <select
                id="instanceType"
                value={instanceType}
                onChange={(e) => setInstanceType(e.target.value)}
                disabled={isLoading}
                className="w-full px-2.5 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="default">Standard CPU Cluster (350W)</option>
                <option value="g4dn.xlarge">NVIDIA T4 GPU (250W)</option>
                <option value="p4d.24xlarge">8x NVIDIA A100 GPU (3200W)</option>
              </select>
            </div>

            <div>
              <label htmlFor="duration" className="block font-bold text-gray-700 mb-1">
                Workload Duration (Hours)
              </label>
              <input
                type="number"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(parseFloat(e.target.value))}
                step="0.5"
                disabled={isLoading}
                className="w-full px-2.5 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 hover:bg-slate-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2 mt-5"
            >
              {isLoading && <Loader size={18} className="animate-spin" />}
              {isLoading ? 'Extracting Telemetry...' : 'Certify Workload'}
            </button>
          </form>

          {result && (
            <div className="mt-5 p-4 bg-green-50 border border-green-400 rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                <strong className="text-green-900">Audit Complete!</strong>
              </div>
              <p className="text-green-800 text-sm mb-2">
                Efficiency: <span className="font-semibold">{result.efficiency_ratio}</span> Tokens/kWh
              </p>
              <a
                href={result.s3_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-bold hover:underline text-sm inline-block mt-2"
              >
                View Vault Receipt
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
