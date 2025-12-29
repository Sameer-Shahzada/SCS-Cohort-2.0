//-> Write a program to check whether a given 10-digit ISBN number is valid or not by using for loop.
// - ISBN Formula: (d1*10 + d2*9 + d3*8 + d4*7 + d5*6 + d6*5 + d7*4 + d8*3 + d9*2 + d10*1) % 11 == 0
import promptSync from 'prompt-sync';
const prompt = promptSync();

const num = prompt("Enter a 10-digit ISBN number: ");

function isISBN(n) {
    let str = n.toString();

    if (!/^\d{10}$/.test(str)) {
        return "Invalid ISBN";
    }

    let sum = 0;

    for (let i = 0; i < 10; i++) {
        sum += (i + 1) * Number(str[i]);
    }

    return sum % 11 === 0 ? "Valid ISBN" : "Invalid ISBN";
}

console.log(isISBN(num));