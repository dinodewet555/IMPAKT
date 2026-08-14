'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Flame, Trophy, Users, Award, Clock, ArrowRight, Play, CheckCircle2, Star, MapPin, Zap, Volume2, VolumeX } from 'lucide-react';
import ScheduleFilter from '@/components/ScheduleFilter';
import VirtualTourModal from '@/components/VirtualTourModal';
import FreeTrialModal from '@/components/FreeTrialModal';

const disciplines = [
  {
    title: 'Muay Thai & Kickboxing',
    slug: 'muay-thai-kickboxing',
    desc: 'Devastating striking combat art utilizing elbows, knees, kicks, and clinch work. High-octane cardio for all skill levels.',
    image: '/images/impakt-kickboxing-strike.jpg',
    icon: '/images/impakt-class-icon-mt.png',
    tag: 'Striking & Conditioning',
    badge: 'Popular',
  },
  {
    title: 'Brazilian Jiu-Jitsu (BJJ)',
    slug: 'brazilian-jiu-jitsu',
    desc: 'The ground game authority. Master chokeholds, joint locks, takedowns, and defense in Gi and No-Gi submission grappling.',
    image: '/images/impakt-classes-4.jpg',
    icon: '/images/impakt-class-icon-jj.png',
    tag: 'Ground Grappling',
    badge: 'World-Class',
  },
  {
    title: 'Boxing & BoxFit',
    slug: 'boxing-boxfit',
    desc: 'Classic Western boxing technical footwork, heavy bag combinations, slip drills, and full-body morning fitness.',
    image: '/images/impakt-boxing-punch.jpg',
    icon: '/images/impakt-class-icon-bx.png',
    tag: 'Footwork & Mitts',
    badge: 'High Energy',
  },
  {
    title: 'Kids Martial Arts & Hybrid',
    slug: 'kids-hybrid',
    desc: 'Empowering children with confidence, anti-bullying discipline, motor skills, and self-defense in a safe environment.',
    image: '/images/MARTIAL ARTS.jpg',
    icon: '/images/impakt-class-icon-kb.png',
    tag: 'Ages 5-14',
    badge: 'Family Favorite',
  },
  {
    title: '12-Week Fighter Transformation',
    slug: '12-week-transformation',
    desc: 'Proven 135kg to 98kg body recomposition program combining martial arts stamina, weight training, and fight nutrition.',
    image: '/images/impakt-classes-6.jpg',
    icon: '/images/impakt-class-icon-training.png',
    tag: 'Body Recomposition',
    badge: 'Results Guaranteed',
  },
  {
    title: 'Private 1-on-1 Fighter PT',
    slug: '1-on-1-pt',
    desc: 'Customized private personal training with pro coaches tailored to your fight goals, technique refinement, and schedule.',
    image: '/images/impakt-feature-2.jpg',
    icon: '/images/impakt-class-icon-mma.png',
    tag: 'Personal Training',
    badge: 'VIP Access',
  },
];

const testimonials = [
  {
    quote: 'IMPAKT changed my life. The Muay Thai technical coaching under Coach Mark took me from zero experience to competing in Cape Town fight nights.',
    name: 'Jason V.',
    role: 'Muay Thai Practitioner',
    years: '3 Years Member',
  },
  {
    quote: 'The BJJ culture here is unmatched in the Western Cape. Humble black belt instructors, technical rolls, and top-tier mat hygiene.',
    name: 'Sarah M.',
    role: 'BJJ Blue Belt',
    years: '2 Years Member',
  },
  {
    quote: 'Started the 12-Week Transformation program and dropped 14kg while building real fighter stamina. Highly recommend for any Claremont resident.',
    name: 'David K.',
    role: 'Transformation Graduate',
    years: '1 Year Member',
  },
];

