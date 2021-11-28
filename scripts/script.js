function computerPlay() {
    const min = 1;
    const max = 3;
    let randomNumber = Math.floor(Math.random()*(max - min + 1)+min); 
    switch (randomNumber) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor"
    }
}