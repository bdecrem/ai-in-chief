'use client';

import { useSearchParams } from 'next/navigation';
import { CEO_CHARACTERS } from '@/types/ceo';
import { useState, Suspense } from 'react';

function ChatContent() {
  const searchParams = useSearchParams();
  const ceoId = searchParams.get('ceo');
  const ceo = CEO_CHARACTERS.find(c => c.id === ceoId);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I'm ${ceo?.name}, your AI CEO. I'm here to help guide your business decisions. What's your name?`
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev,
      { role: 'user', content: input },
      { role: 'assistant', content: 'I understand. Could you tell me more about your company?' }
    ]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-100'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Chat() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white">Loading chat...</div>
      </div>
    }>
      <ChatContent />
    </Suspense>
  );
} 