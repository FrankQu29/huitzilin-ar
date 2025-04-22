import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import Logo from "../assets/huitzillin_logo 1.svg";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Efecto para aplicar los estilos directamente
    {/*useEffect(() => {
        const navElement = document.querySelector('nav');
        if (menuOpen) {
            navElement.style.right = '0';
        } else {
            navElement.style.right = '-100%';
        }
    }, [menuOpen]);
*/}
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                {menuOpen ? "✕" : "☰"}
            </button>

            <nav className={menuOpen ? "open" : ""}>
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="/"><img src={Logo} alt="" /></a></li>
                    <li className="navbar-item"><a href="/huitzillin">HUITZILLIN V1</a></li>
                    <li className="navbar-item"><a href="/mision-vision">MISIÓN Y VISIÓN</a></li>
                </ul>
                <ul>
                    <li className="navbar-item"><a href="/identidad">IDENTIDAD</a></li>
                    <li className="navbar-item"><a href="/nosotros">NOSOTROS</a></li>
                    <li className="navbar-item"><a href="#contacto" onClick={(e) => {
                        if (menuOpen) setMenuOpen(false);
                        smoothScroll(e, 'contacto');
                    }}>CONTACTO</a></li>
                </ul>
            </nav>

            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default NavBar;

function smoothScroll(event, targetId) {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
}
