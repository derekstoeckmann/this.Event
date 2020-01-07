import React from "react";

import Grid from "@material-ui/core/Grid";

import styles from "./SingleEvent.module.css";

function SingleEvent(props) {
  const { time, title, description } = props;
  return (
    <>
      <Grid item xs={12} className={styles["main-events-white"]}>
        <Grid container direction="row">
          <Grid item xs={2}>
            {time}
          </Grid>
          <Grid item xs={10}>
            <Grid container direction="row">
              <Grid item xs={12}>
                {title}
              </Grid>
              <Grid item xs={12}>
                {description}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
    </>
  );
}

export default SingleEvent;
