
import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { TimelineItem } from '../types';

interface TimelineProps {
  onItemClick: (item: TimelineItem) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onItemClick }) => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-20">
      {/* Central Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-cyan via-accent-magenta to-accent-purple opacity-20 hidden md:block"></div>

      <div className="space-y-32 relative z-10">
        {TIMELINE_DATA.map((item, index) => {
          const isEven = index % 2 === 0;
          const colorClass = `border-${item.color} text-${item.color}`;
          const bgClass = `bg-${item.color}`;
          const shadowClass = `shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_currentColor]`;
          
          // Logic to determine if the node should be a circle (A360, BIM 360)
          const isCircle = item.id.toLowerCase().includes('360');
          const roundedClass = isCircle ? 'rounded-full' : 'rounded-3xl';

          return (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row items-center justify-between gap-12 group ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Decorative Background Blob */}
              <div 
                className={`absolute -z-10 w-80 h-80 rounded-full blur-[120px] opacity-20 transition-all duration-700 group-hover:opacity-40 pointer-events-none ${
                  isEven ? '-left-20 top-0' : '-right-20 top-0'
                } ${bgClass}`}
              ></div>

              {/* Central Dot Connector */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:block">
                <div className={`w-5 h-5 rounded-full border-4 border-dark shadow-[0_0_15px_currentColor] transition-transform duration-500 group-hover:scale-150 ${bgClass} ${colorClass}`}>
                  <div className={`absolute inset-0 rounded-full animate-ping opacity-40 ${bgClass}`}></div>
                </div>
              </div>

              {/* Visual Node */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  onClick={() => onItemClick(item)}
                  className={`relative cursor-pointer transform transition-all duration-500 hover:scale-110 flex items-center justify-center p-8 ${roundedClass} glass border-2 ${colorClass} ${shadowClass} w-64 h-64`}
                >
                  <div className="text-center">
                    <span className="text-4xl font-display font-black block mb-2">{item.id.toUpperCase()}</span>
                    <span className="text-[10px] font-accent uppercase tracking-widest block opacity-70 font-bold">{item.year}</span>
                  </div>
                  {item.status && (
                    <div className={`absolute -top-4 -right-4 px-3 py-1 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-tighter`}>
                      {item.status}
                    </div>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className={`w-full md:w-1/2 text-center cursor-pointer ${isEven ? 'md:text-left' : 'md:text-right'}`} onClick={() => onItemClick(item)}>
                <h3 className={`font-accent text-sm font-bold uppercase tracking-widest mb-2 opacity-60 text-${item.color}`}>
                  {item.year}
                </h3>
                <h2 className="text-3xl md:text-5xl font-display font-black mb-4 leading-tight">
                  {item.title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
