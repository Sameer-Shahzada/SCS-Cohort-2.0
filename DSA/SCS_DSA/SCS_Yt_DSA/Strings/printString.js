// Write a program to print each character from a given string 

// function printString(str) {
//     for(let i = 0; i < str.length; i++) {
//         console.log(str[i]);
//         return str[i] // it only return first char of string and exit the function
//     }
// }
// printString('Sameer')


// Interview preferred approach first store the required string then return 

// 1st approach 
// function printString(str) {
//     let result = [];

//     for(let i = 0; i < str.length; i++) {
//         result.push(str[i]);
//     }
//     return result;
// }

// console.log(printString('Sameer'))

// 2nd approach 

function printString(str) {
    let result = '';

    for(let i = 0; i < str.length; i++) {
        result += str[i] + '\n';
    }
    return result;
} 
console.log(printString('Sameer'));