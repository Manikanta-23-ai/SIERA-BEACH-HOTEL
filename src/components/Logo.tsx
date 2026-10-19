import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', theme = 'dark', size = 'md' }) => {
  const isDark = theme === 'dark';
  
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-amber-200/90' : 'text-cyan-800';
  const waveFill = isDark ? '#38BDF8' : '#0284C7';
  const waveAccent = isDark ? '#F59E0B' : '#D97706';

  const sizeClasses = {
    sm: {
      svg: 'w-6 h-4',
      title: 'text-base tracking-[0.2em]',
      sub: 'text-[9px] tracking-[0.3em]',
    },
    md: {
      svg: 'w-8 h-5',
      title: 'text-xl tracking-[0.25em]',
      sub: 'text-[10px] tracking-[0.35em]',
    },
    lg: {
      svg: 'w-12 h-8',
      title: 'text-3xl tracking-[0.3em]',
      sub: 'text-xs tracking-[0.4em]',
    },
  }[size];

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Wave Icon */}
      <svg
        className={`${sizeClasses.svg} mb-0.5`}
        viewBox="0 0 54 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 14C8 8 16 7 24 11C32 15 40 14 52 4C44 11 36 12 28 8C20 4 12 5 2 14Z"
          fill={waveFill}
        />
        <path
          d="M8 18C14 13 22 13 30 16C38 19 44 17 50 11C42 16 34 16 26 13C18 10 12 12 8 18Z"
          fill={waveAccent}
          opacity="0.85"
        />
      </svg>

      {/* Brand Name */}
      <span className={`font-serif font-bold uppercase leading-none ${sizeClasses.title} ${textPrimary}`}>
        SIERA
      </span>
      <span className={`font-sans font-medium uppercase mt-0.5 ${sizeClasses.sub} ${textSecondary}`}>
        BEACH HOTEL
      </span>
    </div>
  );
};
