import React, { useState } from "react";
import { Auth } from "aws-amplify";
import ErrorBanner from "../ErrorBanner/ErrorBanner";
import styles from "./SignInForm.module.css"

const SignInForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isLoggedIn = props.value;

    function handleSubmit(e) {
        e.preventDefault();
        Auth.signIn({
            username: username,
            password: password,
        })
            .then(res => {
                console.log("signed in" + res)
                isLoggedIn(true)
                props.history.push("/")
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <div className={styles.form}>
            <ErrorBanner>
                {error}
            </ErrorBanner>
            <form>
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SignInForm;