import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
          Nadim<span className="text-sfBlue">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="/#about" className="hover:text-sfBlue transition-colors">About</a>
          <a href="/#updates" className="hover:text-sfBlue transition-colors">Updates</a>
          <a href="/#blog" className="hover:text-sfBlue transition-colors">Blog</a>
          <a href="/resume.pdf" download className="hover:text-sfBlue transition-colors">Resume</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <a 
            href="mailto:nadimkhann47@gmail.com" 
            className="hidden sm:inline-flex bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
