// Get a random selection of Rock, Paper or Scissors

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*10);
    let continueRound = true;
    let computerSelection;

    while (continueRound) {
        if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
            computerSelection = 'Rock';
            continueRound = false;
        } else if (randomNumber === 4 || randomNumber === 5 || randomNumber === 6) {
            computerSelection = 'Paper';
            continueRound = false;
        } else if (randomNumber === 7 || randomNumber === 8 || randomNumber === 9) {
            computerSelection = 'Scissors';
            continueRound = false;
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

    if (playerWins == 3) {
        gameResult.textContent += "Player has won 3 rounds! Player wins the best of five!";
    }
    else if (computerWins == 3) {
        gameResult.textContent += "Computer has won 3 rounds! Player loses the best of five!";
    }
}

function addPlayRound(button){
    button.addEventListener('click', function(){
        playRound(button.id);
    })
}

let playerWins = 0;
let computerWins = 0;

const playerButton = document.querySelectorAll('.player-button');
const roundResult = document.querySelector('#round-result');
const score = document.querySelector('#score');
const gameResult = document.querySelector('#game-result');

playerButton.forEach(addPlayRound);
score.textContent = playerWins + ' - ' + computerWins;
roundResult.textContent = "Choose an option to start game"