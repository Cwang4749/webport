import React, {useState} from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Popup from "./Popup";
import "./styles/Experience.css"

function Experience() {
    const work = [
        {
            year: "2021 - Present",
            place: "Con Edison",
            description: ["Computer Aid at the Gas Engineering, Maps and Records Department. Worked with the legacy systems: Project Wise, GIS and Byers before all three systems were replaced and the department transitioned into Adept, Gas Central and ArcFM respectively. Worked on a project for two years that sought to remediate the discrepancies found between the paperwork, the inspection system and the maps."]
        },
        {
            year: "2018 - 2019",
            place: "NYU Tandon School of Engineering",
            description: ["Participated in the NYU Tandon ITEST program and learned how to design, build and code a simple robot. Visited an incubator and learned various entrepreneurial concepts. Presented at two different local competitions between program members, one for coding/engineering competency and the other for entrepreneurial ability.", "Brought back on as an assistant supervisor for the new team of Brooklyn Tech interns. Provided insight and helped maintain the productivity of the team."]
        }
    ];
    const education = [
        {
            year: "2019 - 2022",
            place: "Hunter College",
            description: ["BA in Computer Science, Summa Cum Laude. Worked with Python, C++, React Framework, Flutter Framework, mySQL Database, etc. In addition to the normal curriculum, I also completed 2 Codepath courses: iOS App Development and Cybersecurity."]
        },
        {
            year: "2015 - 2019",
            place: "Brooklyn Technical High School",
            description: ["Mechatronics Major: Built projects using Arduinos, RobotC, Autodesk Inventor, 3D printers, CNC machines, etc. Worked with LabVIEW and myRIO to build simple representations of logic. Final project involved a raspberry pi, facial tracking with OpenCV, 3D printing and plasma cutting.", "Weston Research Scholar: Conducted experiments with peers under the supervision of a research mentor to design a clean energy harvester that can also be mass produced. Presented a proof of concept at the 2018 New York City Science and Engineering Fair and reached the finals for the Engineering category."]
        }
    ];
    const skill = [
        {
            name: "",
            description: ""
        },
        {
            name: "",
            description: ""
        }
    ];

    const [zoom, set_zoom] = useState(false);
    const [zoom_text, set_text] = useState("");
    const [indent, set_indent] = useState(false);

    return(
        <motion.div
            initial={{
                opacity: .5,
                clipPath: "polygon(100vw 50vh, 0 50vh, 0 50vh, 100vw 50vh)"
            }}
            animate={{
                opacity: 1,
                clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)"
            }}
            exit={{
                opacity: 0.5,
                clipPath: "polygon(100vw 50vh, 0 50vh, 0 50vh, 100vw 50vh)"
            }}
            transition={{duration: .3}}
            style={{overflow: 'scroll'}}
        >
            <div>
                <div className="tableheader" id="firstheader">EXPERIENCE</div>
                <Navbar second_btn={0} third_btn={1} fourth_btn={2} />
                <table className="table1">
                    <tbody>{
                        work.map((val, key) => {
                            return(
                                <tr key={key}>
                                    <td onClick={() => {set_zoom(true); set_text(val.year); set_indent(false)}}>{val.year}</td>
                                    <td onClick={() => {set_zoom(true); set_text(val.place); set_indent(false)}}>{val.place}</td>
                                    <td onClick={() => {set_zoom(true); set_text(val.description); set_indent(true)}}>{val.description.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}</td>
                                </tr>
                            )
                        })
                    }</tbody>
                </table>

                <div className="tableheader">EDUCATION</div>
                <table className="table1">
                    <tbody>{
                        education.map((val, key) => {
                            return(
                                <tr key={key}>
                                    <td onClick={() => {set_zoom(true); set_text(val.year); set_indent(false)}}>{val.year}</td>
                                    <td onClick={() => {set_zoom(true); set_text(val.place); set_indent(false)}}>{val.place}</td>
                                    <td onClick={() => {set_zoom(true); set_text(val.description); set_indent(true)}}>{val.description.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}</td>
                                </tr>
                            )
                        })    
                    }</tbody>
                </table>

                <div className="tableheader">SKILLS</div>
            </div>

            <Popup zoom={zoom} setZoom={set_zoom} zoomText={zoom_text} indent={indent}/>
        </motion.div>
    );
}

export default Experience;