"use client";

import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { useUserStore } from '@/lib/store';
import { Github, ExternalLink, Download, Code2, Terminal, Linkedin, Edit3, Check, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioPage() {
  const { username } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [bio, setBio] = useState("Passionate CSIT student specializing in modern web technologies. Experienced in building full-stack applications with React, Next.js, and Node.js. Always eager to learn new tech stacks and solve complex problems.");
  const [title, setTitle] = useState("Full-Stack Developer (B.Sc. CSIT)");
  
  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "StudyQuest Pro",
      desc: "A comprehensive academic and IT transition hub built for CSIT students.",
      tags: ["Next.js", "TailwindCSS", "Zustand", "Framer Motion"],
      github: "#",
      live: "#"
    }
  ]);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const res = await fetch('/api/tech/portfolio');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setProjects(data.map((p: any) => ({
              id: p.id,
              name: p.title,
              desc: p.description,
              tags: p.techStack || [],
              github: p.githubUrl || "#",
              live: p.liveUrl || "#"
            })));
          }
        }
      } catch (err) {
        console.error("Failed to fetch portfolio:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPortfolio();
  }, []);

  const handleSave = async () => {
    setIsEditing(false);
    // Logic to save the projects to /api/tech/portfolio via POST/PUT
    // This would ideally iterate over `projects` or save profile bio/title.
  };


  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Developer Portfolio</h1>
          <p className="text-white/60">Your professional IT identity, ready to share.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg ${
              isEditing ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/25 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            {isEditing ? <Check size={18} /> : <Edit3 size={18} />}
            <span>{isEditing ? 'Save Changes' : 'Edit Portfolio'}</span>
          </button>
          {!isEditing && (
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg shadow-emerald-500/25">
              <Download size={18} />
              <span>Export Resume</span>
            </button>
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={isEditing ? 'edit' : 'preview'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <GlassCard className={`p-0 overflow-hidden ${isEditing ? 'border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]' : 'border-emerald-500/30'}`}>
            <div className={`h-32 relative transition-colors ${isEditing ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'}`}>
              {!isEditing && (
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md">
                    <Github size={20} />
                  </button>
                  <button className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md">
                    <Linkedin size={20} />
                  </button>
                </div>
              )}
            </div>
            
            <div className="px-8 pb-8">
              <div className="flex flex-col md:flex-row gap-6 items-start relative -mt-16">
                <div className="w-32 h-32 rounded-xl bg-[#0B101E] border-4 border-[#070B14] shadow-xl flex flex-shrink-0 items-center justify-center text-5xl">
                  👨‍💻
                </div>
                
                <div className="pt-20 md:pt-16 flex-1 w-full">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs text-white/40 uppercase mb-1 block">Display Name</label>
                        <input type="text" value={username} disabled className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white/50 cursor-not-allowed" />
                      </div>
                      <div>
                        <label className="text-xs text-amber-400 uppercase mb-1 block">Professional Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-black/20 border border-amber-500/30 focus:border-amber-500 rounded-lg p-2 text-white outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="text-xs text-amber-400 uppercase mb-1 block">Bio</label>
                        <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} className="w-full bg-black/20 border border-amber-500/30 focus:border-amber-500 rounded-lg p-2 text-white outline-none transition-colors resize-none" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-3xl font-heading font-bold text-white">{username}</h2>
                      <p className="text-emerald-400 font-medium text-lg mb-2">{title}</p>
                      <p className="text-white/60 max-w-2xl leading-relaxed">
                        {bio}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                    <Code2 className={isEditing ? 'text-amber-500' : 'text-emerald-500'} /> Featured Projects
                  </h3>
                  {isEditing && (
                    <button className="text-xs flex items-center gap-1 bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-lg hover:bg-amber-500/30 transition-colors">
                      <Plus size={14} /> Add Project
                    </button>
                  )}
                </div>
                
                <div className="space-y-4">
                  {projects.map((proj) => (
                    <div key={proj.id} className={`border rounded-xl p-5 transition-colors ${isEditing ? 'border-amber-500/20 bg-amber-500/5' : 'border-white/10 hover:bg-white/5'}`}>
                      {isEditing ? (
                        <div className="space-y-3">
                          <div className="flex justify-between gap-4">
                            <input type="text" value={proj.name} onChange={() => {}} className="flex-1 bg-black/20 border border-amber-500/30 rounded-lg p-2 text-white font-bold outline-none" placeholder="Project Name" />
                            <button className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"><Trash2 size={18} /></button>
                          </div>
                          <textarea value={proj.desc} onChange={() => {}} rows={2} className="w-full bg-black/20 border border-amber-500/30 rounded-lg p-2 text-sm text-white/80 outline-none resize-none" placeholder="Project Description" />
                          <div className="flex gap-2">
                            <input type="text" value={proj.tags.join(', ')} onChange={() => {}} className="flex-1 bg-black/20 border border-amber-500/30 rounded-lg p-2 text-sm text-white/60 outline-none" placeholder="Tags (comma separated)" />
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold text-white">{proj.name}</h4>
                            <div className="flex gap-2">
                              <a href={proj.github} className="text-white/40 hover:text-white transition-colors"><Github size={18} /></a>
                              <a href={proj.live} className="text-white/40 hover:text-emerald-400 transition-colors"><ExternalLink size={18} /></a>
                            </div>
                          </div>
                          <p className="text-sm text-white/60 mb-4">{proj.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {proj.tags.map((tag, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-white/10 text-white/80 rounded-md">{tag}</span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="space-y-6">
              <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                    <Terminal className={isEditing ? 'text-amber-500' : 'text-emerald-500'} size={20} /> Skills
                  </h3>
                  {isEditing && (
                    <button className="text-amber-400 hover:text-amber-300 p-1 rounded-md hover:bg-amber-500/10 transition-colors">
                      <Edit3 size={16} />
                    </button>
                  )}
                </div>
                <div className={`space-y-4 ${isEditing ? 'opacity-50 pointer-events-none' : ''}`}>
                  <div>
                    <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">JavaScript</span>
                      <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">TypeScript</span>
                      <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">Python</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className={`text-sm px-3 py-1 border rounded-lg ${isEditing ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>React</span>
                      <span className={`text-sm px-3 py-1 border rounded-lg ${isEditing ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>Next.js</span>
                      <span className={`text-sm px-3 py-1 border rounded-lg ${isEditing ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>Node.js</span>
                    </div>
                  </div>
                </div>
                {isEditing && (
                  <div className="mt-4 text-xs text-amber-400 bg-amber-500/10 p-2 rounded-lg text-center">
                    Skills are managed in the main Tech Hub tab.
                  </div>
                )}
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
