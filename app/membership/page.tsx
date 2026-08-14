'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Shield, Check, Flame, Star, HelpCircle, Zap } from 'lucide-react';
import FreeTrialModal from '@/components/FreeTrialModal';
import JsonLd from '@/components/JsonLd';

const pricingPlans = [
  {
    name: 'Day Pass / Drop-In',
    price: 'R100',
    period: 'per session',
    badge: 'Flexible Access',
    popular: false,
    desc: 'Perfect for visitors, casual trainers, or trying out a single discipline session.',
    features: [
      'Access to any 1 scheduled group class',
      'Full ring and mat floor access',
      'Complimentary glove/gear loaner',
      'Locker room & hot shower access',
    ],
    cta: 'Claim Drop-In Pass',
  },
  {
    name: 'Unlimited Fighter Membership',
    price: 'R850',
    period: 'per month',
    badge: 'Best Value',
    popular: true,
    desc: 'Our most popular all-access package for serious combat athletes and fitness enthusiasts.',
    features: [
      'UNLIMITED access to all Muay Thai, BJJ, Boxing & BoxFit classes',
      'Daily Open Mat & Free Weights floor access',
      '10% discount on sports massage recovery treatments',
      'No long-term lock-in contract (month-to-month)',
      'Free IMPAKT Academy fight shirt upon signup',
    ],
    cta: 'Join Unlimited Plan',
  },
  {
    name: 'Student & Women Special',
    price: 'R700',
    period: 'per month',
    badge: 'Discounted',
    popular: false,
    desc: 'Dedicated special rate for active university students (UCT / Stellenbosch) and women trainers.',
    features: [
      'UNLIMITED group classes across all disciplines',
      'Full mat and weight floor access',
      'Valid student ID required at registration',
      'Month-to-month flexibility',
    ],
    cta: 'Claim Student Rate',
  },
  {
    name: '1-on-1 Private Fighter PT',
    price: 'R450',
    period: 'per 60min session',
    badge: 'Pro Coaching',
    popular: false,
    desc: 'Dedicated private coaching tailored precisely to your striking, grappling, or fight prep goals.',
    features: [
      '1-on-1 focus mitts & Thai padwork',
      'Customized video analysis & technique correction',
      'Flexible scheduling (morning or evening)',
      'Custom nutrition & weight-cut plan',
    ],
    cta: 'Book Private Coach',
  },
];

export default function MembershipPage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const jsonLdData = [
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'IMPAKT MMA Membership Plans',
      itemListElement: pricingPlans.map((plan, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: plan.name,
          description: plan.desc,
        },
        price: plan.price.replace('R', ''),
        priceCurrency: 'ZAR',
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://impaktmma.co.za' },
        { '@type': 'ListItem', position: 2, name: 'Membership', item: 'https://impaktmma.co.za/membership' },
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
              <li className="text-red-400 font-semibold" aria-current="page">Membership</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Transparent Pricing & Plans
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider mb-4">
              MMA Memberships, Rates & Drop-In Fees in Claremont, Cape Town
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              No hidden signup fees. No predatory lock-in contracts. Choose flexible month-to-month plans or drop in anytime for R100.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'border-red-500 bg-gradient-to-b from-[#181B2B] to-[#0E101A] shadow-2xl shadow-red-950/60 scale-105 z-10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-600 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white uppercase mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-heading font-extrabold text-white">{plan.price}</span>
                    <span className="text-xs text-slate-400">{plan.period}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 border-b border-white/10 pb-4">
                    {plan.desc}
                  </p>

                  <ul className="space-y-3 mb-8 text-xs text-slate-300">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => setTrialModalOpen(true)}
                    className={`w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-xl shadow-red-600/40 border border-red-500/50'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Membership FAQ Accordion */}
          <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 mb-16">
            <h2 className="text-2xl font-heading font-bold text-white uppercase mb-8 text-center flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-red-500" />
              <span>Membership FAQ</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-white uppercase text-base mb-1">
                  Are there any hidden joining fees?
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Zero hidden fees. We do not charge registration or joining fees. You only pay for your selected monthly package or drop-in pass.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white uppercase text-base mb-1">
                  Am I tied into a long-term contract?
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No. All IMPAKT memberships are month-to-month. If you need to pause or cancel due to travel or work, simply give us 14 days written notice.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white uppercase text-base mb-1">
                  Can I try a class before committing?
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Yes! We offer a 100% Free 1-Day Trial Pass for any new Cape Town resident wanting to experience our coaches and facility before signing up.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <FreeTrialModal isOpen={trialModalOpen} onClose={() => setTrialModalOpen(false)} />
    </>
  );
}
