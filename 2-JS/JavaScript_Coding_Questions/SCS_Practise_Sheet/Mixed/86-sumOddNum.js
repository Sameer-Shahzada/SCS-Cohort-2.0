//-> 86. Write a program to print sum all odd numbers between 1-50

function sumOddNumbers () {
    let sum = 0;
    for(let i = 0; i <= 50; i++) {
        if(i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOddNumbers())