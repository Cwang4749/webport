import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Alert from "./Alert";

import cardbackground from "../images/cardbg.jpg";
import cardprofile from "../images/cardprofile.jpg";
import linkedinlogo from "../images/linkedinlogo.png";
import githublogo from "../images/githublogo.png";
import gmaillogo from "../images/gmaillogo.png";
import outlooklogo from "../images/outlooklogo.png";
import "./styles/Contact.css";

function Contact() {
    const [copied_text, set_copy] = useState("");
    const [show_alert, set_alert] = useState(false);

    // Resets the animation if pressed before animation ends
    function CopyText(text) {
        navigator.clipboard.writeText(text);
        set_alert(false);
        setTimeout(() => {
            set_alert(true);
        }, 10);
        set_copy(text);
    }

    return(
        <div className="contactpage">
            {/* Business card: external links + emails; links open in new tabs and emails are copied upon click */}
            <div className="card">
                <img id="contactcardbg" src={cardbackground}/>
                <a href="https://linkedin.com/in/calvin-wang-b107a71b9" target="_blank" rel="noreferrer"><div className="cardlink" id="linkedinpos"><img className="logo" src={linkedinlogo}/>https://linkedin.com/in/calvin-wang-b107a71b9</div></a>
                <a href="https://github.com/Cwang4749" target="_blank" rel="noreferrer"><div className="cardlink" id="githubpos"><img className="logo" src={githublogo}/>https://github.com/Cwang4749</div></a>
                <div className="cardlink" id="gmailpos" onClick={() => CopyText("calvinwang1002@gmail.com")}><img className="logo" src={gmaillogo}/>calvinwang1002@gmail.com</div>
                <div className="cardlink" id="outlookpos" onClick={() => CopyText("calvin.wang161@myhunter.cuny.edu")}><img className="logo" src={outlooklogo}/>calvin.wang161@hunter.cuny.edu</div>
                <img loading="lazy" id="cardprofile" src={cardprofile}/>
            </div>
            <Navbar second_btn={0} third_btn={1} fourth_btn={3} />

            {/* Alert Component that shows up with an animation when one of the emails is pressed */}
            <Alert showAlert={show_alert} copiedText={copied_text} setAlert={set_alert}/>
        </div>
    );
}

export default Contact;