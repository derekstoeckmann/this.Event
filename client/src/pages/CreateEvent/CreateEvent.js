import React, { useState, useEffect } from "react";
import axios from "axios";

import Map from "../../components/Map/Map.js";
import Wrapper from "../../components/Wrapper/Wrapper";
import DateTime from "../../components/DateTime/DateTime";

import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import styles from "./CreateEvent.module.css";

const CreateEvent = props => {
  const [eventIsPublic, setEventIsPublic] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationData, setLocationData] = useState({
    address: "",
    city: "",
    state: "",
    zipcode: "",
    mapPosition: {
      lat: 0,
      lng: 0
    },
    markerPosition: {
      lat: 0,
      lng: 0
    }
  });

  useEffect(() => {
    if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition(function (pos) {
        const { latitude, longitude } = pos.coords;
        setLocationData({
          address: "",
          city: "",
          state: "",
          zipcode: "",
          mapPosition: {
            lat: latitude,
            lng: longitude
          },
          markerPosition: {
            lat: latitude,
            lng: longitude
          }
        });
      });
    }
  }, []);

  const toggleEventIsPublic = () => {
    setEventIsPublic(!eventIsPublic);
  };

  const createEventHandler = event => {
    event.preventDefault();

    const eventData = {
      title: eventTitle,
      description: eventDescription,
      time: selectedDate,
      location: {
        type: "Point",
        coordinates: [
          locationData.markerPosition.lng,
          locationData.markerPosition.lat
        ],
        address: locationData.address,
        city: locationData.city,
        state: locationData.state,
        zipcode: locationData.zipcode
      },
      public: eventIsPublic
    };

    console.log(eventData);

    axios
      .post("/api/events", eventData)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  //THIS IS HERE TO REMIND TO DO THE SHOW/HIDE
  // showHideDiv({ checked, myDivId }) {
  // console.log(checked)
  // const myDisplay = document.getElementById(myDivId);
  // if (checked) {
  //   myDisplay.style.display = "inline";
  // } else {
  //   myDisplay.style.display = "none";
  // }
  // }

  return (
    <Wrapper>
      <Container maxWidth="lg" className={styles["main"]}>
        <Grid
          container
          direction="row"
          justify="center"
          className={styles["main-inner"]}
        >
          <div className={styles["pageDiv"]}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item md={5}>
                <h1>Create Event</h1>
              </Grid>
              <Grid item md={6}>
                <br />
                Semi-Private&nbsp;
                <FormControlLabel
                  control={
                    <Switch
                      checked={eventIsPublic}
                      onChange={toggleEventIsPublic}
                      color="primary"
                    />
                  }
                />
                &nbsp;Public
                <br />
                <br />
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item md={6}>
                <Grid
                  container
                  spacing={3}
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <TextField
                      id="event-title"
                      label="Event Title"
                      value={eventTitle}
                      onChange={event => setEventTitle(event.target.value)}
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="location-name"
                      label="Location Name"
                      value={locationName}
                      onChange={event => setLocationName(event.target.value)}
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="address"
                      label="Address"
                      defaultValue=""
                      value={locationData.address}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="city"
                      label="City"
                      defaultValue=""
                      value={locationData.city}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="state"
                      label="State"
                      defaultValue=""
                      value={locationData.state}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="zip"
                      label="Zip Code"
                      defaultValue=""
                      value={locationData.zipcode}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6}>
                <Grid
                  container
                  spacing={3}
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <DateTime
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />
                  </Grid>
                  <Grid item style={{ width: "400px" }}>
                    <Map
                      {...locationData}
                      setLocationData={setLocationData}
                      google={props.google}
                      center={{ lat: 33, lng: 100 }}
                      height="300px"
                      zoom={17}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <br />
              <br />
              <br />
              <br />
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
              width="100%"
            >
              <Grid item>
                <span className={styles["data-key"]}>Highlights</span> (Up to 5){" "}
                <input type="checkbox" />
                {/* onClick={this.showHideDiv(this.checked, 'highlight-box')} /> */}
              </Grid>
              <Grid item xs={11}>
                <Grid
                  container
                  direction="row"
                  justify="left"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item md={6}>
                    <TextField
                      id="highlight-1"
                      label="Event Highlight One"
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      id="highlight-2"
                      label="Event Highlight Two"
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      id="highlight-3"
                      label="Event Highlight Three"
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      id="highlight-4"
                      label="Event Highlight Four"
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      id="highlight-5"
                      label="Event Highlight Five"
                      variant="outlined"
                      size="small"
                      className={styles["data-value-input"]}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <span className={styles["data-key"]}>Bring your own?</span>{" "}
                <input type="checkbox" />
                <br />
                <br />
                {/* onClick={this.showHideDiv(this.checked, 'byo-box')} /><br /><br /> */}
                <TextField
                  id="byo"
                  label="Bring Your Own ____"
                  variant="outlined"
                  size="small"
                  className={styles["data-value-input"]}
                />
              </Grid>

              <Grid item xs={12} className={styles["tableFullWidth"]}>
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="Event Description"
                  multiline
                  fullWidth
                  rows="7"
                  defaultValue=""
                  value={eventDescription}
                  onChange={event => setEventDescription(event.target.value)}
                  variant="outlined"
                  size="small"
                  className={styles["textarea"]}
                />
                <br />
                <br />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <br />
                <br />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item>
                  <Button
                    onClick={createEventHandler}
                    variant="contained"
                    color="primary"
                  >
                    Create Event
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Update Event
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Cancel Event
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <br />
                <br />
                <br />
                <br />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default CreateEvent;
