import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker
} from "react-google-maps";
import { getAddress, getCity, getState, getZipcode } from "./functions";
import Autocomplete from "react-google-autocomplete";
import Geocode from "react-geocode";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.enableDebug();

// Import custom map styles.
const styles = require("./GoogleMapStyles.json");

class Map extends Component {
  // Get current address from default map position and set those values to state.
  componentDidMount() {
    Geocode.fromLatLng(
      this.props.mapPosition.lat,
      this.props.mapPosition.lng
    ).then(
      response => {
        const formattedAddress = response.results[0].formatted_address;
        const address = getAddress(formattedAddress);
        const city = getCity(formattedAddress);
        const state = getState(formattedAddress);
        const zipcode = getZipcode(formattedAddress);

        this.props.setLocationData({
          address: address ? address : "",
          city: city ? city : "",
          state: state ? state : "",
          zipcode: zipcode ? zipcode : "",
          mapPosition: this.props.mapPosition,
          markerPosition: this.props.markerPosition
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  // Component should only rerender when user selects address or drags map marker.
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.markerPosition.lat !== nextProps.markerPosition.lat ||
      this.props.address !== nextProps.address ||
      this.props.city !== nextProps.city ||
      this.props.state !== nextProps.state ||
      this.props.zipcode !== nextProps.zipcode
    ) {
      return true;
    } else if (this.props.center.lat === nextProps.center.lat) {
      return false;
    }
  }

  // Get location info from map marker drag lat/lng.
  onMarkerDragEnd = event => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        const formattedAddress = response.results[0].formatted_address;
        const address = getAddress(formattedAddress);
        const city = getCity(formattedAddress);
        const state = getState(formattedAddress);
        const zipcode = getZipcode(formattedAddress);

        this.props.setLocationData({
          address: address ? address : "",
          city: city ? city : "",
          state: state ? state : "",
          zipcode: zipcode ? zipcode : "",
          markerPosition: {
            lat: newLat,
            lng: newLng
          },
          mapPosition: {
            lat: newLat,
            lng: newLng
          }
        });
      },
      error => {
        console.error(error);
      }
    );
  };

  // Get location info from map search input.
  onPlaceSelected = place => {
    const formattedAddress = place.formatted_address;
    const address = getAddress(formattedAddress);
    const city = getCity(formattedAddress);
    const state = getState(formattedAddress);
    const zipcode = getZipcode(formattedAddress);
    const latValue = place.geometry.location.lat();
    const lngValue = place.geometry.location.lng();

    this.props.setLocationData({
      address: address ? address : "",
      city: city ? city : "",
      state: state ? state : "",
      zipcode: zipcode ? zipcode : "",
      markerPosition: {
        lat: latValue,
        lng: lngValue
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue
      }
    });
  };

  // Event when map marker window is closed.
  onInfoWindowClose = event => {};

  // We don't use this...
  onChange = event => {
    // this.props.setLocationData({ [event.target.name]: event.target.value });
  };

  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: this.props.mapPosition.lat,
            lng: this.props.mapPosition.lng
          }}
          defaultOptions={{
            disableDefaultUI: true,
            draggable: true,
            keyboardShortcuts: false,
            zoomControl: true,
            styles: styles
          }}
        >
          <Autocomplete
            className="data-value-input"
            placeholder="Enter a location"
            onPlaceSelected={this.onPlaceSelected}
            types={["geocode", "establishment"]}
            style={{
              width: "95%",
              height: "40px",
              paddingLeft: "16px",
              marginTop: "2px"
            }}
          />
          {/* InfoWindow on top of marker */}
          <InfoWindow
            onClose={this.onInfoWindowClose}
            position={{
              lat: this.props.markerPosition.lat + 0.0004,
              lng: this.props.markerPosition.lng
            }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>
                {this.props.address}
              </span>
            </div>
          </InfoWindow>
          {/*Marker*/}
          <Marker
            google={this.props.google}
            name={"Dolores park"}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.props.markerPosition.lat,
              lng: this.props.markerPosition.lng
            }}
          />
          <Marker />
        </GoogleMap>
      ))
    );
    let map;
    if (this.props.center.lat !== undefined) {
      map = (
        <div>
          <AsyncMap
            googleMapURL={
              "https://maps.googleapis.com/maps/api/js?key=" +
              process.env.REACT_APP_GOOGLE_KEY +
              "&libraries=places"
            }
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: this.props.height }} />}
            mapElement={
              <div
                className="map"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "15px",
                  boxShadow:
                    "0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              />
            }
          />
        </div>
      );
    } else {
      map = <div style={{ height: this.props.height }} />;
    }
    return map;
  }
}
export default Map;
