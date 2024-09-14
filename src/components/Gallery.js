// src/components/Gallery.js
import React from 'react';
import images from '../assets/images';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Galería de Proyectos</h2>
        <div className="row">
          <div className="col-md-4 mb-4 img-container">
            <img src={images.pexels1} alt="Piscina 1" className="gallery-image" />
          </div>
          <div className="col-md-4 mb-4 img-container">
            <img src={images.pexels2} alt="Piscina 2" className="gallery-image" />
          </div>
          <div className="col-md-4 mb-4 img-container">
            <img src={images.pexels3} alt="Piscina 3" className="gallery-image" />
          </div>
          <div className="col-md-4 mb-4 img-container">
            <img src={images.pexels4} alt="Piscina 4" className="gallery-image" />
          </div>
          <div className="col-md-4 mb-4 img-container">
            <img src={images.pexels5} alt="Piscina 5" className="gallery-image" />
          </div>
          <div className="col-md-4 mb-4 img-container">
            <img src={images.pexels6} alt="Piscina 6" className="gallery-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
