import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import { Fade } from "react-awesome-reveal";
import "react-image-lightbox/style.css";
import images from "../assets/images";
import "./Gallery.css";

const galleryImages = [
  {
    src: images.pexels1,
    width: 4,
    height: 3,
    alt: "Piscina 1",
  },
  {
    src: images.pexels2,
    width: 3,
    height: 2,
    alt: "Piscina 2",
  },
  {
    src: images.pexels3,
    width: 3,
    height: 4,
    alt: "Piscina 3",
  },
  {
    src: images.pexels4,
    width: 4,
    height: 3,
    alt: "Piscina 4",
  },
  {
    src: images.pexels5,
    width: 3,
    height: 2,
    alt: "Piscina 5",
  },
  {
    src: images.pexels6,
    width: 4,
    height: 3,
    alt: "Piscina 6",
  },
  // Add more images as needed
];

const GalleryComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
      <section className="gallery-section py-5 bg-light">
        <Container>
          <Fade direction="up" triggerOnce>
            <h2 className="text-center mb-5">Galería de Proyectos</h2>
            <Gallery
                photos={galleryImages}
                onClick={openLightbox}
                margin={5}
            />
          </Fade>
          {viewerIsOpen && (
              <Lightbox
                  mainSrc={galleryImages[currentImage].src}
                  nextSrc={
                    galleryImages[(currentImage + 1) % galleryImages.length].src
                  }
                  prevSrc={
                    galleryImages[
                    (currentImage + galleryImages.length - 1) % galleryImages.length
                        ].src
                  }
                  onCloseRequest={closeLightbox}
                  onMovePrevRequest={() =>
                      setCurrentImage(
                          (currentImage + galleryImages.length - 1) %
                          galleryImages.length
                      )
                  }
                  onMoveNextRequest={() =>
                      setCurrentImage((currentImage + 1) % galleryImages.length)
                  }
                  imageCaption={galleryImages[currentImage].alt}
              />
          )}
        </Container>
      </section>
  );
};

export default GalleryComponent;
