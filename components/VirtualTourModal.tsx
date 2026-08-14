'use client';

import React, { useState } from 'react';
import { X, Play, Image as ImageIcon, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const facilityZones = [
  {
    id: 'ring',
    name: 'Boxing & Muay Thai Ring',
    desc: 'Official 6x6m elevated competition boxing ring equipped with heavy bags, speed bags, and corner pads.',
    image: '/images/impakt-classes-1.jpg',
    tag: 'Full Ring Access',
  },
  {
    id: 'tatami',
    name: 'Olympic Tatami Mat Floor',
    desc: 'High-density impact-absorbing grappling mats designed for BJJ rolling, takedowns, and wrestling.',
    image: '/images/impakt-classes-4.jpg',
    tag: 'Grappling & BJJ Area',
  },
  {
    id: 'weights',
    name: 'Strength & Conditioning Zone',
    desc: 'Power racks, Olympic barbells, deadlift stations, kettlebells, and battle ropes built for fighter stamina.',
    image: '/images/impakt-feature-2.jpg',
    tag: 'Free Weights & Cardio',
  },
  {
    id: 'recovery',
    name: 'Fighter Conditioning & Battle Ropes Floor',
    desc: 'High-intensity fight conditioning floor featuring battle ropes, slam balls, and functional workout stations.',
    image: '/images/impakt-classes-3.jpg',
    tag: 'Fighter Conditioning',
  },
];

export default function VirtualTourModal({ isOpen, onClose }: VirtualTourModalProps) {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'3d' | 'photos'>('3d');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!isOpen) return null;

  const currentZone = facilityZones[activeZoneIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#0C0E17] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-red-950/50 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#121421]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase tracking-wider">
                IMPAKT 3D Virtual Facility Tour
              </h2>
              <p className="text-xs text-slate-400">Claremont, Cape Town • Interactive Tour & Showcase</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#0A0C14] border-b border-white/5">
          <div className="flex gap-2">
            {facilityZones.map((zone, idx) => (
              <button
                key={zone.id}
                onClick={() => {
                  setActiveZoneIndex(idx);
                  setIsPlayingVideo(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeZoneIndex === idx
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {zone.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === '3d' ? 'bg-white/10 text-white border border-white/20' : 'text-slate-400'
              }`}
            >
              <Play className="w-3.5 h-3.5 text-red-500" />
              <span>3D Tour Video</span>
            </button>
            <button
              onClick={() => setViewMode('photos')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'photos' ? 'bg-white/10 text-white border border-white/20' : 'text-slate-400'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5 text-red-500" />
              <span>High-Res Photos</span>
            </button>
          </div>
        </div>

        {/* Main Display Area */}
        <div className="relative flex-1 bg-black min-h-[350px] sm:min-h-[450px] flex items-center justify-center overflow-hidden">
          {viewMode === '3d' && !isPlayingVideo ? (
            <div className="relative w-full h-full group">
              <img
                src={currentZone.image}
                alt={currentZone.name}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="w-20 h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl shadow-red-600/60 hover:scale-110 hover:bg-red-500 transition-all border-2 border-white/30 mb-4 group-hover:animate-pulse"
                >
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
                <span className="text-xs uppercase tracking-widest text-red-400 font-bold mb-1">
                  Click to Launch 360 Video Tour
                </span>
                <h3 className="text-2xl font-heading font-bold text-white uppercase">{currentZone.name}</h3>
              </div>
            </div>
          ) : viewMode === '3d' && isPlayingVideo ? (
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              {/* Simulated 3D Video Player Wrapper */}
              <iframe
                className="w-full h-full min-h-[400px]"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1"
                title="IMPAKT MMA Claremont Facility Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={currentZone.image}
                alt={currentZone.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Navigation Controls */}
          <button
            onClick={() => {
              setActiveZoneIndex((prev) => (prev === 0 ? facilityZones.length - 1 : prev - 1));
              setIsPlayingVideo(false);
            }}
            className="absolute left-4 p-3 rounded-full bg-black/60 hover:bg-red-600 text-white border border-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              setActiveZoneIndex((prev) => (prev === facilityZones.length - 1 ? 0 : prev + 1));
              setIsPlayingVideo(false);
            }}
            className="absolute right-4 p-3 rounded-full bg-black/60 hover:bg-red-600 text-white border border-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Zone Details Bar */}
        <div className="p-4 sm:p-6 bg-[#0E101C] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-red-600/30 border border-red-500/40 text-[10px] font-bold text-red-400 uppercase tracking-widest">
                {currentZone.tag}
              </span>
              <span className="text-xs text-slate-400">Zone {activeZoneIndex + 1} of {facilityZones.length}</span>
            </div>
            <h4 className="text-lg font-heading font-bold text-white uppercase">{currentZone.name}</h4>
            <p className="text-xs text-slate-400 max-w-2xl">{currentZone.desc}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/30 transition-all"
          >
            Close Virtual Tour
          </button>
        </div>
      </div>
    </div>
  );
}
