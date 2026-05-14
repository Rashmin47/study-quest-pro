"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { useUserStore } from '@/lib/store';
import { Github, ExternalLink, Download, Code2, Terminal, Linkedin } from 'lucide-react';

export default function PortfolioPage() {
  const { username } = useUserStore();

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Developer Portfolio</h1>
          <p className="text-white/60">Your professional IT identity, ready to share.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg shadow-emerald-500/25">
            <Download size={18} />
            <span>Export Resume</span>
          </button>
        </div>
      </div>

      <GlassCard className="p-0 overflow-hidden border-emerald-500/30">
        <div className="h-32 bg-gradient-to-r from-emerald-600 to-cyan-600 relative">
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md">
              <Github size={20} />
            </button>
            <button className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md">
              <Linkedin size={20} />
            </button>
          </div>
        </div>
        
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start relative -mt-16">
            <div className="w-32 h-32 rounded-xl bg-[#0B101E] border-4 border-[#070B14] shadow-xl flex flex-shrink-0 items-center justify-center text-5xl">
              👨‍💻
            </div>
            
            <div className="pt-20 md:pt-16 flex-1">
              <h2 className="text-3xl font-heading font-bold text-white">{username}</h2>
              <p className="text-emerald-400 font-medium text-lg mb-2">Full-Stack Developer (B.Sc. CSIT)</p>
              <p className="text-white/60 max-w-2xl leading-relaxed">
                Passionate CSIT student specializing in modern web technologies. Experienced in building full-stack applications with React, Next.js, and Node.js. Always eager to learn new tech stacks and solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="text-emerald-500" /> Featured Projects
            </h3>
            
            <div className="space-y-6">
              <div className="border border-white/10 rounded-xl p-5 hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">StudyQuest Pro</h4>
                  <div className="flex gap-2">
                    <a href="#" className="text-white/40 hover:text-white transition-colors"><Github size={18} /></a>
                    <a href="#" className="text-white/40 hover:text-emerald-400 transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-4">A comprehensive academic and IT transition hub built for CSIT students.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-md">TailwindCSS</span>
                  <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-md">Zustand</span>
                  <span className="text-xs px-2 py-1 bg-amber-500/10 text-amber-400 rounded-md">Framer Motion</span>
                </div>
              </div>

              <div className="border border-white/10 rounded-xl p-5 hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">Algorithm Visualizer</h4>
                  <div className="flex gap-2">
                    <a href="#" className="text-white/40 hover:text-white transition-colors"><Github size={18} /></a>
                    <a href="#" className="text-white/40 hover:text-emerald-400 transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-4">Interactive web application to visualize common sorting and pathfinding algorithms.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded-md">JavaScript</span>
                  <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md">React</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
              <Terminal className="text-emerald-500" size={20} /> Skills
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">JavaScript</span>
                  <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">TypeScript</span>
                  <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">Python</span>
                  <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">C++</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg">React</span>
                  <span className="text-sm px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg">Next.js</span>
                  <span className="text-sm px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg">Node.js</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">Git</span>
                  <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">Docker</span>
                  <span className="text-sm px-3 py-1 bg-white/5 rounded-lg text-white">Figma</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
