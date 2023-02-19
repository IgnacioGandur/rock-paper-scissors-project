//Function 'computerChoice', randomly return 'rock', 'paper', 'scissors'. STARTS HERE.

function computerChoice() {     
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerRandomPick = Math.floor(Math.random() * computerOptions.length);
    return computerRandomPick, computerOptions[computerRandomPick]
}
let computerSelection = computerChoice();
console.log(computerSelection)
//Function 'computerChoice', randomly return 'rock', 'paper', 'scissors'. ENDS HERE.

//Function that plays a single round and declares the winner of the round. STARTS HERE.
let playerSelection = prompt('Enter your choice:').toLowerCase();

function singleRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return console.log('It\'s a tie!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return console.log('You won! Paper beats rock.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return console.log('You lose! Rock beats scissors.');
    }  else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return console.log('You lose! Paper beats rock.');
    } else if (playerSelection === 'paper' && computerSelection ==='paper') {
        return console.log('It\' a tie!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return console.log('You win! Scissors beats paper.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return console.log('You win! Rock beats scissors.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return console.log('You lose! Scissors beats paper.');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return console.log('It\'s a tie!');
    } else {
        return console.log('Not a valid choice.');
    }
}

singleRound(playerSelection, computerSelection)
