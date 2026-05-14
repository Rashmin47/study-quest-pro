"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { useUserStore } from '@/lib/store';
import { Settings, Edit3, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfilePage() {
  const { username, level, xp, rank, coins } = useUserStore();

  const progress = (xp % 1000) / 10;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="relative mb-20">
        <div className="h-48 bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20" />
          {/* Header patterns */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        </div>
        
        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
          <div className="w-32 h-32 rounded-2xl bg-[#070B14] p-2 border-4 border-[#070B14] shadow-xl">
            <div className="w-full h-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-6xl">
              👤
            </div>
          </div>
          <div className="pb-2">
            <h1 className="text-3xl font-heading font-bold text-white mb-1 flex items-center gap-3">
              {username} 
              <button className="text-white/40 hover:text-white transition-colors">
                <Edit3 size={18} />
              </button>
            </h1>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-primary font-bold">{rank}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60">Joined Oct 2023</span>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Share2 size={18} />
          </button>
          <button className="w-10 h-10 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Settings size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">Level Progress</h3>
            <div className="flex justify-between items-end mb-2">
              <span className="text-2xl font-heading font-bold text-white">Lvl {level}</span>
              <span className="text-sm text-white/60">{xp % 1000} / 1000 XP</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-xs text-white/40 text-center">
              {1000 - (xp % 1000)} XP until {level + 1}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">Stats Overview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-white/60 text-sm">Quests Completed</span>
                <span className="text-white font-medium">142</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-white/60 text-sm">Study Hours</span>
                <span className="text-white font-medium">84.5h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Total Coins Earned</span>
                <span className="text-amber-400 font-medium font-heading flex items-center gap-1">
                  {coins + 1500}
                </span>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="md:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-heading font-bold text-white mb-6">Recent Activity</h3>
            <div className="relative border-l-2 border-white/10 ml-3 space-y-8 pb-4">
              {[
                { title: 'Reached Level 5', time: '2 hours ago', icon: '🏆', color: 'bg-primary' },
                { title: 'Completed "Physics Midterm Prep"', time: 'Yesterday', icon: '📚', color: 'bg-secondary' },
                { title: 'Joined Varsity Basketball', time: '3 days ago', icon: '🏀', color: 'bg-amber-500' },
                { title: 'Purchased "Neon Cyber" Theme', time: '1 week ago', icon: '🛒', color: 'bg-purple-500' },
              ].map((act, i) => (
                <div key={i} className="relative pl-8">
                  <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full ${act.color} flex items-center justify-center text-sm shadow-lg`}>
                    {act.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{act.title}</h4>
                    <p className="text-xs text-white/40 mt-1">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
