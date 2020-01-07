import React, { useState } from "react";

const SignUpForm = () => {
    const [userInfo, getUserInfo] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        id: ""
    })

    function handleChange() {

    }
    return (
        <form>
            <label>First Name</label>
            <input type="text" value={userInfo.firstName}></input>
            <label>Last Name</label>
            <input type="text" value={userInfo.lastName}></input>
            <label>Username</label>
            <input type="text" value={userInfo.username}></input>
            <label>Email</label>
            <input type="text" value={userInfo.email}></input>
            <label>Password</label>
            <input type="password" value={userInfo.password}></input>
            <button>Submit</button>
        </form>
    )
}