import React, {useState} from "react";
import "./styles/Flashcard.css";

function Flashcard(props) {
    const [flip, set_flip] = useState(false);
    
    function FlipFlashcard() {
        set_flip(!flip);
        if(props.imageIndex + 1 == props.flashCardImage.length)
        {
            props.setImageIndex(-1);
        }
        else {
            props.setImageIndex(props.imageIndex + 1);
        }
    }

    const FlashcardStyle = (if_text) => {
        var rotation = 'rotateX(0deg)';
        var card_opacity = '1';
        var card_overflow = 'scroll';
        if(flip) 
        {
            rotation = 'rotateX(180deg)';
        }

        // if it is not on the text card, then hide the text
        if(props.imageIndex != -1 && if_text)
        {
            card_opacity =  0;
            card_overflow = 'hidden';
        }

        // if it is not on the images, then hide the images
        if(props.imageIndex == -1 && !if_text)
        {
            card_opacity =  0;
        }
        return {
            transform : rotation,
            opacity : card_opacity,
            overflow : card_overflow
        }
    }

    return (
        <div className="flashcard" onClick={() => FlipFlashcard()} style={flip ? {'transform': 'rotateX(180deg)'} : {'transform' : 'rotateX(0deg)'}} >
            <div className="flashcardtext" style={FlashcardStyle(true)}><div>{props.flashCardText.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}</div></div>
            <img loading="lazy" className="flashcardimg" style={FlashcardStyle(false)} src={props.flashCardImage[props.imageIndex]} alt="loading..." />
        </div>
    );
}

export default Flashcard;