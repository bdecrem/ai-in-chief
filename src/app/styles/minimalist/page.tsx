'use client';

import { motion } from 'framer-motion';
import { CEO_CHARACTERS } from '@/types/ceo';
import Image from 'next/image';
import Link from 'next/link';

export default function MinimalistStyle() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-10 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">AI In Chief</h1>
              <p className="text-sm text-gray-400 mt-1">
                Choose your CEO persona to guide your business decisions
              </p>
            </div>
            <Link 
              href="/styles/bold"
              className="text-sm text-gray-400 hover:text-white"
            >
              Try Bold Style →
            </Link>
          </div>
        </div>
      </motion.div>

      {/* CEO Grid */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {CEO_CHARACTERS.map((ceo, index) => (
            <motion.div
              key={ceo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="p-4">
                <div className="grid grid-cols-[auto_1fr_auto] gap-4">
                  {/* Profile Picture */}
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                    <Image
                      src={ceo.imagePath}
                      alt={ceo.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Main Content */}
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <h2 className="text-lg font-semibold text-white truncate">
                        {ceo.nickname} {ceo.name}
                      </h2>
                    </div>
                    <p className="mt-1 text-sm text-gray-300 line-clamp-2">
                      {ceo.leadershipStyle}
                    </p>
                  </div>

                  {/* Choose Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-white text-sm font-medium self-start
                      bg-${ceo.accentColor} hover:bg-${ceo.accentColor}/90 transition-colors duration-200`}
                  >
                    Choose
                  </motion.button>

                  {/* Quirk Pills - Full Width */}
                  <div className="col-span-3 mt-3 flex flex-wrap gap-1.5">
                    {ceo.quirks.map((quirk, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300 border border-gray-600"
                      >
                        {quirk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 