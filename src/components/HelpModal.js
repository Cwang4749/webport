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
    const loc = useLocation();

    const HoverHelp = () => {
        animate([
            [scope.current, {rotate: -10}, {duration: .1}],
            [scope.current, {rotate: 10}, {duration: .1}],
            [scope.current, {rotate: 0}, {duration: .1}],
        ]);
    }

    const HelpVariant = {
        hidden: {y: "-100vh"},
        visible: {y: 0}
    }

    // Resets the modal whenever the route changes (ex: back button pressed)
    useEffect(() => {
        set_help_modal(false);
    },[loc]);

    return(
        <div>
            
            <div className="helpbutton">
                <motion.img
                    ref={scope} onHoverStart={() => HoverHelp()} loading="lazy" src={questionmark}
                    style={{"height": "80%"}} onClick={() => set_help_modal(true)}
                />
            </div>
 
            <AnimatePresence mode="wait" initial={true}>
                {help_modal && 
                    <motion.div transition={{type: "spring", bounce: 0.2, duration: 0.5}}
                        variants={HelpVariant} initial="hidden" exit="hidden" animate="visible"
                        className="helpmodal" 
                    >
                        {/* left side of modal is navbar for different sections */}
                        <div className="helpnav">
                            {HelpData.map((section, sectionindex) => {
                                return(
                                    <div key={sectionindex} className="helpnavsection">
                                        {section.section}
                                    </div>
                                )
                            })

                            }
                        </div>

                        {/* right side of modal conditionally renders based on navbar */}
                        <div>

                        </div>

                        <img 
                            src={esc} onClick={() => set_help_modal(false)}
                            className="escapebutton"
                        />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

export default HelpModal;