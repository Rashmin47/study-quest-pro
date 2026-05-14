"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { GitBranch, Map, ExternalLink, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RoadmapPage() {
  const roadmapItems = [
    {
      title: "Frontend Foundations",
      status: "completed",
      skills: ["HTML/CSS", "JavaScript ES6+", "Tailwind CSS", "React.js Basics"],
      projects: ["Personal Website", "To-Do List App"]
    },
    {
      title: "Advanced React & Next.js",
      status: "in-progress",
      skills: ["Next.js App Router", "Server Components", "Zustand/Redux", "Framer Motion"],
      projects: ["StudyQuest Pro", "E-commerce Mockup"]
    },
    {
      title: "Backend Integration",
      status: "planned",
      skills: ["Node.js", "Express", "REST APIs", "PostgreSQL/MongoDB"],
      projects: ["REST API Service", "Full-stack Blog"]
    },
    {
      title: "DevOps & Deployment",
      status: "planned",
      skills: ["Docker", "CI/CD Actions", "AWS/Vercel", "Linux Basics"],
      projects: ["Containerized App"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Projects Roadmap</h1>
          <p className="text-white/60">Plan your learning path and track your IT career projects.</p>
        </motion.div>
        <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg shadow-emerald-500/25">
          <Map size={18} />
          <span>Explore Paths</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-heading font-bold text-white mb-6">Full-Stack Developer Path</h2>
            <motion.div variants={container} initial="hidden" animate="show" className="relative border-l-2 border-white/10 ml-4 space-y-10 pb-4">
              {roadmapItems.map((item, idx) => (
                <motion.div variants={itemAnim} key={idx} className="relative pl-8 group">
                  <div className={`absolute -left-[21px] top-1 w-10 h-10 rounded-full flex items-center justify-center text-sm shadow-lg border-[4px] border-[#070B14] transition-colors duration-300 group-hover:scale-110 ${
                    item.status === 'completed' ? 'bg-emerald-500 text-white' :
                    item.status === 'in-progress' ? 'bg-amber-500 text-white' :
                    'bg-white/10 text-white/40'
                  }`}>
                    <GitBranch size={18} />
                  </div>
                  <GlassCard interactive glowColor={item.status === 'completed' ? 'primary' : item.status === 'in-progress' ? 'secondary' : 'none'} className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-md uppercase font-bold ${
                        item.status === 'completed' ? 'text-emerald-400 bg-emerald-500/20' :
                        item.status === 'in-progress' ? 'text-amber-400 bg-amber-500/20' :
                        'text-white/40 bg-white/10'
                      }`}>{item.status.replace('-', ' ')}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white/60 mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-white/80 transition-colors hover:bg-white/10">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white/60 mb-2">Associated Projects:</h4>
                      <ul className="space-y-2">
                        {item.projects.map((project, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-white hover:text-emerald-300 transition-colors cursor-pointer">
                            {item.status === 'completed' ? <CheckCircle size={14} className="text-emerald-500" /> : <div className="w-1.5 h-1.5 rounded-full bg-white/40" />}
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <GlassCard className="p-6 border-emerald-500/30">
            <h3 className="font-heading font-bold text-white mb-4">Active Project</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-white">StudyQuest Pro</span>
                  <span className="text-emerald-400 font-bold text-sm">In Progress</span>
                </div>
                <p className="text-sm text-white/60 mb-3">Refactoring the dashboard and converting the ECA module to an IT Career Hub.</p>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                  <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-emerald-500" />
                </div>
                <div className="text-xs text-white/40 text-right">65% Complete</div>
              </div>
              <button className="w-full py-2 mt-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 text-white">
                Open GitHub Repo <ExternalLink size={14} />
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

