import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./Home";

function Landing({ isShowLogin, setCurrentUser, setUsername, setPassword, username, password }) {

    // const navigate = useNavigate();

    

    const handleLoginSubmit = (e) => {
            e.preventDefault();
            fetch("http://localhost:3000/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password}),
                    
            }) 
              .then((r) => r.json())
              .then((user) => setCurrentUser(user));
              
          }

        //   const routeChange = (e) => {
        //     e.preventDefault();
        //     router.push('/register');
        //   }

    return (
        
            <div className="login-form">
                <div className="form-box solid">
                    <form onSubmit={handleLoginSubmit}>
                        <h1 className="login-text">Sign In</h1>
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
                            <input type="submit" value="LOGIN" className="login-btn" />
                    </form>
                    <Router>
                    <NavLink to="/register" className="register-btn">Register</NavLink>
                    </Router>
                </div>
            </div>
        
    );
}
export default Landing