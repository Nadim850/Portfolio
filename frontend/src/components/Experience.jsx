import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/experience/')
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(console.error);
  }, []);

  const dataToUse = experiences.length > 0 ? experiences : [
    {
      role: "Salesforce Developer Intern",
      company: "Aazad Software Solutions",
      date_range: "Feb 2026 - Present",
      location: "Remote / Khargone, MP",
      description: "Developing robust CRM applications, automating complex business processes using Flow and Apex, and building modern user interfaces with LWC.",
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">Professional Experience</h2>
          
          <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8 relative">
            {dataToUse.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-sfBlue border-4 border-white dark:border-slate-950"></div>
                
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{exp.role}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-sfBlue" /> {exp.company}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={16} className="text-sfBlue" /> {exp.date_range}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={16} className="text-sfBlue" /> {exp.location}</span>
                  </div>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
