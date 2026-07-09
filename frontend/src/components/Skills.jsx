import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Wrench } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const iconMap = {
  'Cloud': <Cloud size={24} />,
  'Code': <Code size={24} />,
  'Wrench': <Wrench size={24} />,
};

const Skills = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/skills/')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(console.error);
  }, []);

  const defaultCategories = [
    {
      title: "Salesforce Core", icon_name: "Cloud", color: "blue",
      skills: [{name: "Apex"}, {name: "LWC"}, {name: "Flow"}, {name: "SOQL"}]
    },
    {
      title: "Programming", icon_name: "Code", color: "indigo",
      skills: [{name: "Java"}, {name: "JavaScript"}, {name: "Python"}, {name: "React"}]
    }
  ];

  const dataToUse = categories.length > 0 ? categories : defaultCategories;

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
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">The tools and technologies I use to build robust cloud solutions.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {dataToUse.map((category, idx) => {
            const IconComponent = iconMap[category.icon_name] || iconMap['Code'];
            
            return (
              <motion.div key={idx} variants={itemVariants} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-500 mb-6`}>
                  {IconComponent}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
