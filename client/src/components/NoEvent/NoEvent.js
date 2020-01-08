import React from "react";
import Moment from "react-moment";

import Grid from "@material-ui/core/Grid";

import styles from "./NoEvent.module.css";

function NoEvent() {
  return (
    <>
      <Grid item xs={12} className={styles["main-events-white"]}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <h1>No Events to Display</h1>
          </Grid>
        </Grid>
      </Grid>
      <br />
    </>
  );
}

export default NoEvent;
