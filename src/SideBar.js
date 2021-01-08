import React from "react";
import './Sidebar.css';
import './SidebarOption.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreIcon from '@material-ui/icons/More';
import { Button } from "@material-ui/core";
import { MDBIcon } from "mdbreact";

function Sidebar() {
    return (

        <div className="sidebar">
            {/* twitter icon*/}
            <TwitterIcon className="sidebar__twitterIcon" /><br />

            {/* sidebar options*/}
            <div className="myHover">
                <h2 className="sidebarOption myHover--off"><MDBIcon icon="igloo" />&nbsp;&nbsp;Home</h2>
                <h2 class="text-white" ><span className="myHover--on" role="img" aria-label="house">you are 🏠 no big app here</span></h2>
            </div>
            <div className="myHover">
                <h2 className="sidebarOption myHover--off"><MDBIcon far icon="bell" /> &nbsp;&nbsp;Notifications</h2>
                <h2 class="text-white" ><span className="myHover--on"role="img" aria-label="crickets">🦗CRICKETS🦗</span></h2>
            </div>
            <div className="myHover">
                <h2 className="sidebarOption myHover--off"><MDBIcon far icon="envelope" />&nbsp;&nbsp;Messages</h2>
                <h2 class="text-white" ><span className="myHover--on" role="img" aria-label="speech">NO BUDGET FOR 💬 </span></h2>
            </div>
            <div className="myHover">
                <h2 className="sidebarOption myHover--off"><MDBIcon far icon="user-circle" />&nbsp;&nbsp;Profile</h2>
                <h2 class="text-white" ><span className="myHover--on" role="img" aria-label="shrug">NO PROFILE YET!! 🤷‍♂️</span></h2>
            </div>
            <div className="myHover">
                <h3 className="sidebarOption myHover--off"><MDBIcon icon="chevron-circle-down" />&nbsp;&nbsp;more more more and more</h3>
                <h3 class="text-white" ><span className="myHover--on" role="img" aria-label="shrug">did you not have enough?🤷‍♂️</span></h3>
            </div>
           
        </div>
    )
}

export default Sidebar; // use it outside the sidebar