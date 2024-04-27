// PERSONAL WEB APP IMAGES
import webpreview from "../../images/portfolio/personal/preview.jpg";
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
import webalert from "../../images/portfolio/personal/alert.mp4";
import webcontactdrag from "../../images/portfolio/personal/ContactDrag.jpg";
import webflasharray from "../../images/portfolio/personal/flashcardarray.jpg";
import webflashcard from "../../images/portfolio/personal/flashcard.mp4";

// DIET UNQUIET IMAGES
import dietpreview from "../../images/portfolio/unquiet/preview.jpg";
import dietfrontpage from "../../images/portfolio/unquiet/frontpage.jpg";
import diettrello from "../../images/portfolio/unquiet/trello.jpg";
import dietfigma from "../../images/portfolio/unquiet/figma.jpg";
import dietwelcomenav from "../../images/portfolio/unquiet/welcomenav.jpg";
import dietsearch from "../../images/portfolio/unquiet/search.jpg";
import dietsearchlist from "../../images/portfolio/unquiet/searchlist.mp4";
import dietrecipedetails from "../../images/portfolio/unquiet/recipedetails.mp4";
import dietexercisesearch from "../../images/portfolio/unquiet/exercisesearch.jpg";
import dietfirestore from "../../images/portfolio/unquiet/firestore.jpg";
import dietlev from "../../images/portfolio/unquiet/lev.mp4";
import dietdeploy from "../../images/portfolio/unquiet/deploy.jpg";

// SEASCROLL IMAGES
import seapreview from "../../images/portfolio/seascroll/preview.jpg";
import seahome from "../../images/portfolio/seascroll/home.jpg";
import seatable from "../../images/portfolio/seascroll/table.jpg";
import seapostgres from "../../images/portfolio/seascroll/postgres.mp4";
import seacloudfunc from "../../images/portfolio/seascroll/cloudfunc.jpg";
import seapostman from "../../images/portfolio/seascroll/postman.mp4";
import seafuture from "../../images/portfolio/seascroll/future.jpg";
import seatestlab from "../../images/portfolio/seascroll/testlab.jpg";
import seadeploy from "../../images/portfolio/seascroll/deploy.jpg";

// CHAPK IMAGES
import chappreview from "../../images/portfolio/chapk/preview.jpg";
import chapfigma from "../../images/portfolio/chapk/figma.jpg";
import chaplistview from "../../images/portfolio/chapk/listview.jpg";
import chapresponsive from "../../images/portfolio/chapk/responsive.mp4";
import chapnavigation from "../../images/portfolio/chapk/navigation.mp4";
import chapfirestore from "../../images/portfolio/chapk/firestore.mp4";
import chapfuture from "../../images/portfolio/chapk/future.jpg";
import chaptranslate from "../../images/portfolio/chapk/translate.mp4";

