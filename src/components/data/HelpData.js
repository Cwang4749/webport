import bubblehover from "../../images/help/bubblehover.jpg";
import asteriskhover from "../../images/help/asteriskhover.jpg";
import bgdrag from "../../images/help/bgdrag.jpg";
import navflow from "../../images/help/navbarflow.webp";
import navstates from "../../images/help/navstates.jpg";
import spritemove from "../../images/help/spritemove.jpg";
import spriteflow from "../../images/help/spriteflow.jpg";
import flashcardflip from "../../images/help/flashcardflip.webp";

const HelpData = [
    {
        section: "Home",
        text: [
            "Every bubble expands to reveal what the page contains. Clicking on the bubble will route to that specific page.",
            "The asterisk in the center has a hover animation. Clicking without releasing the image will reverse the spin.",
            "The background image is draggable in the x axis. Dragging will reveal more of the panorama."
        ],
        images: [
            bubblehover,
            asteriskhover,
            bgdrag
        ]
    },
    {
        section: "Navbar",
        text: [
            "The magnifying glass icon navigates to the about me page, the folder icon to the portfolio page, the mail icon to the contact page, and the cap icon to the experience page.",
            "The navbar changes depending on which page the user is currently on. The priority is as follows: Home, About Me, Portfolio, Contact, Experience."
        ],
        images: [
            navflow,
            navstates
        ]
    },
    {
        section: "About Me",
        text: [
            "The sprite on the screen is movable with the arrow keys. Pressing the r button two times will reset the sprite to its original position.",
            "Clicking on the sprite will cycle through 5 different sprites.",
            "Clicking the gray circles will change the current set of flashcards. Clicking the flashcard will cycle through the corresponding text and images for that set."
        ],
        images: [
            spritemove,
            spriteflow,
            flashcardflip
        ]
    },
    {
        section: "Portfolio",
        text: [
            "A",
            "A",
            "A"
        ],
        images: [
            bubblehover,
            bubblehover,
            bubblehover
        ]
    },
    {
        section: "Contact",
        text: [
            "A",
            "A",
            "A"
        ],
        images: [
            bubblehover,
            bubblehover,
            bubblehover
        ]
    },
    {
        section: "Experience",
        text: [
            "A",
            "A",
            "A"
        ],
        images: [
            bubblehover,
            bubblehover,
            bubblehover
        ]
    }
];

export default HelpData;