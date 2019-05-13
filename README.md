# Pig Dice Game
#### A simple virtual dice game with two players.  

## Description
This is a simple virtual dice game Each player takes turn rolling a die until either a 1 is rolled or the player decides to "hold". The player to first get to 100 or more points wins.

The rules of the game are:
* When a player rolls a 1, their current score is reset to 0 and it becomes the next player's turn.
* When the player rolls a 2 - 6, the score is added to their current score.
* When the player chooses to "hold", their current score is added to their total score, and it becomes the next player's turn.
* The player to first reach 100 or more points wins.

## Specifications
1. It displays the name of the players.
* Default:

         Player1
         Player2

 2. Player1 can roll the dice and the result displayed as their current score.
 * Input:

        'Roll' button is clicked
        Dice Score: 3
 * Output:

         Curent Score: 6

3. Player1 can hold the dice and their turn total score is added to their total score. Player2 then has the chance to play.
 * Input:

         'Hold' button is clicked.
 * Output:

          Current Score: 3
          Total Score: 9

4. Player2 can now roll the dice and the result displayed as Current score.
 * Input:

        'Roll' button is clicked
        Dice Roll: 2
 * Output:

         Current Score: 5

5. Player2 can hold the dice and their turn score is added to their total score. Player1 then has the chance to play.
 * Input:

          'Hold' button is clicked.
 * Output:

          Current Score: 4
          Total Score: 9        

6. If a player's dice score is a 1, their turn score will be reduced to 0.
  * Input:

            'Roll' button is clicked
            Dice Score: 1
   * Output:

            Previous Current Score: 30
            New Current Score: 0



## Setup/Installation
To view the website, click or copy () to your browser and load it or:
* Clone this repository
* Open a HTML file
* Open web browser of choice

## Known Bugs
The game does not notify a user if a 1 is rolled.
The

## Technologies Used
* HTML
* CSS
* BOOTSTRAP
* JAVASCRIPT
* JQUERY

## Licence
MIT License (https://github.com/mucciz/pig-dice/community/license/new?branch=master&template=mit)

Copyright (c) [2019] [Mucciz]
