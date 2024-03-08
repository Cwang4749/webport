import React from "react";
import { Link } from "react-router-dom"; // For navigating to different pages
import asterisk from "../images/asterisk.png"; // center image of home page
import "./styles/Home.css"; // css for home page

function Home() {
    return(
        <div>
            <Link to="/AboutMe">
                <span className="bubble" id="aboutme">
                    <h1 className="bubble_heading"> About Me </h1>
                    <p className="bubble_text"> Background <br/> Hobbies <br/> Fun Facts </p>
                </span>
            </Link>
            <Link to="/Portfolio">
                <span className="bubble" id="portfolio">
                    <h1 className="bubble_heading"> Portfolio </h1>
                    <p className="bubble_text"> C++ <br/> React <br/> Flutter </p>
                </span>
            </Link>
            <Link to="/Contact">
                <span className="bubble" id="contact">
                    <h1 className="bubble_heading"> Contact </h1>
                    <p className="bubble_text"> LinkedIn <br/> Email <br/> Github </p>
                </span>
            </Link>
            <Link to="/Experience">
                <span className="bubble" id="experience">
                    <h1 className="bubble_heading"> Experience </h1>
                    <p className="bubble_text"> Education <br/> Work <br/> Skills </p>
                </span>
            </Link>
            <img className="asterisk" src={asterisk} />
        </div>
    );
}

export default Home;