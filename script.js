function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return 'Rock';
    }
    else if (number === 1) {
        return 'Paper';
    }
    return 'Scissors';
}

function playRound(playerChoice, computerChoice) {
    let playerWon = getRoundWinner(playerChoice, computerChoice);

    if (playerWon) {
        console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
    }
    else if (playerWon === false) {
        console.log(`You Lost! ${computerChoice} beats ${playerChoice}`);
    }
    else {
        console.log(`It's a tie! You both chose ${playerChoice}`);
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

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', passChoices);
})

function passChoices() {
    const playerChoice = this.textContent;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

function updateScore(playerWon) {
    if (playerWon) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    }
    else if (playerWon === false) {
        computerScore++
        computerScoreDisplay.textContent = computerScore;
    }
    
}

let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('.player.score');
const computerScoreDisplay = document.querySelector('.computer.score');