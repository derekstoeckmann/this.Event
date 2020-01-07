import React, { useState } from "react";

const SignInForm = () => {
    const [userInfo, getUserInfo] = useState({
        username: "",
        id: ""
    });

    function handleChange() {
        getUserInfo({
            [event.target.value]: event.target.name
        })
    }
    return (
        <form>
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" value={userInfo.username} onChange={handleChange}></input>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={userInfo.password} onChange={handleChange}></input>
            <button>Submit</button>
        </form>
    )
}

export default SignInForm;