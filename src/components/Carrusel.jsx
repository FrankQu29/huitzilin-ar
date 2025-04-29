import React, { useState } from "react";
import "../styles/Carrusel.css"; // Importamos el CSS separado

const Carrusel = () => {
  const items = [
    {
      title: "Primera Imagen",
      description: "Esta es la descripción de la primera imagen.",
      image: "/img1.jpg",
    },
    {
      title: "Segunda Imagen",
      description: "Descripción diferente para la segunda foto.",
      image: "/img2.jpg",
    },
    {
      title: "Tercera Imagen",
      description: "Otra descripción, ahora para la tercera.",
      image: "/img3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-card">
        <h2 className="carousel-title">{currentItem.title}</h2>
        <p className="carousel-description">{currentItem.description}</p>
        <div className="carousel-image-container">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="carousel-image"
          />
        </div>
      </div>

      <button
        onClick={handleNext}
        className="carousel-button"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Carrusel;
