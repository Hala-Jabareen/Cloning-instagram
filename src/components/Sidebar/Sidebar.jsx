import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import instagramLogo from "./instagram-logo.png";
import MyAv from "./a.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';

import "./Sidebar.css";



function Sidebar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container">
      <nav>
        <MenuList>
          <MenuItem>
            <img src={instagramLogo} alt="instagram" className="im" />
          </MenuItem>
          <MenuItem>
            <Link to="/dashboard" className="link">
              <span className="icon">
                <HomeIcon></HomeIcon>
              </span>
              <span>Home</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/inprogress" className="link">
              <span className="icon">
                <SearchIcon></SearchIcon>
              </span>
              <span>Search</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/explore" className="link">
              <span className="icon">
                <ExploreOutlinedIcon></ExploreOutlinedIcon>
              </span>
              <span>Explore</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/inprogress" className="link">
              <span className="icon">
                <SlideshowIcon></SlideshowIcon>
              </span>
              <span>Reels</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/messages" className="link">
              <span className="icon">
                <ChatIcon></ChatIcon>
              </span>
              <span>Messages</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/inprogress" className="link">
              <span className="icon">
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </span>
              <span>Notifications</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="link" onClick={handleOpen}>
              <span className="icon">
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
              </span>
              <span>Create</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/profile" className="link">
              <span className="icon">
                <img src={MyAv} alt="mine" id="pro" />{" "}
              </span>
              <span>HalaFJ</span>
            </Link>
          </MenuItem>
          <MenuItem id="menu">
            <span className="icon">
              <MenuIcon></MenuIcon>
            </span>
            <span>Menu</span>
          </MenuItem>
        </MenuList>
      </nav>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
          className='box'
        >
          <Typography id="modal" sx={{ mt: 2 }}>
            Create new post
          </Typography>
          <hr />
          <Typography id="describtion" variant="h6" component="h2">
            Description
          </Typography>
         
          <TextField id="outlined-basic"  rows={12}  variant="outlined" multiline/>
          <div className="btns">
            <Button onClick={handleClose} className="madal-btn">Choose image</Button>
          
          </div>
          <div className="btns">
            <Button onClick={handleClose} className="madal-btn">Post</Button>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}

export default Sidebar;
