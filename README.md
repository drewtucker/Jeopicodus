# Jeopicodus

https://drewtucker.github.io/Jeopicodus/

Jeopardy inspired game, created using Typescript and Angular.

###By Drew Tucker, Faiza Husein, Josh Rochon, QianQian Hu, Victor Felix

## Description

Our attempt to recreate the game show Jeopardy, using Typescript with the Angular framework. Uses the OpenTDB trivia API to generate questions and answers. When the page is loaded, 5 concurrent API calls are made, using ES6 promises. Each call will populate the board with a single category, and once a square has been clicked, the question will be displayed along with the corresponding answers. The answer positions are randomly generated, to ensure that the correct answer will always be in a different spot. If the correct answer is selected, the value of the selected question will be added to that player's total. If incorrect, the points will be deducted. 

## Instructions

Follow the link at the top of this readme to load the game. 

Player names can be changed by highlighting and overwriting the 'Player 1' and 'Player 2' fields on the main page.

## Known Issues

Currently no win paramter, so consider whoever has the most points after the board is cleared the winner!

Category grid squares are currently clickable when they shouldn't be.

Icon at top of page doesn't display properly


