// Write a program to find the strong number 
// 145 -> 1! + 4! + 5! is equal to original number then it is a strong number

// create a function 
function strongNumber(num) {
    if(!Number.isInteger(num) || num <= 0) {
        return 'Invalid Input';
    }

    let sum = 0; // to store the sum of factorials of digits

    // Outer loop: extracts digits one by one
    for(let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
        let digit = temp % 10; // to extract the last digit of temp number
        let fact = 1;

        // Inner loop: calculates factorial of the digit
        for(let i = 1; i <= digit; i++) {
            fact *= i;
        }
        sum += fact; // Adds the factorial of the current digit to sum.
    }
    return sum === num ? "Strong Number" : "Not a Strong Number";
}

console.log(strongNumber(145));