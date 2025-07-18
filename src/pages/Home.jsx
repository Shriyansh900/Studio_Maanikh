import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Testimonials/>
    </main>
  );
};

export default Home;