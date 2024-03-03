import React from "react";
import { useNavigate } from "react-router-dom"; // For navigating to different pages
import asterisk from "../images/asterisk.png"; // center image of home page
import "./styles/Home.css"; // css for home page

function Home() {
    return(
        <div>
            <span className="bubble" id="aboutme"></span>
            <span className="bubble" id="portfolio"></span>
            <span className="bubble" id="contact"></span>
            <span className="bubble" id="experiences"></span>
            <img className="asterisk" src={asterisk} />
        </div>
    );
}

export default Home;