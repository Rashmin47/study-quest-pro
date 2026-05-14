"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { useUserStore } from '@/lib/store';
import { Trophy, HelpCircle, Flame, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChallengesPage() {
  const { gainXp, addCoins } = useUserStore();

  const handleComplete = () => {
    gainXp(100);
    addCoins(25);
    alert('Challenge Completed! +100 XP, +25 Coins');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-white mb-2">Challenges & Quizzes</h1>
        <p className="text-white/60">Test your knowledge and earn rewards.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard interactive glowColor="primary" className="p-6 border-primary/30">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Flame size={24} />
            </div>
            <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-white/80">
              Daily Bonus
            </div>
          </div>
          <h2 className="text-xl font-heading font-bold text-white mb-2">Study Streak Hero</h2>
          <p className="text-sm text-white/60 mb-6">Complete 3 study sessions today to earn a massive XP bonus.</p>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-xs text-white/60 font-medium">
              <span>Progress</span>
              <span>1 / 3</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[33%]" />
            </div>
          </div>

          <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 rounded-lg transition-colors">
            Go to Study Room
          </button>
        </GlassCard>

        <GlassCard interactive glowColor="secondary" className="p-6 border-secondary/30">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
              <Trophy size={24} />
            </div>
            <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-white/80">
              Weekly Epic
            </div>
          </div>
          <h2 className="text-xl font-heading font-bold text-white mb-2">Subject Master</h2>
          <p className="text-sm text-white/60 mb-6">Score 90% or above in 5 different subject quizzes this week.</p>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-xs text-white/60 font-medium">
              <span>Progress</span>
              <span>4 / 5</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[80%]" />
            </div>
          </div>

          <button onClick={handleComplete} className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-2 rounded-lg transition-colors shadow-lg shadow-secondary/25">
            Claim Reward (500 XP)
          </button>
        </GlassCard>
      </div>

      <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-6">Subject Quizzes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { subject: 'Mathematics', desc: 'Calculus Derivatives', diff: 'Hard', q: 15, color: 'border-red-500/30' },
          { subject: 'Physics', desc: 'Kinematics', diff: 'Medium', q: 10, color: 'border-amber-500/30' },
          { subject: 'Biology', desc: 'Cell Structure', diff: 'Easy', q: 20, color: 'border-emerald-500/30' },
        ].map((quiz, i) => (
          <GlassCard key={i} interactive className={`p-5 flex flex-col ${quiz.color}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <HelpCircle size={20} />
              </div>
              <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-white/60">
                {quiz.diff}
              </span>
            </div>
            <h3 className="font-bold text-white text-lg">{quiz.subject}</h3>
            <p className="text-sm text-white/60 mb-6">{quiz.desc}</p>
            
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-white/40 font-medium">{quiz.q} Questions</span>
              <button className="text-sm font-medium text-primary hover:text-primary-hover transition-colors flex items-center gap-1">
                Start Quiz
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
