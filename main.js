let wins = 0;
let draws = 0;
let loses = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    let option;
    switch(random) {
        case 1: { return 'rock';
        }
        case 2: {
            return 'paper'
        }
        default: {
            return 'scissors'
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
    switch(playerSelection) {
        case 'rock': {
            if (computerSelection === 'rock') {
                draws += 1;
                result = `It's draw! ${playerSelection} vs ${computerSelection}.`;
                return result;
            } else if (computerSelection === 'paper') {
                wins += 1;
                result = `You wins! ${playerSelection} beats ${computerSelection}.`;
                return result;
            } else {
                loses += 1;
                result = `You loses! ${computerSelection} beats ${playerSelection}.`;
                return result;
            }
        }
        case 'paper': {
            if (computerSelection === 'rock') {
                wins += 1;
                result = `You wins! ${playerSelection} beats ${computerSelection}.`;
                return result;
            } else if (computerSelection === 'paper') {
                draws += 1;
                result = `It's draw! ${playerSelection} vs ${computerSelection}.`;
                return result;
            } else {
                loses += 1;
                result = `You loses! ${computerSelection} beats ${playerSelection}.`;
                return result;
            }
        }
        case 'scissors': {
            if (computerSelection === 'rock') {
                loses += 1;
                result = `You loses! ${computerSelection} beats ${playerSelection}.`;
                return result;
            } else if (computerSelection === 'paper') {
                wins += 1;
                result = `You wins! ${playerSelection} beats ${computerSelection}.`;
                return result;
            } else {
                draws += 1;
                result = `It's draw! ${playerSelection} vs ${computerSelection}.`;
                return result;
            }
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const optionPlayer = prompt('Choose an option between Rock, Paper or Scissors').toLowerCase();
        const optionCumputer = getComputerChoice();
        const result = playRound(optionPlayer, optionCumputer);
        console.log(result);
    }
    if(wins > loses) {
        console.log(`You are the winner! with ${wins} wins.`);
    } else if (wins < loses) {
        console.log(`You are the loser with ${loses} defeats, try again! `);
    } else {
        console.log(`It's a draw, your wins ${wins} vs the wins of the oponent ${loses}.`);
    }
}





