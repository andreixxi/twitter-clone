import React from "react";
import Sidebar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';

const Hero = ({ handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h1>Welcome!</h1>
                <button onClick={handleLogout} >Log out</button>
            </nav>
            <div className="container">
                <div className="row ">
                    <Sidebar className="col-3"/>
                    <Feed className="col-6"/>
                    <Widgets className="col-3" />
                </div>
            </div>
        </section>
    );
};
export default Hero;