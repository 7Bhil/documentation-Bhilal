import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Rocket, 
  Search,
  BookOpen
} from 'lucide-react';
import { tutorials } from '../docsData';
import CodeBlock from '../components/CodeBlock';

const DocsPortal = ({ onClose, isFirstOpen }) => {
  const [currentChapterIdx, setCurrentChapterIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(null); // null means showing the chapter overview
  const [isChangingChapter, setIsChangingChapter] = useState(false);
  const contentRef = useRef(null);

  const currentChapter = tutorials[currentChapterIdx];

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: isChangingChapter ? 'auto' : 'smooth' });
      if (isChangingChapter) setIsChangingChapter(false);
    }
  }, [currentChapterIdx, isChangingChapter]);

  // Handle step selection - for now, we scroll to the step in the same page
  const handleStepClick = (stepIdx) => {
    setActiveStepIdx(stepIdx);
    const element = document.getElementById(`step-${stepIdx}`);
    if (element && contentRef.current) {
      const offset = element.offsetTop - 40;
      contentRef.current.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const handleNextChapter = () => {
    if (currentChapterIdx < tutorials.length - 1) {
      setIsChangingChapter(true);
      setCurrentChapterIdx(prev => prev + 1);
      setActiveStepIdx(null);
    }
  };

  const handlePrevChapter = () => {
    if (currentChapterIdx > 0) {
      setIsChangingChapter(true);
      setCurrentChapterIdx(prev => prev - 1);
      setActiveStepIdx(null);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-bhilal-dark flex flex-col md:flex-row h-screen overflow-hidden"
    >
      <div className="noise-overlay opacity-[0.03]"></div>
      
      {/* Sidebar */}
      <aside className="w-full md:w-80 border-r border-white/5 bg-bhilal-surface p-8 flex flex-col z-10 overflow-y-auto scrollbar-hide">
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

        <div className="space-y-10 flex-1">
          {tutorials.map((chapter, idx) => (
            <div key={chapter.id}>
              <button
                onClick={() => {
                  setCurrentChapterIdx(idx);
                  setActiveStepIdx(null);
                  setIsChangingChapter(true);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group mb-2 ${
                  currentChapterIdx === idx 
                  ? 'bg-bhilal-accent/10 text-bhilal-accent font-bold' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="truncate">{chapter.title}</span>
                {currentChapterIdx === idx && <div className="w-1.5 h-1.5 rounded-full bg-bhilal-accent shadow-[0_0_8px_#00d2ff]"></div>}
              </button>
              
              {/* Nested Steps */}
              {currentChapterIdx === idx && (
                <div className="ml-6 space-y-1 mt-2 border-l border-white/5 pl-4">
                  {chapter.steps.map((step, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleStepClick(sIdx)}
                      className={`w-full text-left py-2 text-sm transition-all block truncate ${
                        activeStepIdx === sIdx 
                        ? 'text-bhilal-accent font-medium' 
                        : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {step.title}
                    </button>
                  ))}
                </div>
              )}
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
                   style={{ width: `${((currentChapterIdx + 1) / tutorials.length) * 100}%` }}
                 ></div>
              </div>
              <div className="mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                 {currentChapterIdx + 1} / {tutorials.length} Chapitres
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main 
        ref={contentRef}
        className="flex-1 overflow-y-auto bg-bhilal-dark relative scroll-smooth p-6 md:p-16 lg:p-24"
      >
        <div className="max-w-4xl mx-auto z-10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              <div>
                <span className="text-bhilal-accent font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">
                  {currentChapter.category}
                </span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                  {currentChapter.title}
                </h1>
                <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mb-16">
                  {currentChapter.content}
                </p>

                <div className="space-y-24">
                  {currentChapter.steps.map((step, stepIdx) => (
                    <div key={stepIdx} id={`step-${stepIdx}`} className="space-y-8 scroll-mt-24">
                      <div className="flex gap-6 items-center">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center font-black text-bhilal-accent border-bhilal-accent/30 shrink-0">
                          {stepIdx + 1}
                        </div>
                        <h3 className="text-2xl font-black tracking-tight">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 font-light text-lg">
                        {step.text}
                      </p>
                      <CodeBlock 
                        code={step.code} 
                        title={step.title.toLowerCase().replace(/\s+/g, '_') + '.bh'} 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="pt-16 border-t border-white/5 flex justify-between items-center gap-4">
                <button 
                  disabled={currentChapterIdx === 0}
                  onClick={handlePrevChapter}
                  className={`flex items-center gap-3 font-black text-sm uppercase tracking-widest transition-colors ${
                    currentChapterIdx === 0 ? 'text-slate-800' : 'text-slate-400 hover:text-bhilal-accent'
                  }`}
                >
                  <ChevronLeft size={18} /> Chapitre Précédent
                </button>
                
                {currentChapterIdx < tutorials.length - 1 ? (
                  <button 
                    onClick={handleNextChapter}
                    className="px-8 py-4 rounded-xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-bhilal-accent transition-colors flex items-center gap-3 shadow-xl shadow-white/5 active:scale-95 transition-transform"
                  >
                    Chapitre Suivant <ChevronRight size={18} />
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
          </AnimatePresence>
        </div>

        {/* Decorative elements */}
        <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-bhilal-accent/5 blur-[120px] rounded-full -z-10"></div>
        <div className="fixed bottom-[-10%] left-[-20%] w-[800px] h-[800px] bg-purple-500/5 blur-[150px] rounded-full -z-10"></div>
      </main>
    </motion.div>
  );
};

export default DocsPortal;
