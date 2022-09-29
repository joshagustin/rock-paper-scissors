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

function getPlayerChoice() {
    let choice = '';
    while (choice !== 'Rock' && choice !== 'Paper' && choice !== 'Scissors') {
        choice = prompt('Rock, paper, or scissors?');
        choice = choice.slice(0, 1).toUpperCase() + choice.slice(1).toLowerCase();
    }
    return choice;
}

function playRound(playerChoice, computerChoice) {
    let playerWon = getRoundWinner(playerChoice, computerChoice);

    if (playerWon) {
        console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
        return playerWon;
    }
    else if (playerWon === false) {
        console.log(`You Lost! ${computerChoice} beats ${playerChoice}`);
        return playerWon;
    }
    console.log(`It's a tie! You both chose ${playerChoice}`);
    return playerWon;
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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let currentRound = 0, maxRounds = 5; currentRound < maxRounds; currentRound++) {
        let playerWon = playRound(getPlayerChoice(), getComputerChoice());
        if (playerWon) {
            playerScore++;
        }
        else if (playerWon === false) {
            computerScore++;
        }
    }

    let message = '';
    if (playerScore > computerScore) {
        message = 'You won the game! ';
    }
    else if (playerScore < computerScore) {
        message = 'You lost the game! ';
    }
    else {
        message = 'No one won the game! ';
    }
    console.log(message +  `You scored ${playerScore} and computer scored ${computerScore}`);
}