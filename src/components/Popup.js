import React from "react";
import "./styles/Popup.css"

// checks if the text is in an array, map if true, or print text if false
function Popup(props) {
    return (props.zoom) ? (
        <div className="popup" onClick={() => props.setZoom(false)}>
            <div className="popupinner">
                <div id="popuptext" style={props.indent ? {'textIndent': '7%', 'fontWeight': '400'} : {'textIndent': '0%', 'fontWeight': '900'}}>
                    {Array.isArray(props.zoomText) ? props.zoomText.map((str,index) => {return(<p key={index}>{str} <br/></p> )}) : props.zoomText}
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup;