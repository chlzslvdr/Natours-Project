import React from 'react';
import Header from '../components/Header';
import About from '../modules/About';
import Features from '../modules/Features';
import Tours from '../modules/Tours';
import Stories from '../modules/Stories';
import Book from '../modules/Book';
import Footer from '../components/Footer';

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
