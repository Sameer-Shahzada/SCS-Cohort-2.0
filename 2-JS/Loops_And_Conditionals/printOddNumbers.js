// print only first 3 odd number from 1 to 20 and stop the execution just after 3 odd values
let count = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    count++;
    if (count === 3) {
      break;
    }
  }
}
console.log("count - ", count);
