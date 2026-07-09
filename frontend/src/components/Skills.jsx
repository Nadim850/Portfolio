import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Salesforce Core",
    icon: <Cloud className="text-blue-500" size={24} />,
    color: "blue",
    skills: ["Apex", "Lightning Web Components (LWC)", "SOQL", "Salesforce Flow", "Data Modeling", "SLDS"]
  },
  {
    title: "Programming",
    icon: <Code className="text-indigo-500" size={24} />,
    color: "indigo",
    skills: ["Java", "JavaScript (ES6+)", "Python", "HTML5", "CSS3 / Tailwind"]
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="text-cyan-500" size={24} />,
    color: "cyan",
    skills: ["Git", "GitHub", "VS Code", "Salesforce CLI", "Django", "React"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Tech Stack Architecture</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">The tools and technologies I use to build robust and scalable cloud solutions.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${category.color}-100 dark:bg-${category.color}-900/30 mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
