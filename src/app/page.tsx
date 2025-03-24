'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">AI In Chief</h1>
          <p className="mt-2 text-gray-600">
            Choose your preferred design style to view the CEO selection screen
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/styles/minimalist"
            className="block w-full p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200"
          >
            <h2 className="text-lg font-semibold text-gray-900">Minimalist Style</h2>
            <p className="mt-1 text-sm text-gray-600">
              Clean, compact layout with small circular avatars and subtle borders
            </p>
          </Link>

          <Link 
            href="/styles/bold"
            className="block w-full p-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors duration-200"
          >
            <h2 className="text-lg font-semibold">Bold Style</h2>
            <p className="mt-1 text-sm text-gray-400">
              Dark theme with large square avatars and dramatic visual effects
            </p>
          </Link>

          <Link 
            href="/styles/magazine"
            className="block w-full p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200"
          >
            <h2 className="text-lg font-semibold text-gray-900">Magazine Style</h2>
            <p className="mt-1 text-sm text-gray-600">
              Split layout with large images and magazine-like presentation
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
} 