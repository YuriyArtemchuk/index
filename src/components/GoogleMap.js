import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../assets/img/icon/icon.png";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      map.leafletElement.invalidateSize();
    }
  }, []);
  const coordinates = [52.50566323386282, 13.336251454821925];
  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps?q=${coordinates[0]},${coordinates[1]}`
    );
  };

  // Створення іконки маркера
  const customIcon = L.icon({
    iconUrl: icon,
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -37],
  });

  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      ref={mapRef}
      whenCreated={(map) => {
        // Ensure map is loaded before attempting to invalidate its size
        setTimeout(() => {
          map.leafletElement.invalidateSize();
        }, 100);
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[coordinates[0], coordinates[1]]} icon={customIcon}>
        <Popup>
          <div>
            <p>
              Coordinates: {coordinates[0]}, {coordinates[1]}
            </p>
            <button onClick={openGoogleMaps}>Open in Google Maps</button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default GoogleMap;
