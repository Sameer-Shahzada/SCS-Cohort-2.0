//-> 60. Generate a random number between two values.

function generateRandomNumber () {
    const random = Math.floor(Math.random() * 100) + 1;
    console.log(random)
}
generateRandomNumber()