#### shulihallak.github.io

## Project 1: Tic Tac Toe


## Tic-Tac-Toe game brief description:

This is a two player Tic Tac Toe game. The rules are: each player is assigned an 'X' or an 'O', first player is 'X'. The object of the game is to get three boxes with your mark in a row. Each turn alternates. Winner is declared when they hit three in a row.

### Features:

Enter your name in the "Player X" or "Player O" field so that it can appear on the scoreboard.

Press 'START' to begin the game

To mark a box, just click on it and it will fill alternating players.

Winner will be declared and the game will reset.



#### Features that were attempted and were too buggy:

Autplayer option

Reset game button option

hints

Levels: easy, medium, hard.

### Wins:
Starting to understand constructors and prototypes a bit more and was able to use them.




### Code details

This game is built using the Materialize framework. It facilitated a clean interface with smooth hover features. 
Originally the game was built using an autoplayer function, but difficulties emerged when trying to make the autoplayer continue to play if it hit an 'X' or an 'O'.  

Instead, I built it for 2 players only. A constructor function was set up to build out the players with their respective details. And originally a setListener prototype was added to allow for each Player to choose their box, so I created two separate functions. 
It works, but there are bugs in how the .on() listener works. It causes bubbling, because it is bound to the function. I attempted to fix this but was not successful.
The game works, however there are glitches when calculating the correct score.

### Stackoverflow (to help with challenges)
I posted a question on Stackoverflow in order to get help with the event bubbling. 
Here's a direct link to the question and answers
http://stackoverflow.com/questions/32813362/jquery-event-bubbling/32813499?noredirect=1#comment53477463_32813499




