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

// Function that plays a single round of rock, paper, scissors.
function singleRound(playerSelection, computerSelection) {

    let tie = `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    let playerWin = `You win! Your ${playerSelection} beats the computer's ${computerSelection}.`;
    let computerWin = `You lose! The computer's ${computerSelection} beats your ${playerSelection}.`;

    if (playerSelection === computerSelection) {
        tiesCounter++;
        resultsParagraph.textContent = tie;
        resultsParagraph.style.color = '#FFD93D';
        resultsParagraph.classList.toggle('popUpParagraph');
        resultsParagraph.classList.toggle('popUpParagraph2');
        tiesPoints.textContent = `Ties: ${tiesCounter}`;
        return tie;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
    playerSelection === 'paper' && computerSelection === 'rock' || 
    playerSelection === 'scissors' && computerSelection === 'paper') 
    {
       playerScore++;
       resultsParagraph.textContent = playerWin;
       resultsParagraph.style.color = '#16FF00';
       resultsParagraph.classList.toggle('popUpParagraph');
       resultsParagraph.classList.toggle('popUpParagraph2');
       playerPoints.textContent = `Player score: ${playerScore}`;
       return playerWin;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
      playerSelection === 'paper' && computerSelection === 'scissors' ||
      playerSelection === 'scissors' && computerSelection === 'rock')
    {
       computerScore++;
       resultsParagraph.textContent = computerWin;
       resultsParagraph.style.color = '#F55353';
       resultsParagraph.classList.toggle('popUpParagraph');
       resultsParagraph.classList.toggle('popUpParagraph2');
       computerPoints.textContent = `Computer score: ${computerScore}`;
       return computerWin;
    }    
}
// DOM elements ---start---
// Attaching elements to variables.
//Buttons
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const playMusicButton= document.querySelector('.play-music-button');
const stopMusicButton = document.querySelector('.stop-music-button');
const musicBtnPlay = document.querySelector('.music-btn-play');
const musicBtnStop = document.querySelector('.music-btn-stop');
const startGameButton = document.querySelector('.start-game-button');
// Sound effects and music
const resetGameSoundEffect = document.querySelector('#reset-game-sound-effect');
const winnerSoundEffect = document.querySelector('#winner-sound-effect');
const loserSoundEffect = document.querySelector('#loser-sound-effect');
const popSoundEffect = document.querySelector('#pop-sound-effect')
const mainTheme = document.querySelector('#main-theme');
const backgroundMusic = document.querySelector('#background-music');
const beepSoundEffect = document.querySelector('#beep-sound-effect');
const corkSoundEffect = document.querySelector('#cork-sound-effect');
// Other elements
let resultsParagraph = document.querySelector('.results-paragraph');
const buttonsContainer = document.querySelector('.buttons-container');
let scoresTitle = document.querySelector('.scores-title');
let playerPoints = document.querySelector('#player-points');
let computerPoints = document.querySelector('#computer-points');
let tiesPoints = document.querySelector('#ties-points');
let welcomeScreen = document.querySelector('.welcome-screen');
let gameContainer = document.querySelector('.game-container');

// Volume of sound effects
backgroundMusic.volume = '0.1';
mainTheme.volume = '0.1';
mainTheme.loop = 'true';
beepSoundEffect.volume = '0.5';
corkSoundEffect.volume = '0.5';

// Adding event listeners to the buttons
startGameButton.addEventListener('click', ()=> {
    mainTheme.play();
    backgroundMusic.muted = 'true';
    beepSoundEffect.play();
    welcomeScreen.replaceWith(gameContainer);
    gameContainer.style.display = 'flex';
    gameContainer.classList.add('appearLeftToRight');
    setTimeout(() => {
        gameContainer.classList.remove('appearLeftToRight');
    }, 1500);
})

playMusicButton.addEventListener('click', ()=> {
    corkSoundEffect.play();
    backgroundMusic.loop = 'true';
    backgroundMusic.play();
})
stopMusicButton.addEventListener('click', ()=>{
    corkSoundEffect.play();
    backgroundMusic.pause();
})

rockButton.addEventListener('click', () => {
    corkSoundEffect.play();
    singleRound('rock', getComputerChoice());
    decideWinner(playerScore, computerScore);
});
paperButton.addEventListener('click', () => {
    corkSoundEffect.play();
    singleRound('paper', getComputerChoice());
    decideWinner(playerScore, computerScore);
});
scissorsButton.addEventListener('click', () => {
    corkSoundEffect.play();
    singleRound('scissors', getComputerChoice());
    decideWinner(playerScore, computerScore);
});

