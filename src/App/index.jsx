import React from 'react';
import Navigation from '../layouts/Navigation';
import Header from '../layouts/Header';
import About from '../modules/About';
import Features from '../modules/Features';
import Tours from '../modules/Tours';
import Stories from '../modules/Stories';
import Book from '../modules/Book';
import Footer from '../layouts/Footer';
import Popup from '../modules/Popup';

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Book />
      <Footer />
      <Popup />
    </>
  );
};

export default App;
