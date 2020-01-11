import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Wrapper from "../../components/Wrapper/Wrapper";

import { Grid, Button, TextField, Container } from "@material-ui/core";

import CurrentUserEmail from "../../utils/CurrentUserEmail";

import styles from "./Event.module.css";

const Event = ({ match }) => {
  const { currentUserData } = useContext(CurrentUserEmail);
  const [event, setEvent] = useState([]);
  const [eventAttending, setEventAttending] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/events/${match.params.eventId}`)
      .then(response => {
        setEvent(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [match.params.eventId]);

  useEffect(() => {
    axios
      .get(`/api/events/${match.params.eventId}/attending`)
      .then(response => {
        setEventAttending(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [match.params.eventId]);

  const userIsAttending = async () => {
    const updatedAttending = [...event.attending, currentUserData._id];

    try {
      await axios.put(`/api/events/${event._id}`, {
        attending: updatedAttending
      });

      setEvent({ ...event, attending: updatedAttending });
    } catch (error) {
      console.log(error);
    }
  };

  const userIsNotAttending = async () => {
    const updatedAttending = [...event.attending].filter(
      id => id !== currentUserData._id
    );

    try {
      await axios.put(`/api/events/${event._id}`, {
        attending: updatedAttending
      });

      setEvent({ ...event, attending: updatedAttending });
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< HEAD
  console.log("event", event);
  console.log("user ", currentUserData);
  // if (!event.title || !currentUserData._id) {
  //   return <h1>Loading...</h1>;
  // }
=======
  if (!event.title || !currentUserData) {
    return <h1>Loading...</h1>;
  }
>>>>>>> ebf201b82899fa35dcff523a0f08fe97fc9b6561

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
                      {event.location.name}
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
                {event.highlights[0] ||
                  event.highlights[1] ||
                  event.highlights[2] ||
                  event.highlights[3] ||
                  event.highlights[4]
                  ? (
                    <>
                      <Grid item xs={11}>
                        <span className={styles["data-key"]}>Event Highlights</span>
                      </Grid>
                      <Grid item xs={11}>
                        <Grid
                          container
                          direction="row"
                          spacing={1}
                        >
                          {event.highlights.map(highlight => (
                            <Grid item>
                              <li>{highlight}</li>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </>
                  ) : null}
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
<<<<<<< HEAD
              <Grid item xs={11}>
                {console.log(event.description.replace(/\r\n/g, "<br>"))}
                {event.description.replace(/(?:\r\n|\r|\n)/g, "<br />")}
=======
              <Grid item xs={11} className={styles["description"]}>
                {event.description}
>>>>>>> ebf201b82899fa35dcff523a0f08fe97fc9b6561
                <br />
                <br />
                <hr />
              </Grid>

              {/* <Grid item xs={11} md={5}>
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
              </Grid> */}
              <Grid item xs={11}>
                <Grid
                  container
                  direction="row"
                  spacing={1}
                >
                  {eventAttending.length > 0 ? (
                    eventAttending.map(user => (
                      <Grid key={user._id} item xs={12} sm={6} md={4}>
                        <li>
                          {user.firstName} {user.lastName}
                        </li>
                      </Grid>
                    ))
                  ) : (
                    <h1>No users attending yet!</h1>
                  )}
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
                  {!event.attending.includes(currentUserData._id) && (
                    <Button
                      onClick={userIsAttending}
                      variant="contained"
                      color="primary"
                    >
                      Attend Event
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  {currentUserData._id === event.user._id && (
                    <Link to={`/createEvent/${event._id}`}>
                      <Button variant="contained" color="primary">
                        Edit Event
                      </Button>
                    </Link>
                  )}
                </Grid>
                <Grid item>
                  {event.attending.includes(currentUserData._id) && (
                    <Button
                      onClick={userIsNotAttending}
                      variant="contained"
                      color="secondary"
                    >
                      No Longer Attending
                    </Button>
                  )}
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
