import React, { Component, useState } from "react";
import "./Map.css";
import { Map, Marker, GoogleApiWrapper, Listing } from "google-maps-react";
import { render } from "react-dom";


export class MapContainer extends React.Component {
  // constructor(props) {
  state = { userLocation: { lat: 32, lng: 32 }, loading: true };
  componentDidMount(props, marker, e) {
      navigator.geolocation.getCurrentPosition(
          position => {
              const { latitude, longitude } = position.coords;
              this.setState({
                  userLocation: { lat: latitude, lng: longitude },
                  loading: false
              });
              // Call function
              // this.props.passUpCoordinates({ lat: latitude, lng: longitude })
          },
          () => {
              this.setState({ loading: false });
          }
      );
  }
  render() {
      const { loading, userLocation } = this.state;
      const { google } = this.props;
      const style = {
          display: 'block',
          margin: '0 auto', 
          width: '60%',
          height: '75%'
      }
      if (loading) {
          return null;
      }
      return (
          <div>
              <Map style={style} google={google} initialCenter={userLocation} zoom={15} >
                  <Marker onReady={this.onReady}
                      name={'Current location'} />
              </Map>
          </div>
      );
  };
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
