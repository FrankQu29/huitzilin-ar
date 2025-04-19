import { useEffect, useState } from "react";
import "../styles/Desarrollo.css";
import NavBar from "../components/NavBar";
import NegroHuit from "../assets/definitivomain.svg"
import Logo from "../assets/huitzillin_logo 1.svg";
import Plano from "../assets/plane.png";
import Footer from "../components/Footer";
import React from 'react';
import Plano1 from "../assets/plano_1.png";
import Plano2 from "../assets/plano_2.png";
const Desarrollo = () => {
  const handleDragStart = (e) => e.preventDefault();
     const [material, setMaterial] = useState("definit.glb");
      const [labelMaterial, setLabelMaterial] = useState("Fibra de Carbono");
      const [counter, setCounter] = useState(0);
      useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
        document.head.appendChild(script);
      }, []);
    
      const handleAR = () => {
        const modelViewer = document.getElementById('modelo');
        if (modelViewer?.canActivateAR) {
          modelViewer.activateAR();
        } else {
          alert('AR no está disponible en este dispositivo o navegador.');
        }
      };
      const handleChangeMaterial = () => {
        setCounter(counter + 1)
        if(counter%2 ===0){
            setMaterial("/Huitzillin_fibra.glb");
            setLabelMaterial("Modelo CAD")
            
        }
        else {
            setMaterial("definit.glb");
            setLabelMaterial("Fibra de Carbono")
        }
        console.log(counter);
      }
      

    return (
        <>
        <div className="desarrollo">
        <NavBar></NavBar>

            <header className="header-desarrollo">
            <div className="info-desarrollo">
                <h3>HUITZILLIN V1</h3>
                <button className="ar-button-secondary" onClick={handleChangeMaterial}>{labelMaterial}</button>
                <p>El proyecto “Huitzillin” es un demostrador y validador de tecnología enfocado al desarrollo de Aeronaves No Tripuladas tipo RPAS con objetivos de aplicación civil e industrial. Consiste en una aeronave no tripulada controlada a distancia con capacidades de despegue y aterrizaje vertical, y vuelo estático y de ala fija. Su objetivo esta enfocado en misiones de vigilancia, rastreo e identificación de objetivos clave, sobresaliendo por sus capacidades de autonomía, eficiencia, versatilidad y escalabilidad. </p>
                <p>La aeronave está diseñada con un módulo VTOL de cuadricóptero que le permite despegar y aterrizar desde cualquier lugar al igual que mantener un vuelo estático y estable sobre un punto en específico del cual se quiera obtener imágenes. La aeronave esta diseñada para volar largas distancias por lo que cuenta con sistemas de transmisión de video y telemetría en tiempo real a una estación terrena la cual ayuda a monitorear y controlar el vuelo en todo momento. </p>
            </div>

            <div className="ar-container">
      <model-viewer
        id="modelo"
        src={material}
        ar
        ar-modes="scene-viewer webxr quick-look"
        auto-rotate
        camera-controls
        environment-image="neutral"
        shadow-intensity="1"
        ar-scale="auto"
        exposure="1.2"
        camera-orbit="60deg 70deg auto"
        class="model-viewer"
      ></model-viewer>

      {/*<button onClick={handleAR} className="ar-button-primary">
        Conóce Huitzillin en AR
      </button>*/}
    </div>
            </header>
            <main>
                <section className="specs-huitzillin">
                <div className="info-desarrollo">
                <h4>HUITZILLIN V1</h4>
                <h3>Especificaciones generales</h3>

                <div className="table-specs">
                    <p>CONFIGURACIÓN GENERAL</p>
                    <p>VTOL</p>
                </div>
                <div className="table-specs">
                    <p>ENVERGADURA</p>
                    <p>2.78 M</p>
                </div>
                <div className="table-specs">
                    <p>LONGITUD</p>
                    <p>1.5 M</p>
                </div>
                <div className="table-specs">
                    <p>TIPO DE ALA</p>
                    <p>ALA ALTA TRAPEZOIDAL SECCIONADA</p>
                </div>
                <div className="table-specs">
                    <p>VELOCIDAD (VC)</p>
                    <p>120 KM/H</p>
                </div>
                <div className="table-specs">
                    <p>VELOCIDAD MÁXIMA</p>
                    <p>180 KM/H</p>
                </div>
                <div className="table-specs">
                    <p>TIEMPO ESTIMADO DE VUELO</p>
                    <p>3 HORAS</p>
                </div>
                

            </div>
            <img src={Plano} alt="" />
                </section>
               
            </main>
            <Footer></Footer>
            
        </div>
        </>
    )
}

export default Desarrollo;