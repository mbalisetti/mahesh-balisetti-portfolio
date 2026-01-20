
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Cloud, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: ShieldCheck, label: "Security First", desc: "Hardening financial systems against advanced threats." },
    { icon: Cpu, label: "Actimize Expert", desc: "Mastering AIS and ActOne logic for real-time detection." },
    { icon: Cloud, label: "Cloud Native", desc: "Deploying high-availability systems on OpenShift & AWS." },
    { icon: Globe, label: "Global Scale", desc: "Engineering solutions that serve millions of bank users." }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-cyan-400 font-mono tracking-widest text-sm uppercase">IDENTITY</h2>
            <h3 className="font-orbitron text-4xl font-bold text-white">THE NARRATIVE</h3>
          </div>
          
          <div className="relative p-8 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-t-2xl"></div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
              <span className="text-white font-medium">Software Engineer</span> with 2+ years of experience working on fraud detection systems. Hands-on experience with IFM solution, ActOne customization, developing custom RCM java plugins, REST API Integration, and application migration. Strong team player focused on building reliable and secure systems.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1">
                  <stat.icon className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{stat.label}</h4>
                  <p className="text-slate-400 text-xs">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square flex items-center justify-center"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative w-4/5 h-4/5 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_20px_#06b6d4]"></div>
          </div>
          <div className="absolute w-2/3 h-2/3 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]">
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_#8b5cf6]"></div>
          </div>
          
          <div className="z-10 text-center space-y-2">
            <span className="block font-orbitron text-6xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">2+</span>
            <span className="block text-cyan-400 font-mono text-sm tracking-widest uppercase">Years In Enterprise</span>
            <div className="mt-4 flex gap-2 justify-center">
              <div className="h-1 w-8 bg-cyan-500 rounded-full"></div>
              <div className="h-1 w-4 bg-slate-700 rounded-full"></div>
              <div className="h-1 w-4 bg-slate-700 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
