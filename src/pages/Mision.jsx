import "../styles/Mision.css";
import NavBar from "../components/NavBar";
import NegroHuit from "../assets/definitivomain.svg"
import Logo from "../assets/huitzillin_logo 1.svg";
import AvionBlanco from "../assets/avion_blanco.svg"
import AvionPlano from "../assets/avion_plano.svg"
import Footer from "../components/Footer";
const Mision = () => {

    return (
        <>
        <NavBar></NavBar>

        <header className="header-mision">
            <div className="info-mision">
                <h3>MISIÓN</h3>
                <p>Diseñar, desarrollar y construir una aeronave VTOL de alto rendimiento, concebida como una plataforma tecnológica avanzada para demostrar capacidades innovadoras. Nos enfocamos en crear una solución eficiente, escalable y versátil, capaz de realizar misiones críticas como vigilancia, rastreo e identificación de objetivos, atendiendo las necesidades tanto del sector industrial como civil y promoviendo el desarrollo tecnológico aeroespacial nacional. </p>
            </div>

            <img src={AvionBlanco} alt="" />
    
        </header>
            <main>
                <section className="header-vision">
                <img src={AvionPlano} alt="" />h

                <div className="info-mision">
                <h3>VISIÓN</h3>
                <p>Huitzillin será una aeronave de vanguardia diseñada como una plataforma tecnológica avanzada, destinada a demostrar capacidades innovadoras aplicables tanto en el sector industrial como civil, destacándose por su eficiencia, versatilidad y escalabilidad. Este proyecto busca establecer un nuevo estándar en la integración de tecnologías disruptivas, impulsando el desarrollo y avance en el sector aeroespacial.</p>
            </div>

                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Mision;