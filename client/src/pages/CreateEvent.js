import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Map from '../components/Map/Map.js';
import DateTime from '../components/DateTime/DateTime.js';
import Button from '@material-ui/core/Button';
import './styles.css';

function showHideDiv(checked, myDivId) {
  const myDisplay = document.getElementById(myDivId);
  if (checked) {
    myDisplay.style.display = "inline";
  } else {
    myDisplay.style.display = "none";
  }
}

class CreateEvent extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={5}>
            <h1>Create Event</h1>
          </Grid>
          <Grid item md={6}>
            <br />
            Public&nbsp;
              <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            &nbsp;Semi-Private<br />
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
          <Grid item md={6}>
            <Grid
              container
              spacing={3}
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                <TextField id="event-title" label="Event Title" variant="outlined" className="data-value-input" />
              </Grid>
              <Grid item>
                <TextField id="location-name" label="Location" variant="outlined" className="data-value-input" />
              </Grid>
              <Grid item>
                <TextField
                  id="address"
                  label="Event Address"
                  defaultValue=""
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className="data-value-input"
                />
              </Grid>
              <Grid item>
                <TextField
                  id="city"
                  label="City"
                  defaultValue=""
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className="data-value-input"
                />
              </Grid>
              <Grid item>
                <TextField
                  id="state"
                  label="State"
                  defaultValue=""
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className="data-value-input"
                />
              </Grid>
              <Grid item>
                <TextField
                  id="zip"
                  label="Zip Code"
                  defaultValue=""
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className="data-value-input"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid
              container
              spacing={3}
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                <DateTime />
              </Grid>
              <Grid item>
                <Map
                  google={this.props.google}
                  center={{ lat: 33.4484, lng: -112.0740 }}
                  height='300px'
                  zoom={17}
                />
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
          <br />
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
          width="100%"
        >
          <Grid item>
            <span className="data-key">Highlights</span> (Up to 5) <input type="checkbox"
              onClick="showHideDiv(this.checked, 'highlight-box')" />
          </Grid>
          <Grid item xs={11}>
            <Grid
              container
              direction="row"
              justify="left"
              alignItems="center"
              spacing={3}
            >
              <Grid item md={6}>
                <TextField id="highlight-1" label="Event Highlight One" variant="outlined" className="data-value-input" />
              </Grid>
              <Grid item md={6}>
                <TextField id="highlight-2" label="Event Highlight Two" variant="outlined" className="data-value-input" />
              </Grid>
              <Grid item md={6}>
                <TextField id="highlight-3" label="Event Highlight Three" variant="outlined" className="data-value-input" />
              </Grid>
              <Grid item md={6}>
                <TextField id="highlight-4" label="Event Highlight Four" variant="outlined" className="data-value-input" />
              </Grid>
              <Grid item md={6}>
                <TextField id="highlight-5" label="Event Highlight Five" variant="outlined" className="data-value-input" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <span className="data-key">Bring your own?</span> <input type="checkbox"
              onClick="showHideDiv(this.checked, 'byo-box')" /><br />
            <TextField id="byo" label="Bring Your Own ____" variant="outlined" className="data-value-input" />
          </Grid>

          <Grid item xs={12}>
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Event Description"
              multiline
              rows="4"
              defaultValue=""
              variant="outlined"
              fullWidth
              className="textarea"
            />
            <br />
            <br />
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
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Button variant="contained" color="primary">
                Create Event
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Update Event
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Cancel Event
              </Button>
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
        </Grid>
      </div >
    );
  }
}


export default CreateEvent;