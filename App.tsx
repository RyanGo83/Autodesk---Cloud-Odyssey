import React, { useState } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Modal from './components/Modal';
import { DISCLAIMER } from './constants';
import { TimelineItem } from './types';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-cyan rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-magenta rounded-full blur-[150px]"></div>
      </div>

      <Header />

      <main className="relative z-10 pb-40">
        <section id="timeline" className="py-20">
          <Timeline onItemClick={setSelectedItem} />
        </section>

        {/* Fun Fact Callout */}
        <div className="flex justify-center py-20 px-6">
          <div className="glass p-8 rounded-3xl max-w-2xl animate-float border-accent-neon/30 text-center">
            <span className="text-accent-neon font-bold text-xs uppercase tracking-widest block mb-2">Internal Intel</span>
            <p className="font-accent text-xl italic text-white">
              "Autodesk employees reportedly receive new name badges every six months. The printer has achieved sentience and is currently designing its own rebrand."
            </p>
          </div>
        </div>

        {/* Disclaimer Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-20 border-t border-white/10 text-center">
          <p className="text-slate-500 text-base md:text-xl leading-relaxed font-accent uppercase tracking-tight">
            {DISCLAIMER}
          </p>
          <div className="mt-8 opacity-40">
            <svg className="w-12 h-12 mx-auto text-accent-cyan" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
        </footer>
      </main>

      <Modal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
};

export default App;