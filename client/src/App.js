import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Main from './pages/Main';
import CreateEvent from './pages/CreateEvent';
import Event from './pages/Event';

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
          <Main />
          <CreateEvent />
          <Event />
        </Grid>
      </Container>
      <br />
    </div>
  );
}

export default App;
