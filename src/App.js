import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Form from './components/Form';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Form />
      </section>

      <Footer />
    </>
  );
};

export default App;
