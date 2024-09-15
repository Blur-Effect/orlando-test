import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import images from "../assets/photo";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",
    image: images.testimonial1,
    comment:
        "Excelente trabajo en la construcción de nuestra piscina. Muy profesionales y atentos a los detalles.",
  },
  {
    id: 2,
    name: "María López",
    image: images.testimonial2,
    comment:
        "Nos ayudaron con el diseño personalizado y el resultado superó nuestras expectativas. Altamente recomendados.",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    image: images.testimonial3,
    comment:
        "La remodelación de nuestra piscina fue impecable. El equipo fue puntual y el trabajo de calidad.",
  },
];

const Testimonials = () => {
  return (
      <section className="testimonials-section py-5">
        <Container>
          <Fade direction="up" triggerOnce>
            <h2 className="text-center mb-5">Testimonios de Clientes</h2>
            <Row>
              {testimonials.map((testimonial, index) => (
                  <Col
                      key={testimonial.id}
                      md={6}
                      lg={4}
                      className="mb-4 d-flex align-items-stretch"
                  >
                    <Fade direction="up" delay={index * 100} triggerOnce>
                      <div className="testimonial-card text-center p-4">
                        <div className="testimonial-image-container mx-auto mb-3">
                          <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="testimonial-image"
                          />
                        </div>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-comment">{testimonial.comment}</p>
                      </div>
                    </Fade>
                  </Col>
              ))}
            </Row>
          </Fade>
        </Container>
      </section>
  );
};

export default Testimonials;
