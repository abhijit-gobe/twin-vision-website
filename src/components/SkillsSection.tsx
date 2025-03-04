
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "UI/UX Design", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

const SkillsSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="skills" className={`py-24 px-6 md:px-12 ${theme === 'dark' ? 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50'}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl font-medium mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>{skill.name}</span>
                <span className={`text-sm transition-opacity opacity-0 group-hover:opacity-100 ${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`h-1.5 w-full rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'bg-secondary'}`}>
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out-expo origin-left animate-[scaleIn_1.5s_ease_forwards_0.3s] ${theme === 'dark' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : 'bg-gradient-to-r from-violet-400 to-fuchsia-400'}`}
                  style={{ 
                    width: `${skill.level}%`,
                    transform: "scaleX(0)"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <style>
          {`
            @keyframes scaleIn {
              from { transform: scaleX(0); }
              to { transform: scaleX(1); }
            }
          `}
        </style>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/60 backdrop-blur-sm border-gray-700' : 'bg-white/60 backdrop-blur-sm'}`}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${theme === 'dark' ? 'bg-violet-500/20' : 'bg-primary/10'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className={`text-xl font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Frontend Development</h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}>Building responsive, accessible, and performant web interfaces with modern frameworks and tools.</p>
          </div>
          
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/60 backdrop-blur-sm border-gray-700' : 'bg-white/60 backdrop-blur-sm'}`}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${theme === 'dark' ? 'bg-fuchsia-500/20' : 'bg-primary/10'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
                <path d="M12 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                <path d="M12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                <path d="M6 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                <path d="M18 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
              </svg>
            </div>
            <h3 className={`text-xl font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>UI/UX Design</h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}>Creating intuitive and visually appealing user interfaces with a focus on user experience.</p>
          </div>
          
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/60 backdrop-blur-sm border-gray-700' : 'bg-white/60 backdrop-blur-sm'}`}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${theme === 'dark' ? 'bg-indigo-500/20' : 'bg-primary/10'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <h3 className={`text-xl font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>API Integration</h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'}>Connecting frontend applications to backend services and third-party APIs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
