import React from 'react';
import HeroSection from "C:/Users/MSI/Desktop/GLSI 2/s2/pfa/login-signup/PFA/src/Components/Hero-Section/HeroSection.jsx";
import Testimonials from 'C:/Users/MSI/Desktop/GLSI 2/s2/pfa/login-signup/PFA/src/Components/Testimonial/Testimonials.jsx';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
  return (
    <div className="container">
      <HeroSection/>
      <Testimonials/>
      <Newsletter/>
    </div>
  );
};

export default Home;
