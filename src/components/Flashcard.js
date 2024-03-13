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

    return (
        <div className="flashcard" onClick={() => FlipFlashcard()} style={flip ? {'transform': 'rotateX(360deg)'} : {'transform' : 'rotateX(0deg)'}} >
            <div className="flashcardtext">
                {props.imageIndex == -1 ? <div>{props.flashCardText.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}</div> : ""}
            </div>
            {props.imageIndex != -1 ? <img loading="lazy" className="flashcardimg" src={props.flashCardImage[props.imageIndex]} alt="loading..." /> : ""}
        </div>
    );
}

export default Flashcard;