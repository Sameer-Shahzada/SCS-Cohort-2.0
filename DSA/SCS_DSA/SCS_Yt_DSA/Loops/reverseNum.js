// Write a program to reverse given number 
/* 
    Input - 1224
    Output - 4221

*/

function reverseNumber (num) {
    // validation 
    if(!Number.isInteger(num) || Number.isNaN(num)) {
        return `Invalid input of number`;
    }

    let reversed = 0;

    while(num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);

    }
    return reversed
}
console.log(reverseNumber(1224))
