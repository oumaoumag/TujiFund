import { BarChart3, Users, Wallet } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuthStore } from '../../store/auth';
import { Link } from 'react-router-dom';

const memberNavItems = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Contributions', href: '/member_dash_comp/contribution-list', icon: Wallet },
  { name: 'Contribution Form', href: '/member_dash_comp/contribution-form', icon: Wallet },
  { name: 'Member List', href: '/member_dash_comp/member-list', icon: Users },
  { name: 'Member Profile', href: '/member_dash_comp/member-profile', icon: Users },
  { name: 'Dividend Distribution', href: '/dividends/distribution', icon: Wallet },
];

const adminNavItems = [
  ...memberNavItems,
  { name: 'Members', href: '/members', icon: Users },
];

export function Sidebar() {
  const { user } = useAuthStore();
  const navItems = user?.role === 'member' ? memberNavItems : adminNavItems;

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <nav className="flex flex-1 flex-col pt-8">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                        'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}