
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden"
      style={{ 
        '--mouse-x': '0px', 
        '--mouse-y': '0px' 
      } as React.CSSProperties}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none aspect-square rounded-full opacity-70 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(236,236,236,0.8) 0%, rgba(246,245,252,0) 70%)",
          transform: "translate(-50%, -50%) translate(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1))",
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-4">
          <div className="inline-block px-4 py-1.5 text-xs font-medium rounded-full border bg-white/50 backdrop-blur-sm mb-8 animate-fade-down" style={{ animationDelay: '0.2s' }}>
            Antonio Hincapie
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight md:leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Frontend web developer, creating memorable digital experiences
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          I build remarkable web solutions that are performant, accessible, and delightful for everyone.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#about" 
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
          >
            More about me
          </a>
          <a 
            href="#work" 
            className="px-6 py-3 rounded-full border text-sm font-medium transition-all hover:bg-secondary hover:translate-y-[-2px]"
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
