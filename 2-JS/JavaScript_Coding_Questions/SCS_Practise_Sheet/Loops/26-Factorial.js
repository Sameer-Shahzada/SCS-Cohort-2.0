//-> 26. Calculate the factorial of 5 using a loop.


function findFactorial(num) {
    if(!Number.isInteger(num) || Number.isNaN(num)) {
        return 'Invalid Input';
    }

    // logic 
    let fact = 1; 
    for(let i = 5; i >= 1; i--) {
        fact *= i;
        // 5 x 4 x 3 x 2 x 1 = 120
    }
    console.log(fact);
}
findFactorial(5)