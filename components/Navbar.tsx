'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Phone, Menu, X, Flame, ChevronRight } from 'lucide-react';
import FreeTrialModal from './FreeTrialModal';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Classes & Schedule', href: '/classes' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-red-950/20'
            : 'bg-gradient-to-b from-[#090A0F]/90 via-[#090A0F]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/impakt-logo.png"
              alt="IMPAKT Academy of Mixed Martial Arts"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-red-600 rounded-full shadow-[0_0_8px_#FF1E27]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+27216711661"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-white/5 px-3 py-2 rounded-lg border border-white/10 hover:border-red-500/50"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>+27 21 671 1661</span>
            </a>

            <button
              onClick={() => setTrialModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all border border-red-500/50 active:scale-95"
            >
              <Flame className="w-4 h-4 fill-white animate-pulse" />
              <span>Book Free Trial</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setTrialModalOpen(true)}
              className="px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 transition-colors"
            >
              Free Pass
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090A0F]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-lg font-heading tracking-wide transition-all ${
                    isActive
                      ? 'bg-red-600/20 text-red-400 border border-red-500/30'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 opacity-60" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <a
              href="tel:+27216711661"
              className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-medium"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call Gym: +27 21 671 1661</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setTrialModalOpen(true);
              }}
              className="w-full py-4 rounded-xl text-center font-heading font-bold text-lg uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 shadow-xl shadow-red-600/30"
            >
              Claim Free Trial Pass
            </button>
          </div>
        </div>
      )}

      {/* Free Trial Modal */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </>
  );
}
