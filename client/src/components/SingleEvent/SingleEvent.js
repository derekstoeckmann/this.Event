import React from "react";

import Grid from '@material-ui/core/Grid';

import styles from './SingleEvent.module.css';

function SingleEvent(props) {

  return (
    <>
      <Grid item xs={12} className={styles["main-events-white"]}>
        <Grid
          container
          direction="row"
        >
          <Grid item xs={2}>
            __time__
                      </Grid>
          <Grid item xs={10}>
            <Grid
              container
              direction="row"
            >
              <Grid item xs={12}>
                __event_title__
                      </Grid>
              <Grid item xs={12}>
                __event_part_descript__
                      </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
    </>
  )
}

export default SingleEvent;