import React, { useState } from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';

import { withAuthenticator } from "aws-amplify-react";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import Wrapper from "../../components/Wrapper/Wrapper";
import RadiusSelect from '../../components/RadiusSelect';
import DatePicker from '../../components/DatePicker/DatePicker';

import styles from './Search.module.css';

const Search = () => {
  const [searchRadius, setSearchRadius] = useState("");
  const [searchZipcode, setSearchZipcode] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

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
                  {/* THIS DATE AREA SHOULD APPEAR FOR EACH NEW DATE ie IF THE USER HAS TWO EVENTS 
                    ON THE DAY IT SHOWS UP ONCE FOR BOTH AND THEN THE NEXT DAY THAT HAS AN EVENT GETS 
                    THAT DATE */}
                  <div className={styles["searchScroll"]}>
                    <Grid item xs={12}>
                      <h2>date</h2>
                    </Grid>
                    {/* START OF A SINGLE EVENT */}
                    <Grid item xs={12} className={styles["main-events-white"]}>
                      <Grid
                        container
                        direction="row"
                      >
                        <Grid item xs={2}>
                          10:30 pm
                      </Grid>
                        <Grid item xs={10}>
                          <Grid
                            container
                            direction="row"
                          >
                            <Grid item xs={12}>
                              Event Title
                      </Grid>
                            <Grid item xs={12}>
                              Event partial description
                      </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />
                    {/* END OF A SINGLE EVENT */}
                    {/* FROM HERE TO THE CLOSING DIV IS JUST FOR VISUAL REFERENCE OF THE FLOW */}
                    <Grid item xs={12} className={styles["main-events-white"]}>
                      <Grid
                        container
                        direction="row"
                      >
                        <Grid item xs={2}>
                          10:30 pm
                  </Grid>
                        <Grid item xs={10}>
                          <Grid
                            container
                            direction="row"
                          >
                            <Grid item xs={12}>
                              Event Title
                      </Grid>
                            <Grid item xs={12}>
                              Event partial description
                      </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid item xs={12} className={styles["main-events-white"]}>
                      <Grid
                        container
                        direction="row"
                      >
                        <Grid item xs={2}>
                          10:30 pm
                      </Grid>
                        <Grid item xs={10}>
                          <Grid
                            container
                            direction="row"
                          >
                            <Grid item xs={12}>
                              Event Title
                      </Grid>
                            <Grid item xs={12}>
                              Event partial description
                      </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid item xs={12} className={styles["main-events-white"]}>
                      <Grid
                        container
                        direction="row"
                      >
                        <Grid item xs={2}>
                          10:30 pm
                      </Grid>
                        <Grid item xs={10}>
                          <Grid
                            container
                            direction="row"
                          >
                            <Grid item xs={12}>
                              Event Title
                      </Grid>
                            <Grid item xs={12}>
                              Event partial description
                      </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />

                    <Grid item xs={12} className={styles["main-events-white"]}>
                      <Grid
                        container
                        direction="row"
                      >
                        <Grid item xs={2}>
                          10:30 pm
                  </Grid>
                        <Grid item xs={10}>
                          <Grid
                            container
                            direction="row"
                          >
                            <Grid item xs={12}>
                              Event Title
                      </Grid>
                            <Grid item xs={12}>
                              Event partial description
                      </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />
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
                      <DatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
                    </Grid>
                    <Grid item>
                      <TextField type="number" id="search-zip" label="Zipcode" variant="outlined" size="small" value={searchZipcode} onChange={handleZipChange} />
                    </Grid>
                    <Grid item>
                      <RadiusSelect searchRadius={searchRadius} handleRadiusChange={handleRadiusChange} />
                    </Grid>
                  </Grid>

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
          </div >
        </Grid>
      </Container>
    </Wrapper >
  )
}

export default withAuthenticator(Search, true);