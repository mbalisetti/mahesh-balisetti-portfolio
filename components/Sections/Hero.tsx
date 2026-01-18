
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-5xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-[0.3em]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Software Engineering
        </motion.div>
        
        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
          <span className="block text-white">Mahesh Babu Balisetti</span>
          {/* <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Scalable Fraud Systems
          </span> */}
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 font-light leading-relaxed">
          Specializing in Java, <span className="text-cyan-400 font-medium">Actimize ActOne/RCM Plugins</span>, and Enterprise Cloud.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold tracking-widest uppercase text-sm overflow-hidden transition-all shadow-lg shadow-cyan-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="flex items-center gap-2">
              View Experience <ArrowRight size={18} />
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold tracking-widest uppercase text-sm transition-all backdrop-blur-sm"
          >
            Explore Projects
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
