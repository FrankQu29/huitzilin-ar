import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Identidad.css";
import Aero from "../assets/aero.png";
import Carrusel from "../components/Carrusel";
import React, { useState } from "react";
import "../styles/Carrusel.css"; // Importamos el CSS separado
import AvionPlano from "../assets/dibujo.png";
import Logo from "../assets/huitzillin_logo 1.svg";
import AvionTop from "../assets/grupo.svg";
import Huitzillin from "../assets/definitivomain.svg";
import BgYellow from "../assets/prueba.svg";
import Red from "../assets/bg_rojo.svg";
import Green from "../assets/back_green.png";
import Verde_oscuro from "../assets/Verde_oscuro.svg";
import Verde_claro from "../assets/verde_claro.svg";
import Amarillo from "../assets/amarillo.svg";
import Rojo from "../assets/rojo.svg";
import Dorado from "../assets/dorado.svg";

const Identidad = () => {
  const items = [
    {
      title: "Ideación del Logo",
      description:
        "Huitzilin proviene del náhuatl y significa colibrí, un símbolo profundamente arraigado en la cultura mexicana. Esta pequeña ave, reconocida por su precisión en vuelo, velocidad y capacidad de mantenerse en suspensión, inspira directamente el diseño y la funcionalidad de nuestra aeronave VTOL (Vertical Take-Off and Landing). El nombre refleja no solo agilidad y eficiencia, sino también una profunda conexión con nuestras raíces, posicionando al proyecto como un emblema de tecnología hecha en México con estándares globales.",
      image: AvionPlano,
      background: Green,
    },
    {
      title: "Creación del Logo",
      description:
        "El logotipo retoma la silueta del colibrí, con alas grandes y abiertas, que aluden a la superficie de sustentación del VTOL. La cola delgada simboliza el diseño estilizado del fuselaje, mientras que la cabeza firme transmite dirección y enfoque. La postura del colibrí extendido de frente sugiere despegue, avance e innovación. Esta forma fue elegida no solo por su valor simbólico, sino también por su capacidad de transmitir una imagen ligera, veloz y tecnológica, clave para comunicar la propuesta de valor del proyecto",
      image: AvionTop,
      background: BgYellow,
    },
    {
      title: "Representación Modelo",
      description:
        "Huitzilin no es solo un vehículo aéreo, es un símbolo de innovación mexicana, que une conocimiento académico, visión tecnológica y una identidad fuerte para posicionarse como una solución estratégica de clase mundial.",
      image: Huitzillin,
      background: Green,
    },
  ];

  const colors = [
    {
      id: 0,
      title: "Verde : 2E5E2D",
      color: "#2E5E2D",
      background: Verde_oscuro,
      text1:
        "Este verde oscuro transmite seriedad, compromiso y madurez. Se eligió como base por su capacidad de proyectar estabilidad institucional y confianza profesional, sin resultar rígido. ",
      text2: "Rol: Transmitir profesionalismo, confianza y continuidad visual",
    },
    {
      id: 1,
      title: "Verde: 0D6836",
      color: "#0D6836",
      background: Verde_claro,
      text1:
        "Este verde más brillante complementa al principal y permite crear jerarquías visuales dentro del diseño.  Su tono vital está enfocado en dinamismo, salud y proactividad, manteniéndose dentro de una misma gama emocional.",
      text2:
        "Rol: Aportar frescura, energía controlada y facilitar la navegación",
    },
    {
      id: 2,
      title: "Amarillo: FECB01",
      color: "#FECB01",
      background: Amarillo,
      text1:
        "Este amarillo vibrante actúa como color de acento, destinado a captar la atención sin interrumpir la armonía visual. Fue seleccionado por su asociación con la innovación, la claridad y la motivación.",
      text2:
        "Rol: Generar enfoque visual inmediato y comunicar accesibilidad, energía e innovación.",
    },
    {
      id: 3,
      title: "Rojo: B41212",
      color: "#B41212",
      background: Rojo,
      text1:
        "El rojo es reservado para alertas, errores o llamados de alta prioridad. Su tono intenso fue elegido por su capacidad de comunicar urgencia y crítica de forma directa y clara, pero sin caer en lo agresivo. Su uso debe ser puntual y justificado, manteniendo su eficacia simbólica.",
      text2: "Rol: Señalizar situaciones críticas con autoridad y claridad.",
    },
    {
      id: 4,
      title: "Dorado: B6850D",
      color: "#B6850D",
      background: Dorado,
      text1:
        "Este tono dorado profundo introduce una capa simbólica de elegancia, prestigio y valor.  Fue incluido en la paleta para representar distinción, calidad y tradición. ",
      text2:
        "Rol: Representar excelencia, detalles premium y prestigio institucional.",
    },
  ];
  const [currentColor, setCurrentColor] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  const currentButton = colors[currentColor];
  const currentItem = items[currentIndex];

  const handleColor = (id) => {
    setCurrentColor(id);
  };

  return (
    <>
      <NavBar></NavBar>

      <header className="header-identidad">

                            <img src={Logo} alt="" />
                            <div className="info">
                                <h3>Descubre el Logo y los colores de Huitzillin</h3>
                            </div>
      </header>
      <main>
        <section
          className="carousel-container"
          style={{
            backgroundImage: `url("${currentItem.background}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh", // para que la sección ocupe toda la pantalla
          }}
        >
          <div className="carousel-card">
            <h2 className="carousel-title">{currentItem.title}</h2>
            <p className="carousel-description">{currentItem.description}</p>
          </div>

          <div className="carousel-image-container">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="carousel-image"
            />
          </div>
          <button onClick={handleNext} className="carousel-button">
            Siguiente
          </button>
        </section>
        <section
          className="color-section"
          style={{
            backgroundImage: `url("${currentButton.background}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh", // para que la sección ocupe toda la pantalla
          }}
        >
          <h2 style={{marginTop: "20px"}}>Colores</h2>
          <div className="colors-grid">
            {colors.map((item) => (
              <div key={item.title} className="color-item">
                <p>{item.title}</p>
                <button
                  className={`color-button ${
                    item.id === currentColor ? "button-active" : ""
                  }`}
                  style={{ backgroundColor: item.color }}
                  onClick={() => handleColor(item.id)}
                ></button>
              </div>
            ))}
          </div>

          <h3 className="text-info" style={{ color: `${currentButton.color}` }}>
            {currentButton.text1} <br /> {currentButton.text2}
          </h3>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};
export default Identidad;
