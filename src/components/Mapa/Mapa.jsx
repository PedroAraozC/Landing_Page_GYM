import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapa.css";
import icono from "../../assets/icono.png";
import locationIcon from "../../assets/locationIcon.png"; 

const Mapa = () => {
  const mapaRef = useRef(null); // Referencia para almacenar la instancia del mapa
  const [userLocation, setUserLocationState] = useState(null); // Cambié el nombre de la función setUserLocation a setUserLocationState

  useEffect(() => {
    // Obtener la ubicación actual del usuario
    const handleLocationSuccess = (position) => {
      // Verificar que position.coords esté disponible
      if (position && position.coords) {
          const { latitude, longitude } = position.coords;
          setUserLocationState({ latitude, longitude }); // Actualizar el estado con la ubicación
          
          // Crear el mapa si no existe
          if (!mapaRef.current) {
              const mapa = L.map("mapa").setView([latitude, longitude], 13);
              mapaRef.current = mapa;
              
              // Añadir capa de mapa (por ejemplo, OpenStreetMap)
              L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                  attribution: "&copy; OpenStreetMap contributors",
                }).addTo(mapa);
                
                // Crear un ícono personalizado para el marcador
                const pin = L.icon({
                    iconUrl: "src/assests/icono.png", // Verifica que la ruta esté correcta
                    iconSize: [60, 70],
                    iconAnchor: [32, 94],
                    popupAnchor: [-3, -76],
                });
                
                // Añadir un marcador en la ubicación actual
                L.marker([latitude, longitude])
                .addTo(mapa)
                .bindPopup("¡Estás aquí!")
                .openPopup();
            }
        } else {
            console.error("No se pudo obtener la ubicación.");
        }
    };
    
    const handleError = (error) => {
        // Agregar más detalles del error
        console.error("Error al obtener la ubicación:", error);
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("El permiso para acceder a tu ubicación fue denegado.");
                break;
                case error.POSITION_UNAVAILABLE:
                    alert("No se pudo obtener la ubicación.");
                    break;
                    case error.TIMEOUT:
                        alert("La solicitud de geolocalización ha expirado.");
                        break;
                        default:
                            alert("Ha ocurrido un error al obtener la ubicación.");
                        }
    };
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleError);
    } else {
        alert("La geolocalización no está soportada por este navegador.");
    }
    
    // Limpiar el mapa al desmontar el componente
    return () => {
        if (mapaRef.current) {
            mapaRef.current.remove();
            mapaRef.current = null;
        }
    };
  }, []);
  
  const centerMapOnUser = () => {
      if (mapaRef.current && userLocation) {
          mapaRef.current.setView([userLocation.latitude, userLocation.longitude], 13);
        }
    };
    
  return (
       <div>
      <div
        id="mapa"
        style={{
          height: "500px",
          width: "100%",
        }}
      />
      {userLocation && (
        <button
          onClick={centerMapOnUser}
          className="location-button"
        >
          <img
            src="./src/assets/pin.png" // Asegúrate de tener un ícono para el botón flotante
            alt="Volver a mi ubicación"
            className="location-icon"
          />
        </button>
      )}
    </div>
  );
};

export default Mapa;
