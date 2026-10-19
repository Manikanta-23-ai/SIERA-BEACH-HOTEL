import React from 'react';
import { VERIFIED_AMENITIES } from '../data/hotelData';
import {
  Waves,
  Wind,
  Wifi,
  Car,
  Clock,
  Sparkles,
  Building2,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';

export const Facilities: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Waves: <Waves className="w-5 h-5" />,
    Wind: <Wind className="w-5 h-5" />,
    Wifi: <Wifi className="w-5 h-5" />,
    Car: <Car className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Building2: <Building2 className="w-5 h-5" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  };

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-800 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Guest Comfort</span>
            <span aria-hidden="true">·</span>
            <span>Verified Property Features</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight text-balance mb-4">
            Essential Amenities for a Relaxed Coastal Stay
          </h2>

          <p className="text-slate-600 text-base sm:text-lg text-balance font-light">
            We focus on genuine comfort, cleanliness, and seamless service. Every listed facility is verified at the property to ensure your stay is peaceful and hassle-free.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs hover:border-cyan-700/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-cyan-900 flex items-center justify-center mb-4">
                  {iconMap[amenity.iconName] || <Sparkles className="w-5 h-5" />}
                </div>

                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {amenity.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Verified Facility</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Transparency Box */}
        <div className="mt-12 p-6 rounded-2xl bg-cyan-950 text-white max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-xl font-semibold text-amber-200">
                Special Requests or Extended Stays?
              </h4>
              <p className="text-xs text-slate-300 max-w-xl">
                Need extra bedding, pet travel guidelines, early check-in, or airport pick-up assistance in Visakhapatnam? Contact the hotel front desk directly.
              </p>
            </div>

            <a
              href="tel:+919908302666"
              className="px-5 py-2.5 bg-amber-300 hover:bg-amber-400 text-slate-950 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Call +91 99083 02666
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
