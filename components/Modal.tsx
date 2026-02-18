// Fix: Import React to resolve 'Cannot find namespace React' when using React.FC
import React, { useEffect, useState } from 'react';
import { TimelineItem } from '../types';

interface ModalProps {
  item: TimelineItem | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (item) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [item]);

  if (!item) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      
      <div 
        className={`relative glass max-w-2xl w-full p-8 md:p-12 rounded-[2rem] border-white/20 transform transition-all duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="space-y-6">
          <span className={`text-${item.color} font-accent font-bold text-sm tracking-widest uppercase block`}>
            Timeline Detail • {item.year}
          </span>
          <h2 className="text-4xl font-display font-black text-white leading-tight">
            {item.title}
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-500 uppercase font-black block mb-1">Was Known As</span>
              <span className="text-red-400 font-bold">{item.oldName}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-500 uppercase font-black block mb-1">Became</span>
              <span className={`text-${item.color} font-bold`}>{item.newName}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">The Reality</h4>
              <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">{item.description}</p>
              
              {item.tip && (
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-accent-orange text-sm font-bold italic">
                    Helpful Tip: {item.tip}
                  </p>
                </div>
              )}
            </div>

            {item.references && item.references.length > 0 && (
              <div className="space-y-6 pt-4 border-t border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Historical Archive</h4>
                {item.references.map((ref, index) => (
                  <div key={index} className="relative p-6 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/10">
                    <span className="absolute -top-3 -left-2 text-accent-cyan opacity-20 text-6xl font-serif">"</span>
                    <p className="italic text-slate-200 leading-relaxed font-light">
                      {ref.quote}
                    </p>
                    <a 
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-accent-cyan hover:underline decoration-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {ref.label}
                    </a>
                  </div>
                ))}
              </div>
            )}

            {item.snark && (
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">The Snark</h4>
                <div className={`relative pl-6 border-l-2 border-${item.color} italic text-slate-300 bg-white/5 p-4 rounded-r-xl whitespace-pre-line`}>
                  {item.snark}
                </div>
              </div>
            )}
          </div>

          <div className="pt-6">
            <button 
              onClick={onClose}
              className={`w-full py-4 rounded-xl bg-${item.color} text-black font-black uppercase tracking-widest hover:brightness-110 transition-all`}
            >
              Close Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;