const PortfolioData = [
    {
        projectName : "Personal Web App",
        preview : webpreview,
        description : "A web app built from scratch with the React Framework and hosted on Firebase. Every component was built with responsiveness in mind. In addition to the information displayed, the app itself is an expression of me.",
        text : [
            "Using what I learned from the Codepath course for iOS development, I used Figma in order to develop a prototype for my personal web app:",
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
        images : [
            webfigma, webproto, webbubble, webenterexit, webbgdrag,
            webuselocation, webhelpmodal, webpageerror, webnavbar,
            webtabledata, webtable, webstagger, webalert, webcontactdrag,
            webflasharray, webflashcard, null
        ],
        imageType : [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0],
        links : [
            "https://www.figma.com/file/4MJJoEXwVqx3MK0KQT5bpr/Web?type=design&node-id=5%3A99&mode=design&t=yShcxk0IxAI1qbOA-1 ",
            "https://github.com/Cwang4749/webport"
        ],
        linklabels : ["Figma", "GitHub"]                
    },
    {
        projectName : "Diet Unquiet",
        preview : dietpreview,
        description : "A web app built by 7 Hunter College undergraduates with the React Framework. It offers the user a variety of options and approaches when it comes to losing weight, and staying healthy. Features include: user sign up/login, Google OAuth, recipe/exercise search and creation, journals, etc.",
        text : [
            "For my capstone project, I worked in a team of 7 to develop a web application using the React Framework. Our application, Diet Unquiet, is a proof of concept for a personalized health tracker that touches upon diet, exercise, and mental health.",
            "In order to progress in a coherent manner, we distributed tasks using Trello, a free online project management tool. As suggested by one of my teammates (Ivan), we made a list of everything we needed to do and assigned them points relative to the estimated amount of time required to complete it. Each week, after discussing the progress that was made, we would move completed tasks to a different list and redistribute the remaining tasks (if there were new tasks, we would add it to the list). Having clear goals and responsibilities made working as a team much easier.",
            "While everyone else began researching concepts related to their tasks, I spent the first week creating the initial Figma design. The initial Figma design included a logo, pages we knew we wanted to add, and a basic prototype that illustrated how the pages would flow.",
            "After the initial stages, the first few components I worked on were the welcome pages. I designed the Welcome page and set up the framework for the About Us and Contact pages. Using the react router bootstrap library, I was able to easily integrate a ready-made navbar, with some customization, into the previously mentioned pages.",
            "The next component I worked on was the Recipe Search component. This component went through many different iterations, with the final iteration utilizing a combination of the data from Cloud Firestore (a NoSQL database) and the data from a free recipe API called TheMealDB. The most basic functionality for this component is to be able to search for recipes found in this API from user input. The original search algorithm used a function that returns true if the first string is a substring of the second string.",
            "In order to make the process more intuitive, I added a second component for search results, that gets rendered if the user pressed the enter button when searching. In addition, both the recipe search page and the search results page have dynamic lists that change immediately based on user input. This was achieved with a combination of the onChange attribute, a useState that tracks the current user input, and a conditional render of the list of relevant recipes.",
            "After the user finds a recipe, they are brought to the Recipe Details component which displays information such as the name, an image, some keywords, ingredients, and instructions. The display for the name of the recipe was inspired by a project by Comehope on FreeFrontEnd. Potential features that we were never able to fully implement were: searching by keywords and favoriting/unfavoriting recipes. The floating action button at the bottom right of the screen is animated properly, but lacks any functionality due to time constraints. In addition, searching by keywords could have been possible using the same logic as the allergy/injury filter that was implemented by one of my teammates (Christopher).",
            "Since the Exercise Search page is similar to the Recipe Search page, I used the same logic to code the Exercise Search component. It has the same dynamic list of results, its own exercise search results page, and an exercise details page. While the recipe data originates from an external database, the exercise data comes from an API that another team member created for this project.",
            "While I worked mostly on the front end, I also had to work a lot with the backend, including reading/writing to Cloud Firestore. I worked with my teammate Christopher to implement a feature that lets users create their own recipe/exercise, which when added to the database, can allow other users to find that recipe/exercise through the corresponding search pages.",
            "Although the original search algorithm gets the job done, one of the issues with this approach is the lack of flexibility. The comparison compares the full string, including spaces, rather than individual words. As a result, the results tend to be less relevant than what the user hoped for. For the remainder of this project, I worked on implementing an improved search algorithm using a concept called: Levenshtein Distance (lev distance). Lev distance, or rather how different two strings are from each other, can be calculated by finding the minimum number of substitutions/insertions/deletions needed to change one string into the other. Although I coded my own version of calculating the lev distance, I discovered that it was inefficient when compared to the lev distance function provided by the fastest-levenshtein library. Combining the lev distance function, a priority queue to order the results, and some regular expressions (regex), the current search algorithm produces much more relevant results.",
            "Finally, using the Firebase Command Line Interface (CMI), we built the project for production and deployed it.",
            "Although I only described the parts I worked on, our project has much more to offer. Features such as: user creation, google authentication, filter recipe search by allergies, filter exercise search by injuries, exercise API, gym/park locator, mental health journals, etc. In the list of links, I included links to the Figma, the GitHub repository, one of the presentations we used to update our progress, the final paper we wrote for the project, the exercise API, and the project itself."
        ],
        images : [
            dietfrontpage, diettrello, dietfigma, dietwelcomenav, dietsearch,
            dietsearchlist, dietrecipedetails, dietexercisesearch, dietfirestore,
            dietlev, dietdeploy, null
        ],
        imageType : [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
        links : [
            "https://www.figma.com/file/fgRn4YtvRbC4BpVvHny4fw/DIETING-APP?type=design&node-id=0%3A1&mode=design&t=1Qg4ueHOuiPr6yuE-1",
            "https://github.com/Cwang4749/DietUnquiet",
            "https://docs.google.com/presentation/d/1p3vHKenZDZSG-KwHi57EqR0asGzXpFBgg8AlzXixqH4/edit?usp=sharing",
            "https://drive.google.com/file/d/1CfyGiKkfLPqs-NdP4RY0P1rutDnCqxTA/view?usp=sharing",
            "https://vast-teal-ostrich-ring.cyclic.app/",
            "https://capstone-e3196.web.app/"
        ],
        linklabels : ["Figma", "GitHub", "Example", "Final Paper", "Exercise API", "Diet Unquiet"]
    },
    {
        projectName : "Seascroll",
        preview : seapreview,
        description : "An Android app built using the Flutter Framework, by 5 Hunter College undergraduates. Data is read and written to a PostgreSQL database on Google Cloud Platform through Cloud Functions.",
        text : [
            "Seascroll is an Android application built using the Flutter Framework. The data, threads created by users as well as user information, is stored in a PostgreSQL database on Google Cloud Platform (GCP). Users can open a random thread to read the messages other users have written, and can also add to it themselves. The app was built in Android Studio, which offers a free Android device simulator to test our app with.",
            "For this project, I mainly worked on the backend. The first step was to create an outline for how the data would be stored in the PostgreSQL database. We had two different sets of data we wanted to store: one table for the list of users and another table for the user created threads. After many iterations, the structure we decided upon was: UserID, Name, Bio, PFP for the users and ScrollID, Title, Messages for the threads. The UserID is an auto generated unique identifier created by Firebase when the account is created. The name, bio, and link for profile picture are all strings supplied by the user when creating the account. The ScrollID is the unique identifier for each thread, the title is a string for the name, and the messages column is an array of strings for all of the messages in the thread.",
            "In the beginning, I used the Cloud Shell Terminal to manually create the tables in the PostgreSQL database. After connecting to the project and accessing the database, PostgreSQL commands can be run from the terminal to add, edit, remove, etc.",
            "In order to integrate the database into our application, I had to find a method to read and write to the database from the app itself rather than the Cloud Shell Terminal. Eventually, I discovered a way to use Cloud Functions as API endpoints that could interact with our database. As a result, I created 5 different Cloud Functions, each with its own purpose: to return the list of users, to return the list of threads, to add a user, to add a thread, and to add a message to an existing thread.",
            "After creating each function, a lot of testing was done using Postman, an application for testing APIs. By supplying the endpoint as well as choosing an HTTP method (GET for getting data and Post for adding/changing data), I was able to make sure that the Cloud Functions worked as intended.",
            "Since the application grabs data from a database through API endpoints, the resulting process is asynchronous by nature. In order to render the current screen while taking into account the asynchronicity, a future builder. For example, in the scrolls page of the application, a future builder is used to render a circular progress indicator while the data is still being grabbed, and the scrolls after the data is successfully retrieved. To achieve this, I created an asynchronous function that uses the GET endpoint and returns the data from the database. Then, I created a Future List variable and initialized it to the data that was returned. Lastly, I used a Future Builder that tracks the Future List variable and renders either the progress indicator or the scrolls based on whether that variable is null or has data.",
            "After the app was completed, we utilized Firebase’s Test Lab to test the performance of our app.",
            "Finally, we built the app for production in the Flutter Command-Line and distributed the resulting APK file with Firebase’s App Distribution tool. This allowed one of our teammates (Hardip) to download the APK and run the application from their mobile device.",
            "Although I only described the parts I worked on directly, the contributions of my teammates are not any less than mine. From the Canva design, to the splash page, login page, sign up page, thread creation page, add message page, etc, the efforts of everyone on the team is apparent. ***A VERY IMPORTANT NOTE THAT IS ALSO MENTIONED IN THE README FILE: DUE TO THE LACK OF FUNDS FOR THE OPERATING COST OF CLOUD FUNCTIONS AND POSTGRESQL DATABASES, NEITHER ARE CURRENTLY ACTIVE. **ANOTHER NOTE: The original repository in GitLab has been deleted and has since been moved to GitHub."
        ],
        images : [
            seahome, seatable, seapostgres, seacloudfunc,
            seapostman, seafuture, seatestlab, seadeploy, null
        ],
        imageType : [0, 0, 1, 0, 1, 0, 0, 0, 0],
        links : [
            "https://docs.google.com/presentation/d/1nYgyoakRMs74aPyHSNRH39X9fGpAlGkhgqsl1MBK8ag/edit?usp=sharing",
            "https://drive.google.com/file/d/1Ed8_cQG7XgFdgI4dUAbYiVeUKLrWspJ3/view?usp=sharing",
            "https://github.com/Cwang4749/Seascroll"
        ],
        linklabels : ["Final Ppt" ,"APK", "GitHub"]
    },
    {
        projectName : "Chap K",
        preview : chappreview,
        description : "A web app built using the Flutter Framework, by a group of 5 Hunter College undergraduates. Combines responsive widgets, the Firestore Database, a Stream/Future Builder for asynchronous functions, and a Google Translate API.",
        text : [
            "Chap-K is a web app built using the Flutter Framework. Although every member of our team was assigned a different page to work on, we designed our pages on the same Figma project.",
            "In order to match the design I created in Figma, I first used a local array to hold example posts, and rendered them through a ListView Builder. The ListView Builder maps out the contents of the array by building every element with the same widget. In order to add a layer of abstraction, I created a new widget called PostWidget that requires two strings for initialization, and returned this new PostWidget as the method of building every item.",
            "By using variables to keep track of the current viewport size: MediaQuery.of(context).size.height and MediaQuery.of(context).size.width, it was possible to make the widgets relatively responsive.",
            "After finishing the design, the next step was to create buttons for navigation. From the Home page that I worked on, the user is able to click into a specific story, write a new story, or sign out. In the PostWidget that I created, I wrapped the widget that displayed each story with a GestureDetector, and in the onTap function, I made it navigate to the ViewStory page. In order to navigate to the Write page that another teammate (Preetom) created, I added a FloatingActionButton widget, and handled the navigation in the onPressed function. Lastly, I created a HomeSignOutButton widget to handle navigation back to the welcome page. With the help of the teammate who worked on the login/sign up functionality (Anyeli), I also used the signOut function to make the user no longer able to access the rest of the app while signed out.",
            "After the local testing was completed, it was finally time to integrate the backend into the project. I worked with another teammate (Hardip) to create the structure for the database in Cloud Firestore. By importing: package:cloud_firestore/cloud_firestore.dart, we could create two CollectionReference variables and set them equal to FirebaseFirestore.instance.collection('Posts') and FirebaseFirestore.instance.collection('Users'). A Collection is a collection of documents (essentially a table), and a collection reference is the reference to each collection (we use the reference to get access to data within each collection). In order to properly render the information that is being asynchronously retrieved, a Stream Builder was used. Another reason I used the Stream Builder is because it updates whenever changes are made to the stream, meaning if the database is updated by another user, the current user will also be able to see the changes.",
            "The last part I worked on for this project is the ability to switch between languages. In order to achieve this, I made use of: package:translator/translator.dart, a library that uses the Google Translate API to translate strings. In order for the switch to be dynamic and be rendered immediately after the user selects a new language, I added a new variable for each user in the User Collection, which represents the active language that they set. Then, in every Stream Builder, I also added a Future Builder that tracks a Future variable that is set to the translated version of the current text.",
            "Whenever the user sets a new language, they are updating the language variable associated with their account in Firestore. Since the database is updated, the Stream Builder will re-render the page. Next, the call to the asynchronous function from the Google Translate API returns a Future that is tracked by the Future Builder. When the Future gets returned, the Future Builder updates the text.",
            "As always, please refer to the GitHub repository or the project itself to explore all of the contributions made by everyone on the team. This project was our entry into programming with Flutter, so while there are many flaws and missed opportunities, it’s a great representation of our ability to adapt. From widgets to states, to asynchronous functions; this project has taught me many valuable lessons. **NOTE: The original repository in GitLab has been deleted and has since been moved to GitHub."
        ],
        images : [
            chapfigma, chaplistview, chapresponsive, chapnavigation,
            chapfirestore, chapfuture, chaptranslate, null
        ],
        imageType : [0, 0, 1, 1, 1, 0, 1, 0],
        links : [
            "https://www.figma.com/file/dMZaRP5sCyULMHkCtSCy3k/Project?type=design&node-id=0%3A1&mode=design&t=Vl401UMrMDIuNKjv-1",
            "https://github.com/hardipchander/chap_k",
            "https://chap-k.web.app/#/"
        ],
        linklabels : ["Figma", "GitHub", "Chap-K"]
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