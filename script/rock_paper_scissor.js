function computerPlay() {
    const choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    let message = "";
    let isGameWon = false;
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    message = "It's a draw!"
                    break;
                case "paper":
                    message = "You lose! Paper beats Rock!"
                    break;
                case "scissors":
                    message = "You win! Rock beats Scissors!"
                    isGameWon = true;
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    message = "You win! Paper beats Rock!"
                    isGameWon = true;
                    break;
                case "paper":
                    message = "It's a draw!"
                    break;
                case "scissors":
                    message = "You win! Rock beats Scissors!"
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    message = "You lose! Rock beats Scissors!"
                    break;
                case "paper":
                    message = "You win! Scissors beat Paper!"
                    isGameWon = true;
                    break;
                case "scissors":
                    message = "It's a draw!"
                    break;
            }
            break;
        default:
            throw new Error("You made a different choice or wrote some gibberish, try again!")
    }

    return { isGameWon, message };
}

function validatePlayerSelection(playerSelection) {
    if(playerSelection == null){
        throw new Error("Selection cannot not be empty!")
    }

    if (playerSelection == "") {
        throw new Error("Selection cannot not be empty!")
    }

    if (Number(playerSelection)) {
        throw new Error("Selection cannot be a number");
    }
}

function game() {
    const computerSelection = computerPlay();
    let totalRounds = 5;
    var message = "";
    while (totalRounds > 0) {
        const playerSelection = prompt("Select one of the following: \nRock Paper Scissors");
        try {
            validatePlayerSelection(playerSelection);
            let result = playRound(playerSelection, computerSelection);
            ({ isGameWon, message } = result);
            if (isGameWon) {
                break;
            } else {
                alert(message);
            }
        } catch (e) {
             alert(e.message);
        }
        totalRounds--;
    }
    if (totalRounds == 0) {
         alert("You run out of attempts! The world is now controlled by the Evil AI");
        // alert("You run out of attempts! The world is now controlled by the Evil AI");
    } else {
         alert(message);
    }
}


