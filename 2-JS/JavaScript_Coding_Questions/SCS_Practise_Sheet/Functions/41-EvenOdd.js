//-> 41. Write a function that returns "even" or "odd".

function EvenOdd(num) {
    // validation 
    if(num % 2 === 0) {
        return 'Even Number';
    } else {
        return 'Odd Number';
    }
}
console.log(EvenOdd(4));

