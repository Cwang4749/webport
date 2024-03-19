import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PortData from "./data/PortfolioData.js";
import "./styles/Portfolio.css"

function Portfolio() {
    const [expanded, set_expanded] = useState(false);
    const [proj_index, set_proj_index] = useState(0);

    function CurrExpanded(projectIndex) {
        return expanded && projectIndex == proj_index;
    }

    return(
        <div className="PortfolioPage">
            <Navbar second_btn={0} third_btn={2} fourth_btn={3} />
            {PortData.map((project, index) => {
                const proj_ref = React.createRef();

                function ExpandProj(projectIndex) {
                    if(projectIndex == proj_index) {
                        set_expanded(!expanded);
                    }
                    else {
                        set_expanded(true);
                        set_proj_index(projectIndex);
                    }
                    proj_ref.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }

                return(
                    <div key={index} ref={proj_ref} className="projects" onClick={() => ExpandProj(index)} style={CurrExpanded(index) ? { 'aspectRatio': '3' } : { 'aspectRatio': '8'}}>
                        <p id={CurrExpanded(index) ? "projectname_expanded" : "projectname"}>{project.projectName}</p>
                        {CurrExpanded(index) ? 
                        <div className="expandedcontainer">
                            <p> {project.description} </p>
                            <Link to={'/Portfolio/' + project.projectName.replaceAll(" ", "-")} state={{name: project.projectName, text: project.text}}>
                                <div className="projectlink"> TO PROJECT </div>
                            </Link>
                        </div> : ""
                        }
                        <img src={project.preview} className="preview"/>
                    </div>
                )
            })}
        </div>
    );
}

export default Portfolio;