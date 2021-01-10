import React from "react";
import Sidebar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';
import { firebaseApp } from "./firebase";

const Hero = (props) => {
    const { handleLogout,
        username,
    } = props;

    return (
        <section className="hero">
            <nav>
                <h1 class="text-white">Welcome, {username}!</h1>
                <button onClick={handleLogout} >Log out</button>
            </nav>
            <div className="container-fluid">
                <div className="row ">
                    <Sidebar className="col-3"/>
                    <Feed className="col-6"
                        username={username}
                    />
                    <Widgets className="col-3" />
                </div>
            </div>
        </section>
    );
};
export default Hero;