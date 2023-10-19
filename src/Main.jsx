import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'
import Profile from './Pages/Profile/Profile'
import Messages from './Pages/Messages/Messages'
import Explore from './Pages/Explore/Explore'
import InProgress from './Pages/InProgress/InProgress'
import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import "./Main.css"




function Main() {
  return (
  <Router>
    <div>
      
          <Routes>
            <Route path="/dashboard" element={<HomePage/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/inprogress" element={<InProgress/>} />
            <Route path="/" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
          </Routes>
      </div>  
      </Router>
    
  );
}

export default Main;
