import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { API_URL } from '../config';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/projects/`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
        // Fallback data
        setProjects([
          {
            id: 1,
            title: "Salesforce CRM Automation",
            description: "Developed an automated lead assignment and tracking system using Salesforce Flow and Apex Triggers, reducing manual entry by 40%.",
            image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tech_stack: "Apex, Flow, SOQL",
            github_link: "#",
            live_link: "#"
          },
          {
            id: 2,
            title: "Portfolio Architecture",
            description: "A modern decoupled portfolio website using React, Tailwind CSS, and a Django REST Framework backend.",
            image_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            tech_stack: "React, Django, Tailwind",
            github_link: "#",
            live_link: "#"
          }
        ]);
      });
  }, []);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">A showcase of my recent work in cloud engineering and web development.</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center"><div className="w-8 h-8 border-4 border-sfBlue border-t-transparent rounded-full animate-spin"></div></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                  {project.image_url ? (
                     <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                     <div className="w-full h-full flex items-center justify-center text-slate-400">No Image provided</div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" rel="noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                        <Code2 size={20} />
                      </a>
                    )}
                    {project.live_link && (
                      <a href={project.live_link} target="_blank" rel="noreferrer" className="p-3 bg-sfBlue text-white rounded-full hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.tech_stack.split(',').map((tech, i) => (
                      <span key={i} className="text-xs font-semibold uppercase tracking-wider text-sfBlue">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
