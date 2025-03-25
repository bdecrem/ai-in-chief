'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Don't show sidebar on landing page or CEO selection
  const showSidebar = !['/', '/select-ceo'].includes(pathname);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setIsSidebarOpen(!isMobileView); // Open by default on desktop, closed on mobile
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900">
      {showSidebar && (
        <>
          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`fixed top-4 z-50 p-2 rounded-md bg-gray-800 hover:bg-gray-700 
              transition-all duration-300 ease-in-out
              ${isMobile ? 'left-4' : isSidebarOpen ? 'left-[256px]' : 'left-4'}
              ${isMobile && isSidebarOpen ? 'translate-x-[200px]' : 'translate-x-0'}`}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <div className={`h-0.5 bg-white transition-all duration-300 ${
                isSidebarOpen ? 'w-4' : 'w-6'
              }`} />
              <div className={`h-0.5 bg-white transition-all duration-300 ${
                isSidebarOpen ? 'w-6' : 'w-4'
              }`} />
            </div>
          </button>

          {/* Sidebar */}
          <div className={`fixed inset-y-0 left-0 z-40 w-64 transform 
            transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <Sidebar />
          </div>

          {/* Mobile Overlay */}
          {isMobile && isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </>
      )}
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out
        ${showSidebar ? (isSidebarOpen && !isMobile ? 'ml-64' : 'ml-0') : 'ml-0'}`}
      >
        <div className="flex-1 flex justify-center px-4 md:px-6 lg:px-8">
          <div className="w-full max-w-3xl py-8">
            <div className="bg-gray-800 rounded-xl h-full overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 