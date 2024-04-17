import bubblehover from "../../images/help/bubblehover.jpg";
import asteriskhover from "../../images/help/asteriskhover.jpg";
import bgdrag from "../../images/help/bgdrag.jpg";
import navflow from "../../images/help/navbarflow.webp";
import navstates from "../../images/help/navstates.jpg";
import spritemove from "../../images/help/spritemove.jpg";
import spriteflow from "../../images/help/spriteflow.jpg";
import flashcardflip from "../../images/help/flashcardflip.webp";
import projexpand from "../../images/help/projexpand.webp";
import projdetails from "../../images/help/projdetails.webp";
import fabexpand from "../../images/help/fabexpand.webp";
import emailcopy from "../../images/help/emailcopy.jpg";
import contactdrag from "../../images/help/contactdrag.jpg";
import doubleclick from "../../images/help/doubleclick.webp";
import pfphover from "../../images/help/pfphover.jpg";
import popupexpand from "../../images/help/popupexpand.webp";

const HelpData = [
    {
        section: "Home",
        text: [
            "Every bubble expands to reveal what the page contains. Clicking on the bubble will route to that specific page.",
            "The background image is draggable in the x axis. Dragging will reveal more of the panorama.",
            "The asterisk in the center has a hover animation. Clicking without releasing the image will reverse the spin."
        ],
        images: [
            bubblehover,
            bgdrag,
            asteriskhover
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
            "Clicking on each project will expand the preview to show some more basic information about it.",
            "Clicking the button will redirect to a more in depth explanation of the project.",
            "The floating action button will reveal a set of links related to the project."
        ],
        images: [
            projexpand,
            projdetails,
            fabexpand
        ]
    },
    {
        section: "Contact",
        text: [
            "The two links at the top will open in a new tab when clicked. Clicking either of the two emails at the bottom will copy the email that was pressed to the user's clipboard.",
            "Just like the home page, the contact card background is also a draggable panorama.",
            "Double clicking the contact card background will set the card to full screen. Double clicking it when it is already full screen will revert it to the original size.",
            "The profile picture at the bottom left has a hovering animation."
        ],
        images: [
            emailcopy,
            contactdrag,
            doubleclick,
            pfphover
        ]
    },
    {
        section: "Experience",
        text: [
            "Every cell in each of the tables (including skills) is clickable, and will reveal a modal with the same information displayed in a more legible manner."
        ],
        images: [
            popupexpand
        ]
    }
];

export default HelpData;