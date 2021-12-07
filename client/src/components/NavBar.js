import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ handleLoginClick }) {

    const handleClick = () => {
        handleLoginClick()
    }

    return (
        <div className="navbar">
            <div>
                {/* <NavLink to="/home" exact className="home-icon">Home</NavLink>
                <NavLink to="/search" exact className="search-icon">Search</NavLink> */}
                <span onClick={handleClick} className="loginicon">Sign In</span>
            </div>
        </div>
    );
}

export default NavBar