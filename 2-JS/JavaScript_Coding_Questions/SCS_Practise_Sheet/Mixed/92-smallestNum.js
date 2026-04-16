//-> 92. Find the smallest number in an array using Math.min() and the spread operator.

function smallestNum(arr) {

    const min = Math.min(...arr);
    return min;
}

console.log(smallestNum([55, 6])); // 6