import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapa.css";
import { Toast, ToastContainer } from "react-bootstrap";

const Mapa = () => {
  const mapaRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastColor, setToastColor] = useState("danger");

  useEffect(() => {
    const location = (position) => {
      if (position && position.coords) {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        if (!mapaRef.current) {
          const mapa = L.map("mapa").setView([latitude, longitude], 13);
          mapaRef.current = mapa;

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
          }).addTo(mapa);

          // Usar rutas directas - NO imports
          const pin = L.icon({
            iconUrl: "/pin-GYM.png", // Ruta directa a public/pin-GYM.png
            iconSize: [60, 70],
            iconAnchor: [30, 65],
            popupAnchor: [20, -60],
          });

          const pinActual = L.icon({
            iconUrl: "/locationActualIcon2.png", // Ruta directa a public/locationActualicon2.png
            iconSize: [30, 30],
            iconAnchor: [22, 25],
            popupAnchor: [3, -15],
          });

          console.log(latitude, longitude);

          L.marker([latitude, longitude], { icon: pinActual })
            .addTo(mapa)
            .bindPopup("¡Estás aquí!")
            .openPopup();

          L.marker([-26.826763451414777, -65.20489722567554], {
            icon: pin,
          }).addTo(mapa).bindPopup(`
            <div style="text-align: center;">
              <h5>Sucursal 1</h5>
              <img 
                src="/sucursal1.png" 
                alt="Sucursal 1" 
                style="width: 100px; height: auto; margin-top: 5px;" 
              />
              <p>Pcia de Córdoba 580, San Miguel de Tucumán, Tucumán</p>
            </div>
          `);

          L.marker([-26.820080642697608, -65.21685157040996], {
            icon: pin,
          }).addTo(mapa).bindPopup(`
            <div style="text-align: center;">
              <h5>Sucursal 2</h5>
              <img 
                src="/sucursal2.png" 
                alt="Sucursal 2" 
                style="width: 100px; height: auto; margin-top: 5px;" 
              />
              <p>Catamarca 75, San Miguel de Tucumán, Tucumán</p>
            </div>
          `);

          L.marker([-26.813053725414264, -65.29318583619704], {
            icon: pin,
          }).addTo(mapa).bindPopup(`
            <div style="text-align: center;">
              <h5>Sucursal 3</h5>
              <img 
                src="/sucursal3.png" 
                alt="Sucursal 3" 
                style="width: 100px; height: auto; margin-top: 5px;" 
              />
              <p>Av. Aconquija 1677, Yerba Buena, Tucumán</p>
            </div>
          `);

          L.marker([-26.842875972440265, -65.2080494749456], {
            icon: pin,
          }).addTo(mapa).bindPopup(`
            <div style="text-align: center;">
              <h5>Sucursal 4</h5>
              <img 
                src="/sucursal4.png"
                alt="Sucursal 4" 
                style="width: 100px; height: auto; margin-top: 5px;" 
              />
              <p>Av. Gral. Roca 523, San Miguel de Tucumán, Tucumán</p>
            </div>
          `);
        }
      } else {
        console.error("No se pudo obtener la ubicación.");
      }
    };

    const handleError = (error) => {
      console.error("Error al obtener la ubicación:", error);
      setToastMsg(
        "No se pudo obtener tu ubicación. Asegúrate de que los permisos estén habilitados."
      );
      setShowToast(true);
      setToastColor("danger");
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location, handleError);
    } else {
      setToastMsg("La geolocalización no está soportada por este navegador.");
      setShowToast(true);
      setToastColor("danger");
    }

    return () => {
      if (mapaRef.current) {
        mapaRef.current.remove();
        mapaRef.current = null;
      }
    };
  }, []);

  const centerMapOnUser = () => {
    if (mapaRef.current && userLocation) {
      mapaRef.current.setView(
        [userLocation.latitude, userLocation.longitude],
        13
      );
    }
  };

  return (
    <>
      <div
        id="mapa"
        style={{
          height: "500px",
          width: "100%",
        }}
      >
        {userLocation && (
          <button onClick={centerMapOnUser} className="location-button">
            <img
              src="/locationIcon.png" // Ruta directa a public/locationIcon.png
              alt="Volver a mi ubicación"
              className="location-icon"
            />
          </button>
        )}
      </div>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          animation={true}
          bg={toastColor}
          className={`toast-custom ${showToast ? "toast-in" : "toast-out"}`}
        >
          <Toast.Body className="text-white">{toastMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Mapa;