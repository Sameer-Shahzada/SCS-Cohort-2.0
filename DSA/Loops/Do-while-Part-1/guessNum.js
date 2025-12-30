import promptSync from 'prompt-sync';
const prompt = promptSync();

const system = Math.floor(Math.random() * 100) + 1;
function guessingGame(machine) {
    let guess;

    do {
        guess = Number(prompt("Guess a number between 1 and 100: "));

        if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
            console.log("Invalid Number");
            continue;
        }

        if (guess > machine) {
            console.log("Too large number");
        } else if (guess < machine) {
            console.log("Too small number");
        } else {
            console.log("Congratulations! You guessed the correct number.");
        }

    } while (guess !== machine);
}

guessingGame(system);