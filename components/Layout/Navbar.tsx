
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layout, Layers, Terminal, Send } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = [
    { id: 'about', label: 'Identity', icon: Shield },
    { id: 'experience', label: 'Trajectory', icon: Layout },
    { id: 'skills', label: 'Stack', icon: Terminal },
    { id: 'projects', label: 'Missions', icon: Layers },
    { id: 'contact', label: 'Secure Channel', icon: Send },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:block"
    >
      <div className="flex items-center gap-1 p-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-cyan-500/10">
        {/* <div className="px-4 py-2 border-r border-white/10 mr-2">
          <span className="font-orbitron font-bold text-cyan-400 tracking-widest text-sm">NEXUS-CORE</span>
        </div> */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/5 transition-all group"
          >
            <item.icon size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-xs uppercase font-medium tracking-wider text-slate-300 group-hover:text-white">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
