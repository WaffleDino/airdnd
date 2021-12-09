import "./style.css";
import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Campaigns from "./components/Campaigns";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Register from "./components/Register";
import CampaignLanding from "./components/CampaignLanding";

function App() {

  const [isShowLogin, setIsShowLogin] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")  
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [currentUser, setCurrentUser] = useState('')
  const currentUsername = currentUser.username
  const [email, setEmail] = useState("") 
  const [zip, setZip] = useState("")  
  const [dm, setDm] = useState(false)  

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }

  useEffect(()=> {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  

  return (
    <div className="App">
      {/* <div style={{backgroundImage: `url("image/d20.jpg")`}}></div> */}
      <div>
      <Router>
      <NavBar handleLoginClick={handleLoginClick} currentUser={currentUser} currentUsername={currentUsername}/>

      <Routes>
  
        <Route path="/addcampaign" element={<Campaigns currentUser={currentUser}/>}>
          
        </Route>

        <Route path="/campaigns" element={<CampaignLanding currentUser={currentUser}/>}>
          
        </Route>
        <Route path="/" element={<Landing isShowLogin={isShowLogin} setCurrentUser={setCurrentUser} setPassword={setPassword} password={password} setUsername={setUsername} username={username} />}>

        </Route>

        <Route path="/register" element={<Register isShowLogin={isShowLogin} setCurrentUser={setCurrentUser} setPassword={setPassword} password={password} setUsername={setUsername} username={username} setEmail={setEmail} email={email} setZip={setZip} zip={zip} setDm={setDm} dm={dm} setPasswordConfirmation={setPasswordConfirmation} passwordConfirmation={passwordConfirmation}/>}>

        </Route>

        <Route path="/home" element={<Home currentUser={currentUser}/>}>

        </Route>
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
