// -> 42. Write a function to calculate the area of a circle.

function ArOfCircle(radius) {
    // validation 
    if(!Number.isInteger(radius) || Number.isNaN(radius)) {
        return 'Invalid Input';
    }
    const pi = 3.14;
    const ArOfCircle = pi * radius * radius;
    return ArOfCircle;

}
console.log(ArOfCircle(54));