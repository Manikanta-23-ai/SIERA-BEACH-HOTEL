import React from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { Building2, Compass, Waves } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Frame & Architectural Presence */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 group">
              <img
                src={HOTEL_IMAGES.exterior}
                alt="Contemporary multi-storey exterior facade of Siera Beach Hotel in Rushikonda"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Verified Property Marker */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold tracking-wide text-sm text-amber-200">
                    Siera Beach Hotel Property
                  </span>
                  <span className="text-stone-300">Rushikonda, Visakhapatnam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Category / Section Lead */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-800">
              <Compass className="w-3.5 h-3.5" />
              <span>About Siera Beach Hotel</span>
              <span aria-hidden="true">·</span>
              <span>Rushikonda</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-[1.15] text-balance">
              Thoughtful Coastal Living in the Heart of Rushikonda
            </h2>

            {/* Story Paragraphs */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Nestled along the scenic coastline of Rushikonda in Visakhapatnam, <strong className="text-slate-900 font-semibold">{HOTEL_INFO.name}</strong> offers guests a peaceful haven away from the bustling city center while keeping the beach just minutes away.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our contemporary multi-storey property is designed with geometric vertical louvers that harness refreshing coastal breezes, light-filled rooms with generous windows, and peaceful verandas adorned with natural greenery. Whether you are traveling for a weekend beach getaway, exploring Vizag's heritage coast, or seeking a restful workspace with ocean horizons, Siera Beach Hotel welcomes you with genuine Andhra hospitality.
            </p>

            {/* Key Verified Architecture & Hospitality Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-50 text-cyan-900 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Boutique Multi-Storey Stay
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Modern architecture equipped with elevator access to all floors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Proximity to Blue Flag Beach
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Positioned just moments from the serene waters and sands of Rushikonda.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Link */}
            <div className="pt-2">
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-900 hover:text-cyan-700 underline underline-offset-4 transition-colors"
              >
                <span>Discover our rooms and suites</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
