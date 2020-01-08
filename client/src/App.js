import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Event from "./pages/Event/Event";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import IsLoggedIn from "./utils/IsLoggedIn"

Amplify.configure(aws_exports);

function App() {

  const [currentUser, getCurrentUser] = useState("");
  const [loggedIn, getLoggedIn] = useState("");

  const isLoggedIn = (value) => {
    getLoggedIn(value)
  }

  Auth.currentUserInfo()
    .then(res => {
      if (res !== null) {
        getCurrentUser(res.id);
        console.log(res)
      } else {
        getCurrentUser(null);
      }
    })
    .catch(err => {
      console.log("error", err)
    })

  if (loggedIn || currentUser) {
    return (
      <IsLoggedIn.Provider value={{ loggedIn, isLoggedIn }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createEvent" component={CreateEvent} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/event" component={Event} />
            <Route component={Home} />
          </Switch>
        </Router>
      </IsLoggedIn.Provider>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" render={(props) => <SignInForm {...props} value={isLoggedIn} />} />
          <Route exact path="/signup" render={(props) => <SignUpForm {...props} value={isLoggedIn} />} />
        </Switch>
      </Router>
    )
  }
}

export default App;
