import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const styles = {
    color: "white",
    fontSize: "32px"
};

function NavBar({ handleLoginClick, currentUser, currentUsername }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('')
    }

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
          })
          .then(() => navigate("/"))
          .then(() => window.location.reload(false))
        }

    return (
        <div className="navbar">
            <div>
                {currentUser ? 
                <>
                <NavLink to="/home" exact className="home-icon">Home</NavLink>
                <NavLink to="/search" exact className="search-icon">Search</NavLink>
                <h1 style={styles}>AirDnD</h1>
                <span onClick={handleLogout} className="logouticon">Logout {currentUser.username}</span>
                </>
                :
                <>
                <span onClick={handleClick} className="loginicon">Sign In</span>
                </>
}
            </div>
        </div>
    );
}

export default NavBar