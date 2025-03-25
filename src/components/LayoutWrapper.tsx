'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Don't show sidebar on landing page or CEO selection
  const showSidebar = !['/', '/select-ceo'].includes(pathname);

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Fixed-width space for toggle button */}
      <div className="w-16 flex-shrink-0" />
      
      {showSidebar && <Sidebar />}
      
      {/* Main content area with padding */}
      <div className="flex-1 flex justify-center px-6">
        <div className="w-full max-w-3xl flex flex-col min-h-screen py-8">
          <main className="flex-1">
            <div className="bg-gray-800 rounded-xl h-full overflow-hidden">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 