import React from 'react';
import { ROOMS, buildWhatsAppEnquiryUrl } from '../data/hotelData';
import { Bed, Users, Eye, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';

interface RoomsProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="rooms" className="py-20 sm:py-28 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-800 mb-3">
            <span>Accommodations</span>
            <span aria-hidden="true">·</span>
            <span>Siera Beach Hotel</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight text-balance mb-4">
            Rooms Designed for Quiet Coastal Rest
          </h2>

          <p className="text-slate-600 text-base sm:text-lg text-balance font-light">
            Each room is thoughtfully styled with clean contemporary finishes, individual air conditioning, and sweeping windows overlooking the Bay of Bengal coastline or lush tropical greenery.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-200 flex flex-col"
            >
              {/* Room Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-100 group">
                <img
                  src={room.image}
                  alt={room.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* View Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-amber-300" />
                  <span>{room.view}</span>
                </div>

                {/* Subtitle on image */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs text-amber-200/90 font-medium tracking-wide">
                    {room.subtitle}
                  </p>
                </div>
              </div>

              {/* Room Details Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Specs */}
                  <h3 className="font-serif text-2xl font-semibold text-slate-900 mb-2">
                    {room.name}
                  </h3>

                  {/* Bed & Occupancy Specs (Clean unboxed text) */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 mb-4 pb-4 border-b border-stone-100">
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-cyan-800" />
                      <span>{room.bedType}</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-cyan-800" />
                      <span>{room.occupancy}</span>
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Verified Features List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Verified Room Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {room.verifiedFeatures.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Block */}
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left w-full sm:w-auto">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                      Pricing & Availability
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      Contact for Direct Seasonal Rates
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {/* WhatsApp CTA */}
                    <a
                      href={buildWhatsAppEnquiryUrl({ roomName: room.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                      title="Enquire this room on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                      <span>WhatsApp</span>
                    </a>

                    {/* Enquiry Modal Button */}
                    <button
                      onClick={() => onOpenEnquiry(room.name)}
                      className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Enquire Dates</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note on Transparency & Rates */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-stone-200 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-normal">
            <strong className="text-slate-700 font-medium">Transparent Booking:</strong> Room tariffs fluctuate by season, weekend, and festival periods in Visakhapatnam. Direct enquiry with hotel front desk guarantees the best verified rate without third-party commissions.
          </p>
        </div>
      </div>
    </section>
  );
};
