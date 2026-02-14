import React from 'react';
import { motion } from 'framer-motion';

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

export default SectionHeader;
