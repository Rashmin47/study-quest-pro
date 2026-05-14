"use client";

import { usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { ChatBot } from '@/components/ui/ChatBot';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Don't show shell on landing page
  if (pathname === '/') {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-[#070B14] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <TopBar />
        <main className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
        <ChatBot />
      </div>
    </div>
  );
}
