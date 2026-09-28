// Write a program to find the factorial of a given number. 

//-> 4! = 4 x 3 x 2 x 1 = 24

/*
Approach 

- declare a variable fact and initialize it with 1.
- iterate a loop 
- logic - fact *= i 
- return the factorial 

*/

function findFactorial (num) {
// validation 
if(!Number.isInteger(num) || Number.isNaN(num)) {
    return `Invalid input of number`;
}
let fact = 1; 

for(let i = num; i > 0; i--) {
    fact *= i;
}
return fact;
}
console.log(findFactorial(4))
