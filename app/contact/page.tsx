'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, CheckCircle2, Shield, ExternalLink } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  useEffect(() => {
    const checkCapeTownStatus = () => {
      const now = new Date();
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
        setIsOpenNow(currentMinutes >= 360 && currentMinutes < 1260);
      } else {
        setIsOpenNow(currentMinutes >= 480 && currentMinutes < 780);
      }
    };

    checkCapeTownStatus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const jsonLdData = [
    {
      '@context': 'https://schema.org',
      '@type': 'SportsActivityLocation',
      name: 'IMPAKT Academy of Mixed Martial Arts',
      telephone: '+27216711661',
      email: 'dk@impaktsa.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Claremont',
        addressLocality: 'Cape Town',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.9806,
        longitude: 18.4654,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://impaktmma.co.za' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://impaktmma.co.za/contact' },
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
              <li className="text-red-400 font-semibold" aria-current="page">Contact</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider mb-4">
              Contact IMPAKT MMA Academy in Claremont, Cape Town
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions about class schedules, student discounts, or personal training? Call our front desk or send us a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Left Col: Contact Form */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-heading font-bold text-white uppercase mb-4">
                    Send Us A Direct Message
                  </h2>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam Hendricks"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="liam@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+27 82 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#161824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Membership Rates">Membership Rates</option>
                      <option value="Private 1-on-1 Training">Private 1-on-1 PT Coaching</option>
                      <option value="Kids Martial Arts">Kids Martial Arts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we help you achieve your combat goals?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-heading font-bold text-base uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/40 border border-red-500/50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Message</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase">Message Sent Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A staff member will contact you shortly via email or phone.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs uppercase text-white bg-white/10 hover:bg-white/20"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Right Col: NAP Info, Hours & Map Integration */}
            <div className="space-y-8">
              
              {/* NAP & Status Card */}
              <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-bold text-white uppercase">Gym Location & Status</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold">
                    <span className={`h-2 w-2 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    <span className={isOpenNow ? 'text-emerald-400' : 'text-amber-400'}>
                      {isOpenNow ? 'OPEN NOW' : 'CLOSED NOW'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-medium block">IMPAKT Academy MMA</strong>
                      <span>Main Road, Claremont</span>
                      <br />
                      <span>Cape Town, Western Cape, 7708, South Africa</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-500 shrink-0" />
                    <a href="tel:+27216711661" className="hover:text-white transition-colors font-medium">
                      +27 21 671 1661
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-500 shrink-0" />
                    <a href="mailto:dk@impaktsa.com" className="hover:text-white transition-colors">
                      dk@impaktsa.com
                    </a>
                  </div>
                </div>

                {/* Operating Hours Table */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3">Official Hours (SAST)</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Monday – Friday:</span>
                      <span className="font-mono text-white font-semibold">06:00 – 21:00</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Saturday – Sunday:</span>
                      <span className="font-mono text-white font-semibold">08:00 – 13:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed Representation */}
              <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden relative h-64">
                <iframe
                  title="IMPAKT MMA Claremont Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13238.647573887192!2d18.4654!3d-33.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzUwLjIiUyAxOMKwMjcnNTUuNCJF!5e0!3m2!1sen!2sza!4v1600000000000!5m2!1sen!2sza"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-75 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4">
                  <a
                    href="https://maps.google.com/?q=Claremont+Cape+Town+IMPAKT+MMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}
