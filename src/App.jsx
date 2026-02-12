import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center mx-4 mt-4 rounded-2xl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-bhilal-accent to-bhilal-accent-2 flex items-center justify-center font-bold text-black text-xl">
          B
        </div>
        <span className="text-xl font-bold tracking-tight">Bhilal</span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
        <a href="#features" className="hover:text-bhilal-accent transition-colors">Fonctionnalités</a>
        <a href="#syntax" className="hover:text-bhilal-accent transition-colors">Apprendre</a>
        <a href="#roadmap" className="hover:text-bhilal-accent transition-colors">Futur</a>
      </div>

      <div className="flex gap-4">
        <a 
          href="https://github.com/7Bhil/Language-Bhilal." 
          target="_blank" 
          className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-semibold"
        >
          GitHub
        </a>
        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-bhilal-accent to-bhilal-accent-2 text-black text-sm font-bold shadow-lg shadow-bhilal-accent/20 hover:scale-105 transition-transform">
          Démarrer
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
          Codez sans limites, <br />
          <span className="text-gradient underline decoration-bhilal-accent/20">parlez Bhilal.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
          Un langage de programmation moderne, simple et puissant. Conçu pour être accessible, 
          flexible et performant sur le web et en dehors.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:bg-bhilal-accent transition-colors">
            Installation Rapide
          </button>
          <button className="px-8 py-4 rounded-2xl glass font-bold text-lg hover:bg-white/10 transition-colors">
            Voir la Doc
          </button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-2xl">
        <div className="glass p-1 rounded-3xl shadow-2xl shadow-bhilal-accent/5">
          <div className="bg-bhilal-dark rounded-[22px] overflow-hidden border border-white/5">
            <div className="px-4 py-3 bg-white/5 flex gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
              <span className="ml-4 text-[10px] text-gray-500 font-mono">exemple_bhilal.bh</span>
            </div>
            <pre className="p-6 text-sm md:text-base font-mono leading-relaxed overflow-x-auto">
              <code className="text-gray-300">
                <span className="text-bhilal-accent">classe</span> <span className="text-yellow-400">Robot</span> {"{"} <br />
                &nbsp;&nbsp;<span className="text-bhilal-accent">prive fonction</span> <span className="text-yellow-400">secret</span>() {"{"} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">montre</span>(<span className="text-orange-400">"Chut..."</span>) <br />
                &nbsp;&nbsp;{"}"} <br />
                <br />
                &nbsp;&nbsp;<span className="text-bhilal-accent">public fonction</span> <span className="text-yellow-400">direSalut</span>(nom) {"{"} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">montre</span>(<span className="text-orange-400">"Salut "</span> + nom) <br />
                &nbsp;&nbsp;{"}"} <br />
                {"}"} <br />
                <br />
                <span className="text-bhilal-accent">soit</span> monRobot = <span className="text-bhilal-accent">nouveau</span> <span className="text-yellow-400">Robot</span>() <br />
                monRobot.<span className="text-yellow-400">direSalut</span>(<span className="text-orange-400">"Bhilal"</span>)
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors group">
    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-light">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Pourquoi choisir Bhilal ?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Une expérience de développement pensée pour la clarté et la puissance.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon="⚡" 
          title="Vitesse de Node" 
          description="Profitez de la puissance de l'écosystème Node.js sur votre machine, partout." 
        />
        <FeatureCard 
          icon="🛡️" 
          title="Encapsulation" 
          description="Un support complet pour les propriétés privées et publiques dans vos classes." 
        />
        <FeatureCard 
          icon="🧩" 
          title="Modulaire" 
          description="Incorporez facilement des bibliothèques et organisez votre code proprement." 
        />
        <FeatureCard 
          icon="🌐" 
          title="Navigateur" 
          description="Le playground intégré vous permet de tester votre code directement en ligne." 
        />
        <FeatureCard 
          icon="🚀" 
          title="Orienté Objet" 
          description="Héritage, interfaces, et classes abstraites pour des architectures solides." 
        />
        <FeatureCard 
          icon="💎" 
          title="Syntaxe Pure" 
          description="Une syntaxe en français, élégante et facile à apprendre pour tous." 
        />
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-bhilal-accent/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-bhilal-accent-2/20 blur-[120px] rounded-full -z-10"></div>
      
      <Navbar />
      <Hero />
      <Features />
      
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold text-xs">B</div>
            <span className="font-bold">Bhilal v10</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Projet Bhilal. Sous licence MIT.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Playground</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
