// Get a random selection of Rock, Paper or Scissors

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*10);
    let findValidValue = true;
    let computerSelection;

    while (findValidValue) {
        if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
            computerSelection = 'Rock';
            findValidValue = false;
        } else if (randomNumber === 4 || randomNumber === 5 || randomNumber === 6) {
            computerSelection = 'Paper';
            findValidValue = false;
        } else if (randomNumber === 7 || randomNumber === 8 || randomNumber === 9) {
            computerSelection = 'Scissors';
            findValidValue = false;
        } else{
            randomNumber = Math.floor(Math.random()*10);
        }
    }
    return computerSelection.toLowerCase();
}

// Compare both selections
// While there is not a winner continue to compare
// Once a winner is obtained, if the user has won declare him as winner, else declare him as loser

function playRound(playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        roundResult.textContent = "You matched! Play again";
        return;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        roundResult.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        playerWins++;
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors' || computerSelection == 'paper' && playerSelection == 'rock' || computerSelection == 'scissors' && playerSelection == 'paper') {
        roundResult.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        computerWins++;
    }
    score.textContent = playerWins + ' - ' + computerWins;

    if (playerWins == 5) {
        gameResult.textContent = "Player has won 5 rounds! Player wins!";
    }
    else if (computerWins == 5) {
        gameResult.textContent = "Computer has won 5 rounds! Player loses!";
    }
}

function addPlayRound(button){
    button.addEventListener('click', function(){
        playRound(button.id);
    })
}

function restartScore(){
    playerWins = 0;
    computerWins = 0
    score.textContent = playerWins + ' - ' + computerWins;
    roundResult.textContent = "Choose an option to start game";
    gameResult.textContent = "";
}

let playerWins = 0;
let computerWins = 0;

const playerButton = document.querySelectorAll('.player-button');
const roundResult = document.querySelector('#round-result');
const score = document.querySelector('#score');
const gameResult = document.querySelector('#game-result');
const restartButton = document.querySelector('#restart');

playerButton.forEach(addPlayRound);
restartButton.addEventListener('click',restartScore);
score.textContent = playerWins + ' - ' + computerWins;
roundResult.textContent = "Choose an option to start game";