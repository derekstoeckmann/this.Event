// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let myLat = "";
let myLon = "";

if ("geolocation" in navigator) {
  /* geolocation is available */
  //SETTING IT IN A GLOBAL VAR RATHER THAN TRYING TO PASS IT AND TRACE WHERE IT IS
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude)
    myLat = position.coords.latitude;
    myLon = position.coords.longitude;
  })
} else {
  //IF WE CAN NOT GET GEOLOCATION THEN WE DEFAULT TO PHOENIX
  myLat = "33.4484";
  myLon = "112.0740";
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: myLat, lng: myLon },
    zoom: 14,
    styles: [
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#c0c0c0"
          },
          {
            "lightness": 55
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": 50
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": 80
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#c0c0c0"
          },
          {
            "lightness": 25
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "lightness": 5
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#8000ff"
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#8000ff"
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c0c0c0"
          }
        ]
      }
    ]
  });
// var card = document.getElementById('pac-card');
var input = document.getElementById('pac-input');
var types = "changetype-all";
var strictBounds = false;

// map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

var autocomplete = new google.maps.places.Autocomplete(input);

// Bind the map's bounds (viewport) property to the autocomplete object,
// so that the autocomplete requests use the current map bounds for the
// bounds option in the request.
autocomplete.bindTo('bounds', map);

// Set the data fields to return when the user selects a place.
autocomplete.setFields(
  ['address_components', 'geometry', 'icon', 'name']);

var infowindow = new google.maps.InfoWindow();
var infowindowContent = document.getElementById('infowindow-content');
infowindow.setContent(infowindowContent);
var marker = new google.maps.Marker({
  map: map,
  anchorPoint: new google.maps.Point(0, -29)
});

autocomplete.addListener('place_changed', function () {
  infowindow.close();
  marker.setVisible(false);
  var place = autocomplete.getPlace();
  if (!place.geometry) {
    // User entered the name of a Place that was not suggested and
    // pressed the Enter key, or the Place Details request failed.
    window.alert("No details available for input: '" + place.name + "'");
    return;
  }

  // If the place has a geometry, then present it on a map.
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
    map.setZoom(17);  // Why 17? Because it looks good.
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);  // Why 17? Because it looks good.
  }
  marker.setPosition(place.geometry.location);
  marker.setVisible(true);

  var address = '';
  if (place.address_components) {
    address = [
      (place.address_components[0] && place.address_components[0].short_name || ''),
      (place.address_components[1] && place.address_components[1].short_name || ''),
      (place.address_components[2] && place.address_components[2].short_name || '')
    ].join(' ');
  }

  infowindowContent.children['place-icon'].src = place.icon;
  infowindowContent.children['place-name'].textContent = place.name;
  infowindowContent.children['place-address'].textContent = address;
  infowindow.open(map, marker);
});
}