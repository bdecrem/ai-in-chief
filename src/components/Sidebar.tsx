'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChatBubbleLeftIcon, 
  UserCircleIcon, 
  ClockIcon,
  AdjustmentsHorizontalIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Chat', href: '/chat', icon: ChatBubbleLeftIcon },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon },
  { name: 'History', href: '/history', icon: ClockIcon },
  { name: 'CEO Personality', href: '/settings/personality', icon: AdjustmentsHorizontalIcon },
  { name: 'Company Info', href: '/settings/company', icon: BuildingOfficeIcon },
  { name: 'Priorities', href: '/settings/priorities', icon: ChartBarIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-gray-900 border-r border-gray-800">
      <div className="flex-1 flex flex-col overflow-y-auto pt-16 pb-4">
        <nav className="mt-5 flex-1 px-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150
                  ${isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                <item.icon
                  className={`mr-3 h-6 w-6 flex-shrink-0 transition-colors duration-150
                    ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
} 