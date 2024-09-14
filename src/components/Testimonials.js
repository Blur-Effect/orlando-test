import React from 'react';
import photo from '../assets/photo';
import './Testimonials.css'; // Asegúrate de crear este archivo CSS

const testimonials = [
  {
    id: 1,
    name: 'Juan Pérez',
    image: photo.testimonial1, // Asegúrate de que coincida con las claves en photo.js
    comment: 'Excelente trabajo en la construcción de nuestra piscina. Muy profesionales y atentos a los detalles.',
  },
  {
    id: 2,
    name: 'María López',
    image: photo.testimonial2, // Asegúrate de que coincida con las claves en photo.js
    comment: 'Nos ayudaron con el diseño personalizado y el resultado superó nuestras expectativas. Altamente recomendados.',
  },
  {
    id: 3,
    name: 'Carlos Rodríguez',
    image: photo.testimonial3, // Asegúrate de que coincida con las claves en photo.js
    comment: 'La remodelación de nuestra piscina fue impecable. El equipo fue puntual y el trabajo de calidad.',
  },
  {
    id: 4,
    name: 'Ana Gómez',
    image: photo.testimonial4, // Asegúrate de que coincida con las claves en photo.js
    comment: 'El mantenimiento de nuestra piscina ha sido excelente. Siempre están disponibles para resolver cualquier problema.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Testimonios de Clientes</h2>
        <div className="row">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-md-6 col-lg-3 mb-4">
              <div className="testimonial-card text-center p-4 border rounded">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image mb-3"
                />
                <h4>{testimonial.name}</h4>
                <p>{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;