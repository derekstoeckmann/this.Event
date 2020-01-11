import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Grid, Button, Container } from "@material-ui/core";

import Wrapper from "../../components/Wrapper/Wrapper";
import NoEvent from "../../components/NoEvent/NoEvent";
import SingleEvent from "../../components/SingleEvent/SingleEvent";
import SearchOptions from "../../components/SearchOptions/SearchOptions";
import styles from "./Search.module.css";

const Search = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    axios
      .get("/api/events")
      .then(response => {
        setEvents(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
              <Grid item md={6}>
                <h1>
                  Search Results
                </h1>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  spacing={2}
                  className={styles["main-events"]}
                >
                  <div className={styles["searchScroll"]}>
                    {events.length ? (
                      events.map(event => (
                        <SingleEvent key={event._id} {...event} />
                      ))
                    ) : (
                        <NoEvent />
                      )}
                  </div>
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
                </Grid>
              </Grid>
              <Grid item md={6}>
                <Grid
                  container
                  direction="row"
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
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Search;
