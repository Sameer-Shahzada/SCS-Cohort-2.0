// Write a program to do left rotation by k steps
let arr = [1,2,3,4,5];

let k = Number(prompt("Enter k value"));

k = k % arr.length;

for(let j = 0; j < k; j++) {
    count++;
    let copy = arr[0]
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }

    arr[arr.length - 1] = copy;
}

console.log(arr)




// Approach 2

let arr = [1,2,3,4,5];

let temp = new Array(arr.length)

let k = Number(prompt("Enter k value"))
k = k % arr.length;

for(let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length]
}

console.log(temp)