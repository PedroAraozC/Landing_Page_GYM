import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección Acerca del Gimnasio */}
        <div className="footer-section about text-center">
          <h2 className="footer-title">Acerca de Nosotros</h2>
          <p>
            En <strong>Fitness Pro</strong>, transformamos vidas a través del
            movimiento. Ofrecemos programas personalizados, instalaciones de
            primer nivel y un equipo dedicado a ayudarte a alcanzar tus metas
            fitness.
          </p>
        </div>

        {/* Sección de Enlaces */}
        <div className="footer-section links">
          <h2 className="footer-title">Explora</h2>
          <ul>
            <li>
              <a href="#classes">Clases y Horarios</a>
            </li>
            <li>
              <a href="#trainers">Nuestros Entrenadores</a>
            </li>
            <li>
              <a href="#memberships">Planes de Membresía</a>
            </li>
            <li>
              <a href="#blog">Consejos de Salud</a>
            </li>
          </ul>
        </div>

        {/* Sección de Contacto */}
        <div className="footer-section contact text-center">
          <h2 className="footer-title">Contáctanos</h2>
          <p>
            <i className="fas fa-envelope"></i> contacto@fitnesspro.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +54 381 555 1234
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Av. Salud y Bienestar
            123, San Miguel de Tucumán, Argentina
          </p>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section social">
          <h2 className="footer-title">Síguenos</h2>
          <div className="social-links">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Fitness Pro. Diseñado con ❤️ para quienes buscan un estilo
          de vida saludable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
