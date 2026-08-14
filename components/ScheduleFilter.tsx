'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Shield, Flame, Download, CheckCircle, ChevronRight } from 'lucide-react';
import FreeTrialModal from './FreeTrialModal';

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

interface ClassItem {
  id: string;
  time: string;
  title: string;
  discipline: 'Muay Thai' | 'BJJ' | 'Boxing' | 'BoxFit' | 'Kids' | '12-Week';
  instructor: string;
  location: string;
  level: 'All Levels' | 'Beginner' | 'Advanced / Sparring' | 'Kids';
}

const scheduleData: Record<DayOfWeek, ClassItem[]> = {
  Monday: [
    { id: 'm1', time: '06:00 - 07:00', title: 'BoxFit & Morning Striking', discipline: 'BoxFit', instructor: 'Coach Dino', location: 'Boxing Ring Floor', level: 'All Levels' },
    { id: 'm2', time: '17:30 - 18:30', title: 'Muay Thai Kickboxing Fundamentals', discipline: 'Muay Thai', instructor: 'Coach Mark', location: 'Ring Zone', level: 'Beginner' },
    { id: 'm3', time: '18:30 - 19:30', title: 'Brazilian Jiu-Jitsu (Gi Grappling)', discipline: 'BJJ', instructor: 'Professor Carlos', location: 'Tatami Mat Zone', level: 'All Levels' },
    { id: 'm4', time: '19:30 - 20:30', title: 'MMA Fighter Conditioning & Sparring', discipline: 'Muay Thai', instructor: 'Coach Dino', location: 'Full Octagon Ring', level: 'Advanced / Sparring' },
  ],
  Tuesday: [
    { id: 't1', time: '06:00 - 07:00', title: 'BJJ Morning Drill & Rolling', discipline: 'BJJ', instructor: 'Professor Carlos', location: 'Tatami Mat Zone', level: 'All Levels' },
    { id: 't2', time: '16:30 - 17:30', title: 'Kids Martial Arts & Discipline', discipline: 'Kids', instructor: 'Coach Sarah', location: 'Mat Floor B', level: 'Kids' },
    { id: 't3', time: '18:00 - 19:00', title: 'Muay Thai Padwork & Clinch Work', discipline: 'Muay Thai', instructor: 'Coach Mark', location: 'Ring Zone', level: 'All Levels' },
    { id: 't4', time: '19:00 - 20:30', title: 'No-Gi Submission Wrestling', discipline: 'BJJ', instructor: 'Professor Carlos', location: 'Tatami Mat Zone', level: 'All Levels' },
  ],
  Wednesday: [
    { id: 'w1', time: '06:00 - 07:00', title: '12-Week Fighter Body Transformation', discipline: '12-Week', instructor: 'Coach Dino', location: 'Strength Floor', level: 'All Levels' },
    { id: 'w2', time: '17:30 - 18:30', title: 'Boxing Technical Footwork & Mitts', discipline: 'Boxing', instructor: 'Coach Ray', location: 'Boxing Ring Floor', level: 'Beginner' },
    { id: 'w3', time: '18:30 - 19:30', title: 'Muay Thai Advanced Combinations', discipline: 'Muay Thai', instructor: 'Coach Mark', location: 'Ring Zone', level: 'Advanced / Sparring' },
    { id: 'w4', time: '19:30 - 20:30', title: 'BJJ Takedowns & Open Mat', discipline: 'BJJ', instructor: 'Professor Carlos', location: 'Tatami Mat Zone', level: 'All Levels' },
  ],
  Thursday: [
    { id: 'th1', time: '06:00 - 07:00', title: 'BoxFit High Intensity Blast', discipline: 'BoxFit', instructor: 'Coach Ray', location: 'Main Conditioning Zone', level: 'All Levels' },
    { id: 'th2', time: '16:30 - 17:30', title: 'Kids Hybrid Kickboxing & BJJ', discipline: 'Kids', instructor: 'Coach Sarah', location: 'Mat Floor B', level: 'Kids' },
    { id: 'th3', time: '18:00 - 19:15', title: 'Brazilian Jiu-Jitsu (Gi)', discipline: 'BJJ', instructor: 'Professor Carlos', location: 'Tatami Mat Zone', level: 'All Levels' },
    { id: 'th4', time: '19:15 - 20:30', title: 'Muay Thai Light Technical Sparring', discipline: 'Muay Thai', instructor: 'Coach Mark', location: 'Ring Zone', level: 'Advanced / Sparring' },
  ],
  Friday: [
    { id: 'f1', time: '06:00 - 07:00', title: 'Morning BJJ Rolling Session', discipline: 'BJJ', instructor: 'Professor Carlos', location: 'Tatami Mat Zone', level: 'All Levels' },
    { id: 'f2', time: '17:00 - 18:00', title: 'Boxing Power & Bag Drills', discipline: 'Boxing', instructor: 'Coach Ray', location: 'Boxing Ring Floor', level: 'All Levels' },
    { id: 'f3', time: '18:00 - 19:30', title: 'Friday Night Fight Club Sparring', discipline: 'Muay Thai', instructor: 'Coach Dino', location: 'Full Ring & Mats', level: 'Advanced / Sparring' },
  ],
  Saturday: [
    { id: 's1', time: '08:30 - 09:30', title: 'Weekend Striking & Bagwork', discipline: 'Muay Thai', instructor: 'Coach Mark', location: 'Ring Zone', level: 'All Levels' },
    { id: 's2', time: '09:30 - 11:00', title: 'BJJ All-Gym Open Mat', discipline: 'BJJ', instructor: 'Professor Carlos', location: 'Tatami Mat Zone', level: 'All Levels' },
    { id: 's3', time: '11:00 - 12:00', title: '12-Week Transformation Check-In', discipline: '12-Week', instructor: 'Coach Dino', location: 'Strength Floor', level: 'All Levels' },
  ],
  Sunday: [
    { id: 'su1', time: '09:00 - 10:30', title: 'Sunday Open Gym & Recovery', discipline: 'BoxFit', instructor: 'Staff On Duty', location: 'All Zones', level: 'All Levels' },
    { id: 'su2', time: '10:30 - 12:00', title: 'Fighter Open Mat & Grappling', discipline: 'BJJ', instructor: 'Senior Belts', location: 'Tatami Mat Zone', level: 'All Levels' },
  ],
};

