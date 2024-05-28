import React, {useState} from "react";
import { Link } from "react-router-dom";
import fabarrow from "../images/portfolio/fabarrow.png";
import "./styles/FAB.css";

function FAB(props) {
    const [fab_expand, set_fab_expand] = useState(false);
    const styles = {
        expanded: {
            width: "300px",
            borderRadius: "20px",
            transition: ".4s"
        },
        resting: {
            width: "75px",
            transition: ".2s"
        }
    }

    return(
        <div>
            <div className="fabcontainer" id={fab_expand ? "fabexpand" : "fabrest"} onClick={() => set_fab_expand(!fab_expand)} 
                style={fab_expand ? styles.expanded : styles.resting}>
                {fab_expand ? 
                <div> 
                    <div className="fablinks"><Link to="/Portfolio">Portfolio</Link></div>
                    {props.links == null ? "" : props.links.map((link, indx) => <div key={indx} className="fablinks"><a href={link} target="_blank" rel="noreferrer">{props.labels[indx]}</a></div>)}
                </div> : <img className="fabarrow" loading="lazy" src={fabarrow} alt=""/>}
            </div>

            <div onClick={() => set_fab_expand(false)} style={fab_expand ? {'width': '100vw', 'height': '100vh', 'zIndex': '1', 'position': 'fixed', 'opacity': '0', 'top': '0', 'left': '0'} : {'visibility': 'hidden'}} />
        </div>
    )
}

export default FAB;