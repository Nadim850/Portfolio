import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/profile/')
      .then(res => res.json())
      .then(data => {
        if (Object.keys(data).length > 0) setProfile(data);
      })
      .catch(console.error);
  }, []);

  const defaultProfile = {
    name: "Nadim Khan",
    role: "Salesforce Developer Intern",
    bio: "I specialize in building scalable, modern business applications on the Salesforce platform using Apex and LWC.",
    resume_url: "/resume.pdf",
    email: "nadimkhann47@gmail.com"
  };

  const p = profile || defaultProfile;

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-sfBlue/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sfBlue/10 text-sfBlue text-sm font-semibold tracking-wide">
            <span>☁️</span> {p.role}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Engineering<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sfBlue to-cyan-500">
              Cloud Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light max-w-lg leading-relaxed">
            Hi, I'm {p.name}. {p.bio}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href={`mailto:${p.email}`} 
              className="bg-sfBlue hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
            <a 
              href={p.resume_url}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <img 
              src="/images/hero-illustration.jpg" 
              alt="Developer at modern desk" 
              className="w-full h-full object-cover p-2 rounded-[2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
