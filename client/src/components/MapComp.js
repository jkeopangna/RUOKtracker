import React from "react";
import "./Map.css";
import { Map, Marker } from "google-maps-react";

export default function MapComp(props) {
  return (
    <Map
      style={props.style}
      google={props.google}
      initialCenter={props.initialCenter}
      center={props.center}
      zoom={15}
    >
      {console.log(props.center)}
      <Marker name={"Current location"} />
    </Map>
  );
}
