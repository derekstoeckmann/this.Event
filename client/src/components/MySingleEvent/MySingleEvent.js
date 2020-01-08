import React from "react";
import Moment from "react-moment";

import Grid from "@material-ui/core/Grid";

import styles from "./MySingleEvent.module.css";

function MySingleEvent(props) {
  const { time, title, description } = props;
  return (
    <>
      {/* If New date display new date else do not render */}
      <Grid item xs={12}>
        <h2><Moment date={time} format="MM/DD/YYYY" /></h2>
      </Grid>
      {/* End IF */}
      <Grid item xs={12} className={styles["main-events-white"]}>
        <Grid container direction="row">
          <Grid item xs={2} style={{ borderRight: "1px solid #ccc", padding: "3px" }}>
            <Moment date={time} format="hh:mm a" /><br />
          </Grid>
          <Grid item xs={10}>
            <Grid container direction="row">
              <Grid item xs={12} style={{ borderBottom: "1px solid #ccc", padding: "5px" }}>
                {title}
              </Grid>
              <Grid item xs={12} style={{ padding: "5px" }}>
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

export default MySingleEvent;
