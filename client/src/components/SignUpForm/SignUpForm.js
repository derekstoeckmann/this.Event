import React, { useState } from "react";
import { Auth } from "aws-amplify";

const SignUpForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [signedup, setSignedUp] = useState("");

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
                    console.log(res)
                    setSignedUp(true)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            //We'll want to hit the database here with info to create the user and render the home page IDK if the id will be available here tho
            Auth.confirmSignUp(username, confirmationCode)
                .then((res) => {
                    console.log(res)
                    console.log("confirmed sign up")
                    props.history.push("/login")
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    if (signedup) {
        return (
            <form>
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
                <label>Confirmation Code</label>
                <input type="text" name="confirmationCode" value={confirmationCode} onChange={e => setConfirmationCode(e.target.value)}></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        )
    } else {
        return (
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
        )
    }
}

export default SignUpForm;