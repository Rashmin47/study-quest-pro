import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserState {
  username: string;
  level: number;
  xp: number;
  coins: number;
  rank: string;
  avatar: string;
  theme: 'dark' | 'light';
  gainXp: (amount: number) => void;
  addCoins: (amount: number) => void;
  updateProfile: (data: Partial<UserState>) => void;
}

const rankThresholds = [
  { minXp: 0, rank: 'Novice' },
  { minXp: 1000, rank: 'Apprentice' },
  { minXp: 5000, rank: 'Scholar' },
  { minXp: 10000, rank: 'Master' },
  { minXp: 20000, rank: 'Grandmaster' },
];

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: 'Student',
      level: 1,
      xp: 0,
      coins: 0,
      rank: 'Novice',
      avatar: '/avatars/default.png',
      theme: 'dark',
      gainXp: (amount) => set((state) => {
        const newXp = state.xp + amount;
        const newLevel = Math.floor(newXp / 1000) + 1;
        const newRank = [...rankThresholds].reverse().find(r => newXp >= r.minXp)?.rank || 'Novice';
        
        return { xp: newXp, level: newLevel, rank: newRank };
      }),
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
      updateProfile: (data) => set((state) => ({ ...state, ...data })),
    }),
    {
      name: 'study-quest-storage',
    }
  )
);
