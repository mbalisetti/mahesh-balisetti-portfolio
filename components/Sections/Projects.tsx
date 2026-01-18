
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { ExternalLink, Terminal, Shield, Activity } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-cyan-400 font-mono tracking-widest text-sm uppercase">MISSIONS</h2>
        <h3 className="font-orbitron text-4xl font-bold text-white">PROJECT DOSSIER</h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-cyan-500/30 transition-all duration-500"
          >
            <div className="h-full bg-slate-950 rounded-2xl p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-orbitron text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-cyan-500/80 font-mono text-xs uppercase tracking-widest">{project.mission}</p>
                </div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                  <Activity size={20} className="text-cyan-400" />
                </div>
              </div>

              <div className="grid gap-6 mb-8 flex-grow">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    <Terminal size={12} /> The Challenge
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    <Shield size={12} /> The Solution
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto p-4 rounded-xl bg-slate-900 border border-white/5 group-hover:border-cyan-500/20 transition-all">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-2">KPI Impact Report</div>
                <p className="text-sm font-medium text-white">{project.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