const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function ScheduleFilter() {
  const [activeDay, setActiveDay] = useState<DayOfWeek>('Monday');
  const [filterDiscipline, setFilterDiscipline] = useState<string>('ALL');
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [bookedClass, setBookedClass] = useState<string | null>(null);

  const dayClasses = scheduleData[activeDay];
  const filteredClasses = filterDiscipline === 'ALL'
    ? dayClasses
    : dayClasses.filter((c) => c.discipline.toUpperCase() === filterDiscipline);

  const handleDownloadCalendar = () => {
    alert(`Downloading IMPAKT ${activeDay} Timetable (.ics calendar file)...`);
  };

  return (
    <div className="w-full">
      {/* Day Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-white/10">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-5 py-3 rounded-xl font-heading font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
              activeDay === day
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30 border border-red-500/40 scale-105'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{day}</span>
          </button>
        ))}
      </div>

      {/* Secondary Discipline Filter & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest mr-2 shrink-0">
            Filter:
          </span>
          {['ALL', 'MUAY THAI', 'BJJ', 'BOXING', 'BOXFIT', 'KIDS', '12-WEEK'].map((disc) => (
            <button
              key={disc}
              onClick={() => setFilterDiscipline(disc)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase transition-all whitespace-nowrap ${
                filterDiscipline === disc
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {disc}
            </button>
          ))}
        </div>

        <button
          onClick={handleDownloadCalendar}
          className="flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 bg-red-600/10 hover:bg-red-600/20 px-3.5 py-2 rounded-lg border border-red-500/30 transition-all shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Add {activeDay} to Calendar</span>
        </button>
      </div>

      {/* Class Items List */}
      <div className="space-y-4">
        {filteredClasses.length === 0 ? (
          <div className="glass-panel p-8 text-center rounded-2xl">
            <p className="text-slate-400 text-sm">No classes matching this discipline filter on {activeDay}.</p>
          </div>
        ) : (
          filteredClasses.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#121524]"
            >
              {/* Time & Discipline Badge */}
              <div className="flex items-start gap-4">
                <div className="px-4 py-3 rounded-xl bg-red-600/10 border border-red-500/30 text-center shrink-0 min-w-[130px]">
                  <div className="flex items-center justify-center gap-1 text-xs font-mono font-bold text-red-400 mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time.split(' - ')[0]}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">{item.time}</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                      {item.discipline}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                      {item.level}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-red-400 transition-colors uppercase">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-red-500" />
                      {item.instructor}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-amber-500" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                <button
                  onClick={() => {
                    setBookedClass(item.title);
                    setTrialModalOpen(true);
                  }}
                  className="w-full md:w-auto px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-600/30 transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Book Class</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Free Trial Modal */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </div>
  );
}
