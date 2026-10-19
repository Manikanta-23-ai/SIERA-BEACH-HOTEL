import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/hotelData';
import { GalleryPhoto } from '../types';
import { LightboxModal } from './LightboxModal';
import { Camera, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rooms' | 'exterior' | 'coastal'>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setActivePhoto(filteredPhotos[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setActivePhoto(filteredPhotos[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-800 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Showcase</span>
              <span aria-hidden="true">·</span>
              <span>Property & Coastal Setting</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight text-balance">
              Captured Moments at Siera Beach Hotel
            </h2>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl self-start md:self-end">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setSelectedCategory('rooms')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === 'rooms'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Rooms
            </button>
            <button
              onClick={() => setSelectedCategory('exterior')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === 'exterior'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Exterior
            </button>
            <button
              onClick={() => setSelectedCategory('coastal')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === 'coastal'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Coastal Views
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => {
            const isMarquee = idx === 0 && selectedCategory === 'all';
            return (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-stone-200 border border-stone-200/90 shadow-xs hover:shadow-md transition-all ${
                  isMarquee ? 'sm:col-span-2 lg:col-span-2 h-80 sm:h-96' : 'h-80'
                }`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* View Fullscreen Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-amber-200" />
                </div>

                {/* Caption at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          Click any photo to explore in high resolution.
        </p>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={activePhoto}
        photos={filteredPhotos}
        onClose={() => setActivePhoto(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
};
