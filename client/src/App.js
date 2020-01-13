import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amplify, { Auth } from "aws-amplify";
import axios from "axios";
import aws_exports from "./aws-exports";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Event from "./pages/Event/Event";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import IsLoggedIn from "./utils/IsLoggedIn";
import CurrentUserEmail from "./utils/CurrentUserEmail";

Amplify.configure(aws_exports);

function App() {
  const [currentUserData, setCurrentUserData] = useState();
  const [loggedIn, getLoggedIn] = useState("");
  const [signedIn, getSignedIn] = useState(false);

  const isLoggedIn = value => {
    getLoggedIn(value);
  };
  const isSignedIn = value => {
    getSignedIn(value);
  };

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(res => {
        getLoggedIn(true);
        const email = res.attributes.email;
        const jwt = res.signInUserSession.idToken.jwtToken;

        axios.interceptors.request.use(
          function(config) {
            config.headers.authorization = jwt;
            return config;
          },
          function(error) {
            return Promise.reject(error);
          }
        );

        axios
          .post("/auth/validate", { jwt })
          .then(res => {
            axios
              .get(`/api/users?email=${email}`)
              .then(response => {
                setCurrentUserData({ ...response.data.data[0] });
              })
              .catch(err => console.log(err));
          })
          .catch(err => {
            console.log("JWT" + err);
          });
      })
      .catch(err => {
        getLoggedIn(false);
        console.log(err);
      });
  }, [signedIn]);

  if (loggedIn) {
    return (
      <CurrentUserEmail.Provider value={{ currentUserData }}>
        <IsLoggedIn.Provider value={{ loggedIn, isLoggedIn }}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/createEvent" component={CreateEvent} />
              <Route
                exact
                path="/createEvent/:eventId"
                component={CreateEvent}
              />
              <Route exact path="/search" component={Search} />
              <Route exact path="/event/:eventId" component={Event} />
              <Route component={Home} />
            </Switch>
          </Router>
        </IsLoggedIn.Provider>
      </CurrentUserEmail.Provider>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/login"
            render={props => (
              <SignInForm {...props} value={isLoggedIn} signed={isSignedIn} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => <SignUpForm {...props} value={isLoggedIn} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
