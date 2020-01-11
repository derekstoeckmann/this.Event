import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Grid, Switch, Button, Checkbox, Container, TextField, FormControlLabel } from "@material-ui/core";

import Map from "../../components/Map/Map.js";
import Wrapper from "../../components/Wrapper/Wrapper";
import DateTime from "../../components/DateTime/DateTime";
import EventHighlights from "../../components/EventHighlights/EventHighlights";

import CurrentUserEmail from "../../utils/CurrentUserEmail";

import styles from "./CreateEvent.module.css";

const CreateEvent = props => {
  const { match } = props;
  const { currentUserData } = useContext(CurrentUserEmail);

  const [eventIsPublic, setEventIsPublic] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [highlightsChecked, setHighlightsChecked] = useState(false);
  // const [byoChecked, setByoChecked] = useState(false);
  const [locationName, setLocationName] = useState("");
  const [highlight1, setHighlight1] = useState("");
  const [highlight2, setHighlight2] = useState("");
  const [highlight3, setHighlight3] = useState("");
  const [highlight4, setHighlight4] = useState("");
  const [highlight5, setHighlight5] = useState("");
  // const [byoItemType, setByoItemType] = useState("");
  const [locationData, setLocationData] = useState({
    address: "",
    city: "",
    state: "",
    zipcode: "",
    mapPosition: {
      lat: 33.4200832,
      lng: -111.91664639999999
    },
    markerPosition: {
      lat: 33.4200832,
      lng: -111.91664639999999
    }
  });

  useEffect(() => {
    const getEventIfExists = async () => {
      if (match.params.eventId) {
        const response = await axios.get(`/api/events/${match.params.eventId}`);
        console.log("RESPONSE: ", response)
        if (window.navigator || match.params.eventId) {
          window.navigator.geolocation.getCurrentPosition(function (pos) {
            const { latitude, longitude } = pos.coords;
            setLocationData({
              address: response.data.data.location.address
                ? response.data.data.location.address
                : "",
              city: response.data.data.location.city
                ? response.data.data.location.city
                : "",
              state: response.data.data.location.state
                ? response.data.data.location.state
                : "",
              zipcode: response.data.data.location.zipcode
                ? response.data.data.location.zipcode
                : "",
              mapPosition: {
                lat: response.data.data.location.coordinates[1]
                  ? response.data.data.location.coordinates[1]
                  : latitude,
                lng: response.data.data.location.coordinates[0]
                  ? response.data.data.location.coordinates[0]
                  : longitude
              },
              markerPosition: {
                lat: response.data.data.location.coordinates[1]
                  ? response.data.data.location.coordinates[1]
                  : latitude,
                lng: response.data.data.location.coordinates[0]
                  ? response.data.data.location.coordinates[0]
                  : longitude
              }
            });
          });
        }

        setEventIsPublic(response.data.data.public);
        setSelectedDate(response.data.data.time);
        setEventDescription(response.data.data.description);
        // setByoChecked(response.data.data.);
        setLocationName(response.data.data.location.name);
        console.log(response.data.data.highlights[0]);
        setHighlightsChecked(
          response.data.data.highlights[0] ||
            response.data.data.highlights[1] ||
            response.data.data.highlights[2] ||
            response.data.data.highlights[3] ||
            response.data.data.highlights[4]
            ? true : false
        );
        setHighlight1(
          response.data.data.highlights[0]
            ? response.data.data.highlights[0]
            : null
        );
        setHighlight2(
          response.data.data.highlights[1]
            ? response.data.data.highlights[1]
            : null
        );
        setHighlight3(
          response.data.data.highlights[2]
            ? response.data.data.highlights[2]
            : null
        );
        setHighlight4(
          response.data.data.highlights[3]
            ? response.data.data.highlights[3]
            : null
        );
        setHighlight5(
          response.data.data.highlights[4]
            ? response.data.data.highlights[4]
            : null
        );
        // setByoItemType(response.data.data.);
        setEventTitle(response.data.data.title);
      }
    };

    getEventIfExists();
  }, [match.params.eventId]);

  const toggleEventIsPublic = () => {
    setEventIsPublic(!eventIsPublic);
  };

  const submitHandler = event => {
    event.preventDefault();
    const eventData = {
      user: currentUserData._id,
      title: eventTitle,
      description: eventDescription,
      time: selectedDate,
      location: {
        type: "Point",
        coordinates: [
          locationData.markerPosition.lng,
          locationData.markerPosition.lat
        ],
        name: locationName,
        address: locationData.address,
        city: locationData.city,
        state: locationData.state,
        zipcode: locationData.zipcode
      },
      public: eventIsPublic,
      locationName: locationName,
      highlights: [highlight1, highlight2, highlight3, highlight4, highlight5],
      // byoItemType: byoItemType
    };

    if (match.params.eventId) {
      console.log("you hit the UPDATE condition");
      axios
        .put(`/api/events/${match.params.eventId}`, eventData)
        .then(response => {
          props.history.push(`/event/${response.data.data._id}`);
        })
        .catch(err => console.log(err));
    } else {
      console.log("you hit the POST condition");
      axios
        .post("/api/events", eventData)
        .then(response => {
          console.log("event posted: ", response);
          props.history.push(`/event/${response.data.data._id}`);
        })
        .catch(err => console.log(err));
    }
  };

  // THIS NEEDS TO BE SET TO A RELEVENT STATE
  if (match.params.eventId && !locationData.address) {
    return <h1>Loading...</h1>;
  }

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
              spacing={3}
            >
              <Grid item md={6}>
                <Grid
                  container
                  spacing={3}
                  direction="column"
                  justify="space-around"
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
                      center={{ lat: 33.4200832, lng: -111.91664639999999 }}
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
              spacing={3}
              width="100%"
            >
              <Grid item>
                <span className={styles["data-key"]}>Event Highlights</span> (Up to 5){" "}
                <Checkbox
                  onChange={event => setHighlightsChecked(!highlightsChecked)}
                  checked={highlightsChecked}
                  value="highlightsCheck"
                  color="primary"
                  inputProps={{ "aria-label": "highlights checkbox" }}
                />
              </Grid>
              {highlightsChecked ? (
                <EventHighlights
                  highlight1={highlight1}
                  setHighlight1={setHighlight1}
                  highlight2={highlight2}
                  setHighlight2={setHighlight2}
                  highlight3={highlight3}
                  setHighlight3={setHighlight3}
                  highlight4={highlight4}
                  setHighlight4={setHighlight4}
                  highlight5={highlight5}
                  setHighlight5={setHighlight5}
                />
              ) : null}

              {/* <Grid item>
                <span className={styles["data-key"]}>Bring your own?</span>{" "}
                <Checkbox
                  onChange={event => setByoChecked(!byoChecked)}
                  checked={byoChecked}
                  value="byoCheck"
                  color="primary"
                  inputProps={{ "aria-label": "byo checkbox" }}
                />
                {byoChecked ? (
                  <TextField
                    id="byo"
                    label="Type of item people should bring"
                    value={byoItemType}
                    onChange={event => setByoItemType(event.target.value)}
                    variant="outlined"
                    size="small"
                    className={styles["data-value-input"]}
                  />
                ) : null}
              </Grid> */}

              <Grid item xs={12} className={styles["tableFullWidth"]}>
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="Event Description"
                  multiline
                  fullWidth
                  rows="7"
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
                spacing={3}
              >
                <br />
                <br />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                spacing={4}
              >
                {!match.params.eventId ? (
                  <>
                    <Grid item>
                      <Button
                        onClick={submitHandler}
                        variant="contained"
                        color="primary"
                      >
                        Create Event
                      </Button>
                    </Grid>
                  </>
                ) : (
                    <>
                      <Grid item>
                        <Button
                          onClick={submitHandler}
                          variant="contained"
                          color="primary"
                        >
                          Update Event
                      </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="secondary">
                          Cancel Event
                      </Button>
                      </Grid>
                    </>
                  )}
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
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
