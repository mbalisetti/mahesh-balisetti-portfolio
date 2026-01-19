
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-cyan-400 font-mono tracking-widest text-sm uppercase">CHANNEL</h2>
            <h3 className="font-orbitron text-5xl font-bold text-white">LET'S BUILD SECURE SYSTEMS TOGETHER</h3>
            <p className="max-w-xl mx-auto text-slate-400 text-lg font-light leading-relaxed">
              Open for collaborations
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {/* <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="mailto:contact@nexus-core.io"
              className="p-4 bg-slate-900/80 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
            >
              <Mail className="text-slate-400 group-hover:text-cyan-400 mb-2" size={24} />
              <span className="block text-xs font-mono uppercase text-slate-500 group-hover:text-white">Email</span>
            </motion.a> */}
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="https://linkedin.com/in/babu3916"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-slate-900/80 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
            >
              <Linkedin className="text-slate-400 group-hover:text-blue-400 mb-2" size={24} />
              <span className="block text-xs font-mono uppercase text-slate-500 group-hover:text-white">LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="https://github.com/mbalisetti"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-slate-900/80 border border-white/10 rounded-2xl hover:border-white/50 hover:bg-white/5 transition-all group"
            >
              <Github className="text-slate-400 group-hover:text-white mb-2" size={24} />
              <span className="block text-xs font-mono uppercase text-slate-500 group-hover:text-white">GitHub</span>
            </motion.a>
          </div>

          {/* <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Terminal size={18} className="text-cyan-500" />
              <span className="font-orbitron text-sm font-bold text-white tracking-widest">NEXUS-CORE // ARCHITECT</span>
            </div>
            <p className="text-slate-600 text-xs font-mono">
              &copy; 2024 ENCRYPTION PROTECTED. ALL RIGHTS RESERVED.
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
