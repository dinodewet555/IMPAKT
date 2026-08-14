import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ChevronRight, Flame, Shield, ArrowRight } from 'lucide-react';
import ScheduleFilter from '@/components/ScheduleFilter';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'MMA & Fitness Classes Claremont, Cape Town | Schedule & Training',
  description:
    'Explore our class timetable for Muay Thai Kickboxing, BJJ, BoxFit, and Personal Training at IMPAKT MMA Cape Town. Suitable for beginners to pro fighters.',
  alternates: {
    canonical: '/classes',
  },
};

const coursesJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Muay Thai Kickboxing & Striking',
    description: 'Comprehensive striking combat class covering Muay Thai techniques, kickboxing combinations, and endurance drills in Claremont, Cape Town.',
    provider: {
      '@type': 'Organization',
      name: 'IMPAKT Academy of Mixed Martial Arts',
      sameAs: 'https://impaktmma.co.za',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Brazilian Jiu-Jitsu (BJJ) & Submission Grappling',
    description: 'Master Gi and No-Gi submission grappling chokes, joint locks, and ground control with black belt coaches.',
    provider: {
      '@type': 'Organization',
      name: 'IMPAKT Academy of Mixed Martial Arts',
      sameAs: 'https://impaktmma.co.za',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://impaktmma.co.za',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Classes & Schedule',
        item: 'https://impaktmma.co.za/classes',
      },
    ],
  },
];

export default function ClassesPage() {
  return (
    <>
      <JsonLd data={coursesJsonLd} />

      <div className="py-12 bg-mesh-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
              <li className="text-red-400 font-semibold" aria-current="page">Classes & Schedule</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Disciplines Hub & Timetable
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider mb-4">
              MMA & Combat Sports Training Schedule in Claremont, Cape Town
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We offer structured weekly sessions across all combat arts from early morning 06:00 conditioning to evening grappling and fight team sparring.
            </p>
          </div>

          {/* Interactive Filterable Schedule */}
          <div className="mb-20">
            <ScheduleFilter />
          </div>

          {/* Specialized Discipline Landing Pages Link Grid */}
          <div className="border-t border-white/10 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-wider">
                Explore Dedicated Discipline Hubs
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">Click below for in-depth program curriculum, coach bios, and required equipment.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Muay Thai Kickboxing', slug: 'muay-thai-kickboxing', desc: 'Stand-up striking, padwork, low kicks & clinch work.' },
                { title: 'Brazilian Jiu-Jitsu (BJJ)', slug: 'brazilian-jiu-jitsu', desc: 'Gi & No-Gi ground control, joint locks & submissions.' },
                { title: 'Boxing & BoxFit', slug: 'boxing-boxfit', desc: 'Technical footwork, slip bag drills & cardio endurance.' },
                { title: 'Kids Martial Arts', slug: 'kids-hybrid', desc: 'Anti-bullying, discipline, focus & youth self-defense.' },
                { title: '12-Week Transformation', slug: '12-week-transformation', desc: 'Full body recomposition & fight fitness challenge.' },
              ].map((p) => (
                <Link
                  key={p.slug}
                  href={`/classes/${p.slug}`}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-red-400 transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                  </div>

                  <div className="flex items-center text-xs font-bold text-red-500 uppercase tracking-wider gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
