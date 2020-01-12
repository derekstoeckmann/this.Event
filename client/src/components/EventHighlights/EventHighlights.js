import React from "react";

import { Grid, TextField } from "@material-ui/core";

import styles from "./EventHighlights.module.css";

function EventHighlights(props) {
  return (
    <>
      <Grid item xs={11}>
        <Grid
          container
          direction="row"
          spacing={3}
        >
          <Grid item md={6}>
            <TextField
              id="highlight-1"
              label="Event Highlight One"
              value={props.highlight1}
              onChange={event => props.setHighlight1(event.target.value)}
              variant="outlined"
              size="small"
              className={styles["data-value-input"]}
            />
          </Grid>
          {props.highlight1 !== "" ? (
            <>
              <Grid item md={6}>
                <TextField
                  id="highlight-2"
                  label="Event Highlight Two"
                  value={props.highlight2}
                  onChange={event => props.setHighlight2(event.target.value)}
                  variant="outlined"
                  size="small"
                  className={styles["data-value-input"]}
                />
              </Grid>
            </>
          ) : props.setHighlight2("")}
          {props.highlight2 !== "" ? (
            <>
              <Grid item md={6}>
                <TextField
                  id="highlight-3"
                  label="Event Highlight Three"
                  value={props.highlight3}
                  onChange={event => props.setHighlight3(event.target.value)}
                  variant="outlined"
                  size="small"
                  className={styles["data-value-input"]}
                />
              </Grid>
            </>
          ) : props.setHighlight3("")}
          {props.highlight3 !== "" ? (
            <>
              <Grid item md={6}>
                <TextField
                  id="highlight-4"
                  label="Event Highlight Four"
                  value={props.highlight4}
                  onChange={event => props.setHighlight4(event.target.value)}
                  variant="outlined"
                  size="small"
                  className={styles["data-value-input"]}
                />
              </Grid>
            </>
          ) : props.setHighlight4("")}
          {props.highlight4 !== "" ? (
            <>
              <Grid item md={6}>
                <TextField
                  id="highlight-5"
                  label="Event Highlight Five"
                  value={props.highlight5}
                  onChange={event => props.setHighlight5(event.target.value)}
                  variant="outlined"
                  size="small"
                  className={styles["data-value-input"]}
                />
              </Grid>
            </>
          ) : props.setHighlight5(null)}
        </Grid>
      </Grid>
    </>
  );
}

export default EventHighlights;
