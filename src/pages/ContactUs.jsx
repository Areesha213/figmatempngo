import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import Content from "../components/Content";
import FormContainer from "../components/FormContainer";



function ContactUs() {
  return (
    <div>
      <Navbar1 className="!bg-gray-200" />
      <Content className="bg-gray-200" />
      <FormContainer />
      <MapContainer
        className="self-stretch relative max-w-full overflow-hidden max-h-full "
        center={[25.3176, 82.9739]} // Coordinates for Varanasi, India
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[25.3176, 82.9739]}>
          <Popup>
            114 Krishna lane, Arya Nagar, Varanasi-231133
          </Popup>
        </Marker>
      </MapContainer>
      <Footer className="bg-gray-200 " />
    </div>
  );
}

export default ContactUs;
