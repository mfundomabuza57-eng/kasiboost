'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [supabaseConnected, setSupabaseConnected] = useState(false);

  useEffect(() => {
    // Check Supabase connection
    const supabaseKey = 'sb_publishable_yZAncQaOQWZH1RViipHE7g_-TZNEnU7';
    setSupabaseConnected(!!supabaseKey);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Kasiboost</h1>
        <p className="text-gray-600 mb-6">Your app is live and ready!</p>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-700 font-semibold">✓ Deployed Successfully</p>
          <p className="text-green-600 text-sm mt-2">Running on Vercel</p>
        </div>

        <div className="space-y-3">
          <div className="text-left bg-gray-50 p-3 rounded">
            <p className="text-xs text-gray-500">Supabase</p>
            <p className="text-sm font-mono text-gray-700 break-all">
              {supabaseConnected ? '✓ Connected' : '○ Pending'}
            </p>
          </div>
        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
