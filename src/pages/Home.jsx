import React from 'react';
import Hero from '../sections/Hero';
import WhyChoose from '../sections/WhyChoose';
import CoursesGrid from '../sections/CoursesGrid';
import Stats from '../sections/Stats';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <WhyChoose />
      <CoursesGrid />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
