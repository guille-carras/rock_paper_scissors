
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

console.log(getComputerChoice());