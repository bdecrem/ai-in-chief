'use client';

import { useSearchParams } from 'next/navigation';
import Chat from '@/components/Chat';
import Sidebar from '@/components/Sidebar';

export default function ChatPage() {
  const searchParams = useSearchParams();
  const selectedCeoId = searchParams.get('ceo');

  return (
    <div className="h-screen bg-gray-900 text-white">
      <Sidebar />
      
      {/* Main content - adjusts based on sidebar state */}
      <main className="h-full md:pl-72">
        <div className="h-full max-w-5xl mx-auto px-4">
          <Chat selectedCeoId={selectedCeoId} />
        </div>
      </main>
    </div>
  );
} 