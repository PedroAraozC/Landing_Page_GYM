import React from "react";
import "./LandingPage.css";
import img1 from "../../assets/img1.webp";
import seccion1 from "../../assets/seccion1.jpg";
import seccion2 from "../../assets/seccion2.webp";
import seccion3 from "../../assets/seccion3.jpg";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Mapa from "../Mapa/Mapa.jsx";
import wp from "../../assets/wpRedondo.png";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <NavBar />
      <header id="inicio">
        <img src={img1} alt="Principal" className="imgPrincipal2" />
        <div className="hero-text">
          <h1>Transforma tu vida con nosotros</h1>
          <h3>Entrena con los mejores, alcanza tus metas</h3>
          <Button variant="primary" className="cta-btn">
            ¡Únete ahora!
          </Button>
        </div>
      </header>

      <section className="intro-section">
        <div className="section-header">
          <h2>Lo que nos diferencia</h2>
          <p className="text-muted text-center">
            Más que un gimnasio, una experiencia única.
          </p>
        </div>

        <div className="seccion">
          <img src={seccion1} alt="Problema" className="imgSeccion" />
          <div className="seccion-content">
            <h5>Descubre el verdadero desafío</h5>
            <p>
              Muchas veces, el desafío no es sólo encontrar tiempo para
              entrenar. Aquí, encontraras un espacio donde la motivación y la
              tecnología se combinan para superar cualquier obstáculo.
            </p>
          </div>
        </div>

        <div className="seccion reverse">
          <div className="seccion-content">
            <h5>Un espacio pensado para ti</h5>
            <p>
              No es solo un gimnasio, es un lugar donde puedes reinventarte. Con
              entrenadores expertos y equipamiento de última generación, cada
              entrenamiento será una nueva oportunidad.
            </p>
          </div>
          <img src={seccion2} alt="Solución" className="imgSeccion" />
        </div>

        <div className="seccion">
          <img src={seccion3} alt="Resultado" className="imgSeccion" />
          <div className="seccion-content">
            <h5>Resultados que hablan por sí sólos</h5>
            <p>
              Más fuerza, más energía, más vitalidad. Lo que logres en nuestro
              gimnasio transformará no solo tu cuerpo, sino tu vida.
            </p>
          </div>
        </div>
      </section>

      <section id="sucursales" className="">
        <Mapa />
      </section>
      <section className="testimonios-section">
        <div className="text-center mb-5">
          <p className="text-muted small">Testimonios</p>
          <h3>Lo que dicen nuestros miembros</h3>
        </div>

        <div className="testimonios-container">
          {[1, 2, 3].map((index) => (
            <div key={index} className="cardTestimonio">
              <div className="d-flex align-items-center">
                <div className="imgTestimonio ms-3 mt-2" />
                <div className="ms-3">
                  <p className="medium m-0">
                    <strong>Juan Pérez</strong>
                  </p>
                  <p className="text-muted small m-0">@juanperez</p>
                </div>
              </div>
              <div className="contenidoTestimonio">
                <p className="small">
                  "Desde que entreno aquí, he logrado resultados que no pensaba
                  posibles. El ambiente es increíble."
                </p>
                <img src={img1} alt="Imagen Review" className="imgReview" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h1>15.2 k</h1>
            <p>Usuarios Totales</p>
          </div>
          <div className="stat-item">
            <h1>24 hs</h1>
            <p>Tiempo de respuesta</p>
          </div>
          <div className="stat-item">
            <h1>4.8/5</h1>
            <p>Puntuación media</p>
          </div>
        </div>
      </section>
      <button
        className="btn-wp"
        onClick={() => {
          window.open(
            "https://api.whatsapp.com/message/XUDJNRPNWFTQC1?autoload=1&app_absent=0&fbclid=PAY2xjawHrSAhleHRuA2FlbQIxMAABpuiqw3MWSoUaeH0_9D1h3EcDGHxV5lcYHtJ7KcpP0Wl3J0yCYvDbNyfYsA_aem_UHrFXsVkXZ7db3YDsrTU4Q",
            "_blank"
          );
        }}
      >
        <img src={wp} alt="" />
      </button>
      <Footer />
    </div>
  );
};

export default LandingPage;
