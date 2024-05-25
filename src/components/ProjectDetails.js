import React, { useState, useEffect } from "react";
import PortData from "./data/PortfolioData.js";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

import FAB from "./FAB.js";
import "./styles/ProjectDetails.css";

function ProjectDetails() {
    const location = useLocation();
    const [proj_name, set_proj_name] = useState("");
    const [proj_text, set_proj_text] = useState(null);
    const [proj_imgs, set_proj_imgs] = useState(null);
    const [proj_img_types, set_proj_img_types] = useState(null);
    const [links, set_links] = useState(null);
    const [link_labels, set_labels] = useState(null);
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();

    // 
    useEffect(() => {
        // Get the proj name from the URL
        var buffer = location.pathname.replaceAll("-", " ");
        buffer = buffer.replace("/Portfolio/", "");

        // Search data for project, set states if found
        var stay = false;
        for(let i = 0; i < PortData.length; i++)
        {
            if(buffer.toUpperCase() === PortData[i].projectName.toUpperCase())
            {
                set_proj_name(PortData[i].projectName);
                set_proj_text(PortData[i].text);
                set_proj_imgs(PortData[i].images);
                set_proj_img_types(PortData[i].imageType);
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
    }, [location.pathname, navigate]);

    const ProjSecVariant = {
        initial: {
            y : 50
        },
        animate: {
            y: 0,
            transition:  {
                duration: 0.2
            }
        }
    }

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: .3}}
            style={{'paddingTop' : '5px'}}
        >
            <div className="projdetails">
                <motion.div className="progressbar" style={{ scaleY: scrollYProgress }}/>
                <div className="projectheader">{proj_name}</div>

                {proj_text == null ? "" : proj_text.map((parapraph, pIndex) => {
                    return(
                        <motion.div 
                            variants={ProjSecVariant} initial="initial" whileInView="animate" viewport={{once: true}}
                            key={pIndex} className="projectsection"
                        >
                            <div className="projecttext">{parapraph}<br/></div>
                            {/* <motion.object
                                variants={ProjSecVariant} initial="initial" whileInView="animate" viewport={{once: true}}
                                loading="lazy" data={proj_imgs[pIndex]} className="projectimages"
                                style={proj_img_types[pIndex] ? {'aspectRatio': '16/9'} : {}}
                            /> */}

                            {proj_img_types[pIndex] ? 
                                (
                                    <motion.video
                                        variants={ProjSecVariant} initial="initial" whileInView="animate" viewport={{once: true}}
                                        loading="lazy" src={proj_imgs[pIndex]} className="projectimages"
                                        autoPlay loop muted
                                    />
                                ) : 
                                (
                                    <motion.img
                                        variants={ProjSecVariant} initial="initial" whileInView="animate" viewport={{once: true}}
                                        loading="lazy" src={proj_imgs[pIndex]} className="projectimages"
                                    />
                                )

                            }
                        </motion.div>
                    )
                })}
            </div>

            <FAB links={links} labels={link_labels}/>
        </motion.div>
    )
}

export default ProjectDetails;