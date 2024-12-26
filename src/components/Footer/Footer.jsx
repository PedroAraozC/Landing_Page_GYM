import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-title">Our Mission</h2>
          <p>
            Empowering businesses and individuals through innovative digital
            solutions. Your vision, our technology — together, creating the
            future.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Explore</h2>
          <ul>
            <li>
              <a href="#portfolio">Our Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Client Stories</a>
            </li>
            <li>
              <a href="#careers">Join Our Team</a>
            </li>
            <li>
              <a href="#blog">Blog & Insights</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Get in Touch</h2>
          <p>
            <i className="fas fa-envelope"></i> support@ourcompany.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +1 800 123 4567
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Silicon Valley,
            California, USA
          </p>
        </div>
        <div className="footer-section social">
          <h2 className="footer-title">Stay Connected</h2>
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
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Our Company. Designed with ❤️ for innovators worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
