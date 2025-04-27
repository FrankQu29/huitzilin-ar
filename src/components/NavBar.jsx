import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import Logo from "../assets/huitzillin_logo 1.svg";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [animClass, setAnimClass] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    // Detecta si el tamaño de pantalla cambia (mobile/desktop)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1200);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        if (menuOpen) {
            setAnimClass("navbar-hide");
            setTimeout(() => {
                setMenuOpen(false);
                setAnimClass("");
            }, 300);
        } else {
            setMenuOpen(true);
            setAnimClass("navbar-show");
        }
    };

    const closeMenuSmooth = (e, id) => {
        e.preventDefault();
        smoothScroll(e, id);
        if (isMobile) toggleMenu();
    };

    return (
        <>
            {isMobile && (
                <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {menuOpen ? "✕" : "☰"}
                </button>
            )}

            {(menuOpen || !isMobile) && (
                <nav className={`navbar ${isMobile ? `navbar-animated ${animClass}` : ""}`}>
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="/"><img src={Logo} alt="" /></a></li>
                        <li className="navbar-item"><a href="/huitzillin">HUITZILLIN V1</a></li>
                        <li className="navbar-item"><a href="/mision-vision">MISIÓN Y VISIÓN</a></li>
                    </ul>
                    <ul>
                        <li className="navbar-item"><a href="/identidad">IDENTIDAD</a></li>
                        <li className="navbar-item"><a href="/nosotros">NOSOTROS</a></li>
                        <li className="navbar-item">
                            <a href="#contacto" onClick={(e) => closeMenuSmooth(e, 'contacto')}>CONTACTO</a>
                        </li>
                    </ul>
                </nav>
            )}

            {menuOpen && isMobile && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default NavBar;

function smoothScroll(event, targetId) {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
}
