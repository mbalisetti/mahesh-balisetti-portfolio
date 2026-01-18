
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';
import { Briefcase, Calendar, Target, Settings } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-10 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16 space-y-4">
          <h2 className="text-cyan-400 font-mono tracking-widest text-sm uppercase">02 TRAJECTORY</h2>
          <h3 className="font-orbitron text-4xl font-bold text-white">THE MISSION LOG</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Connector Node */}
                <div className="absolute left-[-8px] md:left-1/2 md:-ml-[8px] top-4 w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full z-10 shadow-[0_0_10px_#06b6d4]"></div>
                
                <div className="w-full md:w-1/2">
                   <div className={`p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md hover:border-cyan-500/30 transition-all group ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`flex items-start gap-3 mb-4 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <Calendar size={16} className="text-cyan-400" />
                        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">{exp.period}</span>
                      </div>
                      
                      <h4 className="text-2xl font-orbitron font-bold text-white mb-1">{exp.company}</h4>
                      <p className="text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">{exp.role}</p>
                      
                      <ul className={`space-y-3 mb-6 text-sm text-slate-400 ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="flex gap-2 leading-relaxed items-start">
                            <span className="text-cyan-500/50 mt-1">▹</span> {desc}
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.tools.map((tool, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] text-slate-300 font-mono uppercase">
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-white/5">
                        <div className={`flex items-start gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                           <Target size={14} /> Mission Impact
                        </div>
                        <p className="mt-2 text-sm text-slate-300 italic">
                          "{exp.impact}"
                        </p>
                      </div>
                   </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
