import React from "react";
import Moment from "react-moment";

import Grid from "@material-ui/core/Grid";

import styles from "./SingleEvent.module.css";

function SingleEvent(props) {
  const { time, title, shortDescription } = props;
  return (
    <>
      <Grid item xs={12} className={styles["main-events-white"]}>
        <Grid container direction="row">
          <Grid
            item
            xs={2}
            style={{ borderRight: "1px solid #ccc", padding: "3px" }}
          >
            <Moment date={time} format="hh:mm a" />
            <br />
          </Grid>
          <Grid item xs={10}>
            <Grid container direction="row">
              <Grid
                item
                xs={12}
                style={{ borderBottom: "1px solid #ccc", padding: "5px" }}
              >
                {title}
              </Grid>
              <Grid item xs={12} style={{ padding: "5px" }}>
                {shortDescription}
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
