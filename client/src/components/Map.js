import React, { Component, useState } from "react";
import "./Map.css";
import { Map, Marker, GoogleApiWrapper, Listing } from "google-maps-react";
import { render } from "react-dom";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      userLocation: { lat: 32, lng: 32 },
      loading: true,
    };
  }
  //   state = { userLocation: { lat: 32, lng: 32 }, loading: true };
  componentDidMount(props, marker, e) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false,
        });
        // Call function
        // this.props.passUpCoordinates({ lat: latitude, lng: longitude })
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        this.setState({ address });
        this.setState({ center: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;
    const style = {
      display: "block",
      margin: "0 auto",
      width: "60%",
      height: "75%",
    };
    if (loading) {
      return null;
    }
    return (
      <div id="googleMap">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <Map
          style={style}
          google={google}
          initialCenter={userLocation}
          center={this.handleSelect}
          zoom={15}
        >
          <Marker onReady={this.onReady} name={"Current location"} />
        </Map>
      </div>
    );
  }
}

// export class MapContainer extends Component {

//   state = {
//     currentLocation: {},
//   }

// fetchPlaces(mapProps, map) {
//   const {google} = mapProps;
//   const service = new google.maps.places.PlacesService(map);
//   // ...
//   service.nearbySearch(map, mapProps);
// }

// export class MapContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

// handleInputChange(event) {
//   const { name, value } = event.target;
//   setFormObject({...formObject, [name]: value})
// };

// componentDidMount() {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     console.log("Latitude is :", position.coords.latitude);
//     console.log("Longitude is :", position.coords.longitude);
//   });
// }

// render() {

//   return (
//     <Map google={this.props.google} zoom={14} center={this.state.currentLocation}>
//       <Marker onClick={this.onMarkerClick} name={"Current location"} />
//       {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
//         <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
//       {/* </InfoWindow> */}
//     </Map>

//       <Map
//       google={this.props.google}
//       zoom={15}
//       initialCenter={this.state.currentLocation}>
//   <Marker onClick={this.onMarkerClick} name={"Current location"} />
//   {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
//     <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
//   {/* </InfoWindow> */}
// </Map>

//     );
//   }
// }

// render() {
//   return (
//     <Map google={this.props.google}
//       onReady={this.fetchPlaces}
//       visible={false} >
//         <Listing places={this.state.places} />
//     </Map>
//   )
// }
// }

export default GoogleApiWrapper({
  apiKey: "AIzaSyBTC42wrW7FeVF9Ff1JlC1HlsVvBg5rda4",
})(MapContainer);
