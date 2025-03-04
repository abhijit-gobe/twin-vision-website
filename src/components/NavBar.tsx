
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: { 
        staggerChildren: 0.05, 
        staggerDirection: -1 
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.07, 
        delayChildren: 0.1 
      }
    }
  };

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12", 
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <div className={`rounded-full py-2 px-6 flex justify-between items-center max-w-5xl mx-auto ${
        theme === 'dark' 
          ? 'bg-slate-900/80 backdrop-blur-md border border-slate-700/50 shadow-lg shadow-purple-900/10' 
          : 'bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg shadow-indigo-500/5'
      }`}>
        <motion.div 
          className="text-xl font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#top" className="relative group">
            <span className={`tracking-tight ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>A—H</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-70 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </motion.div>
        <div className="flex items-center space-x-6">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 items-center">
            {links.map((link, index) => (
              <motion.li key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className={`relative text-sm py-1 group ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-70 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
          
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <motion.button 
            className={`md:hidden p-2 rounded-full ${
              theme === 'dark' ? 'bg-slate-800/80 backdrop-blur-sm' : 'bg-gray-100/80 backdrop-blur-sm'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={`md:hidden absolute top-full left-0 right-0 mt-2 px-6 py-4 ${
              theme === 'dark' 
                ? 'bg-slate-900/90 backdrop-blur-md border border-slate-700/50' 
                : 'bg-white/90 backdrop-blur-md border border-gray-200'
            } rounded-xl shadow-lg`}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="space-y-4">
              {links.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={menuItemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      theme === 'dark' 
                        ? 'hover:bg-slate-800 text-gray-300 hover:text-white' 
                        : 'hover:bg-gray-100 text-gray-700 hover:text-black'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
