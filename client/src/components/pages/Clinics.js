import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Map from "../Map";

export default function Clinics() {
  return (
    <>
      <div className="clinics">
        <h1>FIND A CLINIC</h1>
      </div>
      <div className="map-container">
        <Map />
      </div>
      <Footer />
    </>
  );
}
