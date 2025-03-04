
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

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

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-transform duration-300 ease-in-out", 
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className={`rounded-full py-2 px-6 flex justify-between items-center max-w-5xl mx-auto ${theme === 'dark' ? 'bg-slate-900/80 backdrop-blur-md border border-slate-700' : 'glass'}`}>
        <div className="text-xl font-medium">
          <a href="#top" className="relative group">
            <span className="tracking-tight">A—H</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-70 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="flex items-center space-x-6">
          {/* Desktop Navigation */}
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
          
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full bg-secondary/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className={`md:hidden absolute top-full left-0 right-0 mt-2 px-6 py-4 ${
            theme === 'dark' 
              ? 'bg-slate-900/90 backdrop-blur-md border border-slate-700' 
              : 'bg-white/90 backdrop-blur-md border border-gray-100'
          } rounded-xl shadow-lg transition-all duration-300 ease-in-out`}
        >
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="block py-2 px-4 rounded-lg hover:bg-secondary/50 transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
