import React, {useState, useEffect} from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';
import questionmark from "../images/questionmark.png";
import HelpData from "./data/HelpData";
import esc from "../images/help/esc.png";
import "./styles/HelpModal.css";

function HelpModal() {
    const [scope, animate] = useAnimate();
    const [help_modal, set_help_modal] = useState(false);
    const [curr_section, set_section] = useState(0);
    const loc = useLocation();

    const HoverHelp = () => {
        animate([
            [scope.current, {rotate: -10}, {duration: .1}],
            [scope.current, {rotate: 10}, {duration: .1}],
            [scope.current, {rotate: 0}, {duration: .1}],
        ]);
    }

    function SetSection(indx) {
        document.getElementById("top").scrollTo({ top: 0, behavior: 'smooth' });
        set_section(indx);
    }

    const HelpVariant = {
        hidden: { y: "-100vh" },
        visible: { y: 0 }
    }

    const FeatureVariant = {
        initial: { opacity: 0, scale: 0.7 },
        animate: { opacity: 1, scale: 1 }
    }

    // Resets the modal whenever the route changes (ex: back button pressed)
    useEffect(() => {
        set_help_modal(false);
    },[loc]);

    useEffect(() => {
        var buf = loc.pathname.replaceAll("-", " ");
        switch (buf.toUpperCase())
        {
            case "/":
                set_section(0);
                break;
            case "/ABOUTME":
                set_section(2);
                break;
            case "/PORTFOLIO":
                set_section(3);
                break;
            case "/CONTACT":
                set_section(4);
                break;
            case "/EXPERIENCE":
                set_section(5);
                break;
            default:
                set_section(3);
                break;
        }
    },[help_modal]);

    return(
        <div>
            
            <motion.div className="helpbutton" ref={scope} onHoverStart={() => HoverHelp()} onClick={() => set_help_modal(true)}>
                <img loading="lazy" src={questionmark} style={{"height": "80%"}} />
            </motion.div>
 
            <AnimatePresence mode="wait" initial={false}>
                {help_modal && 
                    <motion.div transition={{type: "spring", bounce: 0.2, duration: 0.5}}
                        variants={HelpVariant} initial="hidden" exit="hidden" animate="visible"
                        className="helpmodal" id="top"
                    >
                        {/* left side of modal is navbar for different sections */}
                        <motion.div className="helpnav" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .8}}>
                            {HelpData.map((section, sectionindex) => {
                                return(
                                    <div key={sectionindex} className="helpnavsection"
                                        id={curr_section == sectionindex && "currnavsection"}
                                        onClick={() => SetSection(sectionindex)}
                                    >
                                        {section.section}
                                    </div>
                                )
                            })}
                        </motion.div>

                        {/* right side of modal conditionally renders based on navbar */}
                        <motion.div className="helpfeatures" variants={FeatureVariant} initial="initial"
                            animate="animate" transition={{ staggerChildren: .3 }}
                        >
                            {HelpData[curr_section].text.map((feature, ftindex) => {
                                return(
                                    <motion.div className="feature"
                                        variants={FeatureVariant}
                                        transition={{duration: .5}}
                                    >
                                        {feature}
                                        <br/><br/>
                                        <img src={HelpData[curr_section].images[ftindex]} style={{"width": "90%", "borderRadius": "5px"}}/>
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        <motion.img 
                            initial={{x: 60, rotate: 90}} animate={{x: 0, rotate: 0}} transition={{duration: .8}}
                            whileHover={{opacity: 1, transition: {duration: 0.5}}}
                            src={esc} onClick={() => set_help_modal(false)} className="escapebutton"
                        />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

export default HelpModal;