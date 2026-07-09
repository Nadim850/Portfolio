import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TechUpdates from './components/TechUpdates';
import BlogList from './components/BlogList';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-sfBlue selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <TechUpdates />
        <BlogList />
        <Contact />
      </main>
      
      <footer className="py-12 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <p className="mb-2">© {new Date().getFullYear()} Nadim Khan. Built with React & Django.</p>
        <p className="text-sm">Inspired by minimalist, premium design.</p>
      </footer>
    </div>
  );
}

export default App;
