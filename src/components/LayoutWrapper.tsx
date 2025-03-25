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
      
      <div className="flex-1 flex flex-col min-h-screen max-w-6xl mx-auto px-8">
        {/* Main content area with padding */}
        <main className="flex-1 overflow-y-auto py-8">
          <div className="bg-gray-800 rounded-xl h-full overflow-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 