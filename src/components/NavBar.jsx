import "../styles/NavBar.css";
import Logo from "../assets/huitzillin_logo 1.svg";
const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/"><img src={Logo} alt="" /></a></li>
                <li className="navbar-item"><a href="/huitzillin">HUITZILLIN V1</a></li>
                <li className="navbar-item"><a href="/mision-vision">MISIÓN Y VISIÓN</a></li>
            </ul>
            <ul>
                <li className="navbar-item"><a href="/identidad">IDENTIDAD</a></li>
                <li className="navbar-item"><a href="/nosotros">NOSOTROS</a></li>
                <li className="navbar-item"><a href="#contacto">CONTACTO</a></li>

            </ul>
        </nav>
    );
}
export default NavBar;
