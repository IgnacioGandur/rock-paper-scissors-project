// Function that generates a random computer choice.
function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * computerOptions.length);
    let computerRandomChoice = computerOptions[randomNumber];
    return computerRandomChoice;
}

// Variables that keep the score.
let playerScore = 0;
let computerScore = 0;
let tiesCounter = 0;

// Function that plays a single round of rps.
function singleRound(playerSelection, computerSelection) {

    let tie = `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    let playerWin = `You win! Your ${playerSelection} beats the computer's ${computerSelection}.`;
    let computerWin = `You lose! The computer's ${computerSelection} beats your ${playerSelection}.`;

    if (playerSelection === computerSelection) {
        tiesCounter++;
        resultsParagraph.textContent = tie;
        resultsParagraph.style.color = '#FFD93D';
        tiesPoints.textContent = `Ties: ${tiesCounter}`;
        return tie;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        resultsParagraph.textContent = playerWin;
        resultsParagraph.style.color = '#16FF00';
        playerPoints.textContent = `Player score: ${playerScore}`;
        return playerWin;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        resultsParagraph.textContent = computerWin;
        resultsParagraph.style.color = '#F55353';
        computerPoints.textContent = `Computer score: ${computerScore}`;
        return computerWin;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        resultsParagraph.textContent = computerWin;
        resultsParagraph.style.color = '#F55353';
        computerPoints.textContent = `Computer score: ${computerScore}`;
        return computerWin;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        resultsParagraph.textContent = playerWin;
        resultsParagraph.style.color = '#16FF00';
        playerPoints.textContent = `Player score: ${playerScore}`;
        return playerWin;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        resultsParagraph.textContent = playerWin;
        resultsParagraph.style.color = '#16FF00';
        playerPoints.textContent = `Player score: ${playerScore}`;
        return playerWin;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        resultsParagraph.textContent = computerWin;
        resultsParagraph.style.color = '#F55353';
        computerPoints.textContent = `Computer score: ${computerScore}`;
        return computerWin;
    }
}

// DOM elements ---start---
// Attaching elements to variables.
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const buttonsContainer = document.querySelector('.buttons-container');
const resetGameSoundEffect = document.querySelector('#reset-game-sound-effect');
const winnerSoundEffect = document.querySelector('#winner-sound-effect');
const loserSoundEffect = document.querySelector('#loser-sound-effect');
const popSoundEffect = document.querySelector('#pop-sound-effect')
let resultsParagraph = document.querySelector('#results-paragraph');
let scoresTitle = document.querySelector('#scores-title');
let playerPoints = document.querySelector('#player-points');
let computerPoints = document.querySelector('#computer-points');
let tiesPoints = document.querySelector('#ties-points');

// Adding event listeners to the buttons
rockButton.addEventListener('click', () => {
    singleRound('rock', getComputerChoice());
    decideWinner(playerScore, computerScore);
});
paperButton.addEventListener('click', () => {
    singleRound('paper', getComputerChoice());
    decideWinner(playerScore, computerScore);
});
scissorsButton.addEventListener('click', () => {
    singleRound('scissors', getComputerChoice());
    decideWinner(playerScore, computerScore);
});

// Function that declares a winner when someone reaches 5 points.
function decideWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        resultsParagraph.textContent = 'You Won. Congratulations!';
        resultsParagraph.style.textShadow = '-3px 3px #16FF00';
        winnerSoundEffect.play();
        resetResultsParagraph();
        gameEnds();
    } else if (computerScore === 5) {
        resultsParagraph.textContent = 'You Lost.';
        resultsParagraph.style.textShadow = '-3px 3px #f64141';
        loserSoundEffect.play();
        resetResultsParagraph();
        gameEnds();
    }
}

// Function that resets the scores when the player agrees to play again.
function playAgain() {
    scoresTitle.textContent = 'Scores';
    playerScore = 0;
    playerPoints.textContent = `Player score: ${playerScore}.`;
    computerScore = 0;
    computerPoints.textContent = `Computer score: ${computerScore}`;
    tiesCounter = 0;
    tiesPoints.textContent = `Ties: ${tiesCounter}`;
    resultsParagraph.textContent = 'Choose your option! The result is going to show up here.';
    resultsParagraph.style.color = '#ffffff';
    resultsParagraph.style.fontSize = '20px';
    resultsParagraph.style.fontFamily = "'Turret Road', cursive";
    resultsParagraph.style.textShadow = 'initial';
}

// Function that hides the rock, paper and scissors buttons and creates a reset button when the player denies to play again.
function denyToPlayAgain() {
    rockButton.style.visibility = 'hidden';
    paperButton.style.visibility = 'hidden';
    scissorsButton.style.visibility = 'hidden';
    scoresTitle.textContent = `Final score`
    let resetButton = document.createElement('button');
    resetButton.textContent = 'Play again!';
    resetButton.className = 'button';
    resetButton.style.width = '180px';
    resetButton.style.height = '80px';
    resetButton.style.display = 'block';
    resetButton.style.margin = '65px auto';
    buttonsContainer.replaceWith(resetButton);
    resetButton.addEventListener('click', () => {
        playAgain();
        rockButton.style.visibility = 'visible';
        paperButton.style.visibility = 'visible';
        scissorsButton.style.visibility = 'visible';
        resetGameSoundEffect.play();
        resetButton.replaceWith(buttonsContainer);
    })
    document.body.insertBefore(resetButton, scoresTitle);
}

// Function that declares the game has ended and announces a winner
function gameEnds() {
    let playAgainDiv = document.createElement('div');
    playAgainDiv.className = 'play-again-div';
    buttonsContainer.replaceWith(playAgainDiv);
    let playAgainParagraph = document.createElement('p');
    playAgainParagraph.textContent = 'Would you like to play again?';
    playAgainParagraph.className = 'play-again-paragraph';
    playAgainDiv.appendChild(playAgainParagraph);
    let yesNoButtonsContainer = document.createElement('div');
    yesNoButtonsContainer.className = 'yes-no-buttons-container';
    playAgainDiv.appendChild(yesNoButtonsContainer);
    let buttonYes = document.createElement('button');
    buttonYes.textContent = 'Yes!';
    buttonYes.className = 'yes-button';
    yesNoButtonsContainer.appendChild(buttonYes);
    buttonYes.addEventListener('click', ()=>{
        playAgainDiv.replaceWith(buttonsContainer);
        buttonsContainer.style.visibility = 'visible';
        playAgain();
        resetGameSoundEffect.play();
    })
    let buttonNo = document.createElement('button');
    buttonNo.textContent = 'No.';
    buttonNo.className = 'no-button';
    yesNoButtonsContainer.appendChild(buttonNo);
    buttonNo.addEventListener('click', ()=>{
        denyToPlayAgain();
        playAgainDiv.remove();
    })
}

// Function that resets the results paragraph.
function resetResultsParagraph() {
    buttonsContainer.style.visibility = 'hidden';
    resultsParagraph.style.fontFamily = "'Press Start 2P', cursive";
    resultsParagraph.style.fontSize = '32px';
    resultsParagraph.style.color = '#ffffff';
}

