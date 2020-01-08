import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import styles from "./Wrapper.module.css"
import SignoutButton from "../SignoutButton/SignoutButton"

const Wrapper = (props) => {
    return (
        <div className="App">
            <header>
                <Link to="/home"><HomeIcon style={{ color: "#03396C", fontSize: 40 }} /></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles["small-letters"]}>this.</span><span className={styles["large-letters"]}>E</span><span
                    className={styles["small-letters"]}>vent</span>
                <SignoutButton />
            </header>
            {props.children}
            <br />
        </div>
    )
}

export default Wrapper;