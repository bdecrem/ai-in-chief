import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CEO_CHARACTERS } from '@/types/ceo';

export default function Option1() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              AI In Chief
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your business with an AI CEO partner that thinks strategically, 
              adapts instantly, and guides your success 24/7.
            </p>
            <Link
              href="/select-ceo"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 
                rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200
                shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Floating CEO Cards */}
        <div className="relative max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {CEO_CHARACTERS.map((ceo, index) => (
              <motion.div
                key={ceo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative"
              >
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="relative aspect-square rounded-2xl overflow-hidden 
                    bg-gray-800/50 backdrop-blur-sm border border-white/10
                    shadow-xl shadow-black/50 group-hover:border-white/20 
                    transition-all duration-300"
                >
                  <Image
                    src={ceo.imagePath}
                    alt={ceo.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 
                      transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-medium text-white mb-1">
                      {ceo.name}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {ceo.leadershipStyle}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Gradient Circles */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply 
          filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply 
          filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply 
          filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>
    </div>
  );
} 