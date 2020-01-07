import React, { useState } from "react";

const SignInForm = () => {

    return (
        <form>
            <label>Username</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="password"></input>
            <button>Sign In</button>
        </form>
    )
}

export default SignInForm;