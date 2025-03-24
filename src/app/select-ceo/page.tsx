import { CEO_CHARACTERS } from '@/types/ceo';
import Link from 'next/link';
import Image from 'next/image';

export default function SelectCEO() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to AI In Chief!</h1>
          <p className="text-xl text-gray-300 mb-2">Let's get started!</p>
          <p className="text-gray-400">Select the AI CEO that best matches your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CEO_CHARACTERS.map((ceo) => (
            <div
              key={ceo.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors duration-200"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={ceo.imagePath}
                  alt={ceo.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">{ceo.name}</h2>
                  <Link
                    href={`/chat?ceo=${ceo.id}`}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Choose
                  </Link>
                </div>
                
                <p className="text-gray-400 mb-4">{ceo.leadershipStyle}</p>
                
                <div className="flex flex-wrap gap-2">
                  {ceo.quirks.map((quirk) => (
                    <span
                      key={quirk}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300"
                    >
                      {quirk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 