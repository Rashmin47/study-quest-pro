"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { Bell, AlertTriangle, Info, Calendar } from 'lucide-react';

export default function NoticesPage() {
  const notices = [
    {
      id: 1,
      title: 'Upcoming Midterm Examinations',
      type: 'important',
      date: 'Oct 25, 2023',
      content: 'Please be informed that the midterm examinations will commence from November 10th. The detailed schedule has been posted on the student portal.',
      author: 'Academic Office'
    },
    {
      id: 2,
      title: 'Science Fair Registration Open',
      type: 'event',
      date: 'Oct 22, 2023',
      content: 'Registration for the Annual Science Fair is now open. Students from all grades are encouraged to participate. The deadline for registration is November 5th.',
      author: 'Science Dept'
    },
    {
      id: 3,
      title: 'Library Hours Extended',
      type: 'info',
      date: 'Oct 20, 2023',
      content: 'To support students preparing for finals, the central library will remain open until 10:00 PM starting next Monday.',
      author: 'Library Admin'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'important': return <AlertTriangle size={20} className="text-red-500" />;
      case 'event': return <Calendar size={20} className="text-primary" />;
      default: return <Info size={20} className="text-secondary" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'important': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'event': return 'bg-primary/20 text-primary border-primary/30';
      default: return 'bg-secondary/20 text-secondary border-secondary/30';
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
          <Bell size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-1">Notice Board</h1>
          <p className="text-white/60">Important announcements and updates.</p>
        </div>
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <GlassCard key={notice.id} interactive className="p-6 relative overflow-hidden group">
            {/* Type Indicator Line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
              notice.type === 'important' ? 'bg-red-500' :
              notice.type === 'event' ? 'bg-primary' : 'bg-secondary'
            }`} />
            
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                {getIcon(notice.type)}
                <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{notice.title}</h2>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-sm text-white/40">{notice.date}</span>
                <span className={`text-xs px-2 py-1 rounded-md border font-medium uppercase tracking-wider ${getBadgeColor(notice.type)}`}>
                  {notice.type}
                </span>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed text-sm mb-4">
              {notice.content}
            </p>
            
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium">
              <span className="text-white/40">Posted by <span className="text-white/60">{notice.author}</span></span>
              <button className="text-primary hover:text-primary-hover transition-colors">Read Full Notice →</button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
