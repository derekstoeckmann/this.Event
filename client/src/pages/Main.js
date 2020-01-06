import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadiusSelect from '../components/RadiusSelect.js';
import './styles.css';

const Main = () => {
  const [searchRadius, setSearchRadius] = React.useState('');

  const handleChange = event => {
    setSearchRadius(event.target.value);
  };

  return (
    <div className="pageDiv">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="top"
        spacing={4}
        className="tableFullWidth"
      >

        <Grid item md={6}>
          <h1>Your Events Today</h1>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="top"
            spacing={2}
            className="main-events"
          >
            <Grid item xs={12}>
              <h2>current_date</h2>
            </Grid>
            <div className="searchScroll">
              <Grid item xs={12} className="main-events-white">
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

              <Grid item xs={12} className="main-events-white">
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
          >
            <br />
            <br />
            <br />
            <br />
            <Button variant="contained" color="primary">
              Create New Event
              </Button>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <h1>Search Upcoming Events</h1>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={6}>
              <TextField id="search-zip" label="Zipcode" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={6}>
              <RadiusSelect searchRadius={searchRadius} handleChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}

export default Main;