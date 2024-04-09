import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";

import Navbar from "./Navbar";
import Sprite from "./Sprite";
import Flashcard from "./Flashcard";
import FlashcardData from "./data/FlashcardData";
import profile from "../images/aboutme/profile.webp";
import "./styles/AboutMe.css";

function AboutMe() {
    const [curr_circle, set_curr_circle] = useState(0);
    const [flashcard_image_index, set_flashcard_image_index] = useState(-1);
    const [scope, animate] = useAnimate();

    function ChangeCard(flashcard_index) {
        if(curr_circle < flashcard_index)
        {
            animate([
                [".am_curr_circle", {y: 50}, {duration: .05}],
                [".am_curr_circle", {y: 0}, {duration: .05}]
            ]);
        }
        else if(curr_circle > flashcard_index)
        {
            animate([
                [".am_curr_circle", {y: -50}, {duration: .05}],
                [".am_curr_circle", {y: 0}, {duration: .05}]
            ]);
        }

        set_curr_circle(flashcard_index);
        set_flashcard_image_index(-1);
    }

    return(
        <motion.div
            initial={{
                opacity: 0,
                clipPath: "polygon(50vw 0, 50vw 0, 50vw 100vh, 50vw 100vh)"
            }}
            animate={{
                opacity: 1,
                clipPath: "polygon(100% 0, 0 0, 0% 100%, 100% 100%)"
            }}
            exit={{
                opacity: 0,
                clipPath: "polygon(50vw 0, 50vw 0, 50vw 100vh, 50vw 100vh)"
            }}
            transition={{duration: .3}}
            className="aboutmepage"
        >
            <motion.img
                initial={{scale: 0.8}} animate={{scale: 1}} transition={{duration: 0.2, delay: 0.15}}
                className="profilepic" loading="lazy" src={profile}
            />

            <Flashcard flashCardText={FlashcardData[curr_circle].description}
                flashCardImage={FlashcardData[curr_circle].image}
                imageIndex={flashcard_image_index}
                setImageIndex={set_flashcard_image_index}
            />

            <div ref={scope} className="am_circlecontainer">
                <div className={curr_circle==0 ? "am_curr_circle" : "am_circle"} onClick={() => ChangeCard(0)}/>
                <div className={curr_circle==1 ? "am_curr_circle" : "am_circle"} onClick={() => ChangeCard(1)}/>
                <div className={curr_circle==2 ? "am_curr_circle" : "am_circle"} onClick={() => ChangeCard(2)}/>
            </div>
            <Navbar second_btn={1} third_btn={2} fourth_btn={3} />
            
            <Sprite/>
        </motion.div>
    );
}

export default AboutMe;