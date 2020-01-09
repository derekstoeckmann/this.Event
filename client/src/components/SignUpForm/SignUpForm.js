import React, { useState } from "react";
import { Auth } from "aws-amplify";
import axios from "axios";
import ErrorBanner from "../ErrorBanner/ErrorBanner";
import styles from "./SignUpForm.module.css";
import { Link } from "react-router-dom";

const SignUpForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [signedup, setSignedUp] = useState("");
    const [userId, setUserId] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!signedup) {
            Auth.signUp({
                username: username,
                password: password,
                attributes: {
                    email: email,
                    phone_number: "+11234561234"
                }
            })
                .then(res => {
                    setError("")
                    setUserId(res.userSub)
                    setSignedUp(true)
                })
                .catch(err => {
                    setError(err.message)
                })
        } else {
            Auth.confirmSignUp(username, confirmationCode)
                .then((res) => {
                    const userData = {
                        firstName,
                        lastName,
                        email
                    }
                    axios.post("/api/users", userData)
                        .then(res => {
                            props.history.push("/login")
                        })
                        .catch(err => {
                            console.log("axios Error")
                            console.log(err)
                            setError("Email May Already Be Registered In Database")
                        })
                })
                .catch(err => {
                    setError(err.message)
                })
        }
    }
    if (signedup) {
        return (
            <div>
                <div className={styles.form} >
                    <ErrorBanner >
                        {error}
                    </ErrorBanner>
                    <h1 className={styles.title}>Confirm Your Account With Email</h1>
                    <form className={styles.formInput}>
                        <label>Username</label>
                        <input className={styles.formInputBox} type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
                        <label>Confirmation Email Code</label>
                        <input className={styles.formInputBox} type="text" name="confirmationCode" value={confirmationCode} onChange={e => setConfirmationCode(e.target.value)}></input>
                        <button className={styles.btn} onClick={handleSubmit}>Submit</button>
                    </form>
                </div >
            </div>
        )
    } else {
        return (
            <div>
                <div className={styles.form}>
                    <ErrorBanner>
                        {error}
                    </ErrorBanner>
                    <h1 className={styles.title}>Sign Up</h1>
                    <form className={styles.formInput}>
                        <label>First Name</label>
                        <input className={styles.formInputBox} type="text" name="firstname" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                        <label>Last Name</label>
                        <input className={styles.formInputBox} type="text" name="lastname" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                        <label>Username</label>
                        <input className={styles.formInputBox} type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
                        <label>Email</label>
                        <input className={styles.formInputBox} type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                        <label>Password</label>
                        <input className={styles.formInputBox} type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        <p>Already Have an Account? <Link to={"/login"}>Sign In</Link></p>
                        <button className={styles.btn} onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpForm;