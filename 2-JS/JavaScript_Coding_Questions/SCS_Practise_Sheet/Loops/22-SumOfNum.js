//-> 22. Calculate the sum of numbers from 1 to 10 using a while loop.

function sumOfNumbers(start, end) {
    let sum = 0;
    let i = start;

    while (i < end) {
        sum += i;
        i++;
    }
    console.log(sum)
}

sumOfNumbers(1, 11);