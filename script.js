// get computer choice
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

// get player choice
function getPlayerChoice() {
    let choice = '';
    while (choice !== 'Rock' && choice !== 'Paper' && choice !== 'Scissors') {
        choice = prompt('Rock, paper, or scissors?');
        choice = choice.slice(0, 1).toUpperCase() + choice.slice(1).toLowerCase();
    }
    return choice;
}

// play one round
function playRound(playerChoice, computerChoice) {
    let playerWon = getRoundWinner(playerChoice, computerChoice);

    if (playerWon) {
        return `You Won! ${playerChoice} beats ${computerChoice}`;
    }
    else if (playerWon === false) {
        return `You Lost! ${computerChoice} beats ${playerChoice}`;
    }
    return `It's a draw! You both chose ${playerChoice}`;
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

// play one game of five rounds