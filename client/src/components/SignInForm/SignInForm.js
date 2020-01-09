import React, { useState } from "react";
import { Auth } from "aws-amplify";
import ErrorBanner from "../ErrorBanner/ErrorBanner";
import styles from "../SignUpForm/SignUpForm.module.css";
import { Link } from "react-router-dom"

const SignInForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isLoggedIn = props.value;

    function handleSubmit(e) {
        e.preventDefault();
        Auth.signIn({
            username: email,
            email: email,
            password: password,
        })
            .then(res => {
                isLoggedIn(true)
                props.history.push("/")
            })
            .catch(err => {
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
                    <label>Email</label>
                    <input className={styles.formInputBox} type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input className={styles.formInputBox} type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <p>Don't Have an Account Yet? <Link to={"/signup"}>Create Account</Link></p>
                    <button className={styles.btn} onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm;