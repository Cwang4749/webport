import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cube from "../images/aboutme/cube.webp";
import "./styles/PageError.css";

function PageError() {
    return(
        <motion.div className="pageerror"
            initial={{opacity: 0.5}} animate={{opacity: 1}}
            exit={{opacity: 0.5}} transition={{duration: 0.3, ease: "linear"}}
        >
            <div className="errortext">
                <div style={{fontSize: "2.3rem"}}>
                    PAGE NOT FOUND!
                    <br/>
                    <br/>
                </div>
                Please return using
                <br/>
                the button below
         
                <div className="arrow"/>
                <br/>
                <Link to="/">
                    <img className="errorreturn" src={cube} alt=""/>
                </Link>
            </div>
        </motion.div>
    );
}

export default PageError;