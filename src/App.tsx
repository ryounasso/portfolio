import React, { Component } from 'react';
import MyAvatar from './components/MyAvatar';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact';
import ScrollUp from './utils/ScrollUp'
import { Helmet } from 'react-helmet'

const App: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>portfolio</title>
      </Helmet>
      
      <section>
        <Navbar />
      </section>

      <section>
        <MyAvatar />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='works'>
        <Works />
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <ScrollUp />
    </>
  );
}

export default App;
