
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 border-t">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Antonio Hincapie. All rights reserved.
          </p>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#top" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#work" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
