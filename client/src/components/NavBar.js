import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ handleLoginClick, currentUsername }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('')
    }

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
          }).then(() => window.location.reload(false));
        }

    return (
        <div className="navbar">
            <div>
                <NavLink to="/home" exact className="home-icon">Home</NavLink>
                <NavLink to="/search" exact className="search-icon">Search</NavLink>
                <span onClick={handleClick} className="loginicon">Sign In</span>
                <span onClick={handleLogout} className="logouticon">Logout as {currentUsername}</span>
            </div>
        </div>
    );
}

export default NavBar