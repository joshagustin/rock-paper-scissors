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
// play one game of five rounds