// get computer choice
function getComputerChoice () {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return 'rock';
    }
    else if (number === 1) {
        return 'scissors';
    }
    return 'paper';
}
// get player choice
// play one round
// play one game of five rounds