import React from "react";
import { Link } from "react-router-dom";
import homeicon from "../images/navbar/homeicon.png";
import searchicon from "../images/navbar/searchicon.png";
import foldericon from "../images/navbar/foldericon.png";
import mailicon from "../images/navbar/mailicon.png";
import capicon from "../images/navbar/capicon.png";
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
                <img className="button" loading="lazy" src={homeicon} alt=""/>
            </Link>

            {/* Using the parameters passed by page the user is currently on, render the correct buttons by referencing the array */}
            <Link to={linkArray[props.second_btn].link}>
                <img className="button" loading="lazy" src={linkArray[props.second_btn].image} alt=""/>
            </Link>
            <Link to={linkArray[props.third_btn].link}>
                <img className="button" loading="lazy" src={linkArray[props.third_btn].image} alt=""/>
            </Link>
            <Link to={linkArray[props.fourth_btn].link}>
                <img className="button" loading="lazy" src={linkArray[props.fourth_btn].image} alt=""/>
            </Link>
        </div>
    );
}

export default Navbar;