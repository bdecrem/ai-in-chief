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
      {showSidebar && <Sidebar />}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top padding area for toggle button */}
        <div className="h-16" />
        {/* Main content area with padding */}
        <main className="flex-1 overflow-y-auto px-6 pb-6">
          {children}
        </main>
      </div>
    </div>
  );
} 