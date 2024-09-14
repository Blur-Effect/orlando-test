import React from "react";
import { FaWater, FaHammer, FaHome, FaRecycle } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    id: 1,
    icon: <FaWater size={40} />,
    title: "Diseño Personalizado",
    description:
      "Creamos diseños únicos y personalizados para tu piscina, adaptándonos a tus gustos y necesidades.",
  },
  {
    id: 2,
    icon: <FaHammer size={40} />,
    title: "Construcción de Piscinas",
    description:
      "Ofrecemos servicios completos de construcción de piscinas, desde la planificación hasta la ejecución.",
  },
  {
    id: 3,
    icon: <FaHome size={40} />,
    title: "Remodelación",
    description:
      "Renovamos y remodelamos piscinas existentes para mejorar su apariencia y funcionalidad.",
  },
  {
    id: 4,
    icon: <FaRecycle size={40} />,
    title: "Mantenimiento",
    description:
      "Proporcionamos servicios de mantenimiento regular para asegurar que tu piscina se mantenga en óptimas condiciones.",
  },
];

const Services = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-3 mb-4">
              <div className="service-card text-center p-4 border rounded">
                <div className="service-icon mb-3">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
