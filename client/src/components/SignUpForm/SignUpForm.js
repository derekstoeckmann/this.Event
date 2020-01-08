import React, { useState } from "react";
import { Auth } from "aws-amplify";
import axios from "axios";
import ErrorBanner from "../ErrorBanner/ErrorBanner"
import styles from "./SignUpForm.module.css"

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
                })
                .catch(err => {
                    setError(err.message)
                })
        }
    }
    if (signedup) {
        return (
            <div className={styles['form']} >
                <ErrorBanner>
                    {error}
                </ErrorBanner>
                <form>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
                    <label>Confirmation Code</label>
                    <input type="text" name="confirmationCode" value={confirmationCode} onChange={e => setConfirmationCode(e.target.value)}></input>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div >
        )
    } else {
        return (
            <div className={styles['form']}>
                <ErrorBanner>
                    {error}
                </ErrorBanner>
                <form>
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm;