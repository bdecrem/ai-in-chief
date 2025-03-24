import { CEO_CHARACTERS } from '@/types/ceo';
import Link from 'next/link';
import Image from 'next/image';

export default function SelectCEO() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to AI In Chief!</h1>
          <p className="text-xl text-gray-300 mb-2">Let's get started!</p>
          <p className="text-gray-400">Select the AI CEO that best matches your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CEO_CHARACTERS.map((ceo) => (
            <Link
              key={ceo.id}
              href={`/chat?ceo=${ceo.id}`}
              className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Profile Picture */}
                <div className="relative w-32 h-32 rounded-xl overflow-hidden ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-200">
                  <Image
                    src={ceo.imagePath}
                    alt={ceo.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CEO Info */}
                <div className="text-center flex-1">
                  <h2 className="text-xl font-semibold text-white mb-2">{ceo.name}</h2>
                  <p className="text-gray-400 mb-4">{ceo.leadershipStyle}</p>
                  
                  {/* Quirks */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {ceo.quirks.map((quirk) => (
                      <span
                        key={quirk}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gray-700 text-gray-300"
                      >
                        {quirk}
                      </span>
                    ))}
                  </div>

                  {/* Choose Button */}
                  <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium 
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    transition-all duration-200 group-hover:shadow-lg">
                    Choose {ceo.name}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 