"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { useUserStore } from '@/lib/store';
import { Settings as SettingsIcon, Bell, Shield, Paintbrush, Moon, Volume2 } from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const { username, theme, updateProfile } = useUserStore();
  const [notifications, setNotifications] = useState(true);
  const [sounds, setSounds] = useState(true);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-heading font-bold text-white mb-2">Settings</h1>
        <p className="text-white/60">Manage your account and preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl border border-white/10 font-medium text-sm transition-colors">
            <SettingsIcon size={18} className="text-primary" />
            General
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:bg-white/5 hover:text-white rounded-xl text-sm font-medium transition-colors">
            <Paintbrush size={18} className="text-secondary" />
            Appearance
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:bg-white/5 hover:text-white rounded-xl text-sm font-medium transition-colors">
            <Bell size={18} className="text-amber-500" />
            Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:bg-white/5 hover:text-white rounded-xl text-sm font-medium transition-colors">
            <Shield size={18} className="text-emerald-500" />
            Privacy & Security
          </button>
        </div>

        <div className="md:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-heading font-bold text-white mb-6">Account Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => updateProfile({ username: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="student@studyquest.pro"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-white focus:outline-none focus:border-primary transition-colors"
                  readOnly
                />
                <p className="text-xs text-white/40 mt-1">Contact support to change your email.</p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-end">
                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-xl font-heading font-bold text-white mb-6">Preferences</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white flex items-center gap-2">
                    <Moon size={16} /> Dark Mode
                  </h3>
                  <p className="text-sm text-white/40 mt-1">Easier on the eyes during late study sessions.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={theme === 'dark'} onChange={() => updateProfile({ theme: theme === 'dark' ? 'light' : 'dark' })} className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white flex items-center gap-2">
                    <Volume2 size={16} /> Sound Effects
                  </h3>
                  <p className="text-sm text-white/40 mt-1">Play sounds when leveling up or completing tasks.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={sounds} onChange={() => setSounds(!sounds)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white flex items-center gap-2">
                    <Bell size={16} /> Push Notifications
                  </h3>
                  <p className="text-sm text-white/40 mt-1">Get reminders for upcoming ECA events and daily quests.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </GlassCard>

          <div className="flex justify-between items-center px-4">
            <button className="text-white/40 hover:text-white text-sm font-medium transition-colors">
              Log Out
            </button>
            <button className="text-red-500/80 hover:text-red-500 text-sm font-medium transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
