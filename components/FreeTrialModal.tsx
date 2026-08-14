'use client';

import React, { useState } from 'react';
import { X, Flame, CheckCircle2, Calendar, Clock, User, Mail, Phone, ShieldCheck } from 'lucide-react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeTrialModal({ isOpen, onClose }: FreeTrialModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'muay-thai',
    preferredDay: 'Monday',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#0F111A] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-red-950/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow header */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-red-500">
              <Flame className="w-4 h-4 fill-red-500 animate-pulse" />
              <span>Zero Risk • Free 1-Day Access</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 uppercase">
              Claim Your Free Trial Pass
            </h2>

            <p className="text-slate-400 text-sm mb-6">
              Experience Claremont’s top combat sports facility. Train under expert coaches with zero commitment required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Hendricks"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="liam@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+27 82 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Target Program
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full bg-[#161824] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="muay-thai">Muay Thai Kickboxing</option>
                    <option value="bjj">Brazilian Jiu-Jitsu (BJJ)</option>
                    <option value="boxing">Boxing & BoxFit</option>
                    <option value="kids">Kids Martial Arts</option>
                    <option value="12-week">12-Week Transformation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Day
                  </label>
                  <select
                    value={formData.preferredDay}
                    onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                    className="w-full bg-[#161824] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-base uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 transition-all border border-red-500/50 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>Confirm Free Pass Booking</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                🔒 We respect your privacy. No credit card or payment required. Free pass valid at Claremont gym floor.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-2xl font-heading font-bold text-white uppercase">
              Free Pass Reserved!
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
              Welcome to IMPAKT MMA, <strong className="text-white">{formData.name}</strong>! We’ve sent your confirmation pass to{' '}
              <span className="text-red-400">{formData.email}</span>.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-left space-y-2 text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Gym Location:</span>
                <span className="font-semibold text-white">Claremont, Cape Town</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Selected Discipline:</span>
                <span className="font-semibold text-red-400 uppercase">{formData.discipline}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Reserved Day:</span>
                <span className="font-semibold text-white">{formData.preferredDay}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              Close & Back To Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
