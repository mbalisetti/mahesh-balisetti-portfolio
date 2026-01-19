
import React, { useEffect } from 'react';
import BackgroundScene from './components/Three/BackgroundScene';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Certification from "./components/Sections/Certification";

const App: React.FC = () => {
  // Simple initialization log
  useEffect(() => {
    console.log("%c NEXUS-CORE %c System Initialized... ", 
      "background: #06b6d4; color: #000; font-weight: bold; padding: 4px; border-radius: 4px;",
      "color: #06b6d4; font-weight: bold;"
    );
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 3D Visual Foundation */}
      <BackgroundScene />
      
      {/* UI Navigation Overlay */}
      <Navbar />
      
      {/* Content Layers */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Certification />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Mobile Indicator */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono uppercase text-cyan-400 tracking-widest">
        Scroll To Navigate
      </div>
    </div>
  );
};

export default App;
