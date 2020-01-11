import React from "react";

import { Grid, Button, Container } from "@material-ui/core";

import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {

  return (
    <div>
      <br />
      <br />
      <br />
      <Container maxWidth="lg" className={styles["main-top"]}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          className={styles["main-top-inner"]}
        >
          <Grid item xs={12} className={styles["center"]}>
            <span className={styles["small-letters"] + " " + styles["shadow"]}>this.</span><span className={styles["large-letters"] + " " + styles["shadow"]}>E</span><span
              className={styles["small-letters"] + " " + styles["shadow"]}>vent</span><br />
          </Grid>
          <Grid item xs={12} className={styles["center"]}>
            <h1 className={styles["white"] + " " + styles["shadow"]}>Create, Customize, Join, and Manage Your Events</h1>
          </Grid>
          <Grid item>
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </Grid>
          <Grid item xs={1}>
            &nbsp;
          </Grid>
          <Grid item>
            <Link to="/signup">
              <Button variant="contained" color="primary">
                Create an Account
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container maxWidth="lg" className={styles["main"]}>
        <Grid
          container
          direction="row"
          justify="center"
          className={styles["main-inner"]}
        >
          <div className={styles["pageDiv"]}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
              className={styles["tableFullWidth"]}
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid item xs={11} sm={6}>
                  <div className={styles["inline-photo"] + " " + styles["show-on-scroll"] + " " + styles["left"]}>
                    <img className={styles.img} src={require("./img/making-friends.png")} alt="Making Friends" />
                    <h1>Try New Things</h1>
                    <p className={styles["lead"]}>
                      Make New Friends and Socialize With New People
                  </p>
                  </div>
                </Grid>
                <Grid item xs={11} sm={5}>
                  <p className={styles["desc-text"]}>
                    Meet new people and share new experiences with others. Create your own event to share with others or find an event to join. Try something new or do something you love.
                </p>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid item xs={11} sm={6}>
                  <p className={styles["desc-text"]}>
                    Whatever you love to do there's something always something happening . Create or join an event based on your interests and hobbies. Enjoy a social outing while doing the things you love.
                  </p>
                </Grid>
                <Grid item xs={11} sm={5}>
                  <div className={styles["inline-photo"] + " " + styles["show-on-scroll"] + " " + styles["right"]}>
                    <img className={styles.img} src={require("./img/volleyball.png")} alt="Friends playing volleyball" />
                    <h1>Find Your Hobbies</h1>
                    <p className={styles["lead"]}>
                      Find People That Enjoy The Things You Do
                  </p>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid item xs={11} sm={6}>
                  <div className={styles["inline-photo"] + " " + styles["show-on-scroll"] + " " + styles["right"]}>
                    <img className={styles.img} src={require("./img/volleyball.png")} alt="Friends playing volleyball" />
                    <h1>Find Your Hobbies</h1>
                    <p className={styles["lead"]}>
                      Find People That Enjoy The Things You Do
                  </p>
                  </div>
                </Grid>
                <Grid item xs={11} sm={5}>
                  <p className={styles["desc-text"]}>
                    Create an event and customize all the details. You decide who you want to invite and when it happens. Or you can open your event to the community and invite others to join in on the fun. This.Event allows you to choose how your event happens.
                  </p>
                  <br />
                  <br />
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Container >
    </div >
  )
}

export default LandingPage;