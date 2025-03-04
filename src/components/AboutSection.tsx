
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-medium mb-6">About me</h2>
          <div className="aspect-square rounded-2xl overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Antonio Hincapie" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="flex gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="space-y-6">
            <p className="text-lg">
              I'm Antonio, a frontend developer based in Medellin, Colombia. With over 4 years of experience, I specialize in building responsive and intuitive interfaces.
            </p>
            
            <p className="text-lg">
              My journey in web development started when I discovered my passion for creating visually appealing and functional websites. Since then, I've been continuously learning and improving my skills to deliver exceptional digital experiences.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you'll find me exploring new technologies, hiking in the mountains, or enjoying a good book.
            </p>
            
            <h3 className="text-xl font-medium pt-4">Education</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">BSc in Computer Science</span>
                  <span className="text-sm text-muted-foreground">2015 - 2019</span>
                </div>
                <p className="text-muted-foreground">University of Antioquia</p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">Frontend Web Development</span>
                  <span className="text-sm text-muted-foreground">2020</span>
                </div>
                <p className="text-muted-foreground">Online Certification Program</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
