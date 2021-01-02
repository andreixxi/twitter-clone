import React from "react";
import "./SidebarOption.css";

function SidebarOption({active, text, Icon}) { //icon is a component so capital I
    return (
        // if it is is active then add sidebarOption--active
        <div className={`sidebarOption ${ active && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
        )
}

export default SidebarOption;