/*
    Check if a Number is Automorphic 
    An automorphic number is a number whose square ends with the same digits as the number itself. 
    For examples - 
    - 5 is an automorphic number because 5^2 = 25, which ends with 5. 
    - 25 is an automorphich number because 25^2 = 625, which ends with 25.
    - Similarly, 76 is an automorphic number because 76^2 = 5776, which ends with 76.

    Write a program that accepts a positive integer n and checks whether it is an automorphic number or not.
    - If n is an Automorphic number then return "Automorphic"
    - Otherwise, return "Not Automorphic"
    
*/

function isAutomorphic(n) {
    if(!Number.isInteger(n) || n < 0) {
        return 'Invalid Input';
    }
    
    // find out the square of given number 
    let square = n * n;
    console.log(square)
    
    // find out the length of original number
    let lenOfDigits = n.toString().length;
    console.log(lenOfDigits)
    
    let lastDigits = square % Math.pow(10, lenOfDigits)
    console.log(lastDigits)
    
    return lastDigits === n ? 'Automorphic' : 'Not Automorphic';
    
}

console.log(isAutomorphic(25));