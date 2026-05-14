import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Home, Trophy, Store, Backpack, User, Settings, 
  BookOpen, Calendar, LineChart, Target, Bell, Users, Terminal, Code, GitBranch
} from 'lucide-react';
import { useUserStore } from '@/lib/store';

const navItems = [
  { group: 'Academic', items: [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Study Room', href: '/study-room', icon: Target },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'Timetable', href: '/timetable', icon: Calendar },
    { name: 'Grades', href: '/grades', icon: LineChart },
    { name: 'Challenges', href: '/challenges', icon: Trophy },
  ]},
  { group: 'IT Career', items: [
    { name: 'Tech Hub', href: '/tech', icon: Terminal },
    { name: 'Projects Roadmap', href: '/tech/roadmap', icon: GitBranch },
    { name: 'Portfolio', href: '/tech/portfolio', icon: Code },
  ]},
  { group: 'Personal', items: [
    { name: 'Inventory', href: '/inventory', icon: Backpack },
    { name: 'Shop', href: '/shop', icon: Store },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Notices', href: '/notices', icon: Bell },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]}
];

export function Sidebar() {
  const pathname = usePathname();
  const { username, level, xp, rank } = useUserStore();

  return (
    <aside className="w-64 h-full bg-[#0B101E]/80 backdrop-blur-xl border-r border-white/5 flex flex-col flex-shrink-0">
      <div className="p-6 border-b border-white/5 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-secondary p-1 mb-3">
          <div className="w-full h-full bg-[#070B14] rounded-full flex items-center justify-center relative overflow-hidden">
             {/* Using a placeholder for avatar until implemented properly */}
            <div className="text-2xl">👤</div>
          </div>
        </div>
        <h2 className="font-heading font-bold text-lg text-white">{username}</h2>
        <div className="flex items-center gap-2 mt-1 text-sm text-white/60">
          <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">Lvl {level}</span>
          <span>{rank}</span>
        </div>
        <div className="w-full mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${(xp % 1000) / 10}%` }} />
        </div>
        <div className="text-xs text-white/40 mt-1 text-center w-full">{xp % 1000} / 1000 XP</div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        {navItems.map((group, idx) => (
          <div key={idx} className="mb-6 px-4">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2 px-2">
              {group.group}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive 
                          ? "bg-primary/10 text-primary" 
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      )}>
                        <Icon size={18} className={cn(isActive ? "text-primary" : "text-white/40")} />
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
