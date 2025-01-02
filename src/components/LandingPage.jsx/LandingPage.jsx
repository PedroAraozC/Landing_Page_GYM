import React from "react";
import "./LandingPage.css";
import img from "../../assets/img.png";
import img1 from "../../assets/img1.webp";
import seccion1 from "../../assets/seccion1.jpg";
import seccion2 from "../../assets/seccion2.webp";
import seccion3 from "../../assets/seccion3.jpg";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../NavBar/NavBar.jsx";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <NavBar />
      <header>
        <img src={img1} alt="Principal" className="imgPrincipal2" />
        <div className="contTextoPrincipal">
          <h1 className="pt-5">[Beneficio directo]</h1>
          <h1>para el usuario</h1>
        </div>
        {/* <div className="contImagenPrincipal">
          <img src={img} alt="Principal" className="imgPrincipal" />
        </div> */}
      </header>

      <section>
        <div className="contSeccion">
          <div>
            <h3 className="text-center mt-4">
              ¿Que hace diferente [tu producto o servicio]?
            </h3>
            <p className="text-muted text-center small mb-5">
              Breve explicación
            </p>
          </div>

          <div className="seccion">
            <img src={seccion1} alt="Problema" className="imgSeccion" />
            <div className="seccion-content">
              <h5>Descubre el verdadero desafío</h5>
              <p className="text-muted seccion-descripcion">
                Muchos de nosotros enfrentamos obstáculos cuando intentamos
                mantenernos en forma, desde la falta de tiempo hasta rutinas
                aburridas. Pero no tiene por qué ser así. ¡Estamos aquí para
                cambiar eso!
              </p>
              {/* <Button variant="outline-secondary">[Texto Secundario]</Button> */}
            </div>
          </div>

          <div className="seccion">
            <div className="seccion-content">
              <h5>Un espacio diseñado para ti</h5>
              <p className="text-muted seccion-descripcion">
                Nuestro gimnasio combina tecnología, entrenadores expertos y un
                ambiente motivador para transformar tu experiencia fitness. Aquí
                no solo entrenas, ¡también encuentras tu mejor versión!
              </p>
              {/* <Button variant="outline-secondary">[Texto Secundario]</Button> */}
            </div>
            <img src={seccion2} alt="Solución" className="imgSeccion" />
          </div>

          <div className="seccion">
            <img src={seccion3} alt="Resultado" className="imgSeccion" />
            <div className="seccion-content">
              <h5>Resultados que inspiran</h5>
              <p className="text-muted seccion-descripcion">
              Imagina sentirte más fuerte, saludable y lleno de energía cada día. Con nosotros, alcanzarás tus metas y disfrutarás del proceso. ¿Estás listo para el cambio?
              </p>
              {/* <Button variant="outline-secondary">[Texto Secundario]</Button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonios-section">
        <div className="text-center mb-5">
          <p className="text-muted small">Testimonios / Casos de uso</p>
          <h3>
            Personas o empresas que hayan provado tus productos o servicios
          </h3>
        </div>

        <div className="testimonios-container">
          {[1, 2, 3].map((index) => (
            <div key={index} className="cardTestimonio">
              <div className="d-flex align-items-center">
                <div className="imgTestimonio ms-3 mt-2" />
                <div className="ms-3">
                  <p className="medium m-0">
                    <strong>Nombre Usuario</strong>
                  </p>
                  <p className="text-muted small m-0">nombre_usuario</p>
                </div>
              </div>
              <div className="contenidoTestimonio">
                <p className="small">
                  "Breve comentario sobre la experiencia con el producto o
                  servicio."
                </p>
                <img src={img} alt="Imagen Review" className="imgReview" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Button variant="outline-secondary">[Texto Secundario]</Button>
        </div>
      </section>

      <section>
        <div className="stats-container">
          <div className="stat-item">
            <h1>15.2 k</h1>
            <p className="text-muted">Usuarios Totales</p>
          </div>
          <div className="stat-item">
            <h1>24 hs</h1>
            <p className="text-muted">Tiempo de respuesta</p>
          </div>
          <div className="stat-item">
            <h1>4.8/5</h1>
            <p className="text-muted">Puntuacion media</p>
          </div>
        </div>
      </section>

      <Footer className="footer" />
    </div>
  );
};

export default LandingPage;
