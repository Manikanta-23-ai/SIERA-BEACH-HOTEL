import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { HOTEL_INFO } from '../data/hotelData';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Top Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
            : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm shrink-0"
            aria-label="Siera Beach Hotel Homepage"
          >
            <Logo
              theme={isScrolled ? 'light' : 'dark'}
              size="sm"
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-amber-500 ${
                  isScrolled ? 'text-slate-700' : 'text-slate-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Contact */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.phoneTel}`}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'text-slate-700 hover:text-slate-900 bg-stone-100'
                  : 'text-slate-200 hover:text-white bg-white/10 backdrop-blur-sm'
              }`}
              title="Call Front Desk directly"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{HOTEL_INFO.phoneRaw}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-cyan-900 hover:bg-cyan-950 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 border border-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              Enquire Stay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-cyan-900 rounded-md whitespace-nowrap"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-slate-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-full bg-slate-950/98 text-white border-b border-slate-800 shadow-2xl p-6 transition-all animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-800/80 text-slate-200 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 flex flex-col gap-3">
            <a
              href={`tel:${HOTEL_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium text-slate-200"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Front Desk: {HOTEL_INFO.phoneRaw}</span>
            </a>

            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Siera Beach Hotel, I would like to enquire about room availability and tariffs.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Enquiry</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 px-4 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white text-sm font-semibold text-center transition-colors"
            >
              Compose Stay Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
