'use client';

import { useSearchParams } from 'next/navigation';
import { CEO_CHARACTERS } from '@/types/ceo';
import { useState, useEffect, Suspense } from 'react';
import { useOnboarding } from '@/hooks/useOnboarding';

function ChatContent() {
  const searchParams = useSearchParams();
  const ceoId = searchParams.get('ceo');
  const ceo = CEO_CHARACTERS.find(c => c.id === ceoId);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [input, setInput] = useState('');
  const { state, handleUserResponse, getCurrentQuestion, isComplete } = useOnboarding(ceo?.name || '');

  // Only set initial message once when component mounts
  useEffect(() => {
    if (messages.length === 0 && ceo) {
      const initialQuestion = getCurrentQuestion();
      if (initialQuestion) {
        setMessages([{ role: 'assistant', content: initialQuestion }]);
      }
    }
  }, [ceo, messages.length, getCurrentQuestion]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Handle the response and get next question
    await handleUserResponse(userMessage);
    
    // Add AI response after a short delay
    setTimeout(() => {
      const nextQuestion = getCurrentQuestion();
      if (nextQuestion) {
        setMessages(prev => [...prev, { role: 'assistant', content: nextQuestion }]);
      }
    }, 500);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 border-t border-gray-700">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
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