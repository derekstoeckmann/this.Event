import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Map from '../components/Map/Map.js';
import DateTime from '../components/DateTime/DateTime.js';
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
          <Grid item md={6}>
            <h1>Create Event</h1>
          </Grid>
          <Grid item md={6}>
            Public&nbsp;
              <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            &nbsp;Semi-Private
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
                <TextField id="location-name" label="Loation" variant="outlined" className="data-value-input" />
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
                  zoom={15}
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
        >
          <Grid item>
            <span className="data-key">Highlights</span> (Up to 5) <input type="checkbox"
              onClick="showHideDiv(this.checked, 'highlight-box')" />
          </Grid>
          <Grid item>
            <div id="highlight-box" className="show-hide">
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <TextField id="highlight-1" label="Event Highlight One" variant="outlined" className="data-value-input" />
                </Grid>
                <Grid item>
                  <TextField id="highlight-2" label="Event Highlight Two" variant="outlined" className="data-value-input" />
                </Grid>
                <Grid item>
                  <TextField id="highlight-3" label="Event Highlight Three" variant="outlined" className="data-value-input" />
                </Grid>
                <Grid item>
                  <TextField id="highlight-4" label="Event Highlight Four" variant="outlined" className="data-value-input" />
                </Grid>
                <Grid item>
                  <TextField id="highlight-5" label="Event Highlight Five" variant="outlined" className="data-value-input" />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item>
            <span className="data-key">Bring your own?</span> <input type="checkbox"
              onClick="showHideDiv(this.checked, 'byo-box')" />
            <div id="byo-box" className="col-lg-6 col-xs-12 data-set-io show-hide">
              <TextField id="byo" label="Bring Your Own ____" variant="outlined" className="data-value-input" />
            </div>
          </Grid>

          <Grid item>
            <span className="data-key">Description</span>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows="4"
              defaultValue="Default Value"
              variant="outlined"
            />
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