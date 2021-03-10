import React, { Component } from "react";
import "./Map.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { render } from "react-dom";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14} center={this.state.getCurrentPosition}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        {/* </InfoWindow> */}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBTC42wrW7FeVF9Ff1JlC1HlsVvBg5rda4",
})(MapContainer);
