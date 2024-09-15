import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWater, FaHammer, FaHome, FaRecycle } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "./Services.css";

const services = [
  {
    id: 1,
    icon: <FaWater size={50} />,
    title: "Diseño Personalizado",
    description:
        "Creamos diseños únicos y personalizados para tu piscina, adaptándonos a tus gustos y necesidades.",
  },
  {
    id: 2,
    icon: <FaHammer size={50} />,
    title: "Construcción de Piscinas",
    description:
        "Ofrecemos servicios completos de construcción de piscinas, desde la planificación hasta la ejecución.",
  },
  {
    id: 3,
    icon: <FaHome size={50} />,
    title: "Remodelación",
    description:
        "Renovamos y remodelamos piscinas existentes para mejorar su apariencia y funcionalidad.",
  },
  {
    id: 4,
    icon: <FaRecycle size={50} />,
    title: "Mantenimiento",
    description:
        "Proporcionamos servicios de mantenimiento regular para asegurar que tu piscina se mantenga en óptimas condiciones.",
  },
];

const Services = () => {
  return (
      <section className="services-section py-5">
        <Container>
          <Fade direction="up" triggerOnce>
            <h2 className="text-center mb-5">Nuestros Servicios</h2>
            <Row>
              {services.map((service, index) => (
                  <Col key={service.id} md={6} lg={3} className="mb-4">
                    <Fade direction="up" delay={index * 100} triggerOnce>
                      <div className="service-card text-center p-4">
                        <div className="service-icon mb-3" aria-hidden="true">
                          {service.icon}
                        </div>
                        <h4 className="service-title mb-3">{service.title}</h4>
                        <p className="service-description">{service.description}</p>
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

export default Services;
