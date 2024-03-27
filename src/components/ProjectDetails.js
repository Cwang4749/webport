import React, { useState, useEffect } from "react";
import PortData from "./data/PortfolioData.js";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FAB from "./FAB.js";
import "./styles/ProjectDetails.css";

function ProjectDetails() {
    const location = useLocation();
    const [proj_name, set_proj_name] = useState("");
    const [proj_text, set_proj_text] = useState(null);
    const [proj_imgs, set_proj_imgs] = useState(null);
    const [links, set_links] = useState(null);
    const [link_labels, set_labels] = useState(null);
    const navigate = useNavigate();

    // 
    useEffect(() => {
        // Get the proj name from the URL
        var buffer = location.pathname.replaceAll("-", " ");
        buffer = buffer.replace("/Portfolio/", "");

        // Search data for project, set states if found
        var stay = false;
        for(let i = 0; i < PortData.length; i++)
        {
            if(buffer.toUpperCase() == PortData[i].projectName.toUpperCase())
            {
                set_proj_name(PortData[i].projectName);
                set_proj_text(PortData[i].text);
                set_proj_imgs(PortData[i].images);
                set_links(PortData[i].links);
                set_labels(PortData[i].linklabels);
                stay = true;
            }
        }

        // If project is not found, redirect back to the Portfolio page
        if(!stay)
        {
            navigate("/Portfolio");
        }
    }, []);

    return(
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
            transition={{duration: .3}}
            style={{'paddingTop' : '5px'}}
        >
            <div className="projdetails">
                <div className="projectheader">{proj_name}</div>
                {proj_text == null ? "" : proj_text.map((parapraph, pIndex) => {
                    return(
                        <div key={pIndex} className="projectsection">
                            <div className="projecttext">{parapraph}<br/></div>
                            <img src={proj_imgs[pIndex]} className="projectimages"/>
                        </div>
                    )
                })}
            </div>

            <FAB links={links} labels={link_labels}/>
        </motion.div>
    )
}

export default ProjectDetails;