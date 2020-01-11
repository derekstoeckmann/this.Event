import React, { useState } from "react";
import { Auth } from "aws-amplify";
import axios from "axios";
import ErrorBanner from "../ErrorBanner/ErrorBanner";
import styles from "./SignUpForm.module.css";
import { Link } from "react-router-dom";

import { Grid, Button, Container, TextField } from "@material-ui/core";

const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [signedup, setSignedUp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [validatingForm, setValidatingForm] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badEmail, setBadEmail] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")) {
      setBadPassword(true)
    } else { setBadPassword(false) }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setBadEmail(true)
    } else { setBadEmail(false) }
    { console.log(lastName, firstName) }
    if (signedup && (!lastName || lastName === " " || !firstName || firstName === " ")) {
      setValidatingForm(true)
    } else { setValidatingForm(false) }
    if (!signedup && (!confirmationCode || confirmationCode === " ")) {
      setValidatingForm(true)
    } else { setValidatingForm(false) }

    if (!validatingForm && !badPassword && !badEmail) {
      if (!signedup) {
        Auth.signUp({
          username: email,
          password: password,
          attributes: {
            phone_number: "+11234561234"
          }
        })
          .then(res => {
            setError("")
            setSignedUp(true)
          })
          .catch(err => {
            setError(err.message)
          })
      } else {
        Auth.confirmSignUp(email, confirmationCode)
          .then((res) => {
            const userData = {
              firstName,
              lastName,
              email
            }
            axios.post("/api/users", userData)
              .then(res => {
                props.history.push("/login")
              })
              .catch(err => {
                console.log("axios Error")
                console.log(err)
                setError("Email May Already Be Registered In Database")
              })
          })
          .catch(err => {
            setError(err.message)
          })
      }
    }
  }

  if (signedup) {
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
                <h1 className={styles["white"] + " " + styles["shadow"]}>Sign UP</h1>
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
                    helperText={badEmail ? "Please Enter a valid email address" : ""}
                    name="email"
                    id="email"
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    error={(!confirmationCode || confirmationCode === " ") && validatingForm}
                    helperText={(!confirmationCode || confirmationCode === " ") && validatingForm ? "Please enter a first name" : ""}
                    name="confirmationCode"
                    id="confirmationCode"
                    label="Confirmation Email Code"
                    value={confirmationCode}
                    onChange={e => setConfirmationCode(e.target.value)}
                    variant="outlined"
                    color="primary"
                    className={styles["data-value-input"]}
                  />
                </Grid>
              </Grid>
              <Grid item xs={11} className={styles["center"]}>
                <p className={styles["blue"]}>Already Have an Account? <Link to={"/login"}>Sign In</Link></p>
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
      </div>
    )
  } else {
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
                <h1 className={styles["white"] + " " + styles["shadow"]}>Sign UP</h1>
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
                    error={(!firstName || firstName === " ") && validatingForm}
                    helperText={(!firstName || firstName === " ") && validatingForm ? "Please enter a first name" : ""}
                    name="firstname"
                    id="firstname"
                    label="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
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
                    error={(!lastName || lastName === " ") && validatingForm}
                    helperText={(!lastName || lastName === " ") && validatingForm ? "Please enter a last name" : ""}
                    name="lastname"
                    id="lastname"
                    label="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
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
                    error={badEmail}
                    helperText={badEmail ? "Please Enter a valid email address" : ""}
                    name="email"
                    id="email"
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                  /><br />
                  <br />
                  <span className={styles["red"]}>The password must contain at least 1 lowercase alphabetical character,<br />
                    at least 1 uppercase alphabetical character,<br />
                    at least 1 numeric character,<br />
                    at least one special character,<br />
                    and must be eight characters or longer</span>
                </Grid>
              </Grid>
              <Grid item xs={11} className={styles["center"]}>
                <p className={styles["blue"]}>Already Have an Account? <Link to={"/login"}>Sign In</Link></p>
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
      </div>
    )
  }
}

export default SignUpForm;