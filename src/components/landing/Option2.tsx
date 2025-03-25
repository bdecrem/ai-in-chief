import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CEO_CHARACTERS } from '@/types/ceo';
import { useState, useEffect } from 'react';

export default function Option2() {
  const [currentCEO, setCurrentCEO] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCEO((prev) => (prev + 1) % CEO_CHARACTERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex-1 flex items-center justify-center lg:justify-end 
            bg-gradient-to-b from-gray-900 to-black lg:bg-transparent
            px-8 py-16 lg:py-0 lg:pr-16"
        >
          <div className="max-w-xl lg:max-w-md">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              AI In Chief
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Experience the future of leadership with an AI CEO that brings strategic vision,
              instant adaptability, and 24/7 dedication to your business.
            </p>
            <Link
              href="/select-ceo"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-black 
                bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 
                focus:ring-white focus:ring-offset-2 focus:ring-offset-black 
                transition-all duration-200 shadow-xl shadow-white/10"
            >
              Meet Your CEO
            </Link>
          </div>
        </motion.div>

        {/* Right Panel */}
        <div className="relative flex-1 lg:flex hidden">
          {CEO_CHARACTERS.map((ceo, index) => (
            <motion.div
              key={ceo.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentCEO === index ? 1 : 0,
                scale: currentCEO === index ? 1 : 1.1,
              }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
              style={{ display: currentCEO === index ? 'block' : 'none' }}
            >
              <Image
                src={ceo.imagePath}
                alt={ceo.name}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
              
              {/* CEO Info Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 p-8 max-w-lg"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  {ceo.name}
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  {ceo.leadershipStyle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ceo.quirks.map((quirk, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm text-white bg-white/10 
                        rounded-full backdrop-blur-sm"
                    >
                      {quirk}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CEO Preview */}
        <div className="lg:hidden relative h-64 overflow-hidden">
          {CEO_CHARACTERS.map((ceo, index) => (
            <motion.div
              key={ceo.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentCEO === index ? 1 : 0,
                scale: currentCEO === index ? 1 : 1.1,
              }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
              style={{ display: currentCEO === index ? 'block' : 'none' }}
            >
              <Image
                src={ceo.imagePath}
                alt={ceo.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {CEO_CHARACTERS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCEO(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                ${currentCEO === index ? 'bg-white w-4' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 