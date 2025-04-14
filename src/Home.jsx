import React, { use, useEffect, useState } from 'react';
import './Home.css';
const ARViewer = () => {

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
    <button className="ar-button-secondary" onClick={handleChangeMaterial}>{labelMaterial}</button>
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
        camera-orbit="150deg 60deg auto"
        class="model-viewer"
      ></model-viewer>

      <button onClick={handleAR} className="ar-button-primary">
        Conóce Huitzillin en AR
      </button>
    </div>
    </>
  );
};

export default ARViewer;
