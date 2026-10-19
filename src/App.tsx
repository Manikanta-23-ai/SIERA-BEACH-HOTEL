import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { HOTEL_INFO, buildWhatsAppEnquiryUrl } from './data/hotelData';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedRoomForEnquiry, setSelectedRoomForEnquiry] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (roomName?: string) => {
    setSelectedRoomForEnquiry(roomName);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setSelectedRoomForEnquiry(undefined);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 flex flex-col font-sans selection:bg-amber-200 selection:text-slate-900">
      {/* Top Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 2. About Section */}
        <About />

        {/* 3. Rooms Section */}
        <Rooms onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Verified Facilities Section */}
        <Facilities />

        {/* 5. Photo Gallery Section */}
        <Gallery />

        {/* 6. Location & Destination Section */}
        <Location />

        {/* 7. Contact & Stay Composer Section */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Booking Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        initialRoomName={selectedRoomForEnquiry}
        onClose={handleCloseEnquiry}
      />

      {/* Floating Speed Contact Bar on Mobile / Desktop */}
      <aside aria-label="Floating contact shortcuts" className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* WhatsApp Fast CTA */}
        <a
          href={buildWhatsAppEnquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp enquiry with hotel"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-emerald-400/30"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
            WhatsApp Desk
          </span>
        </a>

        {/* Call Desk Quick Button (shown on mobile) */}
        <a
          href={`tel:${HOTEL_INFO.phoneTel}`}
          aria-label="Call Siera Beach Hotel front desk"
          className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-amber-300 shadow-lg border border-slate-700"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>
    </div>
  );
}
