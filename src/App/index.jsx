import React from 'react';
import Header from '../components/Header';
import About from '../modules/About';
import Features from '../modules/Features';
import Tours from '../modules/Tours';
import Stories from '../modules/Stories';

const App = () => {
  return (
    <section>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
    </section>
  );
};

export default App;
