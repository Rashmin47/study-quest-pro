"use client";

import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Play, Pause, RotateCcw, Volume2, Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatTime } from '@/lib/utils';
import { useUserStore } from '@/lib/store';

export default function StudyRoomPage() {
  const { gainXp } = useUserStore();
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'study' | 'break'>('study');
  const [tasks, setTasks] = useState<{id: number, text: string, done: boolean}[]>([
    { id: 1, text: 'Read Chapter 4', done: false },
    { id: 2, text: 'Complete Math exercises', done: false }
  ]);
  const [newTask, setNewTask] = useState('');

  // Sounds state (mocked functionality for UI)
  const [volumes, setVolumes] = useState({ rain: 0, forest: 0, cafe: 0 });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      setIsActive(false);
      if (mode === 'study') {
        gainXp(50); // Reward for completing a session
        alert('Session complete! You gained 50 XP.');
      }
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode, gainXp]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'study' ? 25 * 60 : 5 * 60);
  };

  const switchMode = (newMode: 'study' | 'break') => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(newMode === 'study' ? 25 * 60 : 5 * 60);
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const percentage = (timeLeft / (mode === 'study' ? 25 * 60 : 5 * 60)) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-white mb-2">Study Room</h1>
        <p className="text-white/60">Focus up and earn XP. Deep work only.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GlassCard className="p-8 flex flex-col items-center justify-center min-h-[400px]">
            <div className="flex bg-white/5 rounded-full p-1 mb-8">
              <button 
                onClick={() => switchMode('study')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${mode === 'study' ? 'bg-primary text-white' : 'text-white/60 hover:text-white'}`}
              >
                Focus
              </button>
              <button 
                onClick={() => switchMode('break')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${mode === 'break' ? 'bg-secondary text-white' : 'text-white/60 hover:text-white'}`}
              >
                Break
              </button>
            </div>

            <div className="relative w-64 h-64 flex items-center justify-center mb-8">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="8" fill="none" className="text-white/10" />
                <circle 
                  cx="128" cy="128" r="120" 
                  stroke="currentColor" strokeWidth="8" fill="none" 
                  className={mode === 'study' ? 'text-primary' : 'text-secondary'}
                  strokeDasharray="753.98"
                  strokeDashoffset={753.98 - (percentage / 100) * 753.98}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s linear' }}
                />
              </svg>
              <div className="text-6xl font-heading font-bold text-white tracking-wider">
                {formatTime(timeLeft)}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={toggleTimer} className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-white/10 text-white hover:bg-white/20' : mode === 'study' ? 'bg-primary text-white hover:bg-primary-hover hover:scale-105 shadow-lg shadow-primary/25' : 'bg-secondary text-white hover:bg-secondary/90 hover:scale-105 shadow-lg shadow-secondary/25'}`}>
                {isActive ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
              </button>
              <button onClick={resetTimer} className="w-12 h-12 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white flex items-center justify-center transition-all">
                <RotateCcw size={20} />
              </button>
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-heading font-bold text-white mb-4">Focus Sounds</h2>
            <div className="space-y-4">
              {['Rain', 'Forest', 'Cafe'].map((sound) => (
                <div key={sound} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60">
                    <Volume2 size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white mb-1">{sound}</div>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      defaultValue="0"
                      className="w-full accent-primary bg-white/10 h-1 rounded-full appearance-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-xl font-heading font-bold text-white mb-4">Tasks</h2>
            <form onSubmit={addTask} className="flex gap-2 mb-4">
              <input 
                type="text" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a task..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary"
              />
              <button type="submit" className="bg-primary hover:bg-primary-hover text-white rounded-lg p-2 transition-colors">
                <Plus size={20} />
              </button>
            </form>
            <ul className="space-y-2">
              {tasks.map(task => (
                <li key={task.id} className="flex items-center gap-3">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${task.done ? 'bg-primary border-primary' : 'border-white/30 hover:border-white/50'}`}
                  >
                    {task.done && <Check size={14} className="text-white" />}
                  </button>
                  <span className={`text-sm ${task.done ? 'text-white/40 line-through' : 'text-white/80'}`}>{task.text}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
