"use client";

import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Terminal, Code, GitMerge, Layout, Database, Server, Star, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TechHubPage() {
  const [skills, setSkills] = useState<any[]>([]);
  const [certifications, setCertifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Skill Form State
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState('frontend');
  const [newSkillMastery, setNewSkillMastery] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const [skillsRes, certsRes] = await Promise.all([
          fetch('/api/tech/skills'),
          fetch('/api/tech/certifications')
        ]);
        if (skillsRes.ok) setSkills(await skillsRes.json());
        if (certsRes.ok) setCertifications(await certsRes.json());
      } catch (err) {
        console.error("Failed to fetch data", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleAddSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/tech/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newSkillName,
          category: newSkillCategory,
          masteryPercentage: newSkillMastery,
        })
      });
      if (res.ok) {
        const addedSkill = await res.json();
        setSkills([...skills, addedSkill]);
        setIsModalOpen(false);
        setNewSkillName('');
        setNewSkillMastery(0);
      }
    } catch (err) {
      console.error("Failed to add skill", err);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        <div className="flex justify-between items-end">
          <motion.div variants={item}>
            <h1 className="text-3xl font-heading font-bold text-white mb-2">Tech & IT Hub</h1>
            <p className="text-white/60">Master your tech stack and track your IT career progression.</p>
          </motion.div>
          <motion.button 
            variants={item} 
            onClick={() => setIsModalOpen(true)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg shadow-emerald-500/25"
          >
            <Plus size={18} />
            <span>Add Skill</span>
          </motion.button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: Terminal, label: 'Tech Stack', value: skills.length.toString(), color: 'text-emerald-500', bg: 'bg-emerald-500/20' },
            { icon: Code, label: 'LeetCode Solved', value: '42', color: 'text-amber-500', bg: 'bg-amber-500/20' },
            { icon: GitMerge, label: 'GitHub Commits', value: '128', color: 'text-blue-500', bg: 'bg-blue-500/20' },
            { icon: Star, label: 'Certifications', value: certifications.length.toString(), color: 'text-purple-500', bg: 'bg-purple-500/20' },
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
              {skills.length === 0 && !isLoading && (
                <div className="col-span-1 md:col-span-2 p-8 border border-white/10 border-dashed rounded-xl text-center text-white/40">
                  No skills added yet. Click 'Add Skill' to get started!
                </div>
              )}
              {skills.map((skill, i) => {
                const isFrontend = skill.category === 'frontend';
                const isBackend = skill.category === 'backend';
                const colorTheme = isFrontend ? 'cyan' : isBackend ? 'emerald' : 'amber';
                const Icon = isFrontend ? Layout : isBackend ? Server : Database;

                return (
                  <GlassCard key={i} interactive glowColor="secondary" className="p-0 overflow-hidden flex flex-col h-full">
                    <div className={`h-24 bg-gradient-to-r from-${colorTheme}-500/20 to-${colorTheme}-400/10 relative`}>
                      <div className={`absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-[#0B101E] border border-white/10 flex items-center justify-center text-${colorTheme}-400`}>
                        <Icon size={24} />
                      </div>
                    </div>
                    <div className="p-6 pt-8 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
                      <p className="text-sm text-white/60 mb-4 capitalize">{skill.category}</p>
                      
                      <div className="mt-auto space-y-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/40">Mastery Level</span>
                          <span className="text-white font-medium">{skill.masteryPercentage}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full bg-${colorTheme}-500`} style={{ width: `${skill.masteryPercentage}%` }} />
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-heading font-bold text-white">Recent Certifications</h2>
                <button className="text-xs text-emerald-500 hover:text-emerald-400 font-medium">View All</button>
              </div>
              
              <div className="space-y-4">
                {certifications.length === 0 && !isLoading ? (
                   <div className="text-xs text-white/40 text-center py-4">No certifications added.</div>
                ) : (
                  certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <Star size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm">{cert.title}</div>
                        <div className="text-xs text-white/40">{cert.issuer} {cert.dateObtained && `• ${new Date(cert.dateObtained).toLocaleDateString()}`}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <h2 className="text-xl font-heading font-bold text-white mb-2">Build Your Portfolio!</h2>
              <p className="text-sm text-white/60 mb-4">Your tech skills are ready to be shown to the world. Generate a developer portfolio for recruiters.</p>
              <a href="/tech/portfolio" className="block w-full py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-500/25 text-center">
                Go to Portfolio
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>

      {/* Add Skill Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#0B101E] border border-white/10 p-6 rounded-2xl w-full max-w-md relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-bold text-white mb-6">Add New Skill</h2>
              
              <form onSubmit={handleAddSkill} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-1">Skill Name</label>
                  <input 
                    required
                    type="text" 
                    value={newSkillName}
                    onChange={(e) => setNewSkillName(e.target.value)}
                    placeholder="e.g. React, Docker, Python"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-1">Category</label>
                  <select 
                    value={newSkillCategory}
                    onChange={(e) => setNewSkillCategory(e.target.value)}
                    className="w-full bg-[#151C2C] border border-white/10 rounded-lg p-3 text-white outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="database">Database</option>
                    <option value="tools">Tools / DevOps</option>
                  </select>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <label className="block text-sm font-medium text-white/60">Mastery</label>
                    <span className="text-emerald-400 text-sm font-bold">{newSkillMastery}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" max="100" 
                    value={newSkillMastery}
                    onChange={(e) => setNewSkillMastery(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors"
                >
                  Save Skill
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
