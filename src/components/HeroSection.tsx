
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-heading', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-text', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.hero-buttons', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );
    
    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the center of the hero section
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      
      // Apply the transform to create the parallax effect
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="top" 
      ref={heroRef}
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900/70 to-indigo-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
      }`}
      style={{ 
        '--mouse-x': '0px', 
        '--mouse-y': '0px' 
      } as React.CSSProperties}
    >
      {theme === 'dark' ? (
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(30,30,50,0))]"></div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      )}
      
      <div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none aspect-square rounded-full ${
          theme === 'dark' 
            ? 'opacity-70 bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-blue-500/30 blur-3xl' 
            : 'opacity-60 bg-gradient-to-br from-indigo-200/40 via-purple-200/30 to-pink-200/40 blur-3xl'
        }`}
        style={{
          transform: "translate(-50%, -50%) translate(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1))",
        }}
      ></div>
      
      <motion.div 
        className="absolute top-20 right-20 md:top-40 md:right-40 w-32 h-32 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2], 
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -10, 0] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(30,27,75,0) 70%)' 
            : 'radial-gradient(circle, rgba(199,210,254,0.6) 0%, rgba(243,244,246,0) 70%)'
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-20 md:bottom-40 md:left-40 w-40 h-40 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0.2, 0.3, 0.2], 
          scale: [1, 1.1, 1],
          x: [0, -10, 0],
          y: [0, 10, 0] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(219,39,119,0.2) 0%, rgba(30,27,75,0) 70%)' 
            : 'radial-gradient(circle, rgba(252,231,243,0.7) 0%, rgba(243,244,246,0) 70%)'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`inline-block px-4 py-1.5 text-xs font-medium rounded-full border mb-8 ${
            theme === 'dark' 
              ? 'bg-slate-800/50 backdrop-blur-sm border-slate-700 text-violet-200' 
              : 'bg-white/50 backdrop-blur-sm border-indigo-100 text-indigo-600'
          }`}>
            Antonio Hincapie
          </div>
        </motion.div>
        
        <motion.h1 
          className={`hero-heading text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight md:leading-tight mb-6 ${
            theme === 'dark' 
              ? 'text-white' 
              : 'text-foreground'
          }`}
        >
          Frontend web developer, creating memorable digital experiences
        </motion.h1>
        
        <motion.p 
          className={`hero-text text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
            theme === 'dark' 
              ? 'text-gray-300' 
              : 'text-muted-foreground'
          }`}
        >
          I build remarkable web solutions that are performant, accessible, and delightful for everyone.
        </motion.p>
        
        <motion.div 
          className="hero-buttons flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#about" 
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all shadow-lg ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-violet-500/30' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-indigo-500/30'
            }`}
          >
            More about me
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#work" 
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              theme === 'dark' 
                ? 'border-slate-700 border bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700' 
                : 'border-indigo-100 border bg-white/50 backdrop-blur-sm hover:bg-indigo-50'
            }`}
          >
            See my work
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ 
          y: [0, 5, 0],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
