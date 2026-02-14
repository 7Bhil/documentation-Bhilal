import React from 'react';
import { motion } from 'framer-motion';
import { Network, Timer, Box, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Roadmap = () => {
  const steps = [
    { icon: Network, phase: "Phase 1", title: "Connectivité (V11)", items: ["Support HTTP/REST (requête)", "Analyse JSON native"] },
    { icon: Timer, phase: "Phase 2", title: "Performance (V12)", items: ["Asynchronisme (async/attendre)", "Compilation JIT optimisée"] },
    { icon: Box, phase: "Phase 3", title: "Écosystème (V13)", items: ["BPM Package Manager", "Bibliothèque graphique native"] },
    { icon: ShieldCheck, phase: "Phase 4", title: "Typage & Sécurité (V14)", items: ["Types statiques optionnels", "Sandbox sécurisée"] }
  ];

  return (
    <section id="futur" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-bhilal-accent/10 blur-[100px] -z-10 rounded-full"></div>
      <SectionHeader 
        badge="Feuille de Route"
        title="Vers l'infini et au-delà."
        description="Le développement de Bhilal ne s'arrête jamais. Découvrez les prochaines révolutions prévues."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div 
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative p-8 rounded-[2rem] glass-morphism border-white/5 hover:bg-white/[0.03] transition-colors overflow-hidden group"
          >
            <div className="absolute inset-0 bg-bhilal-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-bhilal-accent mb-6"><s.icon size={28} /></div>
              <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2">{s.phase}</div>
              <h4 className="text-xl font-black mb-6">{s.title}</h4>
              <ul className="space-y-3">
                {s.items.map(item => (
                  <li key={item} className="text-slate-500 text-sm flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-bhilal-accent mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
