/* eslint import/no-webpack-loader-syntax: off */
import "./contact-style.css";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";

const Contact = () => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia3JpaWthMiIsImEiOiJja3pxdDFjOGQwYmV5MnZvOXI5bm1qemV3In0.jEvhkABH1R8bftOK9d3Fkw";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(5.58412);
  const [lat, setLat] = useState(51.04316);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([5.58412, 51.04316])
      .addTo(map.current);
  }, []);
  return (
    <div className="contact">
      <div className="info">
        <div className="icon">
          <GoLocation />
        </div>
        <div>
          <h4>Location: </h4>
          <p>Oudsbergen, 3660 Belgium</p>
        </div>
      </div>
      <div className="info">
        <div className="icon">
          <HiOutlineMail />
        </div>
        <div>
          <h4>E-mail: </h4>
          <p>kristinegusta1@gmail.com</p>
        </div>
      </div>
      <div className="info">
        <div className="icon">
          <FiSmartphone />
        </div>
        <div>
          <h4>Call: </h4>
          <p>+32 485 50 28 79</p>
        </div>
      </div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};

export default Contact;
