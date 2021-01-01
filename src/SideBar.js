import React from "react";
//import './Sidebar.css';
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

function Sidebar() {
    return (
        <div className="sidebar"> 
            {/* twitter icon*/}
            <TwitterIcon className="sidebar__twitterIcon" />

            {/* sidebar options*/}
            <SidebarOption active Icon={HomeIcon } text="Home" />
            <SidebarOption Icon={SearchIcon } text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon } text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={SubjectIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreIcon} text="more more more and more" />

            {/* button -> tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWdith>
                Tweet
            </Button>
        </div>
    )
}

export default Sidebar; // use it outside the sidebar