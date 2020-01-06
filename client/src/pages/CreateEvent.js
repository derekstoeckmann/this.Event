import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Map from '../components/Map/Map.js';
import DateTime from '../components/DateTime/DateTime.js';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './styles.css';


const CreateEvent = (props) => {

  const [selectedDate, handleDateChange] = useState(new Date());

  // showHideDiv({ checked, myDivId }) {
  //   console.log(checked)
  // const myDisplay = document.getElementById(myDivId);
  // if (checked) {
  //   myDisplay.style.display = "inline";
  // } else {
  //   myDisplay.style.display = "none";
  // }
  // };

  return (
    <div className="pageDiv">
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
            <FormControlLabel
            control={
              <Switch
                checked="true"
                value="checkedB"
                color="primary"
              />
            }
          />
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
              <TextField id="event-title" label="Event Title" variant="outlined" size="small" className="data-value-input" />
            </Grid>
            <Grid item>
              <TextField id="location-name" label="Location" variant="outlined" size="small" className="data-value-input" />
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
                size="small"
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
                size="small"
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
                size="small"
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
                size="small"
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
              <DateTime selectedDate={selectedDate} handleDateChange={handleDateChange} />
            </Grid>
            <Grid item>
              <Map
                google={props.google}
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
          />
          {/* onClick={this.showHideDiv(this.checked, 'highlight-box')} /> */}
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
              <TextField id="highlight-1" label="Event Highlight One" variant="outlined" size="small" className="data-value-input" />
            </Grid>
            <Grid item md={6}>
              <TextField id="highlight-2" label="Event Highlight Two" variant="outlined" size="small" className="data-value-input" />
            </Grid>
            <Grid item md={6}>
              <TextField id="highlight-3" label="Event Highlight Three" variant="outlined" size="small" className="data-value-input" />
            </Grid>
            <Grid item md={6}>
              <TextField id="highlight-4" label="Event Highlight Four" variant="outlined" size="small" className="data-value-input" />
            </Grid>
            <Grid item md={6}>
              <TextField id="highlight-5" label="Event Highlight Five" variant="outlined" size="small" className="data-value-input" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <span className="data-key">Bring your own?</span> <input type="checkbox"
          /><br /><br />
          {/* onClick={this.showHideDiv(this.checked, 'byo-box')} /><br /><br /> */}
          <TextField id="byo" label="Bring Your Own ____" variant="outlined" size="small" className="data-value-input" />
        </Grid>

        <Grid item xs={12} className="tableFullWidth">
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Event Description"
            multiline
            fullWidth
            rows="7"
            defaultValue=""
            variant="outlined"
            size="small"
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


export default CreateEvent;