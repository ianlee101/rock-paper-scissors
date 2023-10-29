function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // make playerSelection and computerSelection case insensitive
    // if player rock
        // check computer selection
        // if rock return "Tie"
        // if paper return "You Lose! Paper beats Rock"
        // if scissors return "You Win! Rock beats Scissors"
    // if player paper
        // check computer selection
        // if rock return "You Win! Paper beats Rock"
        // if paper return "Tie"
        // if scissors return "You Lose! Scissors beats Paper"
    // if player scissors
        // check computer selection
        // if rock return "You Lose! Rock beats Scissors"
        // if paper return "You Win! Scissors beats Paper"
        // if scissors return "Tie"

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "rock") return "You Tied! Rock ties with Rock";
        if (computerSelection === "paper") return "You Lose! Paper beats Rock";
        if (computerSelection === "scissors") return "You Win! Rock beats Scissors";
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") return "You Win! Paper beats Rock";
        if (computerSelection === "paper") return "You Tied! Paper ties with Paper";
        if (computerSelection === "scissors") return "You Lose! Scissors beats Paper";
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") return "You Lose! Rock beats Scissors";
        if (computerSelection === "paper") return "You Win! Scissors beats Paper";
        if (computerSelection === "scissors") return "You Tied! Scissors ties with Scissors";
    }
}