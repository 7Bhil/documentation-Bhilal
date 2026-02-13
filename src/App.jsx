import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Layers, 
  Zap, 
  ChevronRight, 
  ChevronLeft,
  Github, 
  Play, 
  BookOpen, 
  Copy, 
  Check,
  Menu,
  X,
  Code2,
  List,
  Box,
  Braces,
  GitBranch,
  Rocket,
  Timer,
  Network,
  Home,
  Book,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { tutorials } from './docsData';

const CodeBlock = ({ code, language = "bhilal", title = "exemple.bh" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlight = (text) => {
    return <span dangerouslySetInnerHTML={{ __html: text
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/\b(classe|fonction|soit|si|sinon|tantque|renvoie|nouveau|prive|public|abstrait|interface|inclure|essaye|attrape|lance|herite)\b/g, '<span class="text-bhilal-accent font-bold italic">$1</span>')
      .replace(/\b(montre|entre|longueur|aleatoire|min|max|croissant|decroissant|date|execute|lire|ecrire)\b/g, '<span class="text-purple-400">$1</span>')
      .replace(/("[^"]*")/g, '<span class="text-emerald-400">$1</span>')
      .replace(/(\b[0-9]+\b)/g, '<span class="text-amber-400">$1</span>')
      .replace(/(#.*)/g, '<span class="text-slate-600 italic font-light">$1</span>')
    }} />;
  };

  return (
    <div className="glass p-1 rounded-3xl overflow-hidden border-white/5 bg-bhilal-dark/40 shadow-2xl group/code">
      <div className="px-6 py-3 bg-white/[0.03] flex justify-between items-center border-b border-white/5">
        <div className="flex gap-2">
           <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
           <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
           <span className="ml-3 text-[10px] text-slate-500 font-mono tracking-widest uppercase">{title}</span>
        </div>
        <button onClick={copyToClipboard} className="text-slate-500 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre scrollbar-hide">
        {highlight(code)}
      </div>
    </div>
  );
};

const SectionHeader = ({ badge, title, description, center = false }) => (
  <div className={`mb-20 ${center ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`text-bhilal-accent font-black tracking-[0.3em] uppercase text-[10px] mb-4 block ${center ? 'mx-auto' : ''}`}
    >
      {badge}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`text-slate-400 max-w-2xl text-lg leading-relaxed font-light ${center ? 'mx-auto' : ''}`}
    >
      {description}
    </motion.p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-br from-bhilal-accent/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
    <div className="relative glass p-10 rounded-[2.5rem] h-full flex flex-col items-start gap-6 border-white/5 hover:border-bhilal-accent/30 transition-colors">
      <div className="p-4 rounded-2xl bg-white/[0.03] text-bhilal-accent group-hover:scale-110 group-hover:bg-bhilal-accent group-hover:text-black transition-all duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-bhilal-accent transition-colors">{title}</h3>
        <p className="text-slate-400 leading-relaxed font-light text-[15px]">{description}</p>
      </div>
      <div className="mt-auto pt-4 flex items-center gap-2 text-bhilal-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
        En savoir plus <ChevronRight size={14} />
      </div>
    </div>
  </motion.div>
);

const DocsPortal = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeStep]);

  const currentTutorial = tutorials[activeStep];
  
  const categories = [...new Set(tutorials.map(t => t.category))].map(cat => ({
    name: cat,
    items: tutorials.filter(t => t.category === cat)
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-bhilal-dark flex flex-col md:flex-row h-screen"
    >
      <div className="noise-overlay opacity-[0.03]"></div>
      
      {/* Sidebar */}
      <div className="w-full md:w-80 border-r border-white/5 bg-bhilal-surface p-8 flex flex-col z-10 overflow-y-auto">
        <div className="flex items-center gap-3 mb-12">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-bhilal-accent text-black flex items-center justify-center font-black text-sm">B</div>
            <span className="font-black tracking-tighter text-white">DOCS</span>
          </div>
        </div>

        <div className="space-y-10">
          {categories.map(cat => (
             <div key={cat.name}>
                <h4 className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase mb-6 pl-4">{cat.name}</h4>
                <div className="space-y-2">
                   {cat.items.map((tutorial, idx) => {
                      const actualIdx = tutorials.findIndex(t => t.id === tutorial.id);
                      return (
                        <button
                          key={tutorial.id}
                          onClick={() => setActiveStep(actualIdx)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${
                            activeStep === actualIdx 
                            ? 'bg-bhilal-accent/10 text-bhilal-accent font-bold' 
                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="truncate">{tutorial.title}</span>
                          <ChevronRight size={14} className={`transition-transform ${activeStep === actualIdx ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                        </button>
                      );
                   })}
                </div>
             </div>
          ))}
        </div>

        <div className="mt-auto pt-10">
           <div className="glass p-5 rounded-2xl border-bhilal-accent/20">
              <div className="flex items-center gap-3 mb-3">
                 <Sparkles size={16} className="text-bhilal-accent" />
                 <span className="text-[10px] font-bold tracking-widest text-bhilal-accent uppercase">Progression</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-bhilal-accent transition-all duration-1000" 
                   style={{ width: `${((activeStep + 1) / tutorials.length) * 100}%` }}
                 ></div>
              </div>
              <div className="mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                 {activeStep + 1} / {tutorials.length} Chapitres
              </div>
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        ref={contentRef}
        className="flex-1 overflow-y-auto bg-bhilal-dark relative scroll-smooth p-6 md:p-16 lg:p-24"
      >
        <div className="max-w-4xl mx-auto z-10 relative">
          <motion.div
            key={currentTutorial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            <div>
              <span className="text-bhilal-accent font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">{currentTutorial.category}</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">{currentTutorial.title}</h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                {currentTutorial.content}
              </p>
            </div>

            <div className="space-y-24">
              {currentTutorial.steps.map((step, idx) => (
                <div key={idx} className="space-y-8">
                  <div className="flex gap-6 items-center">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center font-black text-bhilal-accent border-bhilal-accent/30 shrink-0">
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 font-light text-lg">
                    {step.text}
                  </p>
                  <CodeBlock code={step.code} title={step.title.toLowerCase().replace(/\s+/g, '_') + '.bh'} />
                </div>
              ))}
            </div>

            <div className="pt-16 border-t border-white/5 flex justify-between items-center">
              <button 
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => prev - 1)}
                className={`flex items-center gap-3 font-black text-sm uppercase tracking-widest transition-colors ${activeStep === 0 ? 'text-slate-700' : 'text-slate-400 hover:text-bhilal-accent'}`}
              >
                <ChevronLeft size={18} /> Précédent
              </button>
              
              {activeStep < tutorials.length - 1 ? (
                <button 
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="px-8 py-4 rounded-xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-bhilal-accent transition-colors flex items-center gap-3 shadow-xl shadow-white/5"
                >
                  Suivant <ChevronRight size={18} />
                </button>
              ) : (
                <button 
                  onClick={onClose}
                  className="px-8 py-4 rounded-xl bg-bhilal-accent text-black font-black text-sm uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3"
                >
                  Terminer <Rocket size={18} />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Decor */}
        <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-bhilal-accent/5 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="fixed bottom-[-10%] left-[-20%] w-[800px] h-[800px] bg-purple-500/5 blur-[150px] rounded-full -z-10"></div>
      </div>
    </motion.div>
  );
};

