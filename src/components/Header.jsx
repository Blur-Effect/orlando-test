import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import "./Header.css";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slides = [
    {
      title: "Bienvenido a Piscinas de Ensueño",
      subtitle: "Diseñamos y construimos piscinas personalizadas para tu hogar",
      buttonText: "Solicita una Cotización",
      backgroundImage: require("../assets/images/pexels3.jpg")
    },
    {
      title: "Transforma tu Espacio Exterior",
      subtitle: "Creamos oasis únicos que reflejan tu estilo de vida",
      buttonText: "Conoce Más",
      backgroundImage: require("../assets/images/pexels2.jpg")
    },
    {
      title: "Calidad y Diseño Exclusivo",
      subtitle: "Piscinas de lujo construidas con materiales de alta calidad",
      buttonText: "Contáctanos",
      backgroundImage: require("../assets/images/pexels1.jpg")
    },
  ];

  return (
      <header className="header-section">
        <Carousel controls={false} indicators={false} interval={1500} fade>
          {slides.map((slide, index) => (
              <Carousel.Item key={`slide-${index}`}>
                <div
                    className="carousel-slide"
                    style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                >
                  <div className="overlay">
                    <Container>
                      <Row className="justify-content-center text-center">
                        <Col md={8}>
                          <Fade direction="up" triggerOnce>
                            <h1 className="header-title">{slide.title}</h1>
                            <p className="header-subtitle">{slide.subtitle}</p>
                            <Button
                                variant="primary"
                                size="lg"
                                className="cta-button"
                                onClick={scrollToContact}
                            >
                              {slide.buttonText}
                            </Button>
                          </Fade>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Carousel.Item>
          ))}
        </Carousel>
      </header>
  );
};

export default Header;
