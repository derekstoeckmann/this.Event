import React, { useState } from "react";
import { Auth } from "aws-amplify";

const SignInForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signedIn, getSignedIn] = useState(false);

    const isLoggedIn = props.value;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username)
        console.log(password)
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
                console.log(err)
            })
    }

    if (signedIn) {
        return (
            <h1>You logged in</h1>
        );
    } else {
        return (
            <form>
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default SignInForm;