
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

function winnerOrloser() {
    if (wins === 5) {
        counter.textContent = `wins: ${wins} draws: ${draws}, and loses: ${loses} \n
        You are the winner`;


        const btns = containerBtns.children;
        for (btn of btns) {
            btn.setAttribute('disabled', 'true');
        };   

        const btnReset = document.createElement('button');
        btnReset.textContent = 'Reset game';
        btnReset.addEventListener('click', resetGame);

        containerBtnReset.appendChild(btnReset);
        btnReset.addEventListener('click', () => {
            containerBtnReset.removeChild(btnReset);
        })

    } else if (loses === 5) {
        counter.textContent = `wins: ${wins} draws: ${draws}, and loses: ${loses} \n
        You are the loser, play again!`;

        const btns = containerBtns.children;
        for (btn of btns) {
            btn.setAttribute('disabled', 'true');
        };
        
        const btnReset = document.createElement('button');
        btnReset.textContent = "Reset game";
        btnReset.addEventListener('click', resetGame);

        containerBtnReset.appendChild(btnReset);
        btnReset.addEventListener('click', () => {
            containerBtnReset.removeChild(btnReset);
        })
    }
}

function resetGame () {
    wins = 0;
    draws = 0;
    loses = 0;

    counter.textContent = 'let\'s see if luck is on your side';

    const btns = containerBtns.children;
    for (btn of btns) {
        btn.removeAttribute('disabled');
    };
}

let wins = 0;
let draws = 0;
let loses = 0;

const body = document.querySelector('body');
const containerBtnReset = document.querySelector('#containerBtnReset');
const containerBtns = document.querySelector('#container');
const counter = document.querySelector('#counter');

containerBtns.addEventListener('click', (event) => {
    let target = event.target.id;
    playRound(target);
    counter.textContent = `wins: ${wins} draws: ${draws}, and loses: ${loses}`;
    winnerOrloser();
});



