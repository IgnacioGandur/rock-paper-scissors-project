
function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * computerOptions.length);
    let computerRandomChoice = computerOptions[randomNumber];
    return computerRandomChoice;
}

let playerScore = 0;
let computerScore = 0;
let tiesCounter = 0;

function singleRound(playerSelection, computerSelection) {
    
    let tie = `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    let playerWin = `You win! Your ${playerSelection} beats the computer's ${computerSelection}.`;
    let computerWin = `You lose! The computer's ${computerSelection} beats your ${playerSelection}.`;
    
    if (playerSelection === computerSelection) {
        console.log(tie) 
        , tiesCounter++
        return tie;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(playerWin)
        , playerScore++
        return playerWin; 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(computerWin)
        , computerScore++
        return computerWin;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log(computerWin)
        , computerScore++
        return computerWin;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(playerWin)
        , playerScore++
        return playerWin;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log(playerWin)
        , playerScore++
        return playerWin;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log(computerWin)
        , computerScore++
        return computerWin;
    } else { 
        computerScore++
        return console.log('Not a valid choice! Point for the computer.');
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Enter your choice please: ', 'Rock, paper or scissors.').toLowerCase();
        singleRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        alert(`You won! The final score is: You: ${playerScore}. Computer: ${computerScore}. Ties: ${tiesCounter}.`);
    } else if (playerScore < computerScore) {
        alert(`You lost! The final score is: You: ${playerScore}. Computer: ${computerScore}. Ties: ${tiesCounter}.`);
    } else {
        alert(`It's a tie! Final score is: You: ${playerScore}. Computer: ${computerScore}. Ties: ${tiesCounter}.`);
    }
}

game()