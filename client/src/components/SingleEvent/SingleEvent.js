import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import styles from "./SingleEvent.module.css";

function SingleEvent(props) {
  const { _id, time, title, shortDescription } = props;
  return (
    <>
      <Grid item>
        <span className={styles["data-key"]}>{<Moment date={time} format="MM/DD/YYYY" />}</span>
      </Grid>
      <Link to={`/event/${_id}`}>
        <Grid item xs={12} className={styles["main-events-white"]}>
          <Grid container direction="row">
            <Grid
              item
              xs={3} sm={2}
              style={{ borderRight: "1px solid #ccc", padding: "3px" }}
            >
              <Moment date={time} format="hh:mm a" />
              <br />
            </Grid>
            <Grid item xs={9} sm={10}>
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
      </Link>
      <br />
    </>
  );
}

export default SingleEvent;
