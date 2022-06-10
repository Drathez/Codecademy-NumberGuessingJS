let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (initialGuess, targetGuess) => Math.abs(targetGuess - initialGuess);

const compareGuesses = (userGuess, compGuess, targetGuess) => {
    let userTargetDiff = getAbsoluteDistance(userGuess, targetGuess);
    let compTargetDiff = getAbsoluteDistance(compGuess, targetGuess)

    if (compTargetDiff >= userTargetDiff) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner.toLowerCase() === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;

