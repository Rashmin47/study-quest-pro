"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { BookOpen, LineChart, Target, Plus } from 'lucide-react';

export default function GradesPage() {
  const grades = [
    { subject: 'Mathematics', type: 'Midterm', score: 92, outOf: 100, date: 'Oct 15, 2023' },
    { subject: 'Physics', type: 'Quiz 1', score: 18, outOf: 20, date: 'Oct 10, 2023' },
    { subject: 'Biology', type: 'Assignment', score: 45, outOf: 50, date: 'Oct 05, 2023' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Grades Tracker</h1>
          <p className="text-white/60">Keep track of your academic performance and GPA.</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg shadow-primary/25">
          <Plus size={18} />
          <span>Add Grade</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard interactive glowColor="primary" className="p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <LineChart size={24} />
          </div>
          <div>
            <div className="text-sm text-white/60 mb-1">Current GPA</div>
            <div className="text-2xl font-bold text-white">3.8 <span className="text-sm font-normal text-white/40">/ 4.0</span></div>
          </div>
        </GlassCard>

        <GlassCard interactive glowColor="secondary" className="p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
            <BookOpen size={24} />
          </div>
          <div>
            <div className="text-sm text-white/60 mb-1">Total Credits</div>
            <div className="text-2xl font-bold text-white">45</div>
          </div>
        </GlassCard>

        <GlassCard interactive glowColor="eca" className="p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
            <Target size={24} />
          </div>
          <div>
            <div className="text-sm text-white/60 mb-1">Goal GPA</div>
            <div className="text-2xl font-bold text-white">4.0</div>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <h2 className="text-xl font-heading font-bold text-white mb-6">Recent Assessments</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-white/60 text-sm">
                <th className="pb-3 font-medium px-4">Subject</th>
                <th className="pb-3 font-medium px-4">Assessment Type</th>
                <th className="pb-3 font-medium px-4">Date</th>
                <th className="pb-3 font-medium px-4">Score</th>
                <th className="pb-3 font-medium px-4">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, i) => {
                const percentage = (grade.score / grade.outOf) * 100;
                let colorClass = 'text-emerald-400';
                if (percentage < 70) colorClass = 'text-red-400';
                else if (percentage < 85) colorClass = 'text-amber-400';

                return (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-medium text-white">{grade.subject}</td>
                    <td className="py-4 px-4 text-white/80">{grade.type}</td>
                    <td className="py-4 px-4 text-white/60">{grade.date}</td>
                    <td className="py-4 px-4 text-white/80">{grade.score} / {grade.outOf}</td>
                    <td className={`py-4 px-4 font-bold ${colorClass}`}>
                      {percentage.toFixed(1)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
