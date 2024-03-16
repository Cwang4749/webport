import React from "react";
import { Link } from "react-router-dom";
import homeicon from "../images/homeicon.png";
import searchicon from "../images/searchicon.png";
import foldericon from "../images/foldericon.png";
import mailicon from "../images/mailicon.png";
import capicon from "../images/capicon.png";
import "./styles/Navbar.css";

function Navbar(props) {
    // Array of Buttons, with the corresponding image and link
    const linkArray = [
        {
            image: searchicon,
            link: "/AboutMe"
        },
        {
            image: foldericon,
            link: "/Portfolio"
        },
        {
            image: mailicon,
            link: "/Contact"
        },
        {
            image: capicon,
            link: "/Experience"
        }
    ];

    return(
        <div className="Navbar">
            {/* The first button is always the home button */}
            <Link to="/">
                <img className="button" src={homeicon}/>
            </Link>

            {/* Using the parameters passed by page the user is currently on, render the correct buttons by referencing the array */}
            <Link to={linkArray[props.second_btn].link}>
                <img className="button" src={linkArray[props.second_btn].image}/>
            </Link>
            <Link to={linkArray[props.third_btn].link}>
                <img className="button" src={linkArray[props.third_btn].image}/>
            </Link>
            <Link to={linkArray[props.fourth_btn].link}>
                <img className="button" src={linkArray[props.fourth_btn].image}/>
            </Link>
        </div>
    );
}

export default Navbar;