const Navbar = ({ onOpenDocs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Fonctionnalités', href: '#fonctionnalités' },
    { label: 'Apprendre', onClick: onOpenDocs },
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

const ApprendreOverview = ({ onOpenDocs }) => {
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
            onClick={onOpenDocs}
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

const Reference = () => {
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

const Futur = () => {
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

const App = () => {
  const [showDocs, setShowDocs] = useState(false);

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
          <DocsPortal onClose={() => setShowDocs(false)} />
        )}
      </AnimatePresence>

      <Navbar onOpenDocs={() => setShowDocs(true)} />

      <main>
        {/* HERO SECTION */}
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
                  onClick={() => setShowDocs(true)}
                  className="group px-10 py-5 rounded-2xl bg-white text-black font-black text-lg hover:bg-bhilal-accent transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-white/5"
                >
                  <Play size={22} fill="currentColor" />
                  DÉMARRER
                </button>
                <button 
                  onClick={() => setShowDocs(true)}
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

        <Features />
        
        <ApprendreOverview onOpenDocs={() => setShowDocs(true)} />

        {/* STATS SECTION */}
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

        <Reference />

        <Futur />
      </main>

      <footer className="py-32 border-t border-white/5 px-6 mt-20 relative bg-bhilal-dark/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-black text-sm">B</div>
                <span className="font-black text-xl tracking-tighter">BHILAL</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed font-light text-sm">
                Le futur de la programmation est accessible. Rejoignez l'écosystème Bhilal et commencez à bâtir l'avenir dès aujourd'hui.
              </p>
            </div>
            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs opacity-50">Langage</h4>
              <ul className="flex flex-col gap-4 text-slate-400 text-sm font-bold tracking-tight">
                <li><button onClick={() => setShowDocs(true)} className="hover:text-bhilal-accent cursor-pointer transition-colors">Documentation</button></li>
                <li><a href="https://github.com/7Bhil/Language-Bhilal." target="_blank" className="hover:text-bhilal-accent cursor-pointer transition-colors">GitHub</a></li>
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">Playground</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs opacity-50">Communauté</h4>
              <ul className="flex flex-col gap-4 text-slate-400 text-sm font-bold tracking-tight">
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">Discord</li>
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">Discussions</li>
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">Contribution</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-[10px] font-black tracking-[0.2em] uppercase">© 2026 PROJET BHILAL. SOUS LICENCE MIT.</p>
            <div className="flex gap-8">
              <Github size={20} className="text-slate-600 hover:text-white cursor-pointer transition-colors" />
              <Terminal size={20} className="text-slate-600 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
