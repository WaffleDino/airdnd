import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


function Campaigns({currentUser}) {
    const navigate = useNavigate();

    const [newCampaign, setNewCampaign] = useState({
        campaign_name: '',
        edition: '',
        num_of_players: '',
        meetup_day: '',
        meetup_time: '',
        char_level_range: '',
        dm: currentUser.id,
        info: '',
        zipcode: 0 

    })

    function toggleDM (e, currentUser) {
        if (e.target.checked == true) {
            setNewCampaign({
                ...newCampaign,
                [e.target.name]: currentUser.id
            })
        }else{
                    setNewCampaign({
                        ...newCampaign,
                        [e.target.name]: ''
                    })
            }
        }
    

    function handleCampaignSubmit(event) {
        
        event.preventDefault();
        
        fetch("/campaigns", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              name: newCampaign.campaign_name,
              version: newCampaign.edition,
              num_of_players: newCampaign.num_of_players,
              meetup_day: newCampaign.meetup_day,
              meetup_time: newCampaign.meetup_time,
              char_level_range: newCampaign.char_level_range,
              host_id: currentUser.id,
              dm_id: currentUser.id,
              info: newCampaign.info,
              zipcode: newCampaign.zipcode            
                  })  
        })
          navigate('/campaigns')      
    }

    const handleChange = (e) => {
        setNewCampaign({
            ...newCampaign,
            [e.target.name]: e.target.value
        })
        console.log(newCampaign)
        console.log(currentUser)
    }

return(
    <div className="site-body">
        {currentUser ? 
        <>
         <div className="login-form">
                <div className="form-box solid">
                    <form onSubmit={handleCampaignSubmit}>
                   
                        <h1 className="login-text">Add New Campaign</h1>
                        <label>Campaign Name</label><br></br>
                        <input
                            type="text"
                            name="campaign_name"
                            className="login-box"
                            onChange={handleChange}
                            /><br></br>
                        <label>DnD Edition: </label><br></br>
                        <input
                            type="text"
                            defaultValue="example: 5th edition"
                            name="edition"
                            className="login-box"
                            onChange={handleChange}
                            /><br></br>
                            <label>Number of Players</label><br></br>
                        <input
                            type="text"
                            name="num_of_players"
                            className="login-box"
                            onChange={handleChange} 
                            /><br></br>
                        <label>Meetup Day/Date</label><br></br>
                            <input
                            type="text"
                            name="meetup_day"
                            className="login-box"
                            onChange={handleChange}
                            /><br></br>
                        <label>Meetup Time</label><br></br>
                            <input
                            type="text"
                            name="meetup_time"
                            className="login-box"
                            onChange={handleChange}
                            /><br></br>
                        <label>Character Level Range</label><br></br>
                            <input
                            type="text"
                            name="char_level_range"
                            className="login-box"
                            onChange={handleChange}
                            /><br></br>
                        {/* <label>Are you the Dungeon Master?</label><br></br>
                            <input
                            type="checkbox"
                            name="dm"
                            className="login-box"
                            onClick={toggleDM}
                            /><br></br> */}
                        <label>General Information</label><br></br>
                            <input
                            type="text"
                            name="info"
                           
                            className="login-box"
                            onChange={handleChange}
                            /><br></br>
                            
                        <label>Zip Code</label><br></br>
                            <input
                            type="number"
                            name="zipcode"
                            className="login-box"
                            pattern="[0-9]{5}" title="Five digit zip code"
                            onChange={handleChange} 
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
export default Campaigns;