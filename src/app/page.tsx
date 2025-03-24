'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CEO_CHARACTERS } from '@/types/ceo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Hero Section with CEO Images */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900 z-10" />
        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8">
          {CEO_CHARACTERS.map((ceo, index) => (
            <div
              key={ceo.id}
              className={`relative rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 ${
                index % 3 === 0 ? 'translate-y-8' : 
                index % 3 === 1 ? 'translate-y-0' : 
                'translate-y-16'
              }`}
            >
              <Image
                src={ceo.imagePath}
                alt={ceo.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              AI In Chief
            </h1>
            <p className="text-xl text-gray-300">
              Your AI CEO, so you can worry about more important stuff
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            <Link
              href="/select-ceo"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Get Started
            </Link>
            
            <div className="text-center text-sm text-gray-400">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 