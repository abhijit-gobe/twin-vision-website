
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML", icon: "html5", color: "text-orange-500" },
  { name: "CSS", icon: "css3", color: "text-blue-500" },
  { name: "JavaScript", icon: "javascript", color: "text-yellow-500" },
  { name: "TypeScript", icon: "typescript", color: "text-blue-600" },
  { name: "React", icon: "react", color: "text-cyan-400" },
  { name: "Next.js", icon: "nextjs", color: "text-slate-800 dark:text-white" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "text-cyan-500" },
  { name: "Git", icon: "git", color: "text-orange-600" },
];

const tools: Skill[] = [
  { name: "VS Code", icon: "vscode", color: "text-blue-500" },
  { name: "Figma", icon: "figma", color: "text-purple-500" },
  { name: "GitHub", icon: "github", color: "text-slate-800 dark:text-white" },
  { name: "Docker", icon: "docker", color: "text-blue-600" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const SkillsSection = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="skills" 
      className={`py-24 px-6 md:px-12 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900/70 to-indigo-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-3xl font-medium mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-xl font-medium mb-6 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Technologies</h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                variants={item}
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: theme === 'dark' 
                      ? '0 0 20px rgba(139, 92, 246, 0.3)' 
                      : '0 0 20px rgba(99, 102, 241, 0.2)' 
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-20 h-20 flex items-center justify-center rounded-2xl mb-3 ${
                    theme === 'dark' 
                      ? 'bg-slate-800/60 backdrop-blur-md border border-slate-700/50' 
                      : 'bg-white/80 backdrop-blur-md border border-indigo-100/50 shadow-lg'
                  }`}
                >
                  <i className={`devicon-${skill.icon}-plain colored text-4xl`}></i>
                </motion.div>
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}`}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-xl font-medium mb-6 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Tools</h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                variants={item}
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: theme === 'dark' 
                      ? '0 0 20px rgba(139, 92, 246, 0.3)' 
                      : '0 0 20px rgba(99, 102, 241, 0.2)' 
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-20 h-20 flex items-center justify-center rounded-2xl mb-3 ${
                    theme === 'dark' 
                      ? 'bg-slate-800/60 backdrop-blur-md border border-slate-700/50' 
                      : 'bg-white/80 backdrop-blur-md border border-indigo-100/50 shadow-lg'
                  }`}
                >
                  <i className={`devicon-${tool.icon}-plain colored text-4xl`}></i>
                </motion.div>
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}`}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.div 
            variants={item}
            whileHover={{ 
              y: -5,
              boxShadow: theme === 'dark' 
                ? '0 10px 30px -15px rgba(139, 92, 246, 0.3)' 
                : '0 10px 30px -15px rgba(99, 102, 241, 0.2)' 
            }}
            className={`p-6 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-slate-800/60 backdrop-blur-md border-gray-700/50' 
                : 'bg-white/60 backdrop-blur-md border-indigo-100/50 shadow-lg'
            }`}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${
              theme === 'dark' ? 'bg-violet-500/20' : 'bg-indigo-500/10'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-violet-400' : 'text-indigo-500'}>
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className={`text-xl font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Frontend Development</h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}>Building responsive, accessible, and performant web interfaces with modern frameworks and tools.</p>
          </motion.div>
          
          <motion.div 
            variants={item}
            whileHover={{ 
              y: -5,
              boxShadow: theme === 'dark' 
                ? '0 10px 30px -15px rgba(139, 92, 246, 0.3)' 
                : '0 10px 30px -15px rgba(99, 102, 241, 0.2)' 
            }}
            className={`p-6 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-slate-800/60 backdrop-blur-md border-gray-700/50' 
                : 'bg-white/60 backdrop-blur-md border-indigo-100/50 shadow-lg'
            }`}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${
              theme === 'dark' ? 'bg-fuchsia-500/20' : 'bg-purple-500/10'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-fuchsia-400' : 'text-purple-500'}>
                <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
                <path d="M12 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                <path d="M12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                <path d="M6 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                <path d="M18 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
              </svg>
            </div>
            <h3 className={`text-xl font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>UI/UX Design</h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}>Creating intuitive and visually appealing user interfaces with a focus on user experience.</p>
          </motion.div>
          
          <motion.div 
            variants={item}
            whileHover={{ 
              y: -5,
              boxShadow: theme === 'dark' 
                ? '0 10px 30px -15px rgba(139, 92, 246, 0.3)' 
                : '0 10px 30px -15px rgba(99, 102, 241, 0.2)' 
            }}
            className={`p-6 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-slate-800/60 backdrop-blur-md border-gray-700/50' 
                : 'bg-white/60 backdrop-blur-md border-indigo-100/50 shadow-lg'
            }`}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${
              theme === 'dark' ? 'bg-indigo-500/20' : 'bg-blue-500/10'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === 'dark' ? 'text-indigo-400' : 'text-blue-500'}>
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <h3 className={`text-xl font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>API Integration</h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}>Connecting frontend applications to backend services and third-party APIs.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
