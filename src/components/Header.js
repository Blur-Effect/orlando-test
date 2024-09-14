// src/components/Header.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Header.css'; 

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="header-title">Bienvenido a Piscinas de Ensueño</h1>
            <p className="header-subtitle">Diseñamos y construimos piscinas personalizadas para tu hogar</p>
            <Button
              variant="primary"
              size="lg"
              className="cta-button"
              onClick={scrollToContact}
            >
              Solicita una Cotización
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

