
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce website with cart functionality and payment integration.",
    image: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A minimalist portfolio website for a graphic designer showcasing their work.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    link: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for tracking tasks with team collaboration features.",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Firebase", "Material UI"],
    link: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather information dashboard with location-based forecasts.",
    image: "https://images.unsplash.com/photo-1496450681664-3df85efbd29f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["TypeScript", "React", "Weather API"],
    link: "#"
  }
];

const WorkSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { theme } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } }
  };

  return (
    <section 
      id="work" 
      className={`py-24 px-6 md:px-12 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 to-slate-900 via-indigo-950' 
          : 'bg-gradient-to-br from-gray-50 to-gray-100 via-indigo-50'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className={`text-3xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.h2>
        
        <motion.p 
          className={`text-lg mb-12 max-w-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects. Each one represents a unique challenge that I've approached with creativity and technical expertise.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative overflow-hidden rounded-2xl border cursor-pointer ${
                theme === 'dark' 
                  ? 'border-gray-700/50' 
                  : 'border-gray-200'
              }`}
              onClick={() => setActiveProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <AnimatePresence>
          {activeProject && (
            <motion.div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setActiveProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className={`rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto ${
                  theme === 'dark' 
                    ? 'bg-slate-900 border border-gray-700' 
                    : 'bg-white'
                }`}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>
                    {activeProject.title}
                  </h3>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}`}>
                    {activeProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProject.tags.map((tag, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-xs ${
                        theme === 'dark' 
                          ? 'bg-slate-800 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={activeProject.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`px-6 py-2 rounded-full text-sm font-medium ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white' 
                          : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      }`}
                    >
                      View Project
                    </motion.a>
                    <motion.button 
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveProject(null)}
                      className={`p-2 rounded-full ${
                        theme === 'dark' 
                          ? 'hover:bg-slate-800 text-gray-300' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorkSection;
