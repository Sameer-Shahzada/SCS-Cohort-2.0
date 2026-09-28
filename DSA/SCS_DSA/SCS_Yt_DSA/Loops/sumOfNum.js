// Write a program to calculate the sum of natural number 

function sumOfNaturalNum(num) {  
    // validation 
    if(!Number.isInteger(num) || num < 0) {
        return `Invalid Input`;
    }

    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNaturalNum(10))