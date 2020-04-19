import React from 'react';
import Header from '../layouts/Header';
import About from '../modules/About';
import Features from '../modules/Features';
import Tours from '../modules/Tours';
import Stories from '../modules/Stories';
import Book from '../modules/Book';
import Footer from '../layouts/Footer';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Book />
      <Footer />
    </>
  );
};

export default App;
