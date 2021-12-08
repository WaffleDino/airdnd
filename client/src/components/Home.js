import React from "react";
import extraLife from "../images/extra-life.png"


function Home({currentUser}) {
    return (
        <div className="site-body">
            <div><img src={extraLife} alt="extra life"/></div>
            <h1>Home</h1>

        <div>Welcome to your Dungeons and Dragons meetup service, {currentUser.username}. </div>
        
        </div>
        
    )
}
export default Home