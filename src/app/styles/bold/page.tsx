'use client';

import { motion } from 'framer-motion';
import { CEO_CHARACTERS } from '@/types/ceo';
import Image from 'next/image';
import Link from 'next/link';

export default function BoldStyle() {
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
              href="/styles/magazine"
              className="text-sm text-gray-400 hover:text-white"
            >
              Try Magazine Style →
            </Link>
          </div>
        </div>
      </motion.div>

      {/* CEO Grid */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {CEO_CHARACTERS.map((ceo, index) => (
            <motion.div
              key={ceo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-800 rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
              <div className="relative p-6">
                <div className="flex items-start gap-6">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                    <Image
                      src={ceo.imagePath}
                      alt={ceo.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h2 className="text-2xl font-bold text-white">
                        {ceo.nickname} {ceo.name}
                      </h2>
                    </div>
                    <p className="mt-3 text-gray-300 leading-relaxed">
                      {ceo.leadershipStyle}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ceo.quirks.map((quirk, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-gray-300"
                        >
                          {quirk}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`mt-6 w-full py-3 px-4 rounded-full text-white font-medium
                        bg-${ceo.accentColor} hover:bg-${ceo.accentColor}/90 transition-colors duration-200`}
                    >
                      Choose {ceo.name}
                    </motion.button>
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