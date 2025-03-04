
import React, { useState } from 'react';

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

  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-medium mb-4">Selected Work</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Here are some of my recent projects. Each one represents a unique challenge that I've approached with creativity and technical expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl border cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => setActiveProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {activeProject && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6" onClick={() => setActiveProject(null)}>
            <div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-2">{activeProject.title}</h3>
                <p className="text-muted-foreground mb-4">{activeProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((tag, index) => (
                    <span key={index} className="bg-secondary px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                  >
                    View Project
                  </a>
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
