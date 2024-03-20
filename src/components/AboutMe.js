import React, {useState} from "react";
import Navbar from "./Navbar";
import Flashcard from "./Flashcard";
import profile from "../images/aboutme/profile.jpg";
import redenvelope from '../images/aboutme/redenvelope.jpg';
import scenery1 from '../images/aboutme/scenery.gif';
import scenery2 from '../images/aboutme/scenery2.jpg';
import scenery3 from '../images/aboutme/scenery3.gif';
import blackbelt from '../images/aboutme/blackbelt.jpg';
import knitting from '../images/aboutme/funfact.jpg';
import "./styles/AboutMe.css";

function AboutMe() {
    const [curr_circle, set_curr_circle] = useState(0);
    const [flashcard_active, set_flashcard_active] = useState(false);
    const [flashcard_image_index, set_flashcard_image_index] = useState(-1);

    const flashcards = [
        {
            description: ["I was born and raised in New York City. My parents are Chinese immigrants who met in the US."],
            image: [redenvelope]
        },
        {
            description: ["I enjoy spending time with my family, especially taking them to parks and walking the trails. Although I enjoy most sports, the one I play the most is basketball. At home, I play games, watch movies/tv shows, and I also like to read light novels."],
            image: [scenery1, scenery2, scenery3]
        },
        {
            description: ["My brother and I became 1st degree black belts after years of physical and mental training. Even after years of not training, the muscle memory and the life lessons that I learned still persist.", "I learned how to solve the rubik’s cube through YouTube, my best time being 27 seconds. I also learned how to knit and crochet through YouTube. So far, I have knitted scarves for my mom and my little cousin."],
            image: [blackbelt, knitting]
        }
    ];

    function ChangeCard(flashcard_index) {
        set_curr_circle(flashcard_index);
        set_flashcard_active(false);
        set_flashcard_image_index(-1);
    }

    return(
        <div className="aboutmepage">
            <img className="profilepic" src={profile}/>
            <Flashcard active={flashcard_active} setActive={set_flashcard_active} flashCardText={flashcards[curr_circle].description} flashCardImage={flashcards[curr_circle].image} imageIndex={flashcard_image_index} setImageIndex={set_flashcard_image_index}/>
            <div className="am_circlecontainer">
                <div className={curr_circle==0 ? "am_curr_circle" : "am_circle"} onClick={() => ChangeCard(0)}/>
                <div className={curr_circle==1 ? "am_curr_circle" : "am_circle"} onClick={() => ChangeCard(1)}/>
                <div className={curr_circle==2 ? "am_curr_circle" : "am_circle"} onClick={() => ChangeCard(2)}/>
            </div>
            <Navbar second_btn={1} third_btn={2} fourth_btn={3} />
        </div>
    );
}

export default AboutMe;