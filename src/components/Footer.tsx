import React from 'react';
import { HOTEL_INFO, buildWhatsAppEnquiryUrl } from '../data/hotelData';
import { Logo } from './Logo';
import { Phone, MapPin, Mail, MessageCircle, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-start">
              <Logo theme="dark" size="md" />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm pt-2">
              A serene coastal haven in Rushikonda, Visakhapatnam. Offering sea-facing accommodations, modern architecture, and warm hospitality along Andhra Pradesh's scenic Bay of Bengal shoreline.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={buildWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={`tel:${HOTEL_INFO.phoneTel}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>{HOTEL_INFO.phoneRaw}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block">
              Explore Property
            </span>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Siera Beach Hotel
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Rooms & Ocean Suites
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Verified Facilities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Showcase
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Rushikonda Location & Travel
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Reservations & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Hotel Contact & Address */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block">
              Direct Contact
            </span>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Rushikonda, Visakhapatnam, Andhra Pradesh 530045, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phoneTel}`}
                  className="font-mono hover:text-white transition-colors"
                >
                  {HOTEL_INFO.phoneRaw} ({HOTEL_INFO.phoneDisplay})
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono text-slate-400">{HOTEL_INFO.email}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <ExternalLink className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white transition-colors"
                >
                  View on Google Maps Directions
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-slate-400 leading-normal">
                Check-in: 12:00 PM · Check-out: 11:00 AM · Government ID verification required upon arrival.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Hotel Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} SIERA BEACH HOTEL. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span className="text-slate-400">Rushikonda, Visakhapatnam, Andhra Pradesh</span>
          </div>

          <div className="text-center sm:text-right text-xs text-slate-500">
            <span>Boutique Hospitality along the Bay of Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
