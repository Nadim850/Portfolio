import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import { API_URL } from './config';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-sfBlue selection:text-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>
        
        <footer className="py-12 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <p className="mb-2">© {new Date().getFullYear()} Nadim Khan. Built with React & Django.</p>
          <p className="text-sm mb-4">Inspired by minimalist, premium design.</p>
          <a 
            href={`${API_URL}/admin`} 
            target="_blank" 
            rel="noreferrer"
            className="text-xs text-slate-400 hover:text-sfBlue dark:hover:text-cyan-400 transition-colors"
          >
            Admin Login
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
