import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./Wrapper.module.css"
import SignoutButton from "../SignoutButton/SignoutButton"

const Wrapper = (props) => {
    return (
        <div className="App">
            <header>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item>
                        <Link to="/home"><HomeIcon style={{ color: "#03396C", fontSize: 40 }} /></Link>
                    </Grid>
                    <Grid item>
                        <span className={styles["small-letters"]}>this.</span><span className={styles["large-letters"]}>E</span><span
                            className={styles["small-letters"]}>vent</span>
                    </Grid>
                    <Grid item>
                        <SignoutButton />
                    </Grid>
                </Grid>
            </header>
            {props.children}
            <br />
        </div>
    )
}

export default Wrapper;