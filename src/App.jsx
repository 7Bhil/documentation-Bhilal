import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';

// Sections
import Hero from './sections/Hero';
import Features from './sections/Features';
import Learning from './sections/Learning';
import APIReference from './sections/APIReference';
import Roadmap from './sections/Roadmap';

// Portal
import DocsPortal from './portal/DocsPortal';

const App = () => {
  const [showDocs, setShowDocs] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const resetFirstOpen = () => setIsFirstOpen(true);

  return (
    <div className="min-h-screen relative selection:bg-bhilal-accent selection:text-black">
      <div className="noise-overlay"></div>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 bg-bhilal-dark">
        <motion.div 
          animate={{ 
            x: [0, 100, -100, 0], 
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-bhilal-accent/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 150, 0], 
            y: [0, 100, -100, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-purple-500/10 blur-[180px] rounded-full"
        />
      </div>

      <AnimatePresence>
        {showDocs && (
          <DocsPortal 
            onClose={() => {
              setShowDocs(false);
              setIsFirstOpen(false);
            }} 
            isFirstOpen={isFirstOpen}
          />
        )}
      </AnimatePresence>

      {!showDocs && <Navbar onOpenDocs={() => setShowDocs(true)} resetFirstOpen={resetFirstOpen} />}

      <main>
        <Hero onOpenDocs={() => setShowDocs(true)} resetFirstOpen={resetFirstOpen} />
        <Features />
        <Learning onOpenDocs={() => setShowDocs(true)} resetFirstOpen={resetFirstOpen} />
        
        {/* STATS SECTION - Kepler simpler for now in App.jsx or extract if needed */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto glass rounded-[4rem] p-16 lg:p-24 grid md:grid-cols-3 gap-16 text-center border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-bhilal-accent/5 to-transparent"></div>
             <div className="relative">
                <div className="text-5xl lg:text-7xl font-black mb-4 text-white">100%</div>
                <div className="text-slate-500 font-bold tracking-widest uppercase text-xs">Open Source</div>
             </div>
             <div className="relative">
                <div className="text-5xl lg:text-7xl font-black mb-4 text-white">v10</div>
                <div className="text-slate-500 font-bold tracking-widest uppercase text-xs">Maturité</div>
             </div>
             <div className="relative">
                <div className="text-5xl lg:text-7xl font-black mb-4 text-white">0</div>
                <div className="text-slate-500 font-bold tracking-widest uppercase text-xs">Barrière d'entrée</div>
             </div>
          </div>
        </section>

        <APIReference />
        <Roadmap />
      </main>

      <footer className="py-32 border-t border-white/5 px-6 mt-20 relative bg-bhilal-dark/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-bhilal-accent flex items-center justify-center font-black text-black">B</div>
             <span className="text-2xl font-black tracking-tighter text-white">BHILAL</span>
          </div>
          <div className="text-slate-500 text-sm font-light">
            © 2026 Bhilal Language. Réalisé avec ❤️ pour la communauté.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/7Bhil/Language-Bhilal." className="text-slate-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;