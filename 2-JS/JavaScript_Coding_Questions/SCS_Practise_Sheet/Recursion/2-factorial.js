// -> 2. Write a program to find the factorial using recursion 
/*
    As we know recursion have always two case
    1- base case 
    2- recursive case 

    Factorial has a natural recursive pattern.
    5! = 5 x 4!
    4! = 4 x 3!
    3! = 3 x 2!
    2! = 2 x 1!
    1! = 1 

    So the formula becomes 
    n! = n x (n-1)!

    Base condition 
    0! = 1
    1! = 1
*/

function findFactorial(n) {

    // base condition 
    // Factorial of 0 or 1 is always 1
    if(n === 0 || n === 1) {
        return 1;
    }

    // recursive case 
    // Multiply n with factorial of (n-1)
    return n * findFactorial(n - 1);

}
console.log(findFactorial(5))

/**
Dry Run of Recursive Factorial

Call:
findFactorial(5)

Step-by-step:

5 * findFactorial(4)
4 * findFactorial(3)
3 * findFactorial(2)
2 * findFactorial(1)

Now base case:- findFactorial(1) = 1

Backtracking:

2 * 1 = 2
3 * 2 = 6
4 * 6 = 24
5 * 24 = 120

Result:- 120

Important Concept: Call Stack

Each recursive call goes into the call stack.

findFactorial(5)
findFactorial(4)
findFactorial(3)
findFactorial(2)
findFactorial(1)

Then it resolves from bottom to top.

*/