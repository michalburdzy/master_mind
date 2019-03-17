# Master Mind Game [![Build Status](https://travis-ci.org/mmicalt/master_mind.svg?branch=master)](https://travis-ci.org/mmicalt/master_mind)

## Install

Type `yarn` to install the dependencies

# Run tests

Type `yarn test` and then `a` or to run all tests.
Typing `q` ends the test session.

## Run the game

Type `yarn start` or `npm start`
App will open on localhost:3000

## Instructions

App is based on old Master Mind board game. Your goal is to guess 3 secret numbers. Each turn you are given a feedback:

- two hint numbers:
  - first indicating amount of correctly guessed numbers
  - second indicating amount of correctly guessed numbers on right position
- if your numbers are correct - Bravo, you just won!

Any time you can click 'Show numbers' button to surrender and reveal an answer.
You can also see 10 best scores. Scores are saved in your localStorage.
