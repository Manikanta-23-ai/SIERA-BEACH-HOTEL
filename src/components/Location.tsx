import React from 'react';
import { HOTEL_INFO, NEARBY_ATTRACTIONS, HOTEL_IMAGES } from '../data/hotelData';
import { MapPin, Navigation, ExternalLink, Compass, Car, Train, Plane } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-800 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Destination</span>
            <span aria-hidden="true">·</span>
            <span>Visakhapatnam Coastline</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight text-balance mb-4">
            Rushikonda: Nature, Sea & Serenity
          </h2>

          <p className="text-slate-600 text-base sm:text-lg text-balance font-light">
            Situated on the prestigious coastal belt of Visakhapatnam, Rushikonda is celebrated for its pristine waters, verdant hill slopes, and refreshing sea air. Siera Beach Hotel places you just moments from the shoreline.
          </p>
        </div>

        {/* Location Grid: Map & Arrival Info + Nearby Landmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Destination Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
                    Hotel Address
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-slate-900">
                    {HOTEL_INFO.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-cyan-800 shrink-0 mt-0.5" />
                    <span>{HOTEL_INFO.address.full}</span>
                  </p>
                </div>

                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-900 hover:bg-cyan-950 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Visual Map / Aerial Preview Box */}
              <div className="relative rounded-xl overflow-hidden h-64 sm:h-72 border border-stone-200 bg-stone-100 group mb-6">
                <img
                  src={HOTEL_IMAGES.coastalVista}
                  alt="Rushikonda Beach aerial coastal panoramic landscape"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-amber-200 font-medium">
                      Rushikonda Coastal Highway
                    </p>
                    <p className="text-sm font-serif font-semibold">
                      Bay of Bengal Scenic Drive
                    </p>
                  </div>
                  <a
                    href={HOTEL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/20 backdrop-blur-md hover:bg-white/30 text-white transition-colors"
                    title="Open in Google Maps"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Transit & Commute Distances */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Reaching the Property
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/80">
                    <div className="flex items-center gap-2 text-cyan-900 mb-1">
                      <Train className="w-4 h-4" />
                      <span className="text-xs font-semibold">Vizag Railway Station</span>
                    </div>
                    <p className="text-xs text-slate-500">~16 km · 30 min cab ride</p>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/80">
                    <div className="flex items-center gap-2 text-cyan-900 mb-1">
                      <Plane className="w-4 h-4" />
                      <span className="text-xs font-semibold">Vizag Airport (VTZ)</span>
                    </div>
                    <p className="text-xs text-slate-500">~22 km · 40 min drive</p>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/80">
                    <div className="flex items-center gap-2 text-cyan-900 mb-1">
                      <Car className="w-4 h-4" />
                      <span className="text-xs font-semibold">Beach Road Drive</span>
                    </div>
                    <p className="text-xs text-slate-500">Smooth 4-lane coastal highway</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Nearby Coastal & Cultural Attractions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-slate-900 mb-2">
                  Nearby Highlights & Attractions
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Explore famous coastal wonders, heritage Buddhist sites, and viewpoints all within short driving distance.
                </p>

                <div className="space-y-4">
                  {NEARBY_ATTRACTIONS.map((attraction) => (
                    <div
                      key={attraction.name}
                      className="p-3.5 rounded-xl border border-stone-100 hover:border-cyan-800/30 transition-colors bg-stone-50/50"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-semibold text-slate-900">
                          {attraction.name}
                        </h4>
                        <span className="text-xs font-semibold text-cyan-800">
                          {attraction.distance}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-1.5">
                        {attraction.description}
                      </p>
                      <span className="text-[11px] font-medium text-amber-700">
                        {attraction.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-center">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-900 hover:text-cyan-700 underline underline-offset-4"
                >
                  <span>Open Siera Beach Hotel on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
