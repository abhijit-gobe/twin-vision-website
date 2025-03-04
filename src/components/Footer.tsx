
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer className={`py-8 px-6 md:px-12 border-t ${
      theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          className="mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-muted-foreground'}`}>
            © {currentYear} Antonio Hincapie. All rights reserved.
          </p>
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ul className="flex space-x-6">
            {['Home', 'About', 'Work', 'Contact'].map((item, index) => (
              <motion.li key={index} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <a 
                  href={`#${item.toLowerCase() === 'home' ? 'top' : item.toLowerCase()}`}
                  className={`text-sm transition-colors ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </footer>
  );
};

export default Footer;
