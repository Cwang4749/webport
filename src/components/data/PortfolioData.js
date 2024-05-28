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

// RECIPE API
import recpreview from "../../images/portfolio/recipe/preview.jpeg";
import recdata from "../../images/portfolio/recipe/data.jpg";
import recmake from "../../images/portfolio/recipe/makedata.jpg";
import rectemplate from "../../images/portfolio/recipe/template.jpg";
import recmvc from "../../images/portfolio/recipe/mvc.jpg";
import recendpoints from "../../images/portfolio/recipe/endpoints.jpg";
import recpostman from "../../images/portfolio/recipe/postman.jpg";

// VR MAZE
import vrpreview from "../../images/portfolio/vr/preview.jpeg";
import vrtemplate from "../../images/portfolio/vr/template.jpg";
import vrlayout from "../../images/portfolio/vr/layout.jpg";
import vrbutton from "../../images/portfolio/vr/button.jpg";
import vropen from "../../images/portfolio/vr/opendoor.jpg";
import vrrespawn from "../../images/portfolio/vr/respawn.jpg";
import vrparticle from "../../images/portfolio/vr/particle.jpg";
import vrslider from "../../images/portfolio/vr/slider.jpg";
import vrinventory from "../../images/portfolio/vr/inventory.jpg";

// FREE
import freepreview from "../../images/portfolio/free/preview.png";
import freeentry from "../../images/portfolio/free/cmake.jpg";
import freecmake from "../../images/portfolio/free/entry.jpg";
import freeglad from "../../images/portfolio/free/glad.jpg";
import freeabstract from "../../images/portfolio/free/abstract.jpg";
import freelayout from "../../images/portfolio/free/layout.webp";
import freeentity from "../../images/portfolio/free/entity.jpg";
import freeonupdate from "../../images/portfolio/free/onupdate.jpg";

