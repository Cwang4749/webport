import React, {useState, useEffect, useCallback} from "react";
import { motion, useAnimate } from "framer-motion";
import sprite from "../images/aboutme/sprite.webp";
import heart from "../images/aboutme/heart.png";
import pig from "../images/aboutme/pig.webp";
import flower from "../images/aboutme/flower.webp";
import cube from "../images/aboutme/cube.webp";

function Sprite() {
    const [spriteref, animatesprite] = useAnimate();
    let [curr_sprite, set_sprite] = useState(0);

    let [left_pos, set_left_pos] = useState(0);
    let [top_pos, set_top_pos] = useState(0);
    let [rotate_pos, set_rotate_pos] = useState(0);

    const sprites = [
        sprite,
        heart,
        pig,
        flower,
        cube
    ]

    const changeSprite = () => {
        if(curr_sprite === sprites.length - 1)
        {
            set_sprite(0);
        }
        else {
            set_sprite(curr_sprite += 1);
        }
    }

    const sprite_style = {
        "width": "8vw",
        "position": "fixed",
        "top": "0", 
        "left": "0",
        "zIndex": "1",
        "aspectRatio": "1",
        "cursor": "pointer",
        "outline": "none"
    }

    const moveSprite = useCallback(e =>  {
        switch (e.key) {
            case 'ArrowLeft':
                if(left_pos > 0) {
                    set_left_pos(left_pos => (left_pos -= 2));
                }
                set_rotate_pos(rotate_pos => (rotate_pos -= 15));
                break;
            case 'ArrowRight':
                if(left_pos < 92) {
                    set_left_pos(left_pos => (left_pos += 2));
                }
                set_rotate_pos(rotate_pos => (rotate_pos += 15));
                break;
            case 'ArrowUp':
                if(top_pos > 0) {
                    set_top_pos(top_pos => (top_pos -= 2));
                }
                set_rotate_pos(rotate_pos => (rotate_pos -= 15));
                break;
            case 'ArrowDown':
                if(top_pos < 86) {
                    set_top_pos(top_pos => (top_pos += 2));
                }
                set_rotate_pos(rotate_pos => (rotate_pos += 15));
                break;
            default:
                break;
        }
        if(e.key !== 'r')
        {
            animatesprite([[spriteref.current, {x: left_pos + "vw", y: top_pos + "vh", rotate: rotate_pos}, {duration: .1}]]);
        }
    }, [top_pos, left_pos, rotate_pos, animatesprite, spriteref]);

    const resetSprite = useCallback(e => {
        if(e.key === 'r') {
            set_left_pos(0);
            set_top_pos(0);
            set_rotate_pos(0);
            setTimeout(() => {
                animatesprite([[spriteref.current, {x: left_pos + "vw", y: top_pos + "vh", rotate: rotate_pos}, {duration: 1}]]);
            }, 10);
        }
    }, [top_pos, left_pos, rotate_pos, animatesprite, spriteref]);

    useEffect(() => {
        document.addEventListener('keydown', moveSprite);
        document.addEventListener('keyup', resetSprite);
    
        return function () {
            document.removeEventListener('keydown', moveSprite);
            document.removeEventListener('keyup', resetSprite);
        };
    }, [top_pos, left_pos, rotate_pos, spriteref, animatesprite, moveSprite, resetSprite]);

    return(
        <motion.img 
            ref={spriteref} loading="lazy" src={sprites[curr_sprite]} 
            onClick={() => changeSprite()}
            style={sprite_style} whileHover={{ scale: 1.05, transition: { duration: .2 } }}
            whileTap={{ scale: 0.95 }}
        />
    );
}

export default Sprite;