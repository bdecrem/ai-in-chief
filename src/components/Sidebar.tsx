'use client';

import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  ChatBubbleLeftIcon, 
  UserCircleIcon, 
  ClockIcon,
  AdjustmentsHorizontalIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Chat', href: '/chat', icon: ChatBubbleLeftIcon },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon },
  { name: 'History', href: '/history', icon: ClockIcon },
  { name: 'CEO Personality', href: '/settings/personality', icon: AdjustmentsHorizontalIcon },
  { name: 'Company Info', href: '/settings/company', icon: BuildingOfficeIcon },
  { name: 'Priorities', href: '/settings/priorities', icon: ChartBarIcon },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  // Set initial state based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768); // 768px is the md breakpoint
    };
    
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 z-50 transition-all duration-300 ease-in-out
          ${isOpen ? 'left-64 md:left-72' : 'left-4'}
          w-8 h-8 flex items-center justify-center
          bg-gray-800 hover:bg-gray-700 rounded-lg`}
      >
        {isOpen ? (
          <XMarkIcon className="w-5 h-5 text-gray-300" />
        ) : (
          <Bars3Icon className="w-5 h-5 text-gray-300" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 transition-all duration-300 ease-in-out
          ${isOpen ? 'w-72 translate-x-0' : 'w-72 -translate-x-full'}
          z-40 border-r border-gray-800`}
      >
        <div className="flex flex-col h-full pt-20 pb-6">
          <div className="flex-grow overflow-y-auto px-4">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors
                      ${isActive ? 'bg-gray-800' : ''}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
} 