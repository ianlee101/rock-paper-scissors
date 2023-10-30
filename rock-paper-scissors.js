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

function game() {
    let won = 0, lose = 0, tied = 0;
    const numberOfGames = 5;

    for (let i = 0; i < numberOfGames; i++) {
        let playerSelection;

        // continuously ask for input if the inputs is not one of rock, paper or scissors.
        while (true) {
            playerSelection = prompt("Please select rock, paper or scissors: ").toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                break;
            }
            console.log("Invalid input. Please select rock, paper or scissors");
        }

        // log and track results
        let results = playRound(playerSelection, getComputerChoice());
        console.log(results);
        if (results.toLowerCase().includes("win")) {
            won++;
        } else if (results.toLowerCase().includes("lose")) {
            lose++;
        } else {
            tied++;
        }
    }

    // log end results.
    console.log("\n\n");
    if (won - lose === 0) {
        console.log("You tied!");
    } else if (won - lose  > 0) {
        console.log("You are the winner!");
    } else {
        console.log("The computer is the winner!");
    }

    // print end statistics.
    console.log(`Games won: ${won}/${numberOfGames}`);
    console.log(`Games lost: ${lose}/${numberOfGames}`);
    console.log(`Games tied: ${tied}/${numberOfGames}`);
}

game();