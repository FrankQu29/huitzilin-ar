import React, { useEffect } from 'react';

const ARViewer = () => {
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

  return (
    <div style={styles.container}>
      <model-viewer
        id="modelo"
        src="/Huitzillin_fibra.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        auto-rotate
        camera-controls
        environment-image="neutral"
        shadow-intensity="1"
        ar-scale="auto"
        style={styles.modelViewer}
      ></model-viewer>

      <button onClick={handleAR} style={styles.button}>
        Conóce Huitzillin en AR
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    background: 'linear-gradient(to right, #e6f2e6, #2e602e)', // Tu paleta verde institucional
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  modelViewer: {
    width: '100%',
    height: '100%',
    transform: 'scale(1)', // Ajuste de escala solo en web (NO en AR)
    transformOrigin: 'center',
  },
  button: {
    position: 'absolute',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#8391A0', // Gris de tu paleta
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
};

export default ARViewer;
