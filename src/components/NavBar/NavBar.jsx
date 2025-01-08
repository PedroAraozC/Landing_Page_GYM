import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/icono.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navBarCont">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`hamb ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navLinks ${isOpen ? "show" : ""}`}>
        <li>
          <a href="#inicio" onClick={() => setIsOpen(false)}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#sucursales" onClick={() => setIsOpen(false)}>
            Sucursales
          </a>
        </li>
        <li>
          <a href="#contactanos" onClick={() => setIsOpen(false)}>
            Contactanos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
