import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Event from "./pages/Event/Event";
import LandingPage from "./pages/LandingPage/LandingPage";

Amplify.configure(aws_exports);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/createEvent" component={CreateEvent} />
        <Route exact path="/event" component={Event} />
      </Switch>
    </Router>
  );
}

export default App;
