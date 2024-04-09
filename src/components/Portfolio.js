import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import  PortData from "./data/PortfolioData.js";
import "./styles/Portfolio.css"

function Portfolio() {
    const [expanded, set_expanded] = useState(false);
    const [proj_index, set_proj_index] = useState(0);

    function CurrExpanded(projectIndex) {
        return expanded && projectIndex == proj_index;
    }

    const ProjVariant = {
        initial: {
            x: "70vw"
        },
        animate: {
            x: 0,
            transition: {
                duration: 0.2,
                staggerChildren: 0.1
            }
        }
    }

    return(
        <motion.div
            initial={{
                opacity: 0,
                clipPath: "polygon(100vw 0, 0 0, 0 5vh, 100vw 5vh)"
            }}
            animate={{
                opacity: 1,
                clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
                transition: {duration: 1}
            }}
            exit={{
                opacity: 0,
                clipPath: "polygon(100vw 50vh, 0 50vh, 0 50vh, 100vw 50vh)",
                transition: {duration: .3}
            }}
            className="PortfolioPage"
        >
            <Navbar second_btn={0} third_btn={2} fourth_btn={3} />

            <motion.div variants={ProjVariant} initial="initial" animate="animate" style={{width: "90%"}}>
            {PortData.map((project, index) => {
                const proj_ref = React.createRef();

                function ExpandProj(projectIndex) {
                    if(projectIndex == proj_index) {
                        set_expanded(!expanded);
                        proj_ref.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }
                    else {
                        set_expanded(true);
                        set_proj_index(projectIndex);
                    }
                    
                }

                return(
                    <motion.div key={index} variants={ProjVariant} initial="initial" whileInView="animate" viewport={{once: true}}>
                        <div key={index} ref={proj_ref} className="projects" onClick={() => ExpandProj(index)} style={CurrExpanded(index) ? { 'aspectRatio': '3' } : { 'aspectRatio': '7'}}>
                            <p id={CurrExpanded(index) ? "projectname_expanded" : "projectname"}>{project.projectName}</p>
                            {CurrExpanded(index) ? 
                            <div className="expandedcontainer">
                                <p> {project.description} </p>
                                <Link className="projectlink" to={'/Portfolio/' + project.projectName.replaceAll(" ", "-")} state={{name: project.projectName, text: project.text}}>
                                    TO PROJECT 
                                </Link>
                            </div> : ""
                            }
                            <img loading="lazy" src={project.preview} className="preview"/>
                        </div>
                    </motion.div>
                )
            })}
            </motion.div>
        </motion.div>
    );
}

export default Portfolio;