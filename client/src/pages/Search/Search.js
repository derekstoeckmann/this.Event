import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { withAuthenticator } from "aws-amplify-react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

import Wrapper from "../../components/Wrapper/Wrapper";
import RadiusSelect from "../../components/RadiusSelect";
import DatePicker from "../../components/DatePicker/DatePicker";
import NoEvent from "../../components/NoEvent/NoEvent";
import SingleEvent from "../../components/SingleEvent/SingleEvent";

import styles from "./Search.module.css";

const Search = () => {
  const [events, setEvents] = useState([]);
  const [searchRadius, setSearchRadius] = useState(25);
  const [searchZipcode, setSearchZipcode] = useState("");
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

  const handleZipChange = event => {
    setSearchZipcode(event.target.value);
  };

  const handleRadiusChange = event => {
    setSearchRadius(event.target.value);
  };

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
                <h1>Events on <Moment date={selectedDate} format="Do of MMM, YYYY" /></h1>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  spacing={2}
                  className={styles["main-events"]}
                >
                  <div className={styles["searchScroll"]}>
                    {events.length > 0 ?
                      events.map(event => (
                        <SingleEvent
                          key={event._id}
                          time={event.time}
                          title={event.title}
                          description={event.description}
                        />
                      ))
                      :
                      <NoEvent />}
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
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <h1>Search Upcoming Events</h1>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <DatePicker
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="number"
                        id="search-zip"
                        label="Zipcode"
                        variant="outlined"
                        size="small"
                        value={searchZipcode}
                        onChange={handleZipChange}
                      />
                    </Grid>
                    <Grid item>
                      <RadiusSelect
                        searchRadius={searchRadius}
                        handleRadiusChange={handleRadiusChange}
                      />
                    </Grid>
                    <Grid item>
                      <Link to="/search">
                        <Button variant="contained" color="primary">
                          Search
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                  <br />
                  <br />
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

export default withAuthenticator(Search, true);
