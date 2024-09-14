import React from "react";
import images from "../assets/images";
import "./Gallery.css";

const galleryImages = [
  { src: images.pexels1, alt: "Piscina 1" },
  { src: images.pexels2, alt: "Piscina 2" },
  { src: images.pexels3, alt: "Piscina 3" },
  { src: images.pexels4, alt: "Piscina 4" },
  { src: images.pexels5, alt: "Piscina 5" },
  { src: images.pexels6, alt: "Piscina 6" },
];

const Gallery = () => {
  return (
    <section className="gallery-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Galería de Proyectos</h2>
        <div className="gallery-container">
          {galleryImages.map((image, index) => (
            <div key={index} className="img-container">
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
