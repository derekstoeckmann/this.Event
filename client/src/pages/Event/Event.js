import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles.css';

const Event = () => {
    return (
        <Wrapper>
            <Container maxWidth="lg" className="main">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    className="main-inner"
                >
                    <div className="pageDiv">
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item md={5}>
                                <h1>Event Name</h1>
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id="eventUrl"
                                    label="Sharable URL"
                                    defaultValue=""
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="outlined"
                                    size="small"
                                    className="data-value-input"
                                />
                                <br />
                                <br />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item xs={12} sm={12} md={6}>
                                <Grid
                                    container
                                    spacing={3}
                                    direction="column"
                                    justify="space-around"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <span class="data-key">event_title</span>
                                    </Grid>
                                    <Grid item>
                                        <span class="data-key">location_name</span>
                                    </Grid>
                                    <Grid item>
                                        <span class="data-key">event_address</span>
                                    </Grid>
                                    <Grid item>
                                        <span class="data-key">event_city</span>
                                    </Grid>
                                    <Grid item>
                                        <span class="data-key">event_state</span>
                                    </Grid>
                                    <Grid item>
                                        <span class="data-key">event_zip</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <div>
                                    <img className="map" alt="google map" src="https://maps.googleapis.com/maps/api/staticmap?center=33.4484,-112.0740&markers=33.4484,-112.0740&size=350x350&style=feature:road.highway%7Celement:geometry%7Cvisibility:simplified%7Ccolor:0xc280e9&style=feature:transit.line%7Cvisibility:simplified%7Ccolor:0xbababa&style=feature:road.highway%7Celement:labels.text.stroke%7Cvisibility:on%7Ccolor:0xb06eba&style=feature:road.highway%7Celement:labels.text.fill%7Cvisibility:on%7Ccolor:0xffffff&key=AIzaSyAViYGK-sxbsRNlv6rZ1a4Ze_h4BaZXi1M" />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <br />
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item xs={11}>
                                <span className="data-key">Highlights</span>
                            </Grid>
                            <Grid item xs={11}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="left"
                                    alignItems="left"
                                    spacing={1}
                                >
                                    <Grid item xs={12} sm={6}>
                                        <li>Event Highlight One</li>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <li>Event Highlight Two</li>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <li>Event Highlight Three</li>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <li>Event Highlight Four</li>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <li>Event Highlight Five</li>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={11}>
                                <hr />
                                <br />
                                <span className="data-key">Description</span>
                            </Grid>
                            <Grid item xs={11}>
                                description_text<br />
                                <br />
                                <hr />
                            </Grid>

                            <Grid item xs={11} md={5}>
                                <span className="data-key">Bring your own item_to_bring</span>
                            </Grid>
                            <Grid item xs={11} md={6}>
                                <TextField id="my_byo_item" label="The Item You Are Bringing" variant="outlined" size="small" className="data-value-input" />
                            </Grid>
                            <Grid item xs={11}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="left"
                                    alignItems="left"
                                    spacing={1}
                                >
                                    <Grid item xs={12} sm={6} md={4}>
                                        <li>Bill Inkman - Potato Salad</li>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <li>Steve Smith - Jello</li>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <li>Jill Wagner - Meatloaf</li>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <li>Liezl Neal - Chicken Adobo</li>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <li>Mike Milton - Potato Chips</li>
                                    </Grid>
                                    <br />
                                    <br />
                                    <br />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={4}
                            >
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Attend Event
              </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Update Event
              </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary">
                                        No Longer Attending
              </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <br />
                            <br />
                            <br />
                            <br />
                        </Grid>
                    </div >
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Event;