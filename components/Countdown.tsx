import React, { useState, useEffect } from 'react';
import { FORMA_REBRAND_TARGET } from '../constants';
import { CountdownState } from '../types';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = FORMA_REBRAND_TARGET.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label, color }: { value: number; label: string; color: string }) => (
    <div className="flex flex-col items-center glass p-2 md:p-6 rounded-xl md:rounded-2xl min-w-[64px] md:min-w-[120px]">
      <span className={`text-xl md:text-5xl font-display font-black mb-1 ${color}`}>
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-2 md:px-6 py-12">
      <span className="inline-block px-4 py-1 mb-6 text-[10px] md:text-xs font-bold tracking-widest uppercase border rounded-full border-accent-magenta text-accent-magenta animate-pulse">
        Estimated Time Until Next Inevitable Rebrand
      </span>
      <div className="flex flex-row justify-center gap-2 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Days" color="text-accent-cyan" />
        <TimeUnit value={timeLeft.hours} label="Hours" color="text-accent-magenta" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" color="text-accent-orange" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" color="text-accent-neon" />
      </div>
      <p className="mt-8 text-slate-500 text-xs font-accent italic text-center px-4">
        * Clock resets automatically whenever a marketing intern discovers a new font.
      </p>
    </div>
  );
};

export default Countdown;