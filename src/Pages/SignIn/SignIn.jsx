import React from 'react'
import "./SignIn.css";
import { Link } from "react-router-dom";
import Pic1 from "./iPhoneScreen.png";
import Pic2 from "./androidScreen.png";
import logo from "../../components/Sidebar/instagram-logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function SignIn() {
  return (
    <div className="signupContainer">
      <div className="bgPh">
        <span className="ph1">
          <img src={Pic2} alt="ip" className="img1" />
          <img src={Pic1} alt="an" className="img2" />
        </span>
      </div>
      <div className="formcontainer">
        <div className="loginF">
          <img src={logo} alt="instalogo" className="logo" />
        
         <div className="signupForm">
          <form action="/dashboard">
            <input type="email" placeholder="Email"  required/>
            <input type="password" placeholder="Password" required/>
            <input type="submit" value='Login' className="button"/>
          </form>
          <p>or</p>
        <button variant="contained"  className="button">
            <FacebookOutlinedIcon />
            <span> Login with Facebook</span>
          </button>
          <p>Forgot Password?</p>
        </div>
        
        </div>
        <br />
        <div className="loginI">
          <p>Don't have an account?</p>
          <Link to='/' className='linkk'>
          <p><b>Sign Up</b></p> </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn