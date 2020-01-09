import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

import Wrapper from "../../components/Wrapper/Wrapper";
import RadiusSelect from "../../components/RadiusSelect";
import DatePicker from "../../components/DatePicker/DatePicker";
import MySingleEvent from "../../components/MySingleEvent/MySingleEvent";

import CurrentUserEmail from "../../utils/CurrentUserEmail";

import styles from "./Home.module.css";

const Home = () => {
  const { currentUserData } = useContext(CurrentUserEmail);
  
  const [events, setEvents] = useState([]);
  const [searchRadius, setSearchRadius] = useState(25);
  const [searchZipcode, setSearchZipcode] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (currentUserData) {
      axios
        .get(`/api/events?user=${currentUserData._id}`)
        .then(response => {
          setEvents([...response.data.data]);

          console.log(events);
        })
        .catch(err => console.log(err));
    }
  }, [currentUserData]);

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
                <h1>Your Upcoming Events</h1>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  spacing={2}
                  className={styles["main-events"]}
                >
                  <div className={styles["searchScroll"]}>
                    <Link to="/event">
                      <MySingleEvent />
                    </Link>
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

export default Home;
