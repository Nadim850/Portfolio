import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import TechUpdates from '../components/TechUpdates';
import BlogList from '../components/BlogList';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <TechUpdates />
      <BlogList />
      <Contact />
    </>
  );
};

export default Home;
