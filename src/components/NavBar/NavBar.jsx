import React from "react";
import "./NavBar.css";
import logo from "../../assets/icono.png";

const NavBar = () => {
  return (
    <nav className="navBarCont">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navLinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
