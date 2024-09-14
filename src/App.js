import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import "./index.css";

function App() {
  // Función para hacer scroll al header
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
}

export default App;
