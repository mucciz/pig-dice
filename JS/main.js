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
//Anonymous function that starts the game.
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result (dice image)
        var diceDisplay = document.querySelector('.dice');
        diceDisplay.style.display = 'block';
        diceDisplay.src = 'dice-' + dice + '.png';

        //3. Update the current score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            currentScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = currentScore;
        }else {
            //Next player turn
            nextPlayer();
        }
    }
});
