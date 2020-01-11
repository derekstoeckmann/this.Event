import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Grid, Button, TextField } from "@material-ui/core";

import RadiusSelect from "../../components/RadiusSelect";
import DatePicker from "../../components/DatePicker/DatePicker";

import Geocode from "react-geocode";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.enableDebug();

export default function SearchOptions(props) {
  const [searchRadius, setSearchRadius] = useState(25);
  const [searchZipcode, setSearchZipcode] = useState("");
  const [cantFindYou, setCantFindYou] = useState(false);


  const handleZipChange = event => {
    setSearchZipcode(event.target.value);
  };

  const handleRadiusChange = event => {
    setSearchRadius(event.target.value);
  };

  const handleSearchSubmit = async () => {
    let events;
    if (searchZipcode) {
      const location = await Geocode.fromAddress(searchZipcode);
      const { lat, lng } = location.results[0].geometry.location;
      events = await axios.get(
        `/api/events/near?distance=${searchRadius}&lat=${lat}&lng=${lng}`
      );
      props.setEvents(events.data.data);
    } else if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition(async function (pos) {
        const { latitude, longitude } = pos.coords;
        events = await axios.get(
          `/api/events/near?distance=${searchRadius}&lat=${latitude}&lng=${longitude}`
        );
        props.setEvents(events.data.data);
      });
    } else {
      setCantFindYou(true);
      props.setEvents([]);
    }

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
            required={cantFindYou}
            error={cantFindYou}
            helperText={cantFindYou ? "Location unavailable Please enter a zip code" : ""}
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