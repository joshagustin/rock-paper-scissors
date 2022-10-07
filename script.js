let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('.player.score');
const computerScoreDisplay = document.querySelector('.computer.score');
const displayMessage = document.querySelector('p');
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', passChoices);
})

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[index];
}

function playRound(playerChoice, computerChoice) {
    let playerWon = getRoundWinner(playerChoice, computerChoice);
    if (playerWon) {
        updateMessage(`You won! ${playerChoice} beats ${computerChoice}`);
    }
    else if (playerWon === false) {
        updateMessage(`You lost! ${computerChoice} beats ${playerChoice}`);
    }
    else {
        updateMessage(`It's a tie! You both chose ${playerChoice}`);
    }
    updateScore(playerWon);
}

function getRoundWinner(playerChoice, computerChoice) {
    let playerWon = null;
    if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        playerWon = true;
    }
    else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        playerWon = true;
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        playerWon = true;
    }
    else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        playerWon = false;
    }
    else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        playerWon = false;
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        playerWon = false;
    }
    return playerWon;
}

function passChoices() {
    const endMessage = document.querySelector('.end.message');
    if (endMessage) resetGame();
    const playerChoice = this.textContent;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

function updateScore(playerWon) {
    if (playerWon) playerScore++;
    else if (playerWon === false) computerScore++;
    updateScoreDisplay(playerScore, computerScore);
    
    if (playerScore > 4 || computerScore > 4) {
        displayGameWinner(playerWon);
    }
}

function updateMessage(message) {
    displayMessage.textContent = message;
}

function displayGameWinner(playerWon) {
    const endMessage = document.createElement('p');
    endMessage.classList.add('end', 'message');
    if (playerWon) {
        endMessage.textContent = 'You won the game! Can you win twice?';
    }
    else {
        endMessage.textContent = 'You lost the game. Better luck next time!';
    }
    body.appendChild(endMessage);
}

function updateScoreDisplay(playerScore, computerScore) {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreDisplay(playerScore, computerScore);
    body.removeChild(body.lastChild);
}