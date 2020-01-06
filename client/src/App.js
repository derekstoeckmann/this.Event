import React from 'react';
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CreateEvent from './pages/CreateEvent';

Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
      <header>
        <span className="small-letters">this.</span><span className="large-letters">E</span><span
          className="small-letters">vent</span>
      </header>
      <Container maxWidth="lg" className="main">
        <Grid
          container
          direction="row"
          justify="center"
          className="main-inner"
        >
          <CreateEvent />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
