function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

function validatePrompt(checkPrompt) {

    if (!checkPrompt) {
        throw new Error("Please choose a number, don't leave me empty!");
    }

    const numberToValidate = Number(checkPrompt);
    if ((typeof numberToValidate != "number") || (Number.isNaN(numberToValidate))) {
        throw new Error("You must enter a valid number, characters are not allowed!");
    }

    if (numberToValidate > 1000) {
        throw new Error("The number must be less than 1000!")
    }

    if (numberToValidate < 0) {
        throw new Error("The number must be greater than 0")
    }

    return numberToValidate;
}

function getPlayerGuess() {
    let guess = prompt("Choose a number between 1 and 1000, you have up to 10 attempts to guess!");
    validatePrompt(guess);
    return guess;
}


function checkGuess(numberChoosenByPlayer, numberToGuess) {
    let isNumberGuessed = false;
    let message = "";

    if (numberChoosenByPlayer > numberToGuess) {
        message = "Sorry, too high!";
    }

    if (numberChoosenByPlayer < numberToGuess) {
        message = "Sorry, too low..."
    }

    if (numberChoosenByPlayer == numberToGuess) {
        isNumberGuessed = true;
        message = "That's correct, you're a genius! How did you do that?";
    }

    return { isNumberGuessed, message };
}

let scoringList = [];

function addScore(attempt) {
    scoringList.push(attempt);
    console.log(scoringList);
};

function checkResult(numberToGuess, maxAttempts, numberOfAttempts, isNumberGuessed, message) {
    if (isNumberGuessed) {
        const attempt = {
            totalAttempts: 0,
            toGuess: numberToGuess,
            points: 0,
        }

        switch (numberOfAttempts) {
            case 1:
                attempt.totalAttempts = 1;
                attempt.points = 10
                break;
            case 2:
                attempt.totalAttempts = 2;
                attempt.points = 9;
                break;
            case 3:
                attempt.totalAttempts = 3;
                attempt.points = 8;
                break;
            case 4:
                attempt.totalAttempts = 4;
                attempt.points = 7;
                break;
            case 5:
                attempt.totalAttempts = 5;
                attempt.points = 6;
                break;
            case 6:
                attempt.totalAttempts = 6;
                attempt.points = 5;
                break;
            case 7:
                attempt.totalAttempts = 7;
                attempt.points = 4;
                break;
            case 8:
                attempt.totalAttempts = 8;
                attempt.points = 3;
                break;
            case 9:
                attempt.totalAttempts = 9;
                attempt.points = 2;
                break;
            case 10:
                attempt.totalAttempts = 10;
                attempt.points = 1;
                break;
        }

        addScore(attempt);
          alert(`${message} \nYou used ${numberOfAttempts} out of 10 attempts! Good Job! \nYou gained ${attempt.points} points!`);
        return true;
    } else {
        if (numberOfAttempts == maxAttempts) {
            alert(`You have no more attempts left!`);
        } else {
            alert(`${message}. You have ${maxAttempts} atttempts left!`);
        }
        return false;
    }
}


function game() {
    const numberToGuess = generateRandomNumber();
    let maxAttempts = 10;

    for (let numberOfAttempts = 1; numberOfAttempts <= maxAttempts; numberOfAttempts++) {
        try {
            const playerGuess = getPlayerGuess();
            const { isNumberGuessed, message } = checkGuess(playerGuess, numberToGuess);
            
            maxAttempts--;
            
            if (checkResult(numberToGuess, maxAttempts, numberOfAttempts, isNumberGuessed, message)) {
                break;
            }

        } catch (e) {
            alert(`${e.message}`);
            numberOfAttempts--;
        }
    }
}



