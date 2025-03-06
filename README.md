# WebPort

WebPort is a web app that serves as both an introduction and a portfolio for myself.

It was designed with [Figma](https://www.figma.com/), built with [React](https://react.dev/), and deployed using [Firebase](https://firebase.google.com/).

## Features

Clicking on the question mark on any page will reveal a help modal that automatically navigates to the relevant section for the active page. The modal shows the user, ways in which they are able to interact with the web application.

![](https://github.com/Cwang4749/imgs/blob/main/webport/helpmodal.gif)

The backgrounds for the home page and the contact card are draggable along the x-axis.

![](https://github.com/Cwang4749/imgs/blob/main/webport/draggablebg.gif)

Clicking a flashcard will flip it. The flashcards loop through an array, starting with the description, and then followed by images/gifs.

![](https://github.com/Cwang4749/imgs/blob/main/webport/flashcards.gif)

The sprite has multiple inputs: arrow keys to move, click to loop through different sprite images, double tap r to reset the sprite’s location.

![](https://github.com/Cwang4749/imgs/blob/main/webport/sprite.gif)

Clicking either email on the contact page will copy it to the clipboard.

![](https://github.com/Cwang4749/imgs/blob/main/webport/copyemail.gif)

Clicking on any of the table cells will reveal a pop up modal with the respective text, except in a larger font.

![](https://github.com/Cwang4749/imgs/blob/main/webport/modal.gif)

## Usage
Make sure you have [Node.js](https://nodejs.org/en/download) installed.

From your terminal, cd into the cloned repository and run the following commands (the first installs the dependencies, and the second starts the project):

```sh
npm install
```
```sh
npm start
```