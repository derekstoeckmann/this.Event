import React, { useState } from "react";
import { Auth } from "aws-amplify";
import ErrorBanner from "../ErrorBanner/ErrorBanner";
import { Link } from "react-router-dom";

import styles from "./SignInForm.module.css";

import { Grid, Button, Container, TextField } from "@material-ui/core";

const SignInForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badEmail, setBadEmail] = useState(false);

  const isLoggedIn = props.value;
  const isSignedIn = props.signed

  function handleSubmit(e) {
    e.preventDefault();

    if (!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")) {
      setBadPassword(true)
    } else { setBadPassword(false) }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(username)) {
      setBadEmail(true)
    } else { setBadEmail(false) }
    if (!badPassword && !badEmail) {
      setLoading(true)
      Auth.signIn({
        username: username,
        password: password,
      })
        .then(res => {
          isLoggedIn(true)
          isSignedIn(true)
          props.history.push("/")
        })
        .catch(err => {
          setLoading(false)
          setError(err.message)
        })
    }
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <Container maxWidth="lg" className={styles["main-top"]}>
        <form>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            className={styles["main-top-inner"]}
          >
            <Grid item xs={12} className={styles["center"]}>
              <ErrorBanner>
                {error}
              </ErrorBanner>
            </Grid>
            <Grid item xs={12} className={styles["center"]}>
              <span className={styles["small-letters"] + " " + styles["shadow"]}>this.</span><span className={styles["large-letters"] + " " + styles["shadow"]}>E</span><span
                className={styles["small-letters"] + " " + styles["shadow"]}>vent</span><br />
            </Grid>
            <Grid item xs={12} className={styles["center"]}>
              <h1 className={styles["white"] + " " + styles["shadow"]}>Sign In</h1>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              alignContent="center"
              className={styles["textfield-wrapper"]}
            >
              <Grid item xs={11} className={styles["center"]}>
                <TextField
                  required
                  error={badEmail}
                  helperText={badEmail ? "Your username is your email address" : ""}
                  name="username"
                  id="username"
                  label="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  variant="outlined"
                  color="primary"
                  className={styles["data-value-input"]}
                />
              </Grid>
              <Grid item xs={11} className={styles["center"]}>
                <br />
              </Grid>
              <Grid item xs={11} className={styles["center"]}>
                <TextField
                  required
                  error={badPassword}
                  helperText={badPassword ? "Please Enter a valid password" : ""}
                  name="password"
                  type="password"
                  id="password"
                  label="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  variant="outlined"
                  color="primary"
                  className={styles["data-value-input"]}
                />
              </Grid>
            </Grid>
            <Grid item xs={11} className={styles["center"]}>
              <p className={styles["blue"]}>Don't Have an Account Yet? <Link to={"/signup"}>Create Account</Link></p>
            </Grid>
            <Grid item xs={11} className={styles["center"]}>
              <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
                {loading && <img className={styles.loading} alt="submit button" src={require("./refresh.png")} />}
                {!loading && "Submit"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div >
  )
}

export default SignInForm;