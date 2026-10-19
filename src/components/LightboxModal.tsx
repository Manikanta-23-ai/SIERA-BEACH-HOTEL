import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };

    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar with title & close */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg sm:text-xl font-medium text-amber-200">
            {photo.title}
          </span>
          <span className="text-slate-400 text-xs hidden sm:inline">·</span>
          <span className="text-slate-400 text-xs hidden sm:inline">
            {currentIndex + 1} of {photos.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close photo viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main image container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.image}
          alt={photo.title}
          className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl"
          referrerPolicy="no-referrer"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <p className="text-sm text-slate-200 font-light">
            {photo.description}
          </p>
        </div>

        {/* Prev / Next Navigation Buttons */}
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 transition-transform active:scale-95"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => onNavigate('next')}
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 transition-transform active:scale-95"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
