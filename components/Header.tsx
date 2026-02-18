import React from 'react';
import Countdown from './Countdown';
import ShareButton from '../ShareButton';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="url(#headerGrad)" fill="none" strokeWidth="0.1" />
          <defs>
            <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#00f3ff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ff00ff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Share Button — top right */}
      <div className="absolute top-6 right-6 z-20">
        <ShareButton />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <span className="inline-block px-4 py-1 mb-10 text-xs font-bold tracking-widest uppercase border rounded-full border-accent-cyan text-accent-cyan animate-pulse">
          Status: Synchronizing New Acronyms...
        </span>

        {/* Massive Gradient Block for Title */}
        <div className="w-full max-w-4xl h-64 md:h-80 mb-12 bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-orange flex items-center justify-center shadow-2xl relative rounded-3xl overflow-hidden group">
           <div className="absolute inset-0 bg-black/10 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
           <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-none text-dark mix-blend-hard-light uppercase text-center p-4">
            AUTODESK'S<br />
            CLOUD<span className="marker-style text-white relative inline-block mx-1 transform scale-125 md:scale-150 translate-y-1">Y</span> ODYSSEY
          </h1>
          {/* Decorative scanline overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none rounded-3xl"></div>
        </div>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-16 px-6">
          Welcome, weary traveler, to the hallowed digital halls where we chronicle the brave, bold, and baffling saga of Autodesk's unwavering commitment to... name changes.
        </p>

        {/* Integrated Countdown */}
        <div className="relative w-full">
          <Countdown />
        </div>
      </div>

      <div className="mt-16 animate-bounce opacity-40">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
