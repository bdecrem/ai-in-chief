import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CEO_CHARACTERS } from '@/types/ceo';

export default function Option3() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 text-white">
            AI In Chief
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let your AI CEO run the business so you can tend to more important matters
            (that new Netflix show).
          </p>
          <p className="text-xl font-semibold text-white">
            To get started, pick your CEO:
          </p>
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
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={ceo.imagePath}
                  alt={ceo.name}
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 
                    transition-all duration-500"
                />
              </div>
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
              <Link
                href={`/select-ceo?id=${ceo.id}`}
                className="inline-block text-sm font-medium text-blue-400 
                  hover:text-blue-300 transition-colors"
              >
                Choose →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 