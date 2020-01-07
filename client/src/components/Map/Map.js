import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker
} from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.enableDebug();

/* Import custom styles to customize the style of Google Map*/
const styles = require("./GoogleMapStyles.json");

class Map extends Component {
  /**
   * Get the current address from the default map position and set those values in the state
   */
  componentDidMount() {
    console.log("BEFORE", this.props);
    Geocode.fromLatLng(
      this.props.mapPosition.lat,
      this.props.mapPosition.lng
    ).then(
      response => {
        console.log("RESPONSE: ", response);
        const address = response.results[0].formatted_address;
        // const addressArray = response.results[0].address_components;
        const city = this.getCity(address);
        const state = this.getState(address);
        const zipcode = this.getZipcode(address);

        this.props.setLocationData({
          address: address ? address : "",
          city: city ? city : "",
          state: state ? state : "",
          zipcode: zipcode ? zipcode : "",
          mapPosition: this.props.mapPosition,
          markerPosition: this.props.markerPosition
        });

        console.log("AFTER: ", this.props);
      },
      error => {
        console.error(error);
      }
    );
  }
  /**
   * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
   *
   * @param nextProps
   * @param nextState
   * @return {boolean}
   */
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("from shouldComponentUpdate", this.props);
  //   if (
  //     this.props.markerPosition.lat !== this.props.center.lat ||
  //     this.props.address !== nextState.address ||
  //     this.props.city !== nextState.city ||
  //     this.props.area !== nextState.area ||
  //     this.props.state !== nextState.state
  //   ) {
  //     return true;
  //   } else if (this.props.center.lat === nextProps.center.lat) {
  //     return false;
  //   }
  // }
  /**
   * Get the city and set the city input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getCity = addressArray => {
    // let city = "";
    // for (let i = 0; i < addressArray.length; i++) {
    //   if (
    //     addressArray[i].types[0] &&
    //     "administrative_area_level_2" === addressArray[i].types[0]
    //   ) {
    //     city = addressArray[i].long_name;
    //     return city;
    //   }
    // }

    return addressArray.split(",")[1].trim();
  };
  /**
   * Get the area and set the area input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getZipcode = addressArray => {
    // let area = "";
    // for (let i = 0; i < addressArray.length; i++) {
    //   if (addressArray[i].types[0]) {
    //     for (let j = 0; j < addressArray[i].types.length; j++) {
    //       if (
    //         "sublocality_level_1" === addressArray[i].types[j] ||
    //         "locality" === addressArray[i].types[j]
    //       ) {
    //         area = addressArray[i].long_name;
    //         return area;
    //       }
    //     }
    //   }
    // }

    return addressArray.split(",")[2].slice(-5);
  };
  /**
   * Get the address and set the address input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getState = addressArray => {
    // let state = "";
    // for (let i = 0; i < addressArray.length; i++) {
    //   for (let i = 0; i < addressArray.length; i++) {
    //     if (
    //       addressArray[i].types[0] &&
    //       "administrative_area_level_1" === addressArray[i].types[0]
    //     ) {
    //       state = addressArray[i].long_name;
    //       return state;
    //     }
    //   }
    // }

    return addressArray
      .split(",")[2]
      .trim()
      .slice(0, 2);
  };
  /**
   * And function for city,state and address input
   * @param event
   */
  // onChange = event => {
  //   this.props.setLocationData({ [event.target.name]: event.target.value });
  // };
  /**
   * This Event triggers when the marker window is closed
   *
   * @param event
   */
  onInfoWindowClose = event => {};

  /**
   * When the marker is dragged you get the lat and long using the functions available from event object.
   * Use geocode to get the address, city, area and state from the lat and lng positions.
   * And then set those values in the state.
   *
   * @param event
   */
  onMarkerDragEnd = event => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        const address = response.results[0].formatted_address;
        // const addressArray = response.results[0].address_components;
        const city = this.getCity(address);
        const state = this.getState(address);
        const zipcode = this.getZipcode(address);

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

  /**
   * When the user types an address in the search box
   * @param place
   */
  onPlaceSelected = place => {
    console.log("PLACE", place);
    const address = place.formatted_address;
    // const addressArray = place.address_components;
    const city = this.getCity(address);
    const state = this.getState(address);
    const zipcode = this.getZipcode(address);
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
