import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChatBubbleLeftIcon, 
  UserCircleIcon, 
  ClockIcon,
  AdjustmentsHorizontalIcon,
  BuildingOfficeIcon,
  ChartBarIcon
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
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-800 bg-gray-900">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <h1 className="text-xl font-bold text-white">AI In Chief</h1>
          </div>
          <nav className="mt-5 flex-1 space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-6 w-6 flex-shrink-0 ${
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
} 