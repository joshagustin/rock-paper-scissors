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

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', passChoices);
})

function passChoices() {
    const playerChoice = this.textContent;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}