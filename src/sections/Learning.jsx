import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CodeBlock from '../components/CodeBlock';

const Learning = ({ onOpenDocs, resetFirstOpen }) => {
  const codes = [
    { title: "Variables & Logique", code: `soit age = 20\nsi (age >= 18) {\n  montre(\"majeur\")\n} sinon {\n  montre(\"mineur\")\n}` },
    { title: "Classes & Objets", code: `classe Robot {\n  public fonction parler() {\n    montre(\"Bip bip !\")\n  }\n}\n\nsoit bot = nouveau Robot()\nbot.parler()` }
  ];

  return (
    <section id="apprendre" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <SectionHeader 
            badge="Portail d'Apprentissage"
            title="Apprenez de A à Z."
            description="Accédez à notre parcours structuré pour maîtriser Bhilal en 10 étapes clés. De l'installation aux concepts les plus avancés."
          />
          <motion.button 
            whileHover={{ scale: 1.05, x: 10 }}
            onClick={() => {
              resetFirstOpen();
              onOpenDocs();
            }}
            className="flex items-center gap-4 text-bhilal-accent font-black tracking-widest uppercase text-xs"
          >
            Commencer le parcours <ArrowRight size={20} />
          </motion.button>
        </div>
        <div className="space-y-6">
          {codes.map((c, i) => (
            <motion.div 
              key={c.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <CodeBlock code={c.code} title={c.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
