import React from "react";
import "./LandingPage.css";
import img from "../../assets/img.png";
import { Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <header>
        <h1>Nombre de la empresa Landing Page</h1>
        <img src={img} alt="img" className="imgPrincipal" />
      </header>
      <section>
        <h3 className="text-center">
          ¿Que hace diferente [tu producto o servicio]?
        </h3>
        <p className="text-muted text-center small">Breve explicación</p>

        <div className="d-flex flex-direction-row ms-5 me-5 pe-5 ps-5">
          <img src={img} alt="" className="imgSeccion" />
          <div className="m-3 mt-5">
            <h5>Habla sobre el Problema</h5>
            <p className="text-muted small me-5 pe-4">
              Haz que el usuario visualce de forma previa como va a ser la
              interaccion o el uso de su producto.
            </p>
            <Button variant="outline-secondary">[Texto Secundario]</Button>
          </div>
        </div>
        <div className="d-flex flex-direction-row ms-5 me-5 pe-5 ps-5">
          <div className="m-3 mt-5">
            <h5>Habla sobre la solucion</h5>
            <p className="text-muted small me-5 pe-4">
              Como usar tu producto va a hacer que la vida del usuario sea más
              fácil o la obtención de un beneficios.
            </p>
            <Button variant="outline-secondary">[Texto Secundario]</Button>
          </div>
          <img src={img} alt="" className="imgSeccion" />
        </div>
        <div className="d-flex flex-direction-row ms-5 me-5 pe-5 ps-5">
          <img src={img} alt="" className="imgSeccion" />
          <div className="m-3 mt-5">
            <h5>Habla sobre el resultado</h5>
            <p className="text-muted small me-5 pe-4">
              Habla sobretodo lo que tus usuarios podrán hacer con tu producto o
              sus resultados, que beneficios trae y que problemas resuelve.
            </p>
            <Button variant="outline-secondary">[Texto Secundario]</Button>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
};

export default LandingPage;
