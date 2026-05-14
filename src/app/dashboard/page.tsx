"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { useUserStore } from '@/lib/store';
import { Flame, Target, Trophy, Clock, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { username, level, xp, rank, coins } = useUserStore();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={item}>
        <h1 className="text-3xl font-heading font-bold text-white mb-2">Welcome back, {username}!</h1>
        <p className="text-white/60">Ready to conquer your daily quests?</p>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={item}>
          <GlassCard interactive glowColor="primary" className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Trophy size={24} />
            </div>
            <div>
              <div className="text-sm text-white/60 mb-1">Current Level</div>
              <div className="text-2xl font-bold text-white">{level} <span className="text-sm font-normal text-white/40">({rank})</span></div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard interactive glowColor="secondary" className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
              <Clock size={24} />
            </div>
            <div>
              <div className="text-sm text-white/60 mb-1">Study Time</div>
              <div className="text-2xl font-bold text-white">4.5 <span className="text-sm font-normal text-white/40">hrs</span></div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard interactive glowColor="tech" className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
              <Code2 size={24} />
            </div>
            <div>
              <div className="text-sm text-white/60 mb-1">Coding Streak</div>
              <div className="text-2xl font-bold text-white">7 <span className="text-sm font-normal text-white/40">days</span></div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard interactive glowColor="none" className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
              <Target size={24} />
            </div>
            <div>
              <div className="text-sm text-white/60 mb-1">Daily Quests</div>
              <div className="text-2xl font-bold text-white">2/5 <span className="text-sm font-normal text-white/40">done</span></div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <motion.div variants={item} className="lg:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-heading font-bold text-white mb-4">Daily Challenges</h2>
            <div className="space-y-3">
              {[
                { title: 'Read Chapter 4 of Data Structures', xp: 50, coins: 10, done: true },
                { title: 'Complete Math Assignment', xp: 100, coins: 25, done: true },
                { title: 'Solve 2 LeetCode problems', xp: 50, coins: 15, done: false },
                { title: 'React.js Project Session (2 hours)', xp: 150, coins: 30, done: false },
              ].map((quest, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${quest.done ? 'bg-white/5 border-white/5' : 'bg-white/10 border-white/10'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${quest.done ? 'bg-primary border-primary' : 'border-white/30'}`}>
                      {quest.done && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className={`font-medium ${quest.done ? 'text-white/50 line-through' : 'text-white'}`}>{quest.title}</span>
                  </div>
                  <div className="flex gap-2 text-sm font-bold">
                    <span className="text-primary">+{quest.xp} XP</span>
                    <span className="text-amber-400">+{quest.coins} 🪙</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Sidebar Area */}
        <motion.div variants={item} className="space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-heading font-bold text-white mb-4">Tech Radar</h2>
            <div className="space-y-4">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <div className="text-xs text-emerald-500 font-bold mb-1">IN PROGRESS</div>
                <div className="font-medium text-white">Next.js 14 Portfolio Build</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-xs text-white/40 font-bold mb-1">NEXT GOAL</div>
                <div className="font-medium text-white">Docker Certification Prep</div>
              </div>
            </div>
            <button className="w-full mt-4 py-2 text-sm text-primary hover:text-primary-hover font-medium transition-colors">
              View Roadmap →
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
