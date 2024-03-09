import React from "react";
import Navbar from "./Navbar";
import arch from "../images/arch.png";
import linkedinlogo from "../images/linkedinlogo.png";
import githublogo from "../images/githublogo.png";
import gmaillogo from "../images/gmaillogo.png";
import outlooklogo from "../images/outlooklogo.png";
import tree from "../images/colortree.png";
import "./styles/Contact.css";

function Contact() {
    return(
        <div className="contactpage">
            <div className="card">
                <img id="bgarch" src={arch}/>
                <a href="https://linkedin.com/in/calvin-wang-b107a71b9" target="_blank" rel="noreferrer"><div className="cardlink" id="linkedinpos"><img className="logo" src={linkedinlogo}/>https://linkedin.com/in/calvin-wang-b107a71b9</div></a>
                <a href="https://github.com/Cwang4749" target="_blank" rel="noreferrer"><div className="cardlink" id="githubpos"><img className="logo" src={githublogo}/>https://github.com/Cwang4749</div></a>
                <div className="cardlink" id="gmailpos"><img className="logo" src={gmaillogo}/>calvinwang1002@gmail.com</div>
                <div className="cardlink" id="outlookpos"><img className="logo" src={outlooklogo}/>calvin.wang161@hunter.cuny.edu</div>
                <div id="treecircle"><img id="tree" src={tree}/></div>
            </div>
            <Navbar second_btn={0} third_btn={1} fourth_btn={3} />
        </div>
    );
}

export default Contact;