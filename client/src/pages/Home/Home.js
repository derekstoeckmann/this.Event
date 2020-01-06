import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadiusSelect from '../../components/RadiusSelect';
import { Link } from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
    return (
        <Wrapper>
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
                            alignItems="top"
                            spacing={4}
                            className={styles["tableFullWidth"]}
                        >
                            <Grid item md={6}>
                                <h1>Your Events Today</h1>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="top"
                                    spacing={2}
                                    className={styles["main-events"]}
                                >
                                    <Grid item xs={12}>
                                        <h2>current_date</h2>
                                    </Grid>

                                    <Grid item xs={12} className={styles["main-events-white"]}>
                                        <Grid
                                            container
                                            direction="row"
                                        >
                                            <Grid item xs={2}>
                                                10:30 pm
                  </Grid>
                                            <Grid item xs={10}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                >
                                                    <Grid item xs={12}>
                                                        Event Title
                      </Grid>
                                                    <Grid item xs={12}>
                                                        Event partial description
                      </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <hr />

                                    <Grid item xs={12} className={styles["main-events-white"]}>
                                        <Grid
                                            container
                                            direction="row"
                                        >
                                            <Grid item xs={2}>
                                                10:30 pm
                  </Grid>
                                            <Grid item xs={10}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                >
                                                    <Grid item xs={12}>
                                                        Event Title
                      </Grid>
                                                    <Grid item xs={12}>
                                                        Event partial description
                      </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <hr />

                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <Link to="/createEvent">
                                        <Button variant="contained" color="primary">
                                            Create New Event
                                    </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid item md={6}>
                                <h1>Search Upcoming Events</h1>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Grid item xs={6}>
                                        <TextField id="search-zip" label="Zipcode" variant="outlined" size="small" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <RadiusSelect />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div >
                </Grid>
            </Container>
        </Wrapper >
    )
}

export default Home;