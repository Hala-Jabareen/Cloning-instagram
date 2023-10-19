import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';


const options = ["Edit", "Delete"];



function Post({post}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;
  return (
    <div className="postcontainer">
      <div className="head">
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <span className="postAv">
              <Avatar alt="a" src={post.avatar} className="av" />
            </span>
          </Grid>
          <Grid item xs={2}>
            <span className="name">{post.name}</span>
          </Grid>
          <Grid item xs={1}>
            <span className="time">{post.time}</span>
          </Grid>
          <Grid item xs={7}>
            <span className="option">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreHorizIcon className="moreIcon" />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                    className="menuItem"
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </span>
          </Grid>
        </Grid>
      </div>

      <div className="mainImg">
        <img src={post.imag} alt="postimg"/>
      </div>
      
      <div className="reaction">
       <Grid container spacing={0}>
        <Grid item xs={1} className="gridicon">
          <FavoriteBorderIcon/>
        </Grid>
        <Grid item xs={1} className="gridicon">
          <ChatBubbleOutlineOutlinedIcon/>
        </Grid>
        <Grid item xs={1} className="gridicon">
          <SendIcon/>
        </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={1} className="gridicon">
          <BookmarkBorderOutlinedIcon/>
        </Grid>
      </Grid> 
      </div>
      
      <div className="likes"></div>

      <div className="body">
<h5>{post.likes} likes</h5>  
<h5>{post.name}</h5>
      <p>{post.describtion}</p>
      </div>
    </div>
  );
}

export default Post;
