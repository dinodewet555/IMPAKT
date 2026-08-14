'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, MapPin, Phone, Mail, Clock, ExternalLink, Flame, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);

  useEffect(() => {
    // Calculate live status in Cape Town timezone (UTC+2 / SAST)
    const checkCapeTownStatus = () => {
      const now = new Date();
      // Convert current date to Cape Town local time string/hours
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Johannesburg',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      };

      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);
      
      let day = '';
      let hour = 0;
      let minute = 0;

      parts.forEach((p) => {
        if (p.type === 'weekday') day = p.value;
        if (p.type === 'hour') hour = parseInt(p.value, 10);
        if (p.type === 'minute') minute = parseInt(p.value, 10);
      });

      const currentMinutes = hour * 60 + minute;

      if (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day)) {
        // Mon-Fri: 06:00 (360m) - 21:00 (1260m)
        setIsOpenNow(currentMinutes >= 360 && currentMinutes < 1260);
      } else {
        // Sat-Sun: 08:00 (480m) - 13:00 (780m)
        setIsOpenNow(currentMinutes >= 480 && currentMinutes < 780);
      }
    };

    checkCapeTownStatus();
    const interval = setInterval(checkCapeTownStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#06070B] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Operational Status */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                <Shield className="w-6 h-6 fill-current text-white" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-wider text-white">
                IMPAKT <span className="text-red-500">MMA</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              Cape Town’s premier combat sports facility established in 2001. Specialized training in Muay Thai, Brazilian Jiu-Jitsu, Boxing, and Athletic Conditioning in Claremont.
            </p>

            {/* Real-Time Operational Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                {isOpenNow === true ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </>
                ) : (
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                )}
              </span>
              <span className="text-slate-300">
                Gym Status:{' '}
                {isOpenNow === null ? (
                  <span className="text-slate-400">Checking hours...</span>
                ) : isOpenNow ? (
                  <span className="text-emerald-400 font-bold uppercase tracking-wider">
                    Open Now (Claremont)
                  </span>
                ) : (
                  <span className="text-amber-400 font-bold uppercase tracking-wider">
                    Closed (Opens Next Session)
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wider border-b border-red-600/40 pb-2 inline-block">
              Programs & Silos
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/classes/muay-thai-kickboxing" className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Muay Thai & Kickboxing
                </Link>
              </li>
              <li>
                <Link href="/classes/brazilian-jiu-jitsu" className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Brazilian Jiu-Jitsu (BJJ)
                </Link>
              </li>
              <li>
                <Link href="/classes/boxing-boxfit" className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Boxing & BoxFit Conditioning
                </Link>
              </li>
              <li>
                <Link href="/classes/kids-hybrid" className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Kids Martial Arts & Hybrid
                </Link>
              </li>
              <li>
                <Link href="/classes/12-week-transformation" className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  12-Week Fighter Fitness
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & NAP (SEO) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wider border-b border-red-600/40 pb-2 inline-block">
              Location & Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-medium block">IMPAKT Academy MMA</strong>
                  <span>Main Road, Claremont</span>
                  <br />
                  <span>Cape Town, Western Cape, 7708</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <a href="tel:+27216711661" className="hover:text-white transition-colors">
                  +27 21 671 1661
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a href="mailto:dk@impaktsa.com" className="hover:text-white transition-colors">
                  dk@impaktsa.com
                </a>
              </div>

              <a
                href="https://maps.google.com/?q=Claremont+Cape+Town+IMPAKT+MMA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold pt-1"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 4: Operational Hours Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wider border-b border-red-600/40 pb-2 inline-block">
              Operating Hours (SAST)
            </h3>
            <div className="glass-panel p-3.5 rounded-xl text-xs space-y-2 border border-white/10">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-slate-300 font-medium">Monday – Friday</span>
                <span className="text-red-400 font-mono font-bold">06:00 – 21:00</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-slate-300 font-medium">Saturday</span>
                <span className="text-red-400 font-mono font-bold">08:00 – 13:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 font-medium">Sunday</span>
                <span className="text-red-400 font-mono font-bold">08:00 – 13:00</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full py-2.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                View Full Map & Contact Info
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} IMPAKT Academy of Mixed Martial Arts. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/membership" className="hover:text-slate-300 transition-colors">Pricing & Rates</Link>
            <Link href="/facilities" className="hover:text-slate-300 transition-colors">Gym Facilities</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Claremont Location</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
