import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CEO_CHARACTERS } from '@/types/ceo';

export default function Option3() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-16 pb-24"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 text-white">
          AI In Chief
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Our AI CEO runs the business so you can watch Netflix.
        </p>
        <p className="text-xl font-semibold text-white">
          To get started, pick your CEO:
        </p>
      </motion.div>

      {/* CEO Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {CEO_CHARACTERS.map((ceo, index) => (
          <motion.div
            key={ceo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-gray-900 flex flex-col px-4 md:px-8"
          >
            <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-lg">
              <Image
                src={ceo.imagePath}
                alt={ceo.name}
                fill
                className="object-cover brightness-90 group-hover:brightness-100 
                  transition-all duration-500"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-2 text-white">
                {ceo.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {ceo.leadershipStyle}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {ceo.quirks.map((quirk, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                  >
                    {quirk}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href={`/chat?ceo=${ceo.id}`}
              className="inline-block text-sm font-medium text-blue-400 
                hover:text-blue-300 transition-colors"
            >
              Choose →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 