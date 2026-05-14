"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { useUserStore } from '@/lib/store';
import { Coins, Sparkles, Lock, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ShopPage() {
  const { coins } = useUserStore();

  const avatars = [
    { id: 1, name: 'Cyber Ninja', price: 150, image: '🥷', owned: false },
    { id: 2, name: 'Astro Scholar', price: 200, image: '🧑‍🚀', owned: false },
    { id: 3, name: 'Wizard', price: 300, image: '🧙‍♂️', owned: false },
    { id: 4, name: 'Default', price: 0, image: '👤', owned: true },
  ];

  const themes = [
    { id: 1, name: 'Neon Cyber', price: 500, color: 'from-pink-500 to-purple-600', owned: false },
    { id: 2, name: 'Deep Space', price: 0, color: 'from-indigo-600 to-cyan-500', owned: true },
    { id: 3, name: 'Golden Hour', price: 400, color: 'from-amber-400 to-orange-500', owned: false },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Item Shop</h1>
          <p className="text-white/60">Spend your hard-earned coins on cosmetics.</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-xl border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <Coins size={20} />
          <span className="font-bold font-heading text-lg">{coins} Coins</span>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="text-primary" size={20} /> Avatars
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {avatars.map(item => (
            <GlassCard key={item.id} interactive className="p-4 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-4xl mb-3 border border-white/10">
                {item.image}
              </div>
              <h3 className="font-bold text-white text-sm mb-3">{item.name}</h3>
              
              {item.owned ? (
                <button className="w-full py-2 bg-white/10 text-white/50 rounded-lg text-sm font-medium flex items-center justify-center gap-1 cursor-default">
                  <Check size={14} /> Owned
                </button>
              ) : (
                <button className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-colors">
                  <Coins size={14} /> {item.price}
                </button>
              )}
            </GlassCard>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="text-secondary" size={20} /> Profile Themes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themes.map(theme => (
            <GlassCard key={theme.id} interactive className="p-0 overflow-hidden">
              <div className={`h-24 bg-gradient-to-r ${theme.color} opacity-80`} />
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-bold text-white">{theme.name}</h3>
                {theme.owned ? (
                  <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded">Owned</span>
                ) : (
                  <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-amber-400 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
                    <Coins size={14} /> {theme.price}
                  </button>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
