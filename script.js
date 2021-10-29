// Get a random selection of Rock, Paper or Scissors

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*10);
    let value0 = true;
    let computerSelection;

    while (value0) {
        if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
            computerSelection = 'Rock';
            value0 = false;
        } else if (randomNumber === 4 || randomNumber === 5 || randomNumber === 6) {
            computerSelection = 'Paper';
            value0 = false;
        } else if (randomNumber === 7 || randomNumber === 8 || randomNumber === 9) {
            computerSelection = 'Scissors';
            value0 = false;
        } else{
            randomNumber = Math.floor(Math.random()*10);
        }
    }
    return computerSelection.toLowerCase();;
}

// Get an user selection of Rock, Papaer or Scissors

function playerPlay(){
    return prompt("Enter either Rock, Paper or Scissors").toLowerCase();
}

// Compare both selections
// While there is not a winner continue to compare
// Once a winner is obtained, if the user has won declare him as winner, else declare him as loser

function playRound(playerSelection, computerSelection) {
    
    let continueRound = true;
    let roundWinner;

    while (continueRound) {
        if (playerSelection == computerSelection) {
            console.log("You matched! Play again!")
            playerSelection = prompt("Enter either Rock, Paper or Scissors").toLowerCase();
            computerSelection = computerPlay();
        }
        else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
            console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
            roundWinner = 'Player';
            continueRound = false;
        }
        else if (computerSelection == 'rock' && playerSelection == 'scissors' || computerSelection == 'paper' && playerSelection == 'rock' || computerSelection == 'scissors' && playerSelection == 'paper') {
            console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
            roundWinner = 'Computer';
            continueRound = false;
        }
        else {
            console.log("You entered an invalid value! Enter again")
            playerSelection = prompt("Enter either Rock, Paper or Scissors").toLowerCase();
        }
    }
    
    console.log(playerSelection);
    console.log(computerSelection);

    return roundWinner;
}


let playerSelection = playerPlay();
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
