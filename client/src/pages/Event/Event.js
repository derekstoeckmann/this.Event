import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Wrapper from "../../components/Wrapper/Wrapper";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

import CurrentUserEmail from "../../utils/CurrentUserEmail";

import styles from "./Event.module.css";

const Event = ({ match }) => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/events/${match.params.eventId}`)
      .then(response => {
        setEvent(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log("event", event);
  console.log("user ", currentUserData);
  if (!event.title || !currentUserData._id) {
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
              alignItems="center"
            >
              <Grid item md={5}>
                <h1>{event.title}</h1>
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="eventUrl"
                  label="Sharable URL"
                  defaultValue={window.location.href}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  size="small"
                  className={styles["data-value-input"]}
                />
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
              <Grid item>
                <div>
                  <img
                    className={styles["map"]}
                    alt="google map"
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${event.location.coordinates[1]},${event.location.coordinates[0]}&markers=${event.location.coordinates[1]},${event.location.coordinates[0]}&size=350x350&zoom=17&format=png&maptype=roadmap&style=feature:landscape.man_made%7Celement:geometry.fill%7Clightness:-10&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0xc0c0c0%7Clightness:-25&style=feature:landscape.natural.landcover%7Celement:geometry.fill%7Clightness:35&style=feature:poi%7Celement:geometry.fill%7Clightness:80&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0xc0c0c0%7Clightness:25&style=feature:road.arterial%7Celement:geometry.stroke%7Clightness:5&style=feature:road.highway%7Celement:geometry.fill%7Ccolor:0x8000ff%7Clightness:45&style=feature:road.highway.controlled_access%7Celement:geometry.fill%7Ccolor:0x8000ff%7Clightness:45&style=feature:road.local%7Celement:geometry.stroke%7Ccolor:0xc0c0c0&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Grid
                  container
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <span className={styles["data-key"]}>
                      LOCATION NAME TO COME
                    </span>
                  </Grid>
                  <Grid item>
                    <span className={styles["data-key"]}>
                      {event.location.address}
                    </span>
                  </Grid>
                  <Grid item>
                    <span className={styles["data-key"]}>
                      {event.location.city}, {event.location.state}
                      {"  "}
                      {event.location.zipcode}
                    </span>
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
                </Grid>
                <Grid item xs={11}>
                  <span className={styles["data-key"]}>Event Highlights</span>
                </Grid>
                <Grid item xs={11}>
                  <Grid
                    container
                    direction="row"
                    justify="left"
                    alignItems="left"
                    spacing={1}
                  >
                    <Grid item xs={12} sm={6}>
                      <li>Event Highlight One</li>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <li>Event Highlight Two</li>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <li>Event Highlight Three</li>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <li>Event Highlight Four</li>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <li>Event Highlight Five</li>
                    </Grid>
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
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={11}>
                <hr />
                <br />
                <span className={styles["data-key"]}>Description</span>
              </Grid>
              <Grid item xs={11}>
                {event.description}
                <br />
                <br />
                <hr />
              </Grid>

              <Grid item xs={11} md={5}>
                <span className={styles["data-key"]}>
                  Bring your own item_to_bring
                </span>
              </Grid>
              <Grid item xs={11} md={6}>
                <TextField
                  id="my_byo_item"
                  label="The Item You Are Bringing"
                  variant="outlined"
                  size="small"
                  className={styles["data-value-input"]}
                />
              </Grid>
              <Grid item xs={11}>
                <Grid
                  container
                  direction="row"
                  justify="left"
                  alignItems="left"
                  spacing={1}
                >
                  <Grid item xs={12} sm={6} md={4}>
                    <li>Bill Inkman - Potato Salad</li>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <li>Steve Smith - Jello</li>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <li>Jill Wagner - Meatloaf</li>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <li>Liezl Neal - Chicken Adobo</li>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <li>Mike Milton - Potato Chips</li>
                  </Grid>
                  <br />
                  <br />
                  <br />
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    Attend Event
                  </Button>
                </Grid>
                <Grid item>
                  {currentUserData._id === event.user._id && (
                    <Button variant="contained" color="primary">
                      Update Event
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    No Longer Attending
                  </Button>
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
          </div>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Event;
