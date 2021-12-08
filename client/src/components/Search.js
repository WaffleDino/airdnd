import React from "react";

function Search({currentUser}) {

return(
    <div className="site-body">
        {currentUser ? 
        <>
         <div className="login-form">
                <div className="form-box solid">
                    {/* <form onSubmit={handleRegisterSubmit}> */}
                    <form>
                        <h1 className="login-text">Add New Campaign</h1>
                        <label>Campaign Name</label><br></br>
                        <input
                            type="text"
                            name="campaign-name"
                            className="login-box"
                            // onChange={(e) => setUsername(e.target.value)}
                            /><br></br>
                        <label>DnD Edition: </label><br></br>
                        <input
                            type="text"
                            defaultValue="example: 5th edition"
                            name="edition"
                            className="login-box"
                            // onChange={(e) => setPassword(e.target.value)} 
                            /><br></br>
                            <label>Number of Players</label><br></br>
                        <input
                            type="text"
                            name="num-of-players"
                            className="login-box"
                            // onChange={(e) => setPasswordConfirmation(e.target.value)} 
                            /><br></br>
                        <label>Meetup Day/Date</label><br></br>
                            <input
                            type="text"
                            name="meetup-day"
                            className="login-box"
                            // onChange={(e) => setEmail(e.target.value)} 
                            /><br></br>
                        <label>Meetup Time</label><br></br>
                            <input
                            type="text"
                            name="meetup-time"
                            className="login-box"
                            // onChange={(e) => setEmail(e.target.value)} 
                            /><br></br>
                        <label>Character Level Range</label><br></br>
                            <input
                            type="text"
                            name="char-level-range"
                            className="login-box"
                            // onChange={(e) => setEmail(e.target.value)} 
                            /><br></br>
                        <label>General Information</label><br></br>
                            <input
                            type="text"
                            name="meeting-info"
                            className="login-box"
                            // onChange={(e) => setEmail(e.target.value)} 
                            /><br></br>
                            <input type="submit" value="Create Campaign" className="login-btn" /><br></br>
                    </form>
                </div>
            </div>
        </>
        :
        <>
        <h1>Please log in before searching</h1>       
        </>
        }
        </div>
)
}
export default Search;