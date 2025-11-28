// Write a program to count how many numbers in between 1 and 65 which is divisible by 7

let count = 0
for(let i = 1; i < 65; i++) {
    if(i % 7 == 0) {
        console.log(i)
        count++;
    }
}
console.log("Number of count which is divisible by 7 - ", count)