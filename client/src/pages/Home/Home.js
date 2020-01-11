import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Grid, Button, Container } from "@material-ui/core";

import Wrapper from "../../components/Wrapper/Wrapper";
import NoEvent from "../../components/NoEvent/NoEvent";
import SingleEvent from "../../components/SingleEvent/SingleEvent";
import SearchOptions from "../../components/SearchOptions/SearchOptions";

import CurrentUserEmail from "../../utils/CurrentUserEmail";

import styles from "./Home.module.css";

const Home = () => {
  const { currentUserData } = useContext(CurrentUserEmail);

  const [events, setEvents] = useState([]); //For the search options
  const [selectedDate, setSelectedDate] = useState(new Date()); //Part of the search
  const [eventsAttend, setEventsAttend] = useState([]); //Events user is attending
  const [eventsHost, setEventsHost] = useState([]); //Events the user is hosting

  useEffect(() => {
    if (currentUserData) {
      axios
        .get(`/api/users/${currentUserData._id}/attending`)
        .then(response => {
          setEventsAttend([...response.data.data]);
        })
        .catch(err => console.log(err));

      axios
        .get(`/api/users/${currentUserData._id}/hosting`)
        .then(response => {
          setEventsHost([...response.data.data]);
        })
        .catch(err => console.log(err));
    }
  }, [currentUserData]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

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
              spacing={4}
              className={styles["tableFullWidth"]}
            >
              {eventsAttend.length ? (
                <Grid item md={6}>
                  <h1>Events you plan to attend</h1>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={2}
                    className={styles["main-events"]}
                  >
                    <div className={styles["searchScroll"]}>
                      {eventsAttend.length ? (
                        eventsAttend.map(event => (
                          <SingleEvent key={event._id} {...event} />
                        ))
                      ) : (
                          <NoEvent />
                        )}
                    </div>
                  </Grid>
                  <br />
                  <br />
                </Grid>
              ) : null}
              {eventsHost.length ? (
                <Grid item md={6}>
                  <h1>Events You have organized</h1>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={2}
                    className={styles["main-events"]}
                  >
                    <div className={styles["searchScroll"]}>
                      {eventsHost.length ? (
                        eventsHost.map(event => (
                          <SingleEvent key={event._id} {...event} />
                        ))
                      ) : (
                          <NoEvent />
                        )}
                    </div>
                  </Grid>
                  <br />
                  <br />
                </Grid>
              ) : null}
              <Grid item md={6}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid item>
                    <SearchOptions
                      selectedDate={selectedDate}
                      handleDateChange={handleDateChange}
                      events={events}
                      setEvents={setEvents}
                    />
                  </Grid>
                  <Grid item>
                    <h1>Planning an Event?</h1>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <Link to="/createEvent">
                          <Button variant="contained" color="primary">
                            Create New Event
                        </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
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

export default Home;
