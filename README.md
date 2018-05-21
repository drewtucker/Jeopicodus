# Jeopicodus

Jeopardy inspired game, created using Typescript and Angular.

###By Drew Tucker, Faiza Husein, Josh Rochon, QianQian Hu, Victor Felix

## Description

Our attempt to recreate the game show Jeopardy, using Typescript with the Angular framework. Uses the OpenTDB trivia API to generate questions and answers. When the page is loaded, 5 concurrent API calls are made, using ES6 promises. Each call will populate the board with a single category, and once a square has been clicked, the question will be displayed along with the corresponding answers. The answer positions are randomly generated, to ensure that the correct answer will always be in a different spot. If the correct answer is selected, the value of the selected question will be added to that player's total. If incorrect, the points will be deducted. 

## Instructions

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
