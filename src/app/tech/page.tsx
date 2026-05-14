"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { Terminal, Code, GitMerge, Layout, Database, Server, Star, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechHubPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <div className="flex justify-between items-end">
        <motion.div variants={item}>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Tech & IT Hub</h1>
          <p className="text-white/60">Master your tech stack and track your IT career progression.</p>
        </motion.div>
        <motion.button variants={item} className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg shadow-emerald-500/25">
          <Plus size={18} />
          <span>Add Skill</span>
        </motion.button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { icon: Terminal, label: 'Tech Stack', value: '5', color: 'text-emerald-500', bg: 'bg-emerald-500/20' },
          { icon: Code, label: 'LeetCode Solved', value: '42', color: 'text-amber-500', bg: 'bg-amber-500/20' },
          { icon: GitMerge, label: 'GitHub Commits', value: '128', color: 'text-blue-500', bg: 'bg-blue-500/20' },
          { icon: Star, label: 'Certifications', value: '2', color: 'text-purple-500', bg: 'bg-purple-500/20' },
        ].map((stat, i) => (
          <motion.div key={i} variants={item}>
            <GlassCard interactive glowColor="tech" className="p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={item} className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-heading font-bold text-white">Current Stack Mastery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tech Card 1 */}
            <GlassCard interactive glowColor="secondary" className="p-0 overflow-hidden flex flex-col h-full">
              <div className="h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 relative">
                <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-[#0B101E] border border-white/10 flex items-center justify-center text-cyan-400">
                  <Layout size={24} />
                </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-1">React & Next.js</h3>
                <p className="text-sm text-white/60 mb-4">Frontend Frameworks</p>
                
                <div className="mt-auto space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/40">Mastery Level</span>
                    <span className="text-white font-medium">Advanced (80%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[80%]" />
                  </div>
                  <button className="w-full mt-2 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
                    View Projects
                  </button>
                </div>
              </div>
            </GlassCard>

            {/* Tech Card 2 */}
            <GlassCard interactive glowColor="tech" className="p-0 overflow-hidden flex flex-col h-full">
              <div className="h-24 bg-gradient-to-r from-emerald-500/20 to-green-500/20 relative">
                <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-[#0B101E] border border-white/10 flex items-center justify-center text-emerald-500">
                  <Server size={24} />
                </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-1">Node.js & Express</h3>
                <p className="text-sm text-white/60 mb-4">Backend Technologies</p>
                
                <div className="mt-auto space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/40">Mastery Level</span>
                    <span className="text-white font-medium">Intermediate (60%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[60%]" />
                  </div>
                  <button className="w-full mt-2 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
                    View Projects
                  </button>
                </div>
              </div>
            </GlassCard>
            
            {/* Tech Card 3 */}
            <GlassCard interactive glowColor="none" className="p-0 overflow-hidden flex flex-col h-full">
              <div className="h-24 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 relative">
                <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-[#0B101E] border border-white/10 flex items-center justify-center text-amber-500">
                  <Database size={24} />
                </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-1">PostgreSQL & MongoDB</h3>
                <p className="text-sm text-white/60 mb-4">Database Management</p>
                
                <div className="mt-auto space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/40">Mastery Level</span>
                    <span className="text-white font-medium">Beginner (30%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[30%]" />
                  </div>
                  <button className="w-full mt-2 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
                    Start Learning Path
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        <motion.div variants={item} className="space-y-6">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-heading font-bold text-white">Recent Certifications</h2>
              <button className="text-xs text-emerald-500 hover:text-emerald-400 font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Star size={20} />
                </div>
                <div>
                  <div className="font-medium text-white text-sm">AWS Cloud Practitioner</div>
                  <div className="text-xs text-white/40">Amazon Web Services • Oct 10</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Terminal size={20} />
                </div>
                <div>
                  <div className="font-medium text-white text-sm">Frontend Developer Certificate</div>
                  <div className="text-xs text-white/40">freeCodeCamp • Sep 22</div>
                </div>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <h2 className="text-xl font-heading font-bold text-white mb-2">Build Your Portfolio!</h2>
            <p className="text-sm text-white/60 mb-4">Your tech skills are ready to be shown to the world. Generate a developer portfolio for recruiters.</p>
            <button className="w-full py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-500/25">
              Go to Portfolio
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
