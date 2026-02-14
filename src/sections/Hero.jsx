import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Terminal } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const Hero = ({ onOpenDocs, resetFirstOpen }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
        <div className="text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-bhilal-accent/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-bhilal-accent animate-pulse shadow-[0_0_10px_#00d2ff]"></div>
            <span className="text-[10px] font-black tracking-[0.2em] text-bhilal-accent uppercase">VERSION 10.0 DISPONIBLE</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl lg:text-[110px] font-black leading-[0.9] text-white tracking-tighter mb-8"
          >
            Codez sans <br />
            <span className="text-accent-gradient">limites.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light"
          >
            Bhilal est le langage de programmation conçu pour la clarté, la performance et l'élégance.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-6"
          >
            <button 
              onClick={() => {
                resetFirstOpen();
                onOpenDocs();
              }}
              className="group px-10 py-5 rounded-2xl bg-white text-black font-black text-lg hover:bg-bhilal-accent transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-white/5"
            >
              <Play size={22} fill="currentColor" />
              DÉMARRER
            </button>
            <button 
              onClick={() => {
                resetFirstOpen();
                onOpenDocs();
              }}
              className="px-10 py-5 rounded-2xl glass font-black text-lg hover:bg-white/5 transition-all flex items-center gap-3"
            >
              <BookOpen size={22} />
              APPRENDRE
            </button>
          </motion.div>
        </div>

        <div className="relative">
          <CodeBlock 
            code={`classe Robot {\n  prive fonction secret() {\n    montre("Chut...")\n  }\n\n  public fonction direSalut(nom) {\n    montre(\"Salut \" + nom)\n  }\n}\n\nsoit monRobot = nouveau Robot()\nmonRobot.direSalut(\"Bhilal\")`} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-3xl border-bhilal-accent/20 hidden xl:block"
          >
            <div className="flex gap-4 items-center">
              <div className="p-3 rounded-2xl bg-bhilal-accent/20 text-bhilal-accent">
                <Terminal size={24} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Status</div>
                <div className="text-white font-black">Interpréteur Actif</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
