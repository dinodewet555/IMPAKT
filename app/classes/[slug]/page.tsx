import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Shield, CheckCircle2, Flame, User, Clock, Award, HelpCircle } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

interface ProgramDetail {
  slug: string;
  slugAlt?: string;
  title: string;
  seoTitle: string;
  seoDesc: string;
  h1: string;
  category: string;
  tagline: string;
  heroImage: string;
  overview: string;
  benefits: string[];
  curriculum: string[];
  equipment: string[];
  coach: {
    name: string;
    role: string;
    bio: string;
  };
  scheduleTimes: string[];
  faqs: { q: string; a: string }[];
}

const programsData: Record<string, ProgramDetail> = {
  'muay-thai-kickboxing': {
    slug: 'muay-thai-kickboxing',
    title: 'Muay Thai Kickboxing',
    seoTitle: 'Muay Thai Kickboxing Classes Claremont, Cape Town | IMPAKT MMA',
    seoDesc: 'Elite Muay Thai striking classes in Claremont, Cape Town. Master elbow strikes, knees, kicks, and clinch work under veteran combat coaches.',
    h1: 'Muay Thai Kickboxing & Striking Academy in Claremont, Cape Town',
    category: 'Striking Arts',
    tagline: 'The Art of Eight Limbs • Power, Technique & Unstoppable Cardio',
    heroImage: '/images/impakt-kickboxing-strike.jpg',
    overview: 'Muay Thai is widely recognized as the world’s most effective stand-up striking discipline. At IMPAKT MMA Claremont, our Muay Thai program teaches authentic Thai padwork, footwork, clinch work, sweep defenses, and heavy bag conditioning in a controlled, supportive environment.',
    benefits: [
      'Master power striking with shins, elbows, knees, and fists',
      'Burn up to 800+ calories per high-intensity 60-minute session',
      'Sharpen mental toughness, reflex speed, and spatial awareness',
      'Suitable for zero-experience beginners up to active fight competitors',
    ],
    curriculum: [
      'Level 1: Stance, Guard, Teep Kick, Roundhouse & Jab-Cross Mechanics',
      'Level 2: Dutch Kickboxing Combinations, Slip Drills & Low Shin Conditioning',
      'Level 3: Clinch Control, Thai Knee Strikes & Elbow Counters',
      'Level 4: Controlled Technical Sparring & Fighter Ring Preparation',
    ],
    equipment: [
      '16oz Boxing Gloves (12oz for light bagwork)',
      'Hand Wraps (4.5m stretch cotton)',
      'Shin Guards (for sparring classes)',
      'Mouthguard & Groin Guard',
    ],
    coach: {
      name: 'Coach Mark',
      role: 'Head Striking & Muay Thai Coach',
      bio: 'Former Western Cape Kickboxing Champion with over 15 years of corner experience preparing amateur and professional combatants.',
    },
    scheduleTimes: [
      'Mon & Wed: 17:30 – 18:30 (Fundamentals)',
      'Mon & Wed: 19:30 – 20:30 (Advanced & Sparring)',
      'Tue & Thu: 18:00 – 19:00 (Padwork & Clinch)',
      'Sat: 08:30 – 09:30 (Weekend Striking)',
    ],
    faqs: [
      { q: 'Do I need prior martial arts experience to join?', a: 'No! Over 60% of our new members start as complete beginners. Our fundamentals track breaks down footwork and strikes safely.' },
      { q: 'Will I get hit on my first day?', a: 'Absolutely not. Sparring is strictly optional and restricted to advanced technical sparring classes. Beginner classes focus exclusively on pads and heavy bags.' },
    ],
  },
  'brazilian-jiu-jitsu': {
    slug: 'brazilian-jiu-jitsu',
    slugAlt: 'bjj',
    title: 'Brazilian Jiu-Jitsu (BJJ)',
    seoTitle: 'Brazilian Jiu-Jitsu (BJJ) Gym Claremont, Cape Town | IMPAKT MMA',
    seoDesc: 'Train BJJ & Submission Grappling in Claremont, Cape Town. Authentic Gi and No-Gi ground control, joint locks, and chokeholds with black belt instruction.',
    h1: 'Brazilian Jiu-Jitsu & Grappling Academy in Claremont, Cape Town',
    category: 'Ground Grappling',
    tagline: 'The Gentle Art • Leverage, Chokes & Ground Dominance',
    heroImage: '/images/impakt-classes-4.jpg',
    overview: 'Brazilian Jiu-Jitsu relies on leverage, technique, and joint locks rather than brute strength. IMPAKT’s BJJ program covers both traditional Gi submission grappling and modern No-Gi wrestling.',
    benefits: [
      'Neutralize larger opponents through leverage, guard passing, and submission chokes',
      'Incredible core strength, mobility, and functional hip control',
      'Progress through official belt ranks under accredited IBJJF standards',
      'Access to daily open mat rolling sessions with high-level training partners',
    ],
    curriculum: [
      'White Belt Core: Guard retention, hip escapes, armbars & triangle chokes',
      'Blue Belt Passing: Pressure passing, side control escapes & back takes',
      'Purple Belt Submissions: Leg locks, kimuras, guillotine & wrist locks',
      'Advanced Sparring: Live rolling rounds and tournament rule preparation',
    ],
    equipment: [
      'BJJ Gi (Kimono) & White Belt (or No-Gi rashguard and board shorts)',
      'Mouthguard',
      'Grappling knee pads (optional)',
    ],
    coach: {
      name: 'Professor Carlos',
      role: 'BJJ 2nd Degree Black Belt',
      bio: 'IBJJF certified black belt with international competition experience, specializing in guard passing and submission chains.',
    },
    scheduleTimes: [
      'Mon & Wed: 18:30 – 19:30 (Gi BJJ)',
      'Tue & Thu: 06:00 – 07:00 (Morning Drill & Roll)',
      'Tue & Thu: 19:00 – 20:30 (No-Gi Submission Wrestling)',
      'Sat: 09:30 – 11:00 (All-Gym Open Mat)',
    ],
    faqs: [
      { q: 'What is the difference between Gi and No-Gi BJJ?', a: 'Gi BJJ is trained in a traditional heavy cotton kimono where grips on lapels and sleeves are allowed. No-Gi is trained in rashguards and shorts focusing on wrestling hooks and body control.' },
      { q: 'Can older adults learn BJJ safely?', a: 'Yes! BJJ is often called human chess because technique overcomes physical force. We have active practitioners in their 40s, 50s, and beyond.' },
    ],
  },
  'boxing-boxfit': {
    slug: 'boxing-boxfit',
    title: 'Boxing & BoxFit',
    seoTitle: 'Boxing & BoxFit Gym Claremont, Cape Town | IMPAKT MMA',
    seoDesc: 'Master Western boxing footwork, mitts, and BoxFit morning stamina in Claremont, Cape Town. High-energy fight fitness for all fitness levels.',
    h1: 'Western Boxing & BoxFit Academy in Claremont, Cape Town',
    category: 'Boxing & Fitness',
    tagline: 'Sweet Science • Technical Footwork, Speed & High-Endurance Fitness',
    heroImage: '/images/impakt-boxing-punch.jpg',
    overview: 'Experience the Sweet Science of Western Boxing combined with BoxFit conditioning. Learn head movement, heavy bag combinations, slip bag drills, and focus mitt work in our official elevated ring.',
    benefits: [
      'Develop lightning-fast hand speed, footwork, and slip movement',
      'Increase cardiovascular VO2 max stamina and explosive arm endurance',
      'Relieve daily stress while striking heavy bags with proper technique',
      'Full ring access under certified boxing mitt coaches',
    ],
    curriculum: [
      'Stance & Jab-Cross Rhythm',
      'Hooks, Uppercuts & Double Slip Counter Attacks',
      'Heavy Bag Intervals & Speed Bag Timing',
      'Focus Mitt Padwork & Ring Generalship',
    ],
    equipment: ['Boxing Gloves', 'Hand Wraps', 'Jump Rope', 'Cross-training shoes'],
    coach: {
      name: 'Coach Ray',
      role: 'Head Boxing & BoxFit Instructor',
      bio: 'Veteran boxing coach focusing on micro-adjustments in jab precision, slips, and heavy bag stamina.',
    },
    scheduleTimes: [
      'Mon & Thu: 06:00 – 07:00 (Morning BoxFit)',
      'Wed & Fri: 17:00 – 18:00 (Boxing Mitts & Bag Drills)',
    ],
    faqs: [
      { q: 'Is BoxFit suitable for weight loss?', a: 'Yes! BoxFit is one of the highest calorie-burning workouts available, burning between 600 to 900 calories per session while toning arms, shoulders, and core.' },
    ],
  },
  'kids-hybrid': {
    slug: 'kids-hybrid',
    title: 'Kids Martial Arts & Hybrid',
    seoTitle: 'Kids Martial Arts Classes Claremont, Cape Town | IMPAKT MMA',
    seoDesc: 'Build confidence, discipline, and anti-bullying self-defense for kids aged 5-14 in Claremont, Cape Town. Safe and empowering martial arts training.',
    h1: 'Kids Martial Arts & Hybrid Program in Claremont, Cape Town',
    category: 'Youth Development',
    tagline: 'Building Future Champions • Confidence, Discipline & Respect',
    heroImage: '/images/MARTIAL ARTS.jpg',
    overview: 'Our Kids Hybrid program blends basic Kickboxing striking and BJJ grappling defense into a fun, safe, and disciplined class structure for children aged 5 to 14.',
    benefits: [
      'Empower children with anti-bullying confidence and self-control',
      'Improve coordination, motor skills, agility, and posture',
      'Instill values of respect, perseverance, and goal setting',
      'Safe, supervised environment on high-density tatami safety mats',
    ],
    curriculum: [
      'Discipline & Bowing Protocol',
      'Self-Defense Distance Control & Voice Assertion',
      'Basic Striking & Breakfall Safety',
      'Fun Agility Obstacle Drills',
    ],
    equipment: ['IMPAKT Kids T-shirt', 'Clean Shorts/Gi Pants', 'Water Bottle'],
    coach: {
      name: 'Coach Sarah',
      role: 'Head Youth Martial Arts Instructor',
      bio: 'Certified child development specialist and black belt practitioner dedicated to youth empowerment through sports.',
    },
    scheduleTimes: [
      'Tue & Thu: 16:30 – 17:30 (Kids Ages 5-14)',
    ],
    faqs: [
      { q: 'What age groups are accepted?', a: 'We accept children from ages 5 up to 14. Classes are divided by skill level and height to ensure safe, age-appropriate pairing.' },
    ],
  },
  '12-week-transformation': {
    slug: '12-week-transformation',
    slugAlt: 'transformation',
    title: '12-Week Fighter Transformation',
    seoTitle: '12-Week Transformation Program Claremont | Fight Fitness Cape Town',
    seoDesc: 'Transform your body with our 12-week combat fitness program in Claremont, Cape Town. Fighter conditioning, strength, and body recomposition.',
    h1: '12-Week Fighter Fitness & Body Transformation in Claremont',
    category: 'Transformation Track',
    tagline: 'Get Fight-Fit Without Getting Hit • Shred Fat & Build Athletic Muscle',
    heroImage: '/images/impakt-classes-6.jpg',
    overview: 'A structured 12-week high-performance program designed to strip body fat, build lean muscle, and dramatically elevate your stamina using authentic combat sports conditioning.',
    benefits: [
      'Full body composition assessment & bi-weekly check-ins',
      'Customized macronutrient fight-nutrition guidelines',
      'High-intensity circuit training combining kettlebells, sleds, and heavy bags',
      'Guaranteed stamina and physique improvements',
    ],
    curriculum: [
      'Weeks 1-4: Anabolic Base Conditioning & Technique Foundation',
      'Weeks 5-8: High-Volume Fat Burn & Kettlebell Circuits',
      'Weeks 9-12: Peak Fighter Stamina & Final Recomposition',
    ],
    equipment: ['Training Shorts', 'Cross-training Shoes', 'Heart Rate Monitor (Optional)'],
    coach: {
      name: 'Coach Dino',
      role: 'Head Strength & Conditioning Director',
      bio: 'Certified strength and conditioning specialist with 20+ years guiding athletes to peak physical conditioning.',
    },
    scheduleTimes: [
      'Wed: 06:00 – 07:00 (Transformation Circuit)',
      'Sat: 11:00 – 12:00 (Weekly Check-in & Shred)',
    ],
    faqs: [
      { q: 'Is nutrition advice included in the 12-week program?', a: 'Yes! You receive custom macro targets and clean eating meal templates optimized for energy and body fat reduction.' },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programsData[slug];
  if (!program) return {};

  return {
    title: program.seoTitle,
    description: program.seoDesc,
    alternates: {
      canonical: `/classes/${program.slug}`,
    },
    openGraph: {
      title: `${program.title} | IMPAKT MMA Claremont`,
      description: program.seoDesc,
      url: `https://impaktmma.co.za/classes/${program.slug}`,
    },
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programsData[slug];

  if (!program) {
    return (
      <div className="py-20 text-center text-white">
        <h1 className="text-3xl font-heading font-bold mb-4">Program Not Found</h1>
        <Link href="/classes" className="text-red-400 underline">Back to Classes Schedule</Link>
      </div>
    );
  }

  const jsonLdData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: program.title,
      description: program.seoDesc,
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://impaktmma.co.za' },
        { '@type': 'ListItem', position: 2, name: 'Classes', item: 'https://impaktmma.co.za/classes' },
        { '@type': 'ListItem', position: 3, name: program.title, item: `https://impaktmma.co.za/classes/${program.slug}` },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />

      <div className="py-12 bg-mesh-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
              <li><Link href="/classes" className="hover:text-white transition-colors">Classes</Link></li>
              <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
              <li className="text-red-400 font-semibold" aria-current="page">{program.title}</li>
            </ol>
          </nav>

          {/* Hero Banner */}
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 mb-16">
            <div className="absolute inset-0 z-0">
              <img src={program.heroImage} alt={program.title} className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090A0F] via-[#090A0F]/80 to-transparent" />
            </div>

            <div className="relative z-10 p-8 sm:p-14 max-w-3xl">
              <span className="px-3.5 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-xs font-bold text-red-400 uppercase tracking-widest mb-4 inline-block">
                {program.category}
              </span>

              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider mb-4 leading-tight">
                {program.h1}
              </h1>

              <p className="text-red-400 font-heading font-bold uppercase tracking-widest text-sm mb-6">
                {program.tagline}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {program.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 transition-all border border-red-500/50 flex items-center gap-2"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Claim Free Trial Class</span>
                </Link>

                <Link
                  href="/membership"
                  className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  View Membership Rates
                </Link>
              </div>
            </div>
          </div>

          {/* Grid Breakdown: Benefits, Curriculum, Schedule, Coach */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            
            {/* Left Col: Benefits & Curriculum */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Program Benefits */}
              <div className="glass-panel p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-500" />
                  <span>Program Key Benefits</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training Curriculum */}
              <div className="glass-panel p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-500" />
                  <span>Syllabus & Technique Progression</span>
                </h2>
                <div className="space-y-4">
                  {program.curriculum.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-400 font-mono font-bold text-sm flex items-center justify-center border border-red-500/30">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-slate-200 font-medium">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="glass-panel p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-red-500" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-4">
                  {program.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                      <h4 className="font-heading font-bold text-white uppercase text-base">{faq.q}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Schedule & Equipment Sidebar */}
            <div className="space-y-8">
              
              {/* Class Schedule Times */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>Weekly Class Times</span>
                </h3>
                <div className="space-y-3 text-xs">
                  {program.scheduleTimes.map((t, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/5 text-slate-300 font-mono">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Equipment */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-4">
                  Required Gear
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {program.equipment.map((e, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coach Bio */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-base">{program.coach.name}</h4>
                    <span className="text-xs text-red-400">{program.coach.role}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{program.coach.bio}</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}
