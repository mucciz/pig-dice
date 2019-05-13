//initialize global variables.
var scores, currentScore, activePlayer, gamePlaying;
//define the game start function statement that resests everything at start
function gameStart() {
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}
