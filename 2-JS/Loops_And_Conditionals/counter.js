// Count how many numbers between 1 and 15 are greater then 8 loop and count conditionally

let count = 0;
for (let i = 1; i < 16; i++) {
    if (i > 8) {
        // console.log(i);
        count++;
    }
}
console.log("Count of numbers greater than 8 between 1 and 15 is: " + count);