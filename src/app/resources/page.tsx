"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { Upload, FileText, Search, Filter, Download, Star } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    { id: 1, title: 'Calculus Ch 3 Notes', type: 'Notes', subject: 'Math', size: '2.4 MB', author: 'Dr. Smith', date: 'Oct 12, 2023' },
    { id: 2, title: 'Biology Midterm 2022', type: 'Past Paper', subject: 'Biology', size: '1.1 MB', author: 'Admin', date: 'Sep 05, 2023' },
    { id: 3, title: 'Physics Formula Sheet', type: 'Cheatsheet', subject: 'Physics', size: '0.8 MB', author: 'Student001', date: 'Nov 01, 2023' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Study Resources</h1>
          <p className="text-white/60">Upload, share, and find study materials.</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg shadow-primary/25">
          <Upload size={18} />
          <span>Upload File</span>
        </button>
      </div>

      <GlassCard className="p-4 flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input 
            type="text" 
            placeholder="Search by title, subject, or type..." 
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <select className="bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-white/80 focus:outline-none focus:border-primary">
            <option>All Subjects</option>
            <option>Math</option>
            <option>Physics</option>
            <option>Biology</option>
          </select>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((res) => (
          <GlassCard key={res.id} interactive className="p-5 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <FileText size={20} />
              </div>
              <button className="text-white/40 hover:text-amber-400 transition-colors">
                <Star size={18} />
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1 truncate">{res.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white/10 text-white/70 text-xs px-2 py-1 rounded-md">{res.subject}</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">{res.type}</span>
            </div>
            
            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
              <span>{res.author} • {res.size}</span>
              <button className="text-white hover:text-primary transition-colors flex items-center gap-1">
                <Download size={14} />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
