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
                    message = "It's a draw! But you still used one attempt!"
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
                    message = "It's a draw! But you still used one attempt!"
                    break;
                case "scissors":
                    message = "You lose! Scissors beats Papers!"
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
                    message = "It's a draw! But you still used one attempt!"
                    break;
            }
            break;
        default:
            throw new Error("You made a different choice or wrote some gibberish, try again!")
    }

    return { isGameWon, message };
}

function validatePlayerSelection(playerSelection) {
    if (playerSelection == null || playerSelection == "") {
        throw new Error("Selection cannot not be void!")
    }

    if (Number(playerSelection)) {
        throw new Error("Selection cannot be a number");
    }
}

function game() {
    let totalRounds = 5;
    var message = "";
    while (totalRounds > 0) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Select one of the following: \nRock Paper Scissors");
        try {
            validatePlayerSelection(playerSelection);
            let result = playRound(playerSelection, computerSelection);
            let finaleMessage = "";
            let { isGameWon, message } = result;
            if (isGameWon) {
                finaleMessage = `${message} You saved the world from Xabaras! \nPeople will remember you as their savior! \nCongratulations!`;
                alert(finaleMessage);
                return;
            } else {
                alert(message);
            }
        } catch (e) {
            alert(e.message);
        }

        totalRounds--;
    }
    alert("You condemned the world to a life of suffering! \nPeople will hate you for the rest of your life!");

}
