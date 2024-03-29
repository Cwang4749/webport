import webpreview from "../../images/portfolio/personal/webpreview.png";
import webfigma from "../../images/portfolio/personal/figma.png";
import webproto from "../../images/portfolio/personal/figma.gif";
import webbubble from "../../images/portfolio/personal/bubble.png";
import webnavbar from "../../images/portfolio/personal/navbar.png";
import webtabledata from "../../images/portfolio/personal/tabledata.gif";
import webtable from "../../images/portfolio/personal/table.png";
import webanim from "../../images/portfolio/personal/onanimationend.png";
import webalert from "../../images/portfolio/personal/alert.gif";
import webflasharray from "../../images/portfolio/personal/flashcardarray.png";
import webflashcard from "../../images/portfolio/personal/flashcard.gif";

const PortfolioData = [
    {
        projectName : "Personal Web App",
        preview : webpreview,
        description : "A web app built from scratch with the React Framework and hosted on Firebase. Everything was built with responsiveness in mind, even the font size.",
        text : ["Using what I learned from the Codepath course for iOS development, I used Figma in order to develop a prototype for my personal web app:",
                "Although I wasn’t completely specific with the design, I outlined the structure and labeled the type of information I wanted to share. I also took advantage of a Figma tool which allowed me to simulate some basic user interaction:",
                "I decided to code my web app with the React Framework, because while working on my Figma design, I was able to envision different ways of using JSX to achieve the result I wanted. Going into this project, I wanted to illustrate my ability to problem solve and not simply hard code every element. The first example is in the Home page, where I used a class name to define the styling and behavior for all of the bubbles, which reduced the amount of redundant code:",
                "The second example is in the custom navbar that I added to all of the pages except Home. Since I wanted to have a dynamic navbar component that I could add to all of the pages with minimal extra coding, I created a navbar that takes in 3 inputs and will display the correct buttons depending on which page the user is currently on. Whenever the user loads a page, the navbar is given 3 integers representing the indices of an array of key-value pairs that determine which buttons to be shown.",
                "The third example is in the Experience page, where I used arrays of key-value pairs to map into tables. In addition, since I wanted to add a line break and an indentation to a specific column, I made the value for the description key an array of strings, with each new element in the array becoming a new paragraph. By using an array instead of hard coding the line break, I can now change the information by adding or removing paragraphs and everything will still function normally without having to do any more coding.",
                "In order to add more functionality to this page, I added a zoom feature that dynamically changes the text as well as its styling based on which table cell is clicked. For this, I created a new component, popup, that takes 3 parameters: one to show/hide the popup, one for the text to be shown, and the last to indent the text if and only if the clicked cell is a description rather than a name or year. The parameter that shows/hides the popup is a React useState which is a hook that allows for basic user interaction.",
                "For the rather straightforward Contact page, I implemented a feature that copies an email upon clicking it. When an email is copied, the user is alerted by text at the bottom right. Similar to the popup component, I made an alert component that conditionally renders based on which email was clicked. I added an animation for the alert that fades the component away after 1 second rather than by user input.",
                "In order to immediately reset the animation when another email is clicked, the function that handles the user click first sets the alert to false then back to true after 10 microseconds.",
                "Lastly, for the About Me page, I implemented flashcards that revealed images when clicked on. Similar to the navbar’s buttons, the flashcards are arranged in an array of key-value pairs and the flashcard that is displayed is determined by the index of the array.",
                "Originally, I only planned for a single image per flashcard, but afterwards I decided to change the structure of the code such that I can add as many images as I want without having to add extra code. Similar to the Experience page, one of the key-value pairs is an array, this time of images. By controlling another index for the array of images, the user is now able to cycle through all of the images I added for each flashcard. For the final touches, I added a flipping animation every time the flashcard is clicked.",
                "Every page has its own elements and functionality, and all of the components are responsive and scalable. While the contents of the web app describe me as a person, I hope that the app itself is able to show my sincerity towards computer science."
                ],
        images : [webfigma, webproto, webbubble, webnavbar, webtabledata, webtable, webanim, webalert, webflasharray, webflashcard],
        links : ["https://www.figma.com/file/4MJJoEXwVqx3MK0KQT5bpr/Web?type=design&node-id=5%3A99&mode=design&t=yShcxk0IxAI1qbOA-1 ",
                "https://github.com/Cwang4749/webport"
                ],
        linklabels : ["Figma", "Github"]                
    },
    {
        projectName : "Ex 2",
        preview : webpreview,
        description : "example",
        text : ["something"],
        images : [webpreview],
        links : [""],
        linklabels : [""]
    },
    {
        projectName : "Ex 3",
        preview : webpreview,
        description : "example",
        text : ["something"],
        images : [webpreview],
        links : [""],
        linklabels : [""]
    },
    {
        projectName : "Ex 4",
        preview : webpreview,
        description : "example",
        text : ["something"],
        images : [webpreview],
        links : [""],
        linklabels : [""]
    },
    {
        projectName : "Ex 5",
        preview : webpreview,
        description : "example",
        text : ["something"],
        images : [webpreview],
        links : [""],
        linklabels : [""]
    },
    {
        projectName : "Ex 6",
        preview : webpreview,
        description : "example",
        text : ["something"],
        images : [webpreview],
        links : [""],
        linklabels : [""]
    }
];

export default PortfolioData;