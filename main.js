
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

function playRound(playerSelection) {
    let result;
    let computerSelection = getComputerChoice();
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
    console.log(playerSelection, computerSelection);
}

let wins = 0;
let draws = 0;
let loses = 0;


const containerBtns = document.querySelector('#container');
const counter = document.querySelector('#counter');

containerBtns.addEventListener('click', (event) => {
    let target = event.target.id;
    playRound(target);
    counter.textContent = `wins: ${wins} draws: ${draws}, and loses: ${loses}`;
});


        





