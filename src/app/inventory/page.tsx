"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { PackageOpen, Sparkles, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState<'avatars' | 'themes'>('avatars');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Inventory</h1>
          <p className="text-white/60">Equip your purchased cosmetics and rewards.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-1 flex">
          <button 
            onClick={() => setActiveTab('avatars')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'avatars' ? 'bg-primary text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
          >
            Avatars
          </button>
          <button 
            onClick={() => setActiveTab('themes')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'themes' ? 'bg-secondary text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
          >
            Themes
          </button>
        </div>
      </div>

      {activeTab === 'avatars' ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <GlassCard interactive glowColor="primary" className="p-4 flex flex-col items-center text-center border-primary/50 relative">
            <div className="absolute top-2 right-2 text-primary">
              <CheckCircle size={16} />
            </div>
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-4xl mb-3 border border-white/10 shadow-lg shadow-primary/20">
              👤
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Default</h3>
            <p className="text-xs text-primary font-medium">Equipped</p>
          </GlassCard>
          
          <GlassCard className="p-4 flex flex-col items-center justify-center text-center border-dashed border-white/20 bg-transparent opacity-50">
            <PackageOpen size={32} className="text-white/40 mb-2" />
            <p className="text-sm text-white/40 font-medium">Empty Slot</p>
            <p className="text-xs text-white/30 mt-1">Buy more in Shop</p>
          </GlassCard>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard interactive glowColor="secondary" className="p-0 overflow-hidden relative border-secondary/50 shadow-lg shadow-secondary/20">
            <div className="absolute top-2 right-2 text-white z-10 bg-black/20 rounded-full p-0.5 backdrop-blur-md">
              <CheckCircle size={16} />
            </div>
            <div className={`h-24 bg-gradient-to-r from-indigo-600 to-cyan-500 opacity-100`} />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white">Deep Space</h3>
                <p className="text-xs text-secondary font-medium">Equipped</p>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
