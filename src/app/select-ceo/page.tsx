import { CEO_CHARACTERS } from '@/types/ceo';
import Link from 'next/link';
import Image from 'next/image';

export default function SelectCEO() {
  return (
    <div className="min-h-screen bg-gray-900 p-4 flex flex-col">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to AI In Chief!</h1>
          <p className="text-xl text-gray-300 mb-2">Let's get started!</p>
          <p className="text-gray-400">Select the AI CEO that best matches your business needs</p>
        </div>

        <div className="space-y-4 flex-1">
          {CEO_CHARACTERS.map((ceo) => (
            <Link
              key={ceo.id}
              href={`/chat?ceo=${ceo.id}`}
              className="block bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="grid grid-cols-[auto,1fr,auto] gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden ring-1 ring-white/10">
                  <Image
                    src={ceo.imagePath}
                    alt={ceo.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold text-white">{ceo.name}</h2>
                  <p className="text-sm text-gray-400 mt-1">{ceo.leadershipStyle}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
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
                
                <button className="self-start px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Choose
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 