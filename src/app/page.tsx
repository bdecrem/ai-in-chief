'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Option1 from '@/components/landing/Option1';
import Option2 from '@/components/landing/Option2';
import Option3 from '@/components/landing/Option3';

export default function Home() {
  const [currentOption, setCurrentOption] = useState(1);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentOption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentOption === 1 && <Option1 />}
          {currentOption === 2 && <Option2 />}
          {currentOption === 3 && <Option3 />}
        </motion.div>
      </AnimatePresence>

      {/* Option Switcher */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md 
          rounded-full border border-white/20 shadow-xl">
          {[1, 2, 3].map((option) => (
            <button
              key={option}
              onClick={() => setCurrentOption(option)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${currentOption === option 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 