import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";
import Campaigns from "./Campaigns";
import { NavLink, useNavigate } from "react-router-dom";

function CampaignLanding () {
    const [allCampaigns, setAllCampaigns] = useState([])
    const [search, setSearch] = useState("")

    let result = [];

const navigate = useNavigate();

const handleAdd = () => {
    navigate('/addcampaign')
}

useEffect(() => {
    fetch('/campaigns')
    .then(r => r.json())
    // .then(json => console.log(json))
    .then(json => setAllCampaigns(json))
}, [])
const filteredCampaigns = [];

const filterCampaign = !!allCampaigns ? allCampaigns.filter(each => {
    if (each.zipcode.toLowerCase().includes(search.toLocaleLowerCase())) {
        return filteredCampaigns.push(each);
    }}) : null;

const campaignsToDisplay = filteredCampaigns.map(
    (each) => {
        return(
            <div className="container">
                    <div className="card">
                    <h2>Campaign: {each.name}</h2>
                    <br></br>
                    <p>Players: {each.num_of_players}</p>
                    
                    <p>Level Range: {each.char_level_range}</p>
                    <br></br>
                    <h3>When?</h3>
                        
                            <p>Meeting Day: {each.meetup_day}</p>
                            <p>Meeting Time: {each.meetup_time}</p>
                        
                    
                    <h3> Zipcode: {each.zipcode}</h3>
                    
                    <br></br>
                        <h3>Meeting Info:</h3>
                        <p>{each.info}</p>
                    
                    </div>
                </div>
        )
    }
)


// const renderCampaigns = () => {
//     console.log()
//     if (!!allCampaigns) {
//         return allCampaigns.map((each) => {
//             return (
//                 <div className="container">
//                     <div className="card">
//                     <h2>Campaign: {each.name}</h2>
//                     <br></br>
//                     <p>Players: {each.num_of_players}</p>
                    
//                     <p>Level Range: {each.char_level_range}</p>
//                     <br></br>
//                     <h3>When?</h3>
                        
//                             <p>Meeting Day: {each.meetup_day}</p>
//                             <p>Meeting Time: {each.meetup_time}</p>
                        
                    
//                     <h3> Zipcode: {each.zipcode}</h3>
                    
//                     <br></br>
//                         <h3>Meeting Info:</h3>
//                         <p>{each.info}</p>
                    
//                     </div>
//                 </div>
//             )
//         })
// //     } else {
// //         result = allCampaigns.filter((data) => {
// //             return (data.zipcode.search(search) != -1)
// //         // allCampaigns.filter(each => each.zipcode.includes({search})).map(filteredCampaign => <li>{filteredCampaign.zipcode}</li>)
// //     }
// //         )
//     }
// }
    


// const handleSearch = (e) => {
//     console.log(e.target.value)
//     setSearch(e.target.value)
//     filterRender()
    
//     // allCampaigns.filter(each => each.includes({search})).map(filteredCampaign => <li>{filteredCampaign.zipcode}</li>)
    
// }

// const filterRender = () => {
//     console.log(search)
// }

const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
 



    return(
        <div className="site-body">
            <br></br>
            
            <button className="add-icon" onClick={handleAdd}>Add New Campaign</button>
            
            {campaignsToDisplay}
           
            <br></br>
            <br></br>
            <br></br>
    <input 
     style={BarStyling}
     key="random1"
     maxLength={5}
     pattern="[0-9]{5}"
     placeholder={"filter by zip code"}
     onChange={(e) => setSearch(e.target.value)}
    />
        </div>
    )
}

export default CampaignLanding