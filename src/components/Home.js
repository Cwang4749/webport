import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"; // For navigating to different pages
import { motion, useAnimate } from "framer-motion";

import asterisk from "../images/home/asterisk.png"; // center image of home page
import sprite from "../images/home/sprite.png";
import "./styles/Home.css"; // css for home page

function Home() {
    let [left_pos, set_left_pos] = useState(0);
    let [top_pos, set_top_pos] = useState(0);
    let [rotate_pos, set_rotate_pos] = useState(0);
    const [scope, animate] = useAnimate();

    const sprite_style = {
        "width": "7%",
        "position": "fixed",
        "top": 0, 
        "left": 0
    }

    const moveSprite = e =>  {
        switch (e.key) {
            case 'ArrowLeft':
                if(left_pos > 0) {
                    set_left_pos(left_pos -= 20);
                }
                set_rotate_pos(rotate_pos -= 10);
                break;
            case 'ArrowRight':
                if(left_pos < 300) {
                    set_left_pos(left_pos += 20);
                }
                set_rotate_pos(rotate_pos += 10);
                break;
            case 'ArrowUp':
                if(top_pos > 0) {
                    set_top_pos(top_pos -= 20);
                }
                set_rotate_pos(rotate_pos -= 10);
                break;
            case 'ArrowDown':
                if(top_pos < 300) {
                    set_top_pos(top_pos += 20);
                }
                set_rotate_pos(rotate_pos += 10);
                break;
        }
        if(e.key !== 'r')
        {
            animate([[scope.current, {x: left_pos, y: top_pos, rotate: rotate_pos}, {duration: .1}]]);
        }
    };

    const resetSprite = e => {
        if(e.key === 'r') {
            set_left_pos(0);
            set_top_pos(0);
            set_rotate_pos(0);
            setTimeout(() => {
                animate([[scope.current, {x: left_pos, y: top_pos, rotate: rotate_pos}, {duration: 1}]]);
            }, 10);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', moveSprite);
        document.addEventListener('keyup', resetSprite);
    
        return function () {
            document.removeEventListener('keydown', moveSprite);
            document.removeEventListener('keyup', resetSprite);
        };
    }, [top_pos, left_pos]);

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {duration: 0.7} }}
            exit={{ opacity: 0, transition: {duration: 0.4} }}
        >

            <motion.div
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                transition={{duration: 0.5}}
            >
                <Link to="/AboutMe">
                    <span className="bubble" id="aboutme">
                        <h1 className="bubble_heading"> About Me </h1>
                        <p className="bubble_text"> Background <br/> Hobbies <br/> Fun Facts </p>
                    </span>
                </Link>
            </motion.div>

            <motion.div
                initial={{ x: 30 }}
                animate={{ x: 0 }}
                transition={{duration: 0.5}}
            >
                <Link to="/Portfolio">
                    <span className="bubble" id="portfolio">
                        <h1 className="bubble_heading"> Portfolio </h1>
                        <p className="bubble_text"> C++ <br/> React <br/> Flutter </p>
                    </span>
                </Link>
            </motion.div>

            <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: .5}}
            >
                <Link to="/Contact">
                    <span className="bubble" id="contact">
                        <h1 className="bubble_heading"> Contact </h1>
                        <p className="bubble_text"> LinkedIn <br/> Email <br/> Github </p>
                    </span>
                </Link>
            </motion.div>

            <motion.div
                initial={{ x: -30 }}
                animate={{ x: 0 }}
                transition={{duration: 0.5}}
            >
                <Link to="/Experience">
                    <span className="bubble" id="experience">
                        <h1 className="bubble_heading"> Experience </h1>
                        <p className="bubble_text"> Education <br/> Work <br/> Skills </p>
                    </span>
                </Link>
            </motion.div>

            <motion.div
                initial={{ scale: 0.9}}
                animate={{ scale: 1 }}
                transition={{ duration: .2}}
            >
                <img className="asterisk" src={asterisk} />
            </motion.div>

            <motion.img ref={scope} src={sprite} style={sprite_style}/>
        </motion.div>
    );
}

export default Home;