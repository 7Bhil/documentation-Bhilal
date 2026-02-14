import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const APIReference = () => {
  const libs = [
    { name: "lire(chemin)", desc: "Lit un fichier texte et renvoie son contenu." },
    { name: "ecrire(ch, txt)", desc: "Écrit du texte dans un fichier spécifié." },
    { name: "aleatoire(m, M)", desc: "Génère un nombre entier aléatoire." },
    { name: "longueur(v)", desc: "Taille d'une liste ou d'une chaîne." },
    { name: "execute(cmd)", desc: "Exécute une commande système brute." },
    { name: "date()", desc: "Renvoie l'horodatage système actuel." }
  ];

  return (
    <section id="référence" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <SectionHeader 
        badge="Référence API"
        title="Une boîte à outils complète."
        description="Bhilal arrive avec une bibliothèque standard riche pour gérer le système, les fichiers et les données."
        center
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {libs.map((lib, i) => (
          <motion.div 
            key={lib.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="glass p-8 rounded-3xl group hover:border-bhilal-accent/30 transition-all cursor-default"
          >
            <div className="text-bhilal-accent font-mono font-bold text-lg mb-2 group-hover:scale-105 origin-left transition-transform">{lib.name}</div>
            <p className="text-slate-500 text-sm font-light leading-relaxed">{lib.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default APIReference;
