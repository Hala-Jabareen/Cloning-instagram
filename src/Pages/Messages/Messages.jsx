import React from "react";
import "./Messages.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import Mess from "./messengar-logo.png";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import av1 from "../HomePage/StoriesAvatars/driver.png";
import av8 from "../HomePage/Avatars/cock-man.png";
import av11 from "../HomePage/Avatars/shop-assistant.png";
import av12 from "../HomePage/Avatars/singer.png";
import Badge from '@mui/material/Badge';


function Messages() {
  return (
    <div className="cont">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={2}>
          <div className="direct">
            <span className="name">
              <h4>HalaFJ</h4>
            </span>
            <span className="meicon">
              <EditNoteIcon />
            </span>
          </div>
          <hr />
          <div>
            <MenuList>
              <MenuItem className="item">
                <div className="direct2">
                  <p className="mess">Messages</p>
                  <p className="req">Request</p>
                </div>
              </MenuItem>
              <MenuItem className="item">
                <span>
                  <img src={av1} alt="hala" className="otherimg" />
                </span>
                <span>
                  <h5>
                    Yazeed <br /> <span className="op">Hello .12s</span>{" "}
                  </h5>
                </span>
                <span></span>
              </MenuItem>
              <MenuItem className="item">
                <span>
                  <img src={av11} alt="hala" className="otherimg" />
                </span>
                <span>
                  <h5>
                    Yara95 <br /> <span className="op">Where are you .3m</span>
                  </h5>
                </span>
                <span></span>
              </MenuItem>
              <MenuItem className="item">
                <span>
                  <img src={av12} alt="hala" className="otherimg" />
                </span>
                <span>
                  <h5>
                    Maisj <br /> 
                    <Badge color="info" variant="dot" className="bdg">
        <span className="bdg" id="bdgh"><b></b>can you help me in...  .4h</span>{" "}
               </Badge>
                  </h5>
                </span>
                <span></span>
              </MenuItem>
              <MenuItem className="item">
                <span>
                  <img src={av1} alt="hala" className="otherimg" />
                </span>
                <span>
                  <h5>
                    Mhmad <br /> <span className="op">Sent yesterday</span>{" "}
                  </h5>
                </span>
                <span></span>
              </MenuItem>
              <MenuItem className="item">
                <span>
                  <img src={av8} alt="hala" className="otherimg" />
                </span>
                <span>
                  <h5>
                    Suhaib abu yahia <br />{" "}
                    <span className="op">Come on .3d</span>{" "}
                  </h5>
                </span>
                <span></span>
              </MenuItem>
            </MenuList>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="mainmessage">
            <div>
              <img src={Mess} alt="mess" />
            </div>
            <h1>Your Messages</h1>
            <p>Send private photos and messages to a friend or group</p>
            <Button variant="contained" className="button">Send Messages</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Messages;
