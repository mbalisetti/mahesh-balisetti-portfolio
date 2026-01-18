
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-cyan-400 font-mono tracking-widest text-sm uppercase">STACK</h2>
        <h3 className="font-orbitron text-4xl font-bold text-white">TECH ARSENAL</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILL_CATEGORIES.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all"
          >
            {/* Background Glow */}
            <div 
              className="absolute -right-10 -top-10 w-32 h-32 blur-[80px] opacity-20 transition-opacity group-hover:opacity-40"
              style={{ backgroundColor: cat.color }}
            ></div>

            <h4 className="font-orbitron text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }}></span>
              {cat.name}
            </h4>

            <div className="space-y-4">
              {cat.skills.map((skill, idx) => (
                <div key={idx} className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 text-sm font-medium tracking-wide group-hover/skill:text-white transition-colors">
                      {skill}
                    </span>
                    <span className="text-slate-600 font-mono text-[10px] uppercase">Ready</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: cat.color }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;
