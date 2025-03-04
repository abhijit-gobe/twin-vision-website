
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
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
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50'}`}
      style={{ 
        '--mouse-x': '0px', 
        '--mouse-y': '0px' 
      } as React.CSSProperties}
    >
      {theme === 'dark' ? (
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(30,30,50,0))]"></div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      )}
      
      <div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none aspect-square rounded-full opacity-70 blur-3xl ${theme === 'dark' ? 'bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-blue-500/20' : ''}`}
        style={{
          background: theme === 'dark' 
            ? "radial-gradient(circle, rgba(76,29,149,0.3) 0%, rgba(16,16,36,0) 70%)"
            : "radial-gradient(circle, rgba(236,236,236,0.8) 0%, rgba(246,245,252,0) 70%)",
          transform: "translate(-50%, -50%) translate(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1))",
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-4">
          <div className={`inline-block px-4 py-1.5 text-xs font-medium rounded-full border mb-8 animate-fade-down ${theme === 'dark' ? 'bg-slate-800/50 backdrop-blur-sm border-slate-700' : 'bg-white/50 backdrop-blur-sm'}`} style={{ animationDelay: '0.2s' }}>
            Antonio Hincapie
          </div>
        </div>
        
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight md:leading-tight mb-6 animate-fade-up ${theme === 'dark' ? 'text-white' : ''}`} style={{ animationDelay: '0.4s' }}>
          Frontend web developer, creating memorable digital experiences
        </h1>
        
        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up ${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}`} style={{ animationDelay: '0.6s' }}>
          I build remarkable web solutions that are performant, accessible, and delightful for everyone.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#about" 
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg ${theme === 'dark' ? 'bg-violet-600 text-white hover:bg-violet-500' : 'bg-primary text-primary-foreground'}`}
          >
            More about me
          </a>
          <a 
            href="#work" 
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all hover:translate-y-[-2px] ${theme === 'dark' ? 'border-slate-700 border hover:bg-slate-800' : 'border hover:bg-secondary'}`}
          >
            See my work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
