import React from "react";
import { Link } from "react-router-dom"; // For navigating to different pages
import { motion } from "framer-motion";

import pano1 from "../images/home/pano1.webp";
import asterisk from "../images/home/asterisk.png"; // center image of home page
import "./styles/Home.css"; // css for home page

function Home() {
    const pano1ref = React.createRef();

    const HelloVariant = {
        initial: {
            opacity: 0,
            y: 40
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    }

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {duration: 0.7} }}
            exit={{ opacity: 0, transition: {duration: 0.4} }}
            style={{display: "grid", width: "100vw", height: "100vh", zIndex: -2, position: "absolute"}}
        >
            {/* Draggable background, with the boundaries set to the div */}
            <div ref={pano1ref} className="panobox">
                <motion.img className="pano1" src={pano1} drag="x" dragConstraints={pano1ref} dragElastic={0.1}/>
            </div>

            <div className="hello">
                <motion.div variants={HelloVariant} initial="initial" animate="animate" transition={{duration: 1}}>
                    HELLO,
                </motion.div>
                <motion.div variants={HelloVariant} initial="initial" animate="animate" transition={{duration: 1, delay: .5}}>
                    MY NAME IS CALVIN
                </motion.div>
            </div>
            
            <div className="vertical_container">
            {/* Following 4 divs are the bubbles */}
            <motion.div
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                transition={{duration: 0.5}}
                id="aboutme"
            >
                <Link to="/AboutMe" style={{display: "grid", height: "100%", width: "100%", justifyItems: "center", alignItems: "end"}}>
                    <span className="bubble">
                        <h1 className="bubble_heading"> About Me </h1>
                        <p className="bubble_text"> Background <br/> Hobbies <br/> Fun Facts </p>
                    </span>
                </Link>
            </motion.div>

            <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: .5}}
                id="contact"
            >
                <Link to="/Contact" style={{display: "grid", height: "100%", width: "100%", justifyItems: "center"}}>
                    <span className="bubble">
                        <h1 className="bubble_heading"> Contact </h1>
                        <p className="bubble_text"> LinkedIn <br/> Email <br/> Github </p>
                    </span>
                </Link>
            </motion.div>
            </div>

            <div className="horizontal_container">
            <motion.div
                initial={{ x: 30 }}
                animate={{ x: 0 }}
                transition={{duration: 0.5}}
                id="portfolio"
            >
                <Link to="/Portfolio" style={{display: "grid", height: "100%", width: "100%", alignItems: "center"}}>
                    <span className="bubble">
                        <h1 className="bubble_heading"> Portfolio </h1>
                        <p className="bubble_text"> C++ <br/> React <br/> Flutter </p>
                    </span>
                </Link>
            </motion.div>

            <motion.div
                initial={{ x: -30 }}
                animate={{ x: 0 }}
                transition={{duration: 0.5}}
                id="experience"
            >
                <Link to="/Experience" style={{display: "grid", height: "100%", width: "100%", justifyItems: "end", alignItems: "center"}}>
                    <span className="bubble">
                        <h1 className="bubble_heading"> Experience </h1>
                        <p className="bubble_text"> Education <br/> Work <br/> Skills </p>
                    </span>
                </Link>
            </motion.div>

            {/* Animated Asterisk */}
            <motion.div
                initial={{ scale: 0.9}}
                animate={{ scale: 1 }}
                transition={{ duration: .2}}
                id="ast"
            >
                <img className="asterisk" src={asterisk} alt=" "/>
            </motion.div>
            </div>

        </motion.div>
    );
}

export default Home;