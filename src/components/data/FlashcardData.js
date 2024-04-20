import redenvelope from '../../images/aboutme/redenvelope.webp';
import scenery1 from '../../images/aboutme/scenery.gif';
import scenery2 from '../../images/aboutme/scenery2.webp';
import scenery3 from '../../images/aboutme/scenery3.gif';
import blackbelt from '../../images/aboutme/blackbelt.webp';
import knitting from '../../images/aboutme/funfact.webp';

const FlashcardData = [
    {
        description: ["My name is Calvin Wang, and I was born and raised in New York City. My parents are Chinese immigrants who met in the US."],
        image: [redenvelope]
    },
    {
        description: ["I enjoy spending time with my family, especially taking them to parks and walking the trails. Although I enjoy most sports, the one I play the most is basketball. At home, I play games, watch movies/tv shows, and I also like to read light novels."],
        image: [scenery1, scenery2, scenery3]
    },
    {
        description: [
            "My brother and I became 1st degree black belts after years of training. Even though I have stopped training, the muscle memory and the life lessons that I learned still persist.",
            "I learned how to solve the rubik's cube through YouTube, my best time being 27 seconds. I also learned how to knit and crochet through YouTube. So far, I have knitted scarves for my mom and my little cousin."
        ],
        image: [blackbelt, knitting]
    }
];

export default FlashcardData;