// ROBOSIST
import robopreview from "../../images/portfolio/robosist/preview.jpeg";
import robochassis from "../../images/portfolio/robosist/chassis.jpeg";
import robomotor from "../../images/portfolio/robosist/motordriver.jpeg";
import robomotion from "../../images/portfolio/robosist/motion.mp4";
import robocode from "../../images/portfolio/robosist/code.jpg";
import roboinitial from "../../images/portfolio/robosist/initialstage.mp4";
import roboparts from "../../images/portfolio/robosist/parts.jpg";
import robosuccess from "../../images/portfolio/robosist/success.mp4";
import robomakeshift from "../../images/portfolio/robosist/makeshift.jpg";
import roboprogress from "../../images/portfolio/robosist/progress.jpg";
import robomeasure from "../../images/portfolio/robosist/measure.mp4";

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
        projectName : "Recipe API",
        preview : recpreview,
        description : "A proof of concept for a recipe database and API, hosted by MySQL and tested with Postman. The API itself was built using .NET's Entity Framework Core Fluent API, while the example data was created using MySQL commands.",
        text : [
            "While working on my Capstone project: Diet Unquiet, I was assigned a final project in my API class. I decided to create an API centered around recipes since it was very relevant to the project I was already working on. The first step was to plan out how the data would be stored and how it would relate to each other. Eventually, I decided on a one-to-one relationship between two tables: Recipe Table and Nutrition Table, in which the Recipe Table would store information such as the name and instructions, while the Nutrition Table would store nutritional facts about the recipe.",
            "Next, I created the structure of the database in MySQL Workbench using MySQL commands. I also used the commands to add some examples into the database, so that I could later test the API endpoints.",
            "The API was created in Visual Studio (the IDE), and not in Visual Studio Code (the code editor). Visual Studio works really well with the Entity Framework and offers many integrated supports for building APIs, one of which is a template for a C# API project. The project follows a Model-View-Controller (MVC) design.",
            "The template automatically creates a weather forecast API. After removing the parts of the code related to the weather forecast API, I created a folder called Models. In the new folder, I added 2 classes, one for each table: Recipe.cs and Nutrition.cs. Then I also added another class: RecipeAPIDBContext.cs, that creates database contexts for both of these models. Lastly, I created controllers for each model: RecipeController.cs and NutritionController.cs. These controllers handle the user interactions and provide the responses for each API endpoint.",
            "These are the available API endpoints:",
            "Each of the various API endpoints were tested with the help of Postman. In addition to successes, failures were also tested. When a GET/POST/DELETE is used with an nonexistent table/recipeID/nutritionID, the API should return a 404 status code as well as a brief description of what went wrong.",
            "As a reminder, this project is a proof of concept and only creates the database as well as the API endpoints; it does not have a fully developed front end for displaying the information as well as for handling user interaction. I included a link for my presentation on the project. I also linked the MySQL commands I used in order to create the database. For more information, please refer to the Github repository for this project."
        ],
        images : [
            recdata, recmake, rectemplate, recmvc, recendpoints, recpostman, null
        ],
        imageType : [0, 0, 0, 0, 0, 0, 0],
        links : [
            "https://github.com/Cwang4749/RecipeAPI",
            "https://docs.google.com/presentation/d/1_bkWA6LQYltYocb98RAEbQukc84RAeRhPxXiBjT90LM/edit?usp=sharing",
            "https://docs.google.com/document/d/1SmiWspzi0FagRVJFhtC7ib1U_byDnJTAJjHL58m6XYA/edit?usp=sharing"
        ],
        linklabels : ["GitHub", "Final Ppt", "MySQL Commands"]
    },
    {
        projectName : "VR Maze",
        preview : vrpreview,
        description : "A VR maze game built in Unity 3D, with interactions such as: buttons, sliders, a 2D interface for inventory, etc. There are 4 scenes/maps, one for each team member, featuring its own theme, traps, enemies, etc.",
        text : [
            "VR-Maze, is as its name suggests, a virtual reality game in which the player has to find the exit to a maze. My teammates and I each worked on our own individual maps, and later combined them into one. In the process, we would share any information about functionalities that we successfully implemented, such as enemy animation, particle systems, etc. We decided to use Unity 3D because of the wide availability of learning resources online, as well as because it offers a template for VR development.",
            "The first step was to create the maze using blocks. As advised by another teammate Kenthony, we used a 2D maze generator for inspiration on where to place the walls. Afterwards, we decided on the themes we wanted to apply; mine being fire themed. The theme is more than just a visual aspect, it also determines the types of enemies and the types of traps found in each scene. Using this theme as well as the initial maze I built, I quickly designed a layout for the types of functionality I wanted in my scene. Although I eventually replaced the rolling fire boulder idea with the dragon, the layout served me well throughout the entire process.",
            "Following the layout I created, I worked on each functionality separately, starting with the blue doors that open when the player presses the corresponding buttons. In order to achieve this effect, I created a button object that is composed of a base and a movable clicker with the configurable joint property that is locked into movements in its relative Y-axis. Then I attached a script to this clicker that tracks its movements and changes a variable accordingly. By using invoke, I can call a different script attached to another object, in this case the script that opens the door.",
            "Since I have multiple moving doors, rather than hard code every single door and its animation, I used a variable in the script to track the current door and whether it is in the open/closed position. The current door is set by dragging the door object from the hierarchy into the door variable in the inspector. As a result, I was able to easily duplicate doors and buttons without additional coding.",
            "The next functionality I worked on was the respawn. With some help from Brajan, I was able to implement a sort of respawning mechanic for when the player gets hit with a trap. The implementation involves creating an empty transform object placed at the start of the maze. By using this transform object as a point of reference, I can change the location of the player, or in other words: respawn them, whenever they get hit by a trap.",
            "As part of another assignment, I had to research particle systems in Unity 3D and the different ways to utilize/customize them. Using what I learned, I integrated particle systems into most of my traps. I customized each particle system by changing the duration, initial velocity, velocity over lifetime, initial size, size over lifetime, initial rotation, rotation over lifetime, volume, direction, etc. Attached to each particle system is the script for respawning the player. It utilizes a function provided by Unity to track particle collisions, and the tag attached to the player called Player.",
            "In addition to pushing buttons, I wanted to include a handle that the player could grab and pull. Ultimately, I decided to integrate it with the lava rain from my layout. By using the Unity provided XR Grab Interactable, I was able to easily make a grabbable component. Similar to the button, the handle is composed of two components, a base and a slider that uses the configurable joint. I added a ceiling with a script that tracks the handle’s position, and moves according to how the handle moves.",
            "For the last major implementation, I added a key that can be placed into a 2D inventory (so the player doesn’t have to hold it the entire time). Similar to the handle, the key also has an XR Grab Interactable so that the player can grab it using the vr controllers. In order to create the 2D interface for the inventory, I added a canvas that is always tracked to the player’s camera. In the canvas, I added 2 different components with button properties: one for the toggle, and the other for the inventory itself. Although these are not physical buttons that the player presses, they can use the triggers on the controllers to raycast and click the buttons on the canvas. Using 2 scripts with relatively simple logic, I first made the toggle button render/hide the inventory, and then I made the inventory spawn/store the key. The spawn functionality is achieved by tracking the player’s location and spawning the key in front of them.",
            "Although I didn’t go into the specifics of how I created every trap (Dragon breath, Arrows, Explosion, Fake Floor, and the Lava rain) nor the puzzles (rotating doors, trip wires, etc), they all utilize the same underlying functionalities that I described: button presses, respawning, particle systems, etc. In addition, I only described the parts I worked on which ultimately does not reflect the whole project. Each of my team members added their own features, traps and enemies. Please check out the demo video and the Github to fully discover all that this project has to offer."
        ],
        images : [
            vrtemplate, vrlayout, vrbutton, vropen, vrrespawn, vrparticle, vrslider, vrinventory, null
        ],
        imageType : [0, 0, 0, 0, 0, 0, 0, 0, 0],
        links : [
            "https://github.com/KenthonyGarcia/VR-Maze",
            "https://youtu.be/aEnxZzfUeLU",
            "https://drive.google.com/file/d/1q_XztcvY8kyFFUxHfViEz4jZF-jMd_MD/view?usp=sharing",
            "https://drive.google.com/drive/folders/1VliyUaJ1N8oIwfuxayb2OJdzKU9ZJSYV?usp=sharing"],
        linklabels : ["GitHub", "Demo", "Final Paper", "Progress"]
    },
    {
        projectName : "Free",
        preview : freepreview,
        description : "A simple 2D maze game created using a custom built C++ based game engine. It uses GLFW to render the graphics and the engine abstracts most processes.",
        text : [
            "The whole project is built in Visual Studio (IDE, not Visual Studio Code). Following the instructions of my professor, I created a bare bones game engine from scratch and named it Yam. For the entry point (main.cpp) to my game, I used a macro (YAM_INITIATE) defined in my game engine to start the game.",
            "I updated all of the CMakeLists as I progressed, so that the project could be easily exported and built. In order for the project to be properly built, I made a CMakeLists.txt for each aspect: the whole project, the game, the game engine, etc. In order to make CMake build the other CMakeLists.txt, I included an: add_subdirectory(*NAME OF FOLDER*) for each aspect.",
            "For rendering the game, I used GLFW, an Open Source, multi-platform lightweight library that works with OpenGL. In order to use it, I first added the repository as a submodule. To use OpenGL, I used an online tool: https://glad.dav1d.de/, to generate a compatible version of the library.",
            "I made an abstract class: Window, that is inherited by my own GlfwWin class. This GlfwWin class uses the GLFW library to create a pointer to a GLFWwindow object that is able to use GLFW functions. Then, the GmWin class creates a pointer (called mWindow) to a GlfwWin object. The GmWin class is now able to access all of the GLFW functions through the pointer. All of this is done in order to add layers of abstraction that prevents users of the game engine from directly manipulating the core functionality: GLFW and GlfwWin. Within the game engine Yam, the window is created using the GmWin class. This abstraction process was replicated for the Shader, Sprite, and Renderer classes which use functions from OpenGL.",
            "After the game engine was completed, I began planning the type of game I wanted to create with it. I settled on a simple 2D maze (this game was the inspiration for the VR maze game). I used my notebook to sketch out the layout for the maze as well as plan out potential functionality. Since I set the default game window to 800 x 600 pixels, I included dimensions in my sketch to make sure the proportions of the walls were relative to the player’s character.",
            "In order to draw the different parts of the game (background, walls, traps and the player’s character), I first created an Entity class. This class tracks the entity’s position, dimensions, and the active sprite within an array of Sprites (from the Yam engine). It is also able to change the position and the active sprite. Lastly, the class draws in the window by using the Yam engine’s renderer.",
            "For the game itself, I created a class called Free (also the name of the game) which inherits from the YamApp class. The YamApp class automatically creates the 800x600 game window and handles keyboard input from the user. The Free class overrides the virtual function: OnUpdate, which is called every frame. The OnUpdate function draws the map (changes stages if the player passes stage 1 or 2), draws the player’s character (new position + new sprite when changed), and checks if the player has collided with any walls (will reset the player to the start of the map if collided).",
            "Although I did not go through everything, I covered most of the fundamental aspects. Within the list of links, I included a link to the GLFW Github repository, as well as a link to the Glad tool (for OpenGL). Please check out the Github repository to see the full project, including a list of interactions and a demo."
        ],
        images : [
            freeentry, freecmake, freeglad, freeabstract, freelayout, freeentity, freeonupdate, null
        ],
        imageType : [0, 0, 0, 0, 0, 0, 0, 0],
        links : [
            "https://github.com/Cwang4749/Simple_Maze",
            "https://raw.githubusercontent.com/Cwang4749/Simple_Maze/master/Free_Demo.gif",
            "https://github.com/glfw/glfw/tree/955fbd9d265fa95adf9cb94896eb9a516aa50420",
            "https://glad.dav1d.de/"
        ],
        linklabels : ["GitHub", "Demo", "GLFW", "GLAD"]
    },
    {
        projectName : "Robosist",
        preview : robopreview,
        description : "A robot assistant that performs simple tasks such as retrieving/shaking/pouring samples, line following, etc. Coded with Arduino C and built with motors/wheels/Arduino board/motor drivers, 3D printed shell, etc.",
        text : [
            "Robosist started as a normal line following robot with simple cup delivering/retrieving functionality. My original team of 4 members and 2 supervisors started by building a chassis with the parts that NYU provided.",
            "Before we completed the chassis, we tested everything with breadboards first. The motors, motor drivers, IR sensors, and Arduino board were all tested separately with breadboards before placing them onto the chassis.",
            "After everything was assembled, we began testing hardcoded motions such as: drive forward for 2 seconds. By utilizing pulse-width modulation (PWM), we were able to adjust the speed of the robot, as well as make turns. However, we eventually realized that rotating the wheels in opposite directions was more optimal for turning.",
            "Since the way we control the motors involves writing to a specific pin on the Arduino board, we used variable names to distinguish between which pins controlled which part of the robot.",
            "Since the robot will deliver/retrieve cups by following black tape on the floor, we coded a line following program by making use of the two IR sensors located at the front of the robot. Our initial success with the line following program revealed a couple flaws with our setup.",
            "In order to code efficiently, we split the project into different parts and had everyone work on a different functionality. Afterwards, we would combine the codes for each functionality into a single file. Rather than download and upload .ino files (Arduino files), we copied the code into google docs. This was much faster, and also allowed for us to work together for specific functionalities.",
            "After multiple iterations of our robot and code, we finally saw success. The biggest change to the chassis was that another IR sensor was added in between the original 2. This drastically improved the accuracy (followed the line better) and precision (made mistakes less often) of the robot. In preparation for the mini competition, we added a remote control and an IR receiver. This way, we could use the remote to control the robot to perform different functions (deliver vs retrieve from different locations) without having to run the code from the Arduino IDE in between tasks.",
            "After the Summer internship ended, part 2 of the program began. We were tasked with bringing our newfound knowledge of Arduino and robot building back to our schools. Our task was to bring on more members for a final competition in which we build a robot following a theme and we try to pitch it as a business idea. My original team of 4 became a group of 9, and following the recommendation of our mentor, we went with a robot assistant. For our demonstration, we first made a makeshift sample dispenser by cutting a hole in a CD holder. One of our members 3D printed the logo for our robot, the shell to cover the wiring, and the example samples for the robot to grab.",
            "Building upon what we succeeded in doing over the Summer, we built another line following robot. This time, we adjusted the code for controlling the motor on the claw so that it would grab/release the samples instead of cups. In addition, when the robot grabs the sample, it first backs up for a second before turning so that it wouldn’t get stuck in the sample dispenser.",
            "In addition to the line following, we added other simple functionalities such as: shaking a bottle with its claw, pouring a sample, and measuring water levels. For the pouring, we added a servo motor with a cup, to the back of the robot. In order to measure water levels, we attached the sensor to a string in a pulley system.",
            "Please refer to the links provided, especially the demo, for more information about the project. It was difficult to distinguish who did what since it was a collaborative effort the majority of the time. Robosist is the result of hundreds of hours of debugging, redesigning, and rebuilding with my fellow team members; either during the Summer program at NYU, or afterschool at Brooklyn Tech."
        ],
        images : [
            robochassis, robomotor, robomotion, robocode, roboinitial, roboparts,
            robosuccess, robomakeshift, roboprogress, robomeasure, null
        ],
        imageType : [0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        links : [
            "https://drive.google.com/file/d/12Hni8GVGvoCMlNRID0GYGIdGlnD9G_Y2/view?usp=sharing",
            "https://drive.google.com/file/d/1_3pU69ze0XMlVIEiIpD_wVdADKnaTQ7y/view?usp=sharing",
            "https://drive.google.com/drive/folders/1s6QU05nWqmHzYWzHXsFW6TtBGZKtYrln?usp=sharing",
            "https://docs.google.com/document/d/1F1l7jPU_zXz7t_wXpVuw5qsDEe9NhRB-KyC9ixm-2ZU/edit?usp=sharing",
            "https://drive.google.com/file/d/13QvTp6vuNSJz3JhzkxSiYCgDnbwpVY08/view?usp=sharing"
        ],
        linklabels : ["Demo", "Demo 2", "Archive", "Code", "Rubric"]
    }
];

export default PortfolioData;