import NavBar from "../components/NavBar";
import NegroHuit from "../assets/definitivomain.svg"
import Logo from "../assets/huitzillin_logo 1.svg";
import Footer from "../components/Footer";
import NosotrosImg from "../assets/nosottros.jpeg";
import "../styles/Nosotros.css";
import Aero from "../assets/aero.png";
import Estacion from "../assets/estacion.png";
import Estructuras from "../assets/estructuras.png";
import Mecatronica from "../assets/mecatronica.png";
import Propulsivos from "../assets/propulsivos.png";
import Administracion from "../assets/administracion.png";
const Nosotros = () => {

    return (
        <>
        <NavBar></NavBar>

            <header className="header-nosotros">
            <h3>¿Quénes somos? </h3>
            <div className="info-nosotros">
                <p>Somos un equipo multidisciplinario de estudiantes del Instituto Politécnico Nacional, apasionados por la innovación y comprometidos con el avance de la tecnología aeroespacial en México. Nuestro enfoque se centra en el diseño, desarrollo y construcción de una aeronave VTOL (despegue y aterrizaje vertical) de alto rendimiento, concebida como una plataforma tecnológica avanzada.
                <br /><br />
                Este proyecto no solo representa un reto técnico, sino también una oportunidad de crecimiento personal y profesional. Nos impulsa la curiosidad, el deseo de aprender y la convicción de que la ingeniería puede transformar nuestro entorno. Trabajamos unidos por una visión común: demostrar que, con esfuerzo, creatividad y colaboración, los estudiantes también podemos dejar huella en el desarrollo tecnológico de nuestro país.
                </p>
                <img src={NosotrosImg} alt="" />

            </div>
            </header>
            <main className="areas-nosotros">
                <section >
                    <h3>Nuestras áreas de orgranización</h3>
                    <div className="areas">
                    <div className="card">
                        <img src={Aero} alt="" />
                        <p>Aerodinámica</p>
                    </div>
                    <div className="card">
                        <img src={Estructuras} alt="" />
                        <p>Estructuras</p>
                    </div>
                    <div className="card">
                        <img src={Estacion} alt="" />
                        <p>Estación Terrena</p>
                    </div>
                    <div className="card">
                        <img src={Mecatronica} alt="" />
                        <p>Mecatrónica</p>
                    </div>
                    <div className="card">
                        <img src={Propulsivos} alt="" />
                        <p>Sistema Propulsivo</p>
                    </div>
                    <div className="card">
                        <img src={Administracion} alt="" />
                        <p>Administración</p>
                    </div>
                    </div>
                    

                </section>
            </main>
        <Footer></Footer>
        </>
    )
}

export default Nosotros;