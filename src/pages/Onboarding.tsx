import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Loader } from 'lucide-react';
import { SEOHelmet } from '../components';

export const Onboarding: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [roleArn, setRoleArn] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [marketplaceToken] = useState(searchParams.get('x-amzn-marketplace-token'));

  useEffect(() => {
    if (!marketplaceToken) {
      setStatus('error');
      setMessage('Error: Missing AWS Marketplace Token. Please initiate registration from your AWS Console.');
    }
  }, [marketplaceToken]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!roleArn.trim()) {
      setStatus('error');
      setMessage('Please enter a valid IAM Role ARN.');
      return;
    }

    if (!marketplaceToken) {
      setStatus('error');
      setMessage('Error: Missing AWS Marketplace Token. Please initiate registration from your AWS Console.');
      return;
    }

    setStatus('loading');
    setMessage('Connecting to GridWitness compliance engine...');

    try {
      const response = await fetch('https://api.nimblestride.ca/api/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          marketplace_token: marketplaceToken,
          role_arn: roleArn,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Success! Your enterprise environment is now linked. You may close this window.');
      } else {
        setStatus('error');
        setMessage(`Registration failed: ${data.error || 'Unknown error'}`);
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Could not reach api.nimblestride.ca.');
    }
  };

  return (
    <>
      <SEOHelmet
        title="GridWitness AWS Marketplace Onboarding"
        description="Complete your GridWitness registration from AWS Marketplace. Provide your AWS IAM Role ARN to enable secure telemetry collection."
        keywords="GridWitness, AWS Marketplace, onboarding, IAM role, AWS registration"
        canonicalUrl="https://nimblestride.ca/onboarding"
        path="/onboarding"
      />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to GridWitness</h2>
          <p className="text-gray-600 text-sm mb-6">
            Please provide the AWS IAM Role ARN that GridWitness should assume to securely extract your environment
            telemetry. This role must have read-only access to CloudWatch.
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="roleArn" className="block text-sm font-semibold text-gray-700 mb-2">
                Cross-Account IAM Role ARN
              </label>
              <input
                type="text"
                id="roleArn"
                placeholder="arn:aws:iam::123456789012:role/GridWitness-Read"
                value={roleArn}
                onChange={(e) => setRoleArn(e.target.value)}
                disabled={status === 'loading'}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              {status === 'loading' && <Loader size={18} className="animate-spin" />}
              {status === 'loading' ? 'Registering...' : 'Complete Registration'}
            </button>
          </form>

          {status !== 'idle' && (
            <div
              className={`mt-6 p-4 rounded-lg flex gap-3 ${
                status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
              )}
              <p className="text-sm font-semibold">{message}</p>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-6 text-center">
            Questions? Contact support at{' '}
            <a href="mailto:support@nimblestride.ca" className="text-teal hover:underline">
              support@nimblestride.ca
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
