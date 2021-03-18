import React from "react";
import "./Map.css";
import MapComp from "./MapComp";
import { GoogleApiWrapper } from "google-maps-react";

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
        this.setState(
          {
            userLocation: { lat: latitude, lng: longitude },
            loading: false,
          },
          () => console.log("comp did mount ", this.state)
        );
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
        // this.setState({ address });
        this.setState({ userLocation: latLng }, () => {
          console.log(latLng, this.state);
        });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    const { loading } = this.state;
    const { google } = this.props;
    const style = {
      display: "block",
      width: "60%",
      height: "75%",
    };
    if (loading) {
      return null;
    }
    return (
      <div className="mapJs">
        <div className="pacInput">
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
        </div>
        <div>
          <MapComp
            style={style}
            google={google}
            initialCenter={this.state.userLocation}
            center={this.state.userLocation}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBTC42wrW7FeVF9Ff1JlC1HlsVvBg5rda4",
})(MapContainer);
