import React, {useState} from "react";
import { motion, useAnimate } from "framer-motion";
import "./styles/Flashcard.css";

function Flashcard(props) {
    const [scope, animate] = useAnimate();
    
    const FlipFlashcard = () => {
        setTimeout(() => {
            if(props.imageIndex + 1 == props.flashCardImage.length)
            {
                props.setImageIndex(-1);
            }
            else {
                props.setImageIndex(props.imageIndex + 1);
            }
        }, 200);
        
        animate([
            [scope.current, {rotateX: 360, PointerEvent: "none"}, {duration: .1}],
            [scope.current, {rotateX: 0}, {duration: .1}],
        ]);
    }

    return (
        <motion.div ref={scope}
            initial={{rotateY: 90}} animate={{rotateY: 0}} transition={{duration: 0.2}}
            className="flashcard" onClick={FlipFlashcard}
        >
            <div className="flashcardtext">
                {props.imageIndex == -1 ? <div>{props.flashCardText.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}</div> : ""}
            </div>
            {props.imageIndex != -1 ? <img loading="lazy" className="flashcardimg" src={props.flashCardImage[props.imageIndex]} alt="loading..." /> : ""}
        </motion.div>
    );
}

export default Flashcard;