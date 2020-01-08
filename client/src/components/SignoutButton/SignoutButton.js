import React, { useContext } from "react";
import { Auth } from "aws-amplify";
import styles from "./SignoutButton.module.css";
import { Link } from "react-router-dom";
import IsLoggedIn from "../../utils/IsLoggedIn";

const SignoutButton = (props) => {
    const { isLoggedIn } = useContext(IsLoggedIn)
    const signOut = () => {
        Auth.signOut()
        isLoggedIn(false)
    }
    return (
        <Link to="/">
            <button className={styles["btn"]} onClick={signOut}><span className={styles["btn-style"]}>Sign Out</span></button>
        </Link>
    )
}

export default SignoutButton;