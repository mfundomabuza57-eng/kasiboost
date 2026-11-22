'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [supabaseConfigured, setSupabaseConfigured] = useState(false);

  useEffect(() => {
    // Presence check only; this does not establish a network connection.
    setSupabaseConfigured(
      Boolean(
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
          process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
      )
    );
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Kasi Boost</h1>
        <p className="text-gray-600 mb-6">Project starter status</p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800 font-semibold">Starter page only</p>
          <p className="text-amber-700 text-sm mt-2">
            This repository currently contains a status page. Product features and authentication are not implemented here yet.
          </p>
        </div>

        <div className="text-left bg-gray-50 p-3 rounded">
          <p className="text-xs text-gray-500">Supabase configuration</p>
          <p className="text-sm font-mono text-gray-700 break-all">
            {supabaseConfigured ? 'Configuration variables present (not connection-tested)' : 'Configuration missing'}
          </p>
        </div>
      </div>
    </main>
  );
}
