import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Layers, 
  Zap, 
  ChevronRight, 
  Github, 
  Play, 
  BookOpen, 
  Copy, 
  Check,
  Menu,
  X,
  Code2
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${scrolled ? 'mt-0' : 'mt-4'}`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled ? 'glass h-16' : 'bg-transparent'}`}>
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
          <span className="text-2xl font-black tracking-tighter text-white">BHILAL</span>
        </motion.div>
        
        <div className="hidden md:flex gap-10 items-center text-[13px] font-bold tracking-widest uppercase text-slate-400">
          {['Fonctionnalités', 'Apprendre', 'Référence', 'Futur'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-bhilal-accent transition-all hover:scale-105">
              {item}
            </a>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/7Bhil/Language-Bhilal." 
            target="_blank" 
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold"
          >
            <Github size={18} />
            <span>GitHub</span>
          </motion.a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-xl bg-white text-black text-sm font-black shadow-xl shadow-white/5 hover:bg-bhilal-accent transition-colors"
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass p-8 rounded-3xl md:hidden flex flex-col gap-6 text-center"
          >
            {['Fonctionnalités', 'Apprendre', 'Référence', 'Futur'].map((item) => (
              <a key={item} href="#" className="text-xl font-bold hover:text-bhilal-accent" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const CodeBlock = () => {
  const [copied, setCopied] = useState(false);
  const code = `classe Robot {
  prive fonction secret() {
    montre("Chut...")
  }

  public fonction direSalut(nom) {
    montre("Salut " + nom)
  }
}

soit monRobot = nouveau Robot()
monRobot.direSalut("Bhilal")`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative group w-full"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-bhilal-accent/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
      <div className="glass p-1 rounded-[2rem] shadow-2xl backdrop-blur-3xl border-white/5 overflow-hidden">
        <div className="bg-bhilal-dark/80 rounded-[1.8rem] overflow-hidden border border-white/10">
          <div className="px-6 py-4 bg-white/[0.03] flex justify-between items-center border-b border-white/5">
            <div className="flex gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/40 border border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/40 border border-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.2)]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/40 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]"></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-slate-500 font-mono tracking-widest uppercase">bhilal-interpreter — v10.0</span>
              <button 
                onClick={copyToClipboard}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>
          <div className="p-8 font-mono text-[15px] leading-relaxed overflow-x-auto whitespace-pre">
            <div className="flex gap-6">
              <div className="text-slate-700 text-right select-none pr-4 border-r border-white/5 flex flex-col">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <span key={n}>{n}</span>)}
              </div>
              <code className="text-slate-300">
                <span className="text-bhilal-accent font-bold italic">classe</span> <span className="text-white font-bold">Robot</span> {"{"} <br />
                &nbsp;&nbsp;<span className="text-bhilal-accent italic">prive fonction</span> <span className="text-blue-400">secret</span>() {"{"} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">montre</span>(<span className="text-emerald-400">"Chut..."</span>) <br />
                &nbsp;&nbsp;{"}"} <br />
                <br />
                &nbsp;&nbsp;<span className="text-bhilal-accent italic">public fonction</span> <span className="text-blue-400">direSalut</span>(nom) {"{"} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">montre</span>(<span className="text-emerald-400">"Salut "</span> + nom) <br />
                &nbsp;&nbsp;{"}"} <br />
                {"}"} <br />
                <br />
                <span className="text-bhilal-accent italic">soit</span> monRobot = <span className="text-bhilal-accent italic">nouveau</span> <span className="text-white font-bold">Robot</span>() <br />
                monRobot.<span className="text-blue-400">direSalut</span>(<span className="text-emerald-400">"Bhilal"</span>)
              </code>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-bhilal-accent transition-colors">{title}</h3>
        <p className="text-slate-400 leading-relaxed font-light text-[15px]">{description}</p>
      </div>
      <div className="mt-auto pt-4 flex items-center gap-2 text-bhilal-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
        En savoir plus <ChevronRight size={14} />
      </div>
    </div>
  </motion.div>
);

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bhilal-accent/5 blur-[150px] -z-10 rounded-full"></div>
      <div className="text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-bhilal-accent font-black tracking-[0.3em] uppercase text-xs mb-4 block"
        >
          L'Écosystème
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter"
        >
          Pensé pour les bâtisseurs.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light"
        >
          Bhilal n'est pas qu'un langage, c'est une boîte à outils complète pour transformer vos idées en réalité technique.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};

const App = () => {
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

      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 max-w-7xl mx-auto overflow-hidden">
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
                <button className="group px-10 py-5 rounded-2xl bg-white text-black font-black text-lg hover:bg-bhilal-accent transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-white/5">
                  <Play size={22} fill="currentColor" />
                  COMMANDER
                </button>
                <button className="px-10 py-5 rounded-2xl glass font-black text-lg hover:bg-white/5 transition-all flex items-center gap-3">
                  <BookOpen size={22} />
                  APPRENDRE
                </button>
              </motion.div>
            </div>

            <div className="relative">
              <CodeBlock />
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
      </main>

      <footer className="py-32 border-t border-white/5 px-6 mt-20 relative bg-bhilal-dark/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-black text-sm">B</div>
                <span className="font-black text-xl tracking-tighter">BHILAL</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed font-light">
                Le futur de la programmation est accessible. Rejoignez l'écosystème Bhilal et commencez à bâtir l'avenir dès aujourd'hui.
              </p>
            </div>
            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs">Langage</h4>
              <ul className="flex flex-col gap-4 text-slate-500 text-sm font-medium">
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">Playground</li>
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">Tutoriels</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs">Communauté</h4>
              <ul className="flex flex-col gap-4 text-slate-500 text-sm font-medium">
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">GitHub</li>
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">Discussions</li>
                <li className="hover:text-bhilal-accent cursor-pointer transition-colors">Contribution</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-[11px] font-bold tracking-widest uppercase">© 2026 PROJET BHILAL. SOUS LICENCE MIT.</p>
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
