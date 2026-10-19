import React, { useState, useEffect } from 'react';
import { HOTEL_INFO, buildWhatsAppEnquiryUrl, ROOMS } from '../data/hotelData';
import { X, Calendar, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  initialRoomName?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  initialRoomName,
  onClose,
}) => {
  const [selectedRoom, setSelectedRoom] = useState(initialRoomName || 'Deluxe Ocean View Room');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (initialRoomName) {
      setSelectedRoom(initialRoomName);
    }
  }, [initialRoomName]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const waUrl = buildWhatsAppEnquiryUrl({
      roomName: selectedRoom,
      checkIn,
      checkOut,
      guests: `${guests} (${name ? `Guest: ${name}` : ''})`,
      note: notes,
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-slate-900">
              Enquiry Ready
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your inquiry for <strong className="text-slate-900">{selectedRoom}</strong> has been configured. Connect with our front desk on WhatsApp for instant tariff details.
            </p>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp (+91 99083 02666)</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-stone-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-6">
              <span className="text-[11px] uppercase tracking-wider text-amber-700 font-semibold block mb-1">
                Room Availability & Rates
              </span>
              <h3 className="font-serif text-2xl font-semibold text-slate-900">
                Enquire Your Stay
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {HOTEL_INFO.name} · Rushikonda, Visakhapatnam
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Selected Accommodation
                </label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
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

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-800"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4+ Family">4+ Family</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Mobile / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99083 02666"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Special Notes or Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Pet traveling along, ground floor request..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-800 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (+91 99083 02666)</span>
                </button>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
                >
                  Submit Enquiry
                </button>
              </div>

              <div className="pt-2 text-center">
                <a
                  href={`tel:${HOTEL_INFO.phoneTel}`}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Prefer calling? {HOTEL_INFO.phoneRaw}</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
