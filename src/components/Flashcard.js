import React, {useState} from "react";
import "./styles/Flashcard.css";

function Flashcard(props) {
    
    function FlipFlashCard() {
        // if(props.active) {
        //     props.setActive(false);
        // }
        // else {
        //     props.setActive(true);
        //     if(props.imageIndex == 0 || props.imageIndex == 2) {
        //         props.setImageIndex(1);
        //     }
        //     else {
        //         props.setImageIndex(2);
        //     }
        // }
        if(props.imageIndex + 1 == props.flashCardImage.length)
        {
            props.setImageIndex(-1);
        }
        else {
            props.setImageIndex(props.imageIndex + 1);
        }
    }

    return (
        <div className="flashcard" onClick={() => FlipFlashCard()}>
            <div className="flashcardtext" style={props.imageIndex != -1 ? {'opacity': '0', 'overflow': 'hidden'} : {'opacity' : '1'}}><div>{props.flashCardText.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}</div></div>
            <img loading="lazy" className="flashcardimg" style={props.imageIndex != -1 ? {'opacity': '1'} : {'opacity': '0'}} src={props.flashCardImage[props.imageIndex]} alt="loading..." />
        </div>
    );
}

export default Flashcard;