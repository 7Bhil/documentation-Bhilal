import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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

export default FeatureCard;
