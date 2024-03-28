import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Alert from "./Alert";

import cardbackground from "../images/contact/cardbg.jpg";
import cardprofile from "../images/contact/cardprofile.jpg";
import linkedinlogo from "../images/contact/linkedinlogo.png";
import githublogo from "../images/contact/githublogo.png";
import gmaillogo from "../images/contact/gmaillogo.png";
import outlooklogo from "../images/contact/outlooklogo.png";
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
    };

    const CardLinkVariant = {
        initial: {
            translateX: 20
        },
        animate: {
            translateX: 0,
            transition: {
                duration: 0.1,
                staggerChildren: 0.07
            }
        }
    };

    return(
        <motion.div
            initial={{
                opacity: .5,
                clipPath: "polygon(50vw 0, 50vw 0, 50vw 100vh, 50vw 100vh)"
            }}
            animate={{
                opacity: 1,
                clipPath: "polygon(100% 0, 0 0, 0% 100%, 100% 100%)"
            }}
            exit={{
                opacity: 0.5,
                clipPath: "polygon(50vw 0, 50vw 0, 50vw 100vh, 50vw 100vh)"
            }}
            transition={{duration: .3}}
            className="contactpage"
        >
            {/* Business card: external links + emails; links open in new tabs and emails are copied upon click */}
            <div className="card">
                <img id="contactcardbg" src={cardbackground}/>
                
                <motion.div variants={CardLinkVariant} initial="initial" animate="animate">
                    <motion.div
                        variants={CardLinkVariant}
                        className="cardlink" id="linkedinpos"
                    >
                        <a href="https://linkedin.com/in/calvin-wang-b107a71b9" target="_blank" rel="noreferrer">
                            <div className="cl_center">
                                <img className="logo" src={linkedinlogo}/> https://linkedin.com/in/calvin-wang-b107a71b9
                        </div></a>
                    </motion.div>

                    <motion.div variants={CardLinkVariant} className="cardlink" id="githubpos">
                        <a href="https://github.com/Cwang4749" target="_blank" rel="noreferrer">
                            <div className="cl_center">
                                <img className="logo" src={githublogo}/>https://github.com/Cwang4749
                        </div></a>
                    </motion.div>

                    <motion.div variants={CardLinkVariant} className="cardlink" id="gmailpos">
                        <div className="cl_center" onClick={() => CopyText("calvinwang1002@gmail.com")}>
                            <img className="logo" src={gmaillogo}/>calvinwang1002@gmail.com
                        </div>
                    </motion.div>
                        
                    <motion.div variants={CardLinkVariant} className="cardlink" id="outlookpos">
                        <div className="cl_center" onClick={() => CopyText("calvin.wang161@myhunter.cuny.edu")}>
                            <img className="logo" src={outlooklogo}/>calvin.wang161@hunter.cuny.edu
                        </div>
                    </motion.div>
                </motion.div>

                <motion.img
                    initial={{scale: 0.8}} animate={{scale: 1}} transition={{duration: 0.6}}
                    loading="lazy" id="cardprofile" src={cardprofile}/>
            </div>
            <Navbar second_btn={0} third_btn={1} fourth_btn={3} />

            {/* Alert Component that shows up with an animation when one of the emails is pressed */}
            <Alert showAlert={show_alert} copiedText={copied_text} setAlert={set_alert}/>
        </motion.div>
    );
}

export default Contact;