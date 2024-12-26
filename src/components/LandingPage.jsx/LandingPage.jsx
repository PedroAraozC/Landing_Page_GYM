import React from "react";
import "./LandingPage.css";
import img from "../../assets/img.png";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer.jsx";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <header>
        <h1 className="pt-5">[Beneficio directo]</h1>
        <h1>para el usuario</h1>
        <div className="contImagenPrincipal">
          <img src={img} alt="Principal" className="imgPrincipal" />
        </div>
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
            <img src={img} alt="Problema" className="imgSeccion" />
            <div className="seccion-content">
              <h5>Habla sobre el Problema</h5>
              <p className="text-muted small">
                Haz que el usuario visualce de forma previa como va a ser la
                interaccion o el uso de su producto.
              </p>
              <Button variant="outline-secondary">[Texto Secundario]</Button>
            </div>
          </div>

          <div className="seccion">
            <div className="seccion-content">
              <h5>Habla sobre la solucion</h5>
              <p className="text-muted small">
                Como usar tu producto va a hacer que la vida del usuario sea más
                fácil o la obtención de un beneficios.
              </p>
              <Button variant="outline-secondary">[Texto Secundario]</Button>
            </div>
            <img src={img} alt="Solución" className="imgSeccion" />
          </div>

          <div className="seccion">
            <img src={img} alt="Resultado" className="imgSeccion" />
            <div className="seccion-content">
              <h5>Habla sobre el resultado</h5>
              <p className="text-muted small">
                Habla sobretodo lo que tus usuarios podrán hacer con tu producto
                o sus resultados, que beneficios trae y que problemas resuelve.
              </p>
              <Button variant="outline-secondary">[Texto Secundario]</Button>
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