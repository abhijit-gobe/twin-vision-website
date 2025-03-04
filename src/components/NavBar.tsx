
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps {
  links: NavLink[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-transform duration-300 ease-in-out", 
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="glass rounded-full py-2 px-6 flex justify-between items-center max-w-5xl mx-auto">
        <div className="text-xl font-medium">
          <a href="#top" className="relative group">
            <span className="tracking-tight">A—H</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-70 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <ul className="hidden md:flex space-x-6 items-center">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="relative text-sm py-1 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-70 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
