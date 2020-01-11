import React, { useState } from "react";
import { Auth } from "aws-amplify";
import ErrorBanner from "../ErrorBanner/ErrorBanner";
import styles from "../SignUpForm/SignUpForm.module.css";
import { Link } from "react-router-dom"

const SignInForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const isLoggedIn = props.value;
    const isSignedIn = props.signed

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        Auth.signIn({
            username: username,
            password: password,
        })
            .then(res => {
                isLoggedIn(true)
                isSignedIn(true)
                props.history.push("/")
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }
    return (
        <div>
            <div className={styles.form}>
                <ErrorBanner>
                    {error}
                </ErrorBanner>
                <h1 className={styles.title}>Sign In</h1>
                <form className={styles.formInput}>
                    <label>Username</label>
                    <input className={styles.formInputBox} type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
                    <label>Password</label>
                    <input className={styles.formInputBox} type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <p>Don't Have an Account Yet? <Link to={"/signup"}>Create Account</Link></p>
                    <button className={styles.btn} onClick={handleSubmit} disabled={loading}>
                        {loading && <img className={styles.loading} src={require("./refresh.png")} />}
                        {!loading && "Submit"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm;