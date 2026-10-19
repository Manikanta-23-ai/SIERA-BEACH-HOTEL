import React, { useState } from 'react';
import { HOTEL_INFO, buildWhatsAppEnquiryUrl, ROOMS } from '../data/hotelData';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'Deluxe Ocean View Room',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const waUrl = buildWhatsAppEnquiryUrl({
      roomName: formData.roomType,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: `${formData.guests} (${formData.name ? `Guest: ${formData.name}` : ''})`,
      note: formData.message,
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-stone-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-800 mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Reservations & Contact</span>
            <span aria-hidden="true">·</span>
            <span>Rushikonda</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight text-balance mb-4">
            Connect Directly with Siera Beach Hotel
          </h2>

          <p className="text-slate-600 text-base sm:text-lg text-balance font-light">
            Plan your stay in Rushikonda. Contact our front desk directly for seasonal room rates, group reservations, or custom stay assistance.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Hotel Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-slate-900">
                Front Desk & Enquiries
              </h3>

              {/* Verified Phone Card */}
              <div className="p-4 rounded-xl bg-cyan-950 text-white space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold block">
                  Official Hotel Contact Number
                </span>
                <div className="flex items-baseline gap-2">
                  <a
                    href={`tel:${HOTEL_INFO.phoneTel}`}
                    className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-amber-200 transition-colors"
                  >
                    {HOTEL_INFO.phoneRaw}
                  </a>
                </div>
                <p className="text-xs text-slate-300">
                  International format: <span className="font-mono text-amber-200">{HOTEL_INFO.phoneDisplay}</span>
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={`tel:${HOTEL_INFO.phoneTel}`}
                    className="px-3.5 py-1.5 bg-white text-slate-900 rounded-md text-xs font-semibold hover:bg-stone-100 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={buildWhatsAppEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-emerald-600 text-white rounded-md text-xs font-semibold hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Address & Hours */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Property Location</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {HOTEL_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Front Desk Hours</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      24 Hours / 7 Days a week for guest check-in & assistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Email Inquiries</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-mono">
                      {HOTEL_INFO.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Banner */}
            <div className="p-6 rounded-2xl bg-emerald-800 text-white shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-900/60">
                  <MessageCircle className="w-6 h-6 text-emerald-200" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold">Fast WhatsApp Response</h4>
                  <p className="text-xs text-emerald-100">Direct connection to property desk</p>
                </div>
              </div>
              <p className="text-xs text-emerald-100/90 leading-relaxed mb-4">
                Have questions about specific room views, early check-in, or pet stays? WhatsApp us directly for immediate quotes.
              </p>
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-2.5 bg-white text-emerald-900 font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-emerald-50 transition-colors shadow-sm"
              >
                Start WhatsApp Chat (+91 99083 02666)
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Stay Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
                Booking Enquiry
              </span>
              <h3 className="font-serif text-2xl font-semibold text-slate-900">
                Plan Your Stay in Rushikonda
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill out your intended travel dates below to generate a tailored WhatsApp message or request a direct callback.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-slate-900">
                  Enquiry Prepared
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you! Your stay enquiry for <strong className="text-slate-900">{formData.roomType}</strong> has been logged. For instantaneous confirmation and seasonal tariff rates, connect with front desk directly on WhatsApp:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp (+91 99083 02666)</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-3 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-stone-200 transition-colors"
                  >
                    Edit Dates
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Guest Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Room Preference
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent transition-all"
                    >
                      {ROOMS.map((r) => (
                        <option key={r.id} value={r.name}>
                          {r.name}
                        </option>
                      ))}
                      <option value="Any Available Room">Any Available Room</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Total Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent transition-all"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4+ Family">4+ Family / Group</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Notes / Specific Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Pet companion details, late arrival time, ocean-facing preference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  {/* WhatsApp Submission CTA */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>

                  {/* Standard Form Submit */}
                  <button
                    type="submit"
                    className="py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