musicBtnPlay.addEventListener('click', ()=>{
    corkSoundEffect.play();
    mainTheme.play();
})
musicBtnStop.addEventListener('click', ()=>{
    corkSoundEffect.play();
    mainTheme.pause();
})

// Function that declares a winner when someone reaches 5 points.
function decideWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        resultsParagraph.textContent = 'You Won. Congratulations!';
        winnerSoundEffect.volume = '0.1';
        winnerSoundEffect.play();
        buttonsContainer.style.visibility = 'hidden';
        gameEnds();
    } else if (computerScore === 5) {
        resultsParagraph.textContent = 'You Lost.';
        loserSoundEffect.volume = '0.1';
        loserSoundEffect.play();
        buttonsContainer.style.visibility = 'hidden';
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
    resultsParagraph.style.color = 'white';
    resultsParagraph.classList.toggle('popUpParagraph');
    resultsParagraph.classList.toggle('popUpParagraph2');
}

// Function that hides the rock, paper and scissors buttons and creates a reset button when the player denies to play again.
function denyToPlayAgain() {
    rockButton.style.visibility = 'hidden';
    paperButton.style.visibility = 'hidden';
    scissorsButton.style.visibility = 'hidden';
    scoresTitle.textContent = `Final score`
    let resetButton = document.createElement('button');
    resetButton.textContent = 'Play again!';
    resetButton.classList.add('play-again-button', 'buttons-style');
    resetButton.style.display = 'block';
    buttonsContainer.replaceWith(resetButton);
    resetButton.addEventListener('click', () => {
        gameContainer.classList.add('playAgainAnimation');
        setTimeout(() => {
            gameContainer.classList.remove('playAgainAnimation');
        }, 1600);
        setTimeout(() => {
            playAgain();
            rockButton.style.visibility = 'visible';
            paperButton.style.visibility = 'visible';
            scissorsButton.style.visibility = 'visible';
            resetGameSoundEffect.volume = '0.1';
            resetGameSoundEffect.play();
            resetButton.replaceWith(buttonsContainer);
            gameContainer.classList.replace('background-image2', 'background-image1');
            gameContainer.classList.replace('background-image3', 'background-image1');
        }, 750);
    })
    gameContainer.insertBefore(resetButton, scoresTitle);
}

// Function that declares the game has ended and announces a winner
function gameEnds() {
    let playAgainDiv = document.createElement('div');
    playAgainDiv.classList.add('play-again-div');
    buttonsContainer.replaceWith(playAgainDiv);
    let playAgainParagraph = document.createElement('p');
    playAgainParagraph.textContent = 'Would you like to play again?';
    playAgainParagraph.className = 'play-again-paragraph';
    playAgainDiv.appendChild(playAgainParagraph);
    let yesNoButtonsContainer = document.createElement('div');
    yesNoButtonsContainer.className = 'yes-no-buttons-container';
    playAgainDiv.appendChild(yesNoButtonsContainer);
    let buttonYes = document.createElement('button');
    buttonYes.textContent = 'Yes';
    buttonYes.classList.add('yes-button', 'buttons-style');
    yesNoButtonsContainer.appendChild(buttonYes);
    buttonYes.addEventListener('click', ()=>{
        playAgainDiv.replaceWith(buttonsContainer);
        buttonsContainer.style.visibility = 'visible';
        playAgain();
        resetGameSoundEffect.volume = '0.1';
        resetGameSoundEffect.play();
        gameContainer.classList.remove('appearLeftToRight', 'playAgainAnimation');
        gameContainer.classList.add('showGameScreen');
        setTimeout(()=>{ gameContainer.classList.remove('showGameScreen')}, 1500)
    })
    let buttonNo = document.createElement('button');
    buttonNo.textContent = 'No';
    buttonNo.classList.add ('no-button', 'buttons-style');
    yesNoButtonsContainer.appendChild(buttonNo);
    buttonNo.addEventListener('click', ()=>{
        if( playerScore === 5 ) {
            resultsParagraph.textContent = 'The game ended. You Won!';
            gameContainer.classList.replace('background-image1', 'background-image3');
        } else if (computerScore === 5) {
            resultsParagraph.textContent = 'The game ended. You Lost!';
            gameContainer.classList.replace('background-image1','background-image2');
        }
        resultsParagraph.classList.toggle('popUpParagraph');
        resultsParagraph.classList.toggle('popUpParagraph2');
        denyToPlayAgain();
        playAgainDiv.remove();
        gameContainer.classList.add('showGameScreen');
        setTimeout(() => {
            gameContainer.classList.remove('showGameScreen');
        }, 1500);
    })
}