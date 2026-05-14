"use client";

import { GlassCard } from '@/components/ui/GlassCard';
import { Calendar, Plus, MapPin, Clock } from 'lucide-react';

export default function TimetablePage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

  const classes = [
    { id: 1, name: 'Physics', day: 'Monday', time: '09:00', duration: 2, room: 'Room 302', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { id: 2, name: 'Mathematics', day: 'Monday', time: '11:00', duration: 1.5, room: 'Room 105', color: 'bg-primary/20 text-primary border-primary/30' },
    { id: 3, name: 'Biology Lab', day: 'Tuesday', time: '13:00', duration: 2, room: 'Lab 4', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Weekly Timetable</h1>
          <p className="text-white/60">Organize your classes and study blocks.</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg shadow-primary/25">
          <Plus size={18} />
          <span>Add Class</span>
        </button>
      </div>

      <GlassCard className="p-6 overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-6 border-b border-white/10 pb-4 mb-4">
            <div className="text-white/40 text-sm font-medium pl-2">Time</div>
            {days.map(day => (
              <div key={day} className="text-white text-center font-bold">{day}</div>
            ))}
          </div>

          {/* Grid */}
          <div className="relative">
            {times.map((time, i) => (
              <div key={i} className="grid grid-cols-6 h-20 border-b border-white/5 relative">
                <div className="text-white/40 text-sm font-medium pt-2 pl-2 -mt-3 bg-[#070B14] w-14 absolute left-0 z-10">{time}</div>
                {/* Vertical lines */}
                <div className="col-start-2 border-l border-white/5 h-full"></div>
                <div className="col-start-3 border-l border-white/5 h-full"></div>
                <div className="col-start-4 border-l border-white/5 h-full"></div>
                <div className="col-start-5 border-l border-white/5 h-full"></div>
                <div className="col-start-6 border-l border-white/5 h-full border-r"></div>
              </div>
            ))}

            {/* Render Classes (Mocked Absolute Positioning for demo) */}
            <div className="absolute top-[80px] left-[16.66%] w-[16.66%] h-[160px] p-1">
              <div className={`w-full h-full rounded-xl border p-3 flex flex-col ${classes[0].color}`}>
                <span className="font-bold font-heading text-sm">{classes[0].name}</span>
                <div className="flex items-center gap-1 mt-auto text-xs opacity-80">
                  <Clock size={12} /> 09:00 - 11:00
                </div>
                <div className="flex items-center gap-1 mt-1 text-xs opacity-80">
                  <MapPin size={12} /> {classes[0].room}
                </div>
              </div>
            </div>

            <div className="absolute top-[240px] left-[16.66%] w-[16.66%] h-[120px] p-1">
              <div className={`w-full h-full rounded-xl border p-3 flex flex-col ${classes[1].color}`}>
                <span className="font-bold font-heading text-sm">{classes[1].name}</span>
                <div className="flex items-center gap-1 mt-auto text-xs opacity-80">
                  <Clock size={12} /> 11:00 - 12:30
                </div>
                <div className="flex items-center gap-1 mt-1 text-xs opacity-80">
                  <MapPin size={12} /> {classes[1].room}
                </div>
              </div>
            </div>

            <div className="absolute top-[400px] left-[33.33%] w-[16.66%] h-[160px] p-1">
              <div className={`w-full h-full rounded-xl border p-3 flex flex-col ${classes[2].color}`}>
                <span className="font-bold font-heading text-sm">{classes[2].name}</span>
                <div className="flex items-center gap-1 mt-auto text-xs opacity-80">
                  <Clock size={12} /> 13:00 - 15:00
                </div>
                <div className="flex items-center gap-1 mt-1 text-xs opacity-80">
                  <MapPin size={12} /> {classes[2].room}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
