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
  icon: string;
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
    seoTitle: 'Muay Thai Kickboxing Classes in Claremont | IMPAKT Academy Cape Town',
    seoDesc: 'Master the Art of Eight Limbs at IMPAKT Academy in Claremont, Cape Town. Train authentic Muay Thai kickboxing, clinch mastery, heavy pad work, and ring craft since 2001.',
    h1: 'Muay Thai Kickboxing & Authentic Striking Academy in Claremont, Cape Town',
    category: 'Striking Arts',
    tagline: 'The Art of Eight Limbs • Power, Technique & Unstoppable Cardio',
    heroImage: '/images/impakt-kickboxing-strike.jpg',
    icon: '/images/impakt-class-icon-mt.png',
    overview: 'Muay Thai Kickboxing at IMPAKT Academy in Claremont, Cape Town is a traditional combat striking system known as the "Art of Eight Limbs", utilizing punches, kicks, knees, and elbow strikes in combination with stand-up clinch wrestling. Established in 2001, IMPAKT’s striking curriculum separates technical combat mechanics from generic fitness, providing authentic, fighter-grade instruction inside a full-size regulation boxing ring and heavy-bag facility.',
    benefits: [
      'Master power striking with shins, elbows, knees, and fists in the regulation boxing ring',
      'Burn up to 800+ calories per high-intensity 60-minute technical striking session',
      'Sharpen mental toughness, reaction speed, and spatial awareness with certified coaches',
      'Suitable for zero-experience beginners up to active fight camp competitors',
    ],
    curriculum: [
      'Level 1: Stance, Guard, Teep Kick, Roundhouse & Jab-Cross Mechanics',
      'Level 2: Dutch Kickboxing Combinations, Slip Drills & Low Shin Conditioning',
      'Level 3: Clinch Control (Plum), Thai Knee Strikes & Elbow Counters',
      'Level 4: Controlled Technical Sparring & Fighter Ring Preparation',
    ],
    equipment: [
      '14oz-16oz Boxing Gloves (12oz for light bagwork)',
      'Hand Wraps (4.5m stretch cotton)',
      'Muay Thai Shin Guards (for technical partner drills)',
      'Mouthguard & Groin Guard',
    ],
    coach: {
      name: 'Coach Mark',
      role: 'Head Striking & Muay Thai Coach',
      bio: 'Former Western Cape Kickboxing Champion with over 15 years of corner experience preparing amateur and professional combatants.',
    },
    scheduleTimes: [
      'Mon & Wed: 17:30 – 18:30 (Fundamentals & Bag Drills)',
      'Mon & Wed: 19:30 – 20:30 (Advanced & Sparring)',
      'Tue & Thu: 18:00 – 19:00 (Thai Pads & Clinch)',
      'Sat: 08:30 – 09:30 (Weekend Striking & Conditioning)',
    ],
    faqs: [
      {
        q: 'How is Muay Thai different from BoxFit or standard Kickboxing?',
        a: 'Muay Thai includes elbows, knees, and stand-up clinch wrestling (the Art of Eight Limbs) in addition to punches and kicks. While BoxFit is a non-contact cardio workout, our Muay Thai classes teach genuine combat mechanics, defense, pad holding, and optional technical sparring.'
      },
      {
        q: 'Do I need my own boxing gloves and shin guards to start?',
        a: 'Beginners can start with comfortable athletic apparel and hand wraps. For hygiene and safety, members progressing to pad work and partner drills will need 14oz–16oz boxing gloves and Muay Thai shin guards, which can be acquired through our pro shop.'
      },
      {
        q: 'Will I be forced to spar in Muay Thai classes?',
        a: 'No. Live sparring is completely optional and strictly reserved for intermediate and advanced students who have demonstrated defensive control and possess full protective gear (mouthguard, headgear, shin guards, 16oz gloves).'
      },
      {
        q: 'Can I attend a single Muay Thai session without a contract?',
        a: 'Yes! IMPAKT Academy welcomes visitors and drop-ins with a standard R100 single-session day pass for any scheduled class.'
      },
    ],
  },
  'brazilian-jiu-jitsu': {
    slug: 'brazilian-jiu-jitsu',
    slugAlt: 'bjj',
    title: 'Brazilian Jiu-Jitsu (BJJ)',
    seoTitle: 'Brazilian Jiu-Jitsu & Submission Grappling in Claremont | IMPAKT Cape Town',
    seoDesc: 'Train Brazilian Jiu-Jitsu (Gi & No-Gi) and submission grappling at IMPAKT Academy in Claremont, Cape Town. Master takedowns, guard retention, and joint locks on professional tatami mats.',
    h1: 'Brazilian Jiu-Jitsu & Grappling Academy in Claremont, Cape Town',
    category: 'Ground Grappling',
    tagline: 'The Gentle Art • Leverage, Chokes & Ground Dominance',
    heroImage: '/images/impakt-classes-4.jpg',
    icon: '/images/impakt-class-icon-jj.png',
    overview: 'Brazilian Jiu-Jitsu (BJJ) and Submission Grappling at IMPAKT Academy in Claremont, Cape Town is a ground-fighting martial art focused on leverage, positional dominance, joint locks, and chokes. Founded on the principle that technique overcomes brute strength, IMPAKT’s grappling curriculum offers structured training in both traditional Gi BJJ and fast-paced No-Gi Submission Wrestling on Olympic-grade tatami mats.',
    benefits: [
      'Neutralize larger opponents through leverage, guard passing, and submission chokes',
      'Incredible core strength, mobility, and functional hip control on high-density tatami mats',
      'Progress through official belt ranks under accredited IBJJF standards',
      'Access to daily open mat rolling sessions with experienced, respectful training partners',
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
      {
        q: 'What should I wear to my first BJJ class at IMPAKT Academy?',
        a: 'For your first No-Gi class, wear a clean athletic t-shirt or rashguard and shorts without pockets or metal zippers. If attending a Gi class, a standard BJJ or Judo kimono is required; beginner loaner gis or assistance with acquiring gear is available at the front desk.'
      },
      {
        q: 'Is Brazilian Jiu-Jitsu safe for older adults and beginners?',
        a: 'Yes! Jiu-Jitsu is one of the safest martial arts because training is conducted without concussive strikes. Sparring (rolling) allows athletes to practice at 100% effort while the tap-out rule ensures immediate cessation of submissions before injury occurs.'
      },
      {
        q: 'How often should I train Brazilian Jiu-Jitsu to make steady progress?',
        a: 'Practicing 2 to 3 sessions per week provides a consistent learning curve for technical retention, physical conditioning, and positional fluency. Advanced practitioners and competitors typically train 4 to 6 times per week.'
      },
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
    icon: '/images/impakt-class-icon-bx.png',
    overview: 'Experience the Sweet Science of Western Boxing combined with high-intensity BoxFit conditioning. Learn head movement, heavy bag combinations, slip bag drills, and focus mitt work in our official elevated boxing ring.',
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
      {
        q: 'Is BoxFit suitable for weight loss?',
        a: 'Yes! BoxFit is one of the highest calorie-burning workouts available, burning between 600 to 900 calories per session while toning arms, shoulders, and core without any sparring or head contact.'
      },
      {
        q: 'Can beginners join Boxing & BoxFit classes?',
        a: 'Absolutely. Every movement is demonstrated by our coaches with beginner modifications provided for pacing and form.'
      }
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
    icon: '/images/impakt-class-icon-kb.png',
    overview: 'Our Kids Hybrid Impakt Systems program blends basic Kickboxing striking and BJJ grappling defense into a fun, safe, and disciplined class structure for children aged 5 to 14 on shock-absorbent tatami mats.',
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
      {
        q: 'What age groups are accepted into the Kids Hybrid program?',
        a: 'We accept children from ages 5 up to 14. Classes are divided by skill level and age to ensure safe, engaging, and age-appropriate pairing.'
      },
    ],
  },
  '12-week-transformation': {
    slug: '12-week-transformation',
    slugAlt: 'transformation',
    title: '12-Week Fighter Transformation',
    seoTitle: '12-Week Fighter’s Fitness Transformation | IMPAKT Academy Claremont',
    seoDesc: 'Transform your body with the 12-Week Fighter’s Fitness Package at IMPAKT Academy in Claremont, Cape Town. Combat conditioning, strength periodization, and elite coaching for R2,800/month.',
    h1: '12-Week Fighter Fitness & Body Transformation in Claremont, Cape Town',
    category: 'Transformation Track',
    tagline: 'Get Fight-Fit Without Getting Hit • Shred Fat & Build Athletic Muscle',
    heroImage: '/images/impakt-classes-6.jpg',
    icon: '/images/impakt-class-icon-training.png',
    overview: 'The 12-Week Fighter’s Fitness Package at IMPAKT Academy in Claremont, Cape Town is an intensive, multi-phase body recomposition and athletic conditioning program. Priced at R2,800 per month, this curriculum applies combat athlete training methodologies—combining periodized resistance training, high-output metabolic conditioning, boxing drills, and nutritional accountability—to strip body fat, build functional muscle, and peak cardiovascular stamina.',
    benefits: [
      'Full body composition assessment & bi-weekly check-ins',
      'Customized macronutrient fight-nutrition guidelines and caloric tracking frameworks',
      'High-intensity circuit training combining kettlebells, sleds, free weights, and heavy bags',
      'Guaranteed stamina, strength, and body composition improvements with direct coach accountability',
    ],
    curriculum: [
      'Weeks 1-4: Foundation, Core Stability & Aerobic Base Conditioning',
      'Weeks 5-8: Hypertrophy, Explosive Power & Heavy-Bag Interval Output',
      'Weeks 9-12: Championship Conditioning, Sled Drills & Final Recomposition',
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
      {
        q: 'Do I have to spar or fight during the 12-Week Fighter’s Fitness Package?',
        a: 'No. The 12-Week Fighter’s Fitness Package uses the conditioning, strength, and bag training protocols of combat athletes to transform your body without any physical sparring or contact fighting.'
      },
      {
        q: 'What is the cost of the 12-Week Fighter’s Fitness Package?',
        a: 'The package is priced at R2,800 per month over a 3-month (12-week) commitment period. This includes full access to gym facilities, structured programming, group classes (including BoxFit), and biometric tracking.'
      },
      {
        q: 'Is this program suitable for complete beginners who are out of shape?',
        a: 'Yes. Every workout and resistance load is scaled to your initial fitness baseline during Phase 1. Our experienced coaches guide your form, cadence, and recovery to ensure progressive results without burnout or injury.'
      },
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

  const jsonLdData: Record<string, unknown>[] = [
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
    ...(program.faqs && program.faqs.length > 0 ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: program.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    }] : []),
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
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-xs font-bold text-red-400 uppercase tracking-widest inline-block">
                  {program.category}
                </span>
                <div className="w-9 h-9 rounded-lg bg-black/50 border border-white/20 p-1.5 flex items-center justify-center backdrop-blur-md">
                  <img
                    src={program.icon}
                    alt=""
                    className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,30,39,0.7)]"
                  />
                </div>
              </div>

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
