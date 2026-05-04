// Write a program to find the factors of given number 


// Brute-force
// function findFactors(num) {
//     for(let i = 1; i <= num; i++) {
//         if(num % i === 0) {
//             console.log(i);
//         }
//     }
// }

// findFactors(12)

// Optimised 

function findFactors(num) {
    for(let i = 1; i <= Math.floor(num/2); i++) { 
        // Math.floor to handle the odd number 
        // num/2 because no any number can divide which is more than its half 
        if(num % i === 0) {
            console.log(i); // print available factors 
        }
        console.log(num) // itself 
    }
}
findFactors(7)

// give it to chatgpt for review because in case of odd number it print itself number twice more