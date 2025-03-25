import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CEO_CHARACTERS } from '@/types/ceo';

export default function Option3() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center"
          >
            <h1 className="text-2xl font-medium tracking-tight">
              AI In Chief
            </h1>
            <Link
              href="/select-ceo"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Get Started →
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
              Your strategic partner in{' '}
              <span className="italic">leadership</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Experience the future of business leadership with an AI CEO that brings
              strategic vision and unwavering dedication to your company.
            </p>
            <Link
              href="/select-ceo"
              className="inline-flex items-center px-8 py-3 text-lg bg-black 
                text-white rounded-full hover:bg-gray-900 transition-colors duration-200"
            >
              Begin Your Journey
            </Link>
          </motion.div>

          {/* CEO Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {CEO_CHARACTERS.map((ceo, index) => (
              <motion.div
                key={ceo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] mb-6 overflow-hidden">
                  <Image
                    src={ceo.imagePath}
                    alt={ceo.name}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 
                      transition-all duration-500"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">
                  {ceo.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {ceo.leadershipStyle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ceo.quirks.slice(0, 2).map((quirk, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                    >
                      {quirk}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 inset-x-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center text-sm text-gray-500"
          >
            <p>Transform your business today</p>
            <p>AI In Chief © 2024</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
} 