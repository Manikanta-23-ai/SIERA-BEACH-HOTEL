import React from 'react';
import { HOTEL_INFO, buildWhatsAppEnquiryUrl, HOTEL_IMAGES } from '../data/hotelData';
import { Phone, MessageCircle, MapPin, ChevronDown, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-16">
      {/* Cinematic Hero Background Image with Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOTEL_IMAGES.heroSunset}
          alt="Panoramic coastal sunset over Rushikonda Beach and the Bay of Bengal"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim to guarantee 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Pre-header Location Label (Clean unboxed text) */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-amber-200/90 mb-4">
          <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span>Rushikonda, Visakhapatnam</span>
          <span aria-hidden="true">·</span>
          <span>Andhra Pradesh</span>
        </div>

        {/* Primary Hotel Brand Name */}
        <p className="font-serif text-lg sm:text-2xl tracking-[0.3em] uppercase text-slate-200 mb-2 font-semibold">
          {HOTEL_INFO.name}
        </p>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl text-balance drop-shadow-sm mb-6">
          {HOTEL_INFO.headline}
        </h1>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          Where gentle Bay of Bengal breezes meet warm coastal hospitality. Wake up to expansive ocean vistas, thoughtful comforts, and the tranquil pace of Rushikonda.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* Primary Action: Enquiry */}
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-amber-300 hover:bg-amber-400 rounded-lg shadow-lg shadow-amber-950/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap"
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-slate-900" />
              <span>Enquire Room Tariff & Dates</span>
            </span>
          </button>

          {/* WhatsApp Direct Action (Verified International Format) */}
          <a
            href={buildWhatsAppEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-emerald-700/90 hover:bg-emerald-600 rounded-lg backdrop-blur-sm border border-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span className="flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Direct</span>
            </span>
          </a>

          {/* Direct Phone Call */}
          <a
            href={`tel:${HOTEL_INFO.phoneTel}`}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 rounded-lg backdrop-blur-sm border border-white/20 transition-all whitespace-nowrap"
            title="Call hotel desk"
          >
            <span className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-amber-300" />
              <span>{HOTEL_INFO.phoneRaw}</span>
            </span>
          </a>
        </div>

        {/* Key Verified Highlights (Unboxed clean metadata) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15 text-left w-full max-w-4xl">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-amber-200/80 font-medium block">
              Prime Setting
            </span>
            <span className="text-sm sm:text-base font-semibold text-white block">
              Rushikonda Beachfront
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-amber-200/80 font-medium block">
              Accommodations
            </span>
            <span className="text-sm sm:text-base font-semibold text-white block">
              Deluxe Ocean View
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-amber-200/80 font-medium block">
              Comfort
            </span>
            <span className="text-sm sm:text-base font-semibold text-white block">
              100% Air Conditioned
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-amber-200/80 font-medium block">
              Hospitality
            </span>
            <span className="text-sm sm:text-base font-semibold text-white block">
              24/7 Front Desk
            </span>
          </div>
        </div>
      </div>

      {/* Down Chevron link */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 hover:text-amber-300 transition-colors p-2 z-10"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
