import React from "react";
import {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register({ isShowLogin, setCurrentUser, setUsername, setPassword, username, password, email, setEmail, dm, setDm, zip, setZip, setPasswordConfirmation, passwordConfirmation }) {
    const navigate = useNavigate();
    // const [newUser, setNewUser] = useState({
    //     username: '', 
    //     password: '',
    //     password_confirmation: '',  
    //     email:'',
    //     zip:'',
    //    })

    function handleRegisterSubmit(event) {
    event.preventDefault();
    console.log(event, username,
        password,
        email,
        zip,)
    fetch("/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username,
          password,
          passwordConfirmation,
          email,
          zip,
              })  
    })
    .then(response => {
        if(response.created) {
            response.json().then((userData) => setCurrentUser(userData))
        }
    })
    navigate('/')
}

    return (
        <div className="login-form">
                <div className="form-box solid">
                    <form onSubmit={handleRegisterSubmit}>
                        <h1 className="login-text">Register</h1>
                        <label>Username</label><br></br>
                        <input
                            type="text"
                            name="username"
                            className="login-box"
                            onChange={(e) => setUsername(e.target.value)}
                            /><br></br>
                        <label>Password</label><br></br>
                        <input
                            type="password"
                            name="password"
                            className="login-box"
                            onChange={(e) => setPassword(e.target.value)} 
                            /><br></br>
                            <label>Confirm Password</label><br></br>
                        <input
                            type="password"
                            name="password_confirmation"
                            className="login-box"
                            onChange={(e) => setPasswordConfirmation(e.target.value)} 
                            /><br></br>
                        <label>Email</label><br></br>
                            <input
                            type="email"
                            name="email"
                            className="login-box"
                            onChange={(e) => setEmail(e.target.value)} 
                            /><br></br>
                        <label>Zip Code</label><br></br>
                            <input
                            type="text" name="zipcode" pattern="[0-9]{5}" title="Five digit zip code"
                            onChange={(e) => setZip(e.target.value)} 
                            /><br></br>
                            <input type="submit" value="Sign Up" className="login-btn" /><br></br>
                    </form>
                </div>
            </div>
    )
}

export default Register 