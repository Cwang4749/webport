import React from "react";
import Navbar from "./Navbar";
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

    return(
        <div className="App">
            <div className="tableheader" id="firstheader">EXPERIENCE</div>
            <Navbar second_btn={0} third_btn={1} fourth_btn={2} />
            <table className="table1">
                {
                    work.map((val, key) => {
                        return(
                            <tr key={key}>
                                <td>{val.year}</td>
                                <td>{val.place}</td>
                                <td>{val.description.map((str,index) => {return(<p>{str} <br/></p> )})}</td>
                            </tr>
                        )
                    })
                }
            </table>

            <div className="tableheader">EDUCATION</div>
            <table className="table1">
                {
                    education.map((val, key) => {
                        return(
                            <tr key={key}>
                                <td>{val.year}</td>
                                <td>{val.place}</td>
                                <td>{val.description.map((str,index) => {return(<p>{str} <br/></p> )})}</td>
                            </tr>
                        )
                    })
                }
            </table>

            <div className="tableheader">SKILLS</div>
        </div>
    );
}

export default Experience;