export default function HomePage() {
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

  return (
    <>
      {/* Dynamic Main Opening Hero Video Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-mesh-dark">
        {/* Main Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted={videoMuted}
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-40 scale-105 transition-all duration-700"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient Mesh Overlays for Text Readability & Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/70 to-[#090A0F]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090A0F] via-transparent to-[#090A0F]" />
        </div>

        {/* Audio Mute/Unmute Control Pill */}
        <button
          onClick={() => setVideoMuted(!videoMuted)}
          className="absolute bottom-6 right-6 z-20 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-2 transition-all shadow-xl hover:scale-105"
          aria-label="Toggle Video Sound"
        >
          {videoMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-red-500" />
              <span>Unmute Video</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Mute Video</span>
            </>
          )}
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Floating Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-red-500/30 backdrop-blur-md mb-6 shadow-lg shadow-red-950/30 animate-bounce">
            <Shield className="w-4 h-4 text-red-500 fill-red-500/20" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Est. 2001 • Claremont’s Premier Combat Sports Academy
            </span>
          </div>

          {/* H1 SEO Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-wider uppercase leading-tight mb-6">
            Mixed Martial Arts Academy in <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-100 to-red-500 bg-clip-text text-transparent">
              Claremont, Cape Town
            </span>
          </h1>

          {/* Tactical Slogan */}
          <div className="text-xl sm:text-2xl font-heading font-bold text-red-500 uppercase tracking-widest mb-4">
            PERSEVERE. ENDURE. CONQUER.
          </div>

          {/* Subheadline */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-10">
            Unleash your true combat potential. Master elite Muay Thai Kickboxing, Brazilian Jiu-Jitsu, Western Boxing, and Fighter Conditioning under veteran champions in Southern Suburbs.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setTrialModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold text-base uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/40 hover:shadow-red-600/60 transition-all border border-red-500/50 flex items-center justify-center gap-2 active:scale-95"
            >
              <Flame className="w-5 h-5 fill-white" />
              <span>Claim Free 1-Day Trial Pass</span>
            </button>

            <Link
              href="/classes"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold text-base uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Class Timetable</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setTourModalOpen(true)}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-heading font-bold text-base uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Launch 3D Virtual Tour</span>
            </button>
          </div>

          {/* Quick Trust Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-600/20 border border-red-500/30 text-red-500">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-heading font-bold text-white">25+ Years</div>
                <div className="text-xs text-slate-400">Proven Legacy Since 2001</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-600/20 border border-red-500/30 text-red-500">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-heading font-bold text-white">1,500+</div>
                <div className="text-xs text-slate-400">Active Cape Town Athletes</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-600/20 border border-red-500/30 text-red-500">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-heading font-bold text-white">12+ Black Belts</div>
                <div className="text-xs text-slate-400">Pro Accredited Coaches</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-600/20 border border-red-500/30 text-red-500">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-heading font-bold text-white">R100 Drop-In</div>
                <div className="text-xs text-slate-400">Flexible Member Pass</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discipline Matrix Showcase */}
      <section className="py-20 bg-[#090A0F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Core Training Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider mb-4">
              World-Class Martial Arts Programs
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Whether you want to build fight-ready striking, master submission wrestling on the mats, or shed body fat in BoxFit, we have specialized tracks for beginners to pros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disciplines.map((item) => (
              <article
                key={item.slug}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-red-600 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1 block">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white uppercase mb-3 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    href={`/classes/${item.slug}`}
                    className="w-full py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-white/5 hover:bg-red-600 transition-colors border border-white/10 hover:border-red-500 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Class Curriculum</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Bento Grid Teaser */}
      <section className="py-20 bg-[#0C0E17] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
                Claremont Facility Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white uppercase tracking-wider">
                State-of-the-Art Combat Gym Floor
              </h2>
            </div>

            <button
              onClick={() => setTourModalOpen(true)}
              className="px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-600/30 flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Launch Virtual 3D Tour</span>
            </button>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative h-80 rounded-2xl overflow-hidden glass-panel group">
              <img
                src="/images/impakt-classes-1.jpg"
                alt="Boxing & Muay Thai Ring Arena"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Zone 01</span>
                <h3 className="text-2xl font-heading font-bold text-white uppercase">6x6m Competition Boxing Ring</h3>
                <p className="text-xs text-slate-300 max-w-md">Equipped with heavy bags, tear-drop striking bags, and corner pads for full sparring contact.</p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden glass-panel group">
              <img
                src="/images/impakt-classes-4.jpg"
                alt="Tatami Mat Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Zone 02</span>
                <h3 className="text-xl font-heading font-bold text-white uppercase">Olympic Tatami Grappling Floor</h3>
                <p className="text-xs text-slate-300">High-density shock absorption mats for BJJ takedowns and submission rolls.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Class Timetable Preview Section */}
      <section className="py-20 bg-[#090A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Live Timetable
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider mb-4">
              Class Schedule (Claremont)
            </h2>
            <p className="text-slate-400 text-sm">
              Filter by day or discipline to find the perfect morning or evening training session for your routine.
            </p>
          </div>

          <ScheduleFilter />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0C0E17] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Testimonials & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white uppercase tracking-wider">
              Proven Fighter Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase">{t.name}</h4>
                    <span className="text-xs text-red-400">{t.role}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-white/5 px-2.5 py-1 rounded-full">{t.years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-red-950 via-[#0F111A] to-red-950 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase mb-4 tracking-wider">
            Ready To Step Onto The Mat?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Claim your free 1-day pass now or visit us at Claremont, Cape Town. Suitable for absolute beginners to pro athletes.
          </p>
          <button
            onClick={() => setTrialModalOpen(true)}
            className="px-10 py-4 rounded-xl font-heading font-bold text-lg uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-2xl shadow-red-600/50 border border-red-500/50 active:scale-95"
          >
            Claim Free Pass Today
          </button>
        </div>
      </section>

      {/* Modals */}
      <VirtualTourModal isOpen={tourModalOpen} onClose={() => setTourModalOpen(false)} />
      <FreeTrialModal isOpen={trialModalOpen} onClose={() => setTrialModalOpen(false)} />
    </>
  );
}
