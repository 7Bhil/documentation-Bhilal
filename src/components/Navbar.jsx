import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenDocs, resetFirstOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Fonctionnalités', href: '#fonctionnalités' },
    { label: 'Apprendre', onClick: () => {
      resetFirstOpen();
      onOpenDocs();
    }},
    { label: 'Référence', href: '#référence' },
    { label: 'Futur', href: '#futur' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 py-4 ${scrolled ? 'mt-0' : 'mt-4'}`}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled ? 'glass h-16' : 'bg-transparent border border-transparent'}`}
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-bhilal-accent blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-bhilal-accent to-bhilal-accent-2 flex items-center justify-center font-black text-black text-xl shadow-lg">
              B
            </div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase sm:block hidden">BHILAL</span>
        </motion.div>
        
        <div className="hidden md:flex gap-10 items-center text-[11px] font-black tracking-[0.2em] uppercase text-slate-400">
          {navItems.map((item) => (
            item.onClick ? (
              <button key={item.label} onClick={item.onClick} className="hover:text-bhilal-accent transition-all hover:scale-105">
                {item.label}
              </button>
            ) : (
              <a key={item.label} href={item.href} className="hover:text-bhilal-accent transition-all hover:scale-105">
                {item.label}
              </a>
            )
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/7Bhil/Language-Bhilal." 
            target="_blank" 
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-xs font-black tracking-widest uppercase"
          >
            <Github size={16} />
            <span>GitHub</span>
          </motion.a>
          <motion.button 
            onClick={onOpenDocs}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-black tracking-widest uppercase shadow-xl shadow-white/5 hover:bg-bhilal-accent transition-colors"
          >
            DÉMARRER
          </motion.button>
          
          <button 
            className="md:hidden p-2 text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass p-8 rounded-3xl md:hidden flex flex-col gap-6 text-center"
          >
            {navItems.map((item) => (
              <button key={item.label} className="text-xl font-bold hover:text-bhilal-accent uppercase tracking-widest" onClick={() => { 
                if (item.onClick) item.onClick();
                setMobileMenuOpen(false); 
              }}>
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
