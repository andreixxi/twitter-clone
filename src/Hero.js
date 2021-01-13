import React from "react";
import Sidebar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';
import { firebaseApp } from "./firebase";
import { MDBIcon } from "mdbreact";
const Hero = (props) => {
    const { handleLogout,
        address,
        username,
        displayname,
        avatar,
        verified
    } = props;

    return (
        <section className="hero">
            <nav>
                <h1 class="text-white"><MDBIcon far icon="star" /> Welcome, {username}! <MDBIcon far icon="star" /></h1>
                <button onClick={handleLogout} >Log out</button>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar className="col-2" />
                    <Feed className="col-6"
                        address={address}
                        username={username}
                        displayname={displayname}
                        avatar={avatar}
                        verified={verified}
                    />
                    <Widgets className="col-2" />

                </div>
            </div>
        </section>
    );
};
export default Hero;