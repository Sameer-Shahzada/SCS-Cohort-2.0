// Write a program to swap two numbers by using destructuring assignment

function swapNumbers(a, b) {
    console.log(`Before Swapping: a = ${a}, b = ${b}`);

    // swapping logic
    [a, b] = [b, a];
    const swapNumbers = (a, b) => [b, a];
    console.log(`After Swapping: a = ${a}, b = ${b}`);

    // Returning swapped values so they can be used later in the program
    return { a, b };
}
swapNumbers(5, 10);