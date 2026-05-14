import { Bell, Coins, Search } from 'lucide-react';
import { useUserStore } from '@/lib/store';

export function TopBar() {
  const { coins } = useUserStore();

  return (
    <header className="h-16 bg-[#0B101E]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input 
            type="text" 
            placeholder="Search resources, users, or challenges..." 
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-full border border-amber-500/20">
          <Coins size={16} />
          <span className="font-bold font-heading">{coins}</span>
        </div>
        
        <button className="relative text-white/60 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </button>
      </div>
    </header>
  );
}
