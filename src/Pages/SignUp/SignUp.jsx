import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Pic1 from "./iPhoneScreen.png";
import Pic2 from "./androidScreen.png";
import logo from "../../components/Sidebar/instagram-logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function SignUp() {
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
          <p className="pg1">
            Sign up to see photos and videos from your friends
          </p>
          <button variant="contained"  className="button">
            <FacebookOutlinedIcon />
            <span> Login with Facebook</span>
          </button>
        </div>
        <p>or</p>
        <div className="signupForm">
          <form action="/dashboard">
            <input type="email" placeholder="Email" required/>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <input type="submit" value='Sign Up' className="button"/>
          </form>
          <p className="pg2">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Police
          </p>
        </div>
        <br />
        <div className="loginI">
          <p>Have an account?</p>
          <Link to='/signin' className="linkk">
          <p><b>Log in</b></p>
  </Link>
          {/* <a href='./signin'>
            <p>Log in</p>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
