import webpreview from "../../images/portfolio/personal/webpreview.png";
import webfigma from "../../images/portfolio/personal/figma.jpg";
import webproto from "../../images/portfolio/personal/figma.mp4";
import webbubble from "../../images/portfolio/personal/bubble.png";
import webenterexit from "../../images/portfolio/personal/enterexit.jpg";
import webbgdrag from "../../images/portfolio/personal/bgdrag.mp4";
import webuselocation from "../../images/portfolio/personal/uselocation.jpg";
import webhelpmodal from "../../images/portfolio/personal/helpmodal.mp4";
import webpageerror from "../../images/portfolio/personal/pageerror.jpg";
import webnavbar from "../../images/portfolio/personal/navbar.jpg";
import webtabledata from "../../images/portfolio/personal/tabledata.mp4";
import webtable from "../../images/portfolio/personal/table.jpg";
import webstagger from "../../images/portfolio/personal/stagger.mp4";
import webcontactdrag from "../../images/portfolio/personal/ContactDrag.jpg";
import webalert from "../../images/portfolio/personal/alert.mp4";
import webflasharray from "../../images/portfolio/personal/flashcardarray.jpg";
import webflashcard from "../../images/portfolio/personal/flashcard.mp4";

const PortfolioData = [
    {
        projectName : "Personal Web App",
        preview : webpreview,
        description : "A web app built from scratch with the React Framework and hosted on Firebase. Everything was built with responsiveness in mind, even the font size.",
        text : ["Using what I learned from the Codepath course for iOS development, I used Figma in order to develop a prototype for my personal web app:",
                "Although I wasn't completely specific with the design, I outlined the structure and labeled the type of information I wanted to share. I also took advantage of a Figma tool which allowed me to simulate some basic user interaction:",
                "I decided to code my web app with the React Framework, because while working on my Figma design, I was able to envision different ways of using JSX to achieve the result I wanted. Going into this project, I wanted to illustrate my ability to problem solve and not simply hard code every element. The first example is in the Home page, where I used a class name to define the styling and behavior for all of the bubbles, which reduced the amount of redundant code:",
                "Although I attempted to code everything from scratch in order to better understand JSX concepts, I did rely on the Framer Motion library to help animate my web app. I made use of their AnimatePresence and motion components to add entry and exit animations to all of the routes, as well as to specific components such as the help modal.",
                "I also used the drag gesture in the motion component to allow users to drag the background of the home screen in the x-axis to reveal more of the panorama. I then set the drag constraints equal to the borders of the wrapper div by passing the reference of the div to the dragConstraints attribute of the motion component.",
                "I added a Help Modal that shows up in every route and provides basic information about available user interactions. Instead of adding the Help Modal component to every page component, I only had to add it once in the App.js file, outside of the routes. To make sure the Help Modal resets even if the user navigates the app while the modal is open, I added a useEffect hook that closes the component whenever it tracks changes made to the current route.",
                "For the Help Modal and many other components in my app, I created separate JSON files with all of the information organized in a scalable manner. For this component, I used an array of objects with every element having the name of the section, an array of text, and an array of images. By organizing in this manner, I can conditionally render the information based on the index of the array, as well as easily add more text and images. In addition, the Help Modal reads the current route and renders the initial section to be displayed based on a switch statement.",
                "In order to deal with routes that don't exist in my app, I created a Page Error component and set its path equal to *. The component lets the user know that the route doesn’t exist and should instead return to the app through a button I provided.",
                "To assist user navigation, I created a custom navbar component. In order to make a dynamic component that changes depending on the active route, the navbar takes in 3 inputs and displays the correct buttons depending on which page the user is currently on. Whenever the user loads a page, the navbar is given 3 integers representing the indices of an array of key-value pairs that determine which buttons to be shown.",
                "For the experience page, the corresponding JSON file has 3 separate arrays: experience, education, and skills, with every element in each array representing a row. In addition, I made the value for the description key an array of strings with each string representing a new paragraph. This allows me to easily add or remove paragraphs by adding or removing strings from the text array.",
                "In order to add more functionality to this page, I added a zoom feature that dynamically changes the text as well as its styling based on which table cell is clicked. For this, I created a new component, popup, that takes 3 parameters: one to show/hide the popup, one for the text to be shown, and the last to indent the text if and only if the clicked cell is a description rather than a name or year. The parameter that shows/hides the popup is tracked using the React hook: useState.",
                "In the variants for each of the tables, the staggerChildren property is set to a nonzero value, which creates a delay between the animations of each individual table cell. For the Skills table, the whileInView attribute was used to make the animation run only when the user scrolls to it.",
                "For the rather straightforward Contact page, I implemented a feature that copies an email upon clicking it. When an email is copied, the user is alerted by text at the bottom right. Similar to the popup component, I made an alert component that conditionally renders based on which email was clicked. I added an animation for the alert that fades the component away after 1 second rather than by user input.",
                "In addition to the background of the contact card also being draggable like the home page, there is an additional functionality that allows the user to double click the background to enter/exit an expanded mode. This was done by combining the HTML onDoubleClick attribute, a useState hook to track if the background is expanded, and a function that animates the background expanding/shrinking.",
                "Lastly, for the About Me page, I implemented flashcards that revealed images when clicked on. Similar to the navbar's buttons, the flashcards are arranged in an array of key-value pairs and the flashcard that is displayed is determined by the index of the array.",
                "Originally, I only planned for a single image per flashcard, but afterwards I decided to change the structure of the code such that I can add as many images as I want without having to add extra code. Similar to the Experience page, one of the key-value pairs is an array, this time of images. By controlling another index for the array of images, the user is now able to cycle through all of the images I added for each flashcard. For the final touches, I added a flipping animation every time the flashcard is clicked.",
                "Every page has its own elements and functionality, and all of the components are responsive and scalable. While the contents of the web app describe me as a person, I hope that the app itself is able to show my sincerity towards computer science."
                ],
        images : [webfigma, webproto, webbubble, webenterexit, webbgdrag, webuselocation, webhelpmodal, webpageerror, webnavbar, webtabledata, webtable, webstagger, webalert, webcontactdrag, webflasharray, webflashcard, null],
        imageType : [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0],
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
        imageType : [0],
        links : [""],
        linklabels : [""]
    },
    {
        projectName : "Ex 3",
        preview : webpreview,
        description : "example",
        text : ["something"],
        images : [webpreview],
        imageType : [0],
        links : [""],
        linklabels : [""]
    },
    {
        projectName : "Ex 4",
        preview : webpreview,
        description : "example",
        text : ["something"],
        images : [webpreview],
        imageType : [0],
        links : [""],
        linklabels : [""]
    },
    {
        projectName : "Ex 5",
        preview : webpreview,
        description : "example",
        text : ["something"],
        images : [webpreview],
        imageType : [0],
        links : [""],
        linklabels : [""]
    },
    {
        projectName : "Ex 6",
        preview : webpreview,
        description : "example",
        text : ["something"],
        images : [webpreview],
        imageType : [0],
        links : [""],
        linklabels : [""]
    }
];

export default PortfolioData;