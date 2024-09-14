// src/App.js
import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
