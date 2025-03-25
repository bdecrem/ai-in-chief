'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChatBubbleLeftIcon, 
  UserCircleIcon, 
  ClockIcon,
  AdjustmentsHorizontalIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Chat', href: '/chat', icon: ChatBubbleLeftIcon },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon },
  { name: 'History', href: '/history', icon: ClockIcon },
  { name: 'CEO Personality', href: '/settings/personality', icon: AdjustmentsHorizontalIcon },
  { name: 'Company Info', href: '/settings/company', icon: BuildingOfficeIcon },
  { name: 'Priorities', href: '/settings/priorities', icon: ChartBarIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setIsOpen(!isMobileView); // Open by default on desktop, closed on mobile
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Toggle Button - Fixed position */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 left-4 z-50 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-all duration-300"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
          <div className={`h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'w-4' : 'w-6'
          }`} />
          <div className={`h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'w-6' : 'w-4'
          }`} />
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-16 z-40 w-64 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col border-r border-gray-800 bg-gray-900">
          <div className="flex flex-1 flex-col overflow-y-auto pt-8 pb-4">
            <nav className="mt-5 flex-1 space-y-1 px-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <item.icon
                      className={`mr-3 h-6 w-6 flex-shrink-0 ${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
} 