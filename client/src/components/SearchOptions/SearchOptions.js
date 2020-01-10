import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import RadiusSelect from "../../components/RadiusSelect";
import DatePicker from "../../components/DatePicker/DatePicker";

import Geocode from "react-geocode";
import { LinearProgress } from "@material-ui/core";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.enableDebug();

export default function SearchOptions(props) {
  const [searchRadius, setSearchRadius] = useState(25);
  const [searchZipcode, setSearchZipcode] = useState("");


  const handleZipChange = event => {
    setSearchZipcode(event.target.value);
  };

  const handleRadiusChange = event => {
    setSearchRadius(event.target.value);
  };

  const handleSearchSubmit = async () => {

    let events;
    if (searchZipcode) {
      console.log("zip")
      const location = await Geocode.fromAddress(searchZipcode);
      const { lat, lng } = location.results[0].geometry.location;
      events = await axios.get(
        `/api/events/near?distance=${searchRadius}&lat=${lat}&lng=${lng}`
      );
      props.setEvents(events.data.data);
    } else if (window.navigator) {
      console.log("Nav")
      window.navigator.geolocation.getCurrentPosition(async function (pos) {
        const { latitude, longitude } = pos.coords;
        events = await axios.get(
          `/api/events/near?distance=${searchRadius}&lat=${latitude}&lng=${longitude}`
        );
        props.setEvents(events.data.data);
      });
    }
    //NEED AN ELSE THAT SHOWS A WARNING THAT WE NEED A ZIP CODE
    //WE CAN NOT FIND YOUR POSITION PLEASE ENTER A ZIP CODE

  };

  return (
    <>
      <h1>Search Upcoming Events</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <DatePicker
            selectedDate={props.selectedDate}
            handleDateChange={props.handleDateChange}
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
            <Button
              onClick={handleSearchSubmit}
              variant="contained"
              color="primary"
            >
              Search
          </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}