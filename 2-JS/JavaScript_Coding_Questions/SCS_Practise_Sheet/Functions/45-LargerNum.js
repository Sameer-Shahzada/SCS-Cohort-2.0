//-> Write a function that takes two numbers and returns the larger number.

function greaterNum(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(greaterNum(5,9));
console.log(greaterNum(10,9));