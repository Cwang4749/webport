import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Popup.css"

// checks if the text is in an array, map if true, or print text if false
function Popup(props) {
    return(
        <AnimatePresence mode="wait">
            {props.zoom &&
                <div className="popup" onClick={() => props.setZoom(false)}>
                    <motion.div
                        initial={{scale: 0.3}} animate={{scale: 1}}
                        exit={{scale: 0}} transition={{duration: 0.2}}
                        className="popupinner"
                    >
                        <div id="popuptext" style={props.indent ? {'textIndent': '7%', 'fontWeight': '400'} : {'textIndent': '0%', 'fontWeight': '900'}}>
                            {Array.isArray(props.zoomText) ? props.zoomText.map((str,index) => {return(<p key={index}>{str} <br/></p> )}) : props.zoomText}
                        </div>
                    </motion.div>
                </div>
            }
        </AnimatePresence>
    );
}

export default Popup;