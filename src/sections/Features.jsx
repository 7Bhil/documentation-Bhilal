import React from 'react';
import { Zap, ShieldCheck, Layers, Globe, Cpu, Code2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

const Features = () => {
  const features = [
    { icon: Zap, title: "Performance Node", description: "Bhilal exploite la puissance de Node.js avec un moteur d'interprétation optimisé pour des temps de réponse instantanés." },
    { icon: ShieldCheck, title: "Encapsulation Forte", description: "Gérez la visibilité de vos membres avec 'prive' et 'public'. Une structure objet robuste pour des architectures sécurisées." },
    { icon: Layers, title: "Modularité Native", description: "Organisez vos projets complexes avec le système de modules 'inclure'. Partagez et réutilisez votre logique facilement." },
    { icon: Globe, title: "Playground Web", description: "Une intégration parfaite avec le navigateur. Testez, partagez et exécutez votre code Bhilal partout sans installation." },
    { icon: Cpu, title: "Bas-Niveau & Système", description: "Exécutez des commandes système et gérez les fichiers localement avec des fonctions intégrées sécurisées." },
    { icon: Code2, title: "Syntaxe Intuitive", description: "Une syntaxe pure en français, pensée pour éliminer les barrières d'apprentissage tout en restant techniquement puissante." }
  ];

  return (
    <section id="fonctionnalités" className="py-32 px-6 max-w-7xl mx-auto relative">
      <SectionHeader 
        badge="L'Écosystème"
        title="Pensé pour les bâtisseurs."
        description="Bhilal n'est pas qu'un langage, c'est une boîte à outils complète pour transformer vos idées en réalité technique."
        center
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Features;
