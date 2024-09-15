import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Simplified email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateName = (name) => {
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return name.trim() !== "" && namePattern.test(name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors as user types
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!validateName(formData.name)) {
      formErrors.name = "El nombre solo puede contener letras y espacios.";
    }
    if (!validateEmail(formData.email)) {
      formErrors.email = "Por favor, introduce un correo electrónico válido.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    console.log("Form data submitted:", formData);

    // Simulate form submission
    setTimeout(() => {
      setSuccessMessage(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);
    }, 1000);
  };

  return (
      <section id="contact-section" className="contact-section py-5">
        <Container>
          <Fade direction="up" triggerOnce>
            <h2 className="text-center mb-5">Contacto</h2>
            {successMessage && (
                <Alert variant="success" className="text-center">
                  ¡Formulario enviado con éxito!
                </Alert>
            )}
            <Row className="justify-content-center">
              <Col md={8}>
                <Form onSubmit={handleSubmit} className="contact-form p-4">
                  <Form.Group controlId="name" className="mb-4">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        placeholder="Ingresa tu nombre"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="email" className="mb-4">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="Ingresa tu correo electrónico"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="message" className="mb-4">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Escribe tu mensaje"
                        required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Enviar Mensaje
                  </Button>
                </Form>
              </Col>
            </Row>
          </Fade>
        </Container>
      </section>
  );
};

export default ContactForm;
