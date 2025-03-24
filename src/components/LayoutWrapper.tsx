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
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
} 