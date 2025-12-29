import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Enter a number: "));

function strongNumber(num) {
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        let fact = 1;

        for (let i = 1; i <= digit; i++) {
            fact *= i;
        }

        sum += fact;
        temp = Math.floor(temp / 10);
    }

    return sum === num ? "Strong Number" : "Not a Strong Number";
}
console.log(strongNumber(n));