import React, { useState } from "react";
import { Auth } from "aws-amplify";


const SignUpForm = () => {
    const [userInfo, getUserInfo] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        phone_number: "",
        id: "",
        signedup: false
    });

    function handleChange() {
        getUserInfo({
            [event.target.value]: event.target.name
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        Auth.signUp({
            username: userInfo.username,
            password: userInfo.password,
            attributes: {
                email: userInfo.email,
                phone_number: userInfo.phone_number
            }
        })
            .then()
    }

    return (
        <form>
            <label>First Name</label>
            <input type="text" name="firstname" placeholder="First Name" value={userInfo.firstName} onChange={handleChange}></input>
            <label>Last Name</label>
            <input type="text" name="lastname" placeholder="Last Name" value={userInfo.lastName} onChange={handleChange}></input>
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" value={userInfo.username} onChange={handleChange}></input>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" value={userInfo.email} onChange={handleChange}></input>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={userInfo.password} onChange={handleChange}></input>
            <button onClick={() => handleSubmit}>Submit</button>
        </form>
    )
}