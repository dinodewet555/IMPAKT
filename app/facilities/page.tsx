'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Shield, Play, Sparkles, CheckCircle2, Flame, MapPin } from 'lucide-react';
import VirtualTourModal from '@/components/VirtualTourModal';
import FreeTrialModal from '@/components/FreeTrialModal';
import JsonLd from '@/components/JsonLd';

const facilityFeatures = [
  {
    title: '6x6m Elevated Boxing & Striking Ring',
    desc: 'Official pro-dimension fight ring with reinforced canvas, heavy bags, speed bags, and corner pads for full contact Muay Thai and Boxing sparring.',
    image: '/images/impakt-classes-1.jpg',
    tag: 'Striking Arena',
  },
  {
    title: 'High-Density Olympic Tatami Mat Floor',
    desc: 'Custom continuous padded grappling floor engineered for high-impact BJJ takedowns, wrestling drills, and safe submission rolling.',
    image: '/images/impakt-classes-4.jpg',
    tag: 'Mat Zone',
  },
  {
    title: 'Full Strength & Deadlift Conditioning Rig',
    desc: 'Equipped with Rogue power racks, Olympic barbells, bumper plates, heavy dumbbells, and battle rope stations.',
    image: '/images/impakt-feature-2.jpg',
    tag: 'Athletic Performance',
  },
  {
    title: 'Battle Ropes & Fight Conditioning Floor',
    desc: 'High-energy workout floor equipped for functional fight stamina, core endurance, and athletic conditioning.',
    image: '/images/impakt-classes-3.jpg',
    tag: 'Fighter Conditioning',
  },
  {
    title: 'Executive Locker Rooms & Recovery Suite',
    desc: 'Clean changing amenities equipped with keyless lockers, hot high-pressure showers, and treatment tables for sports massage therapy.',
    image: '/images/impakt-feature-1.jpg',
    tag: 'Member Comfort',
  },
];

export default function FacilitiesPage() {
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const jsonLdData = [
    {
      '@context': 'https://schema.org',
      '@type': 'SportsActivityLocation',
      name: 'IMPAKT MMA Claremont Facility Floor',
      description: 'State-of-the-art combat sports gym in Claremont, Cape Town featuring elevated ring, tatami mats, and strength floor.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Claremont',
        addressLocality: 'Cape Town',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://impaktmma.co.za' },
        { '@type': 'ListItem', position: 2, name: 'Facilities', item: 'https://impaktmma.co.za/facilities' },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />

      <div className="py-12 bg-mesh-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
              <li className="text-red-400 font-semibold" aria-current="page">Facilities</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Claremont Gym Showcase
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider mb-4">
              State-of-the-Art MMA Facilities & Gym Floor in Claremont
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Designed specifically for high-intensity combat sports training, safety, and recovery. Explore our pro ring, tatami mats, free weights, and treatment rooms.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => setTourModalOpen(true)}
                className="px-8 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 shadow-xl shadow-red-600/40 border border-red-500/50 flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Launch Interactive 3D Tour</span>
              </button>

              <button
                onClick={() => setTrialModalOpen(true)}
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Book Free Trial Access
              </button>
            </div>
          </div>

          {/* Bento Grid Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {facilityFeatures.map((f, idx) => (
              <div
                key={idx}
                className={`glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group ${
                  idx === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-red-600 text-[10px] font-bold uppercase tracking-wider text-white">
                      {f.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase mb-2 group-hover:text-red-400 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Hygiene & Amenities Highlights */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-[#121421] to-[#0A0C14] mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                  Hygiene Standard
                </span>
                <h4 className="text-xl font-heading font-bold text-white uppercase mb-2">Hospital-Grade Disinfection</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mats and heavy bags are sanitized 3 times daily using non-toxic antimicrobial solutions to guarantee pristine mat hygiene.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                  Airflow Systems
                </span>
                <h4 className="text-xl font-heading font-bold text-white uppercase mb-2">High-Velocity Air Circulation</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Commercial ventilation units ensure continuous fresh air turnover across all striking and grappling zones.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                  Fighter Equipment
                </span>
                <h4 className="text-xl font-heading font-bold text-white uppercase mb-2">Pro Gear Loaners Available</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  First-time trial guests receive complimentary sanitized boxing gloves and shin guard loaners for their session.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <VirtualTourModal isOpen={tourModalOpen} onClose={() => setTourModalOpen(false)} />
      <FreeTrialModal isOpen={trialModalOpen} onClose={() => setTrialModalOpen(false)} />
    </>
  );
}
