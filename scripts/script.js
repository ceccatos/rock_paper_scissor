function computerPlay() {
    const min = 1;
    const max = 3;
    let randomNumber = Math.floor(Math.random()*(max - min + 1)+min); 
    switch (randomNumber) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSOR"
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection+computerSelection) {
        case "ROCKPAPER":
            return "You Lose! Paper beats Rock";
        case "ROCKROCK":
            return "Tie! Rock versus Rock";
        case "ROCKSCISSOR":
            return "You Win! Rock beats Scissor"
        case "PAPERPAPER":
            return "Tie! Paper versus Paper";
         case "PAPERROCK":
            return "You Win! Paper beats Rock";
        case "PAPERSCISSOR":
            return "You Lose! Scissor beats Paper"
        case "SCISSORPAPER":
            return "You Win! Scissor beats Paper";
        case "SCISSORROCK":
            return "You Lose! Rock beats Scissor";
        case "SCISSORSCISSOR":
            return "Tie! Scissor versus Scissor"
    }    
}

function game(playerSelection) {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection.toUpperCase(),computerPlay()));
    }
}