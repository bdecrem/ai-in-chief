'use client';

import { motion } from 'framer-motion';
import { CEO_CHARACTERS } from '@/types/ceo';
import Image from 'next/image';
import Link from 'next/link';

export default function MagazineStyle() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI In Chief</h1>
              <p className="text-sm text-gray-600 mt-1">
                Choose your CEO persona to guide your business decisions
              </p>
            </div>
            <Link 
              href="/styles/minimalist"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Try Minimalist Style →
            </Link>
          </div>
        </div>
      </motion.div>

      {/* CEO Grid */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {CEO_CHARACTERS.map((ceo, index) => (
            <motion.div
              key={ceo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-48 md:h-full">
                  <Image
                    src={ceo.imagePath}
                    alt={ceo.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {ceo.nickname} {ceo.name}
                    </h2>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {ceo.leadershipStyle}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {ceo.quirks.map((quirk, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-50 text-gray-700"
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
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 