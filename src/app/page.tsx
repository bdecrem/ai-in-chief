'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CEO_CHARACTERS } from '@/types/ceo';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* CEO Images Grid */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-3 h-full">
          {CEO_CHARACTERS.map((ceo, index) => (
            <div
              key={ceo.id}
              className={`relative w-full h-full transform transition-transform duration-500 hover:scale-105 ${
                index % 3 === 0 ? 'translate-y-8' : 
                index % 3 === 1 ? 'translate-y-0' : 
                'translate-y-16'
              }`}
            >
              <Image
                src={ceo.imagePath}
                alt={ceo.name}
                fill
                className="object-cover brightness-50"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/80 to-gray-900/90" />

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 [text-shadow:_0_1px_12px_rgb(0_0_0_/_40%)]">
              AI In Chief
            </h1>
            <p className="text-2xl text-gray-100 [text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)]">
              Your AI CEO, so you can worry about more important stuff
            </p>
          </div>
          
          <div className="mt-12">
            <Link
              href="/select-ceo"
              className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-blue-600/90 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 backdrop-blur-sm hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 