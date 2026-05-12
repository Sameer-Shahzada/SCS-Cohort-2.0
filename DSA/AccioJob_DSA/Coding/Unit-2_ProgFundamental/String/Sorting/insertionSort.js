let arr = [10, 2, 0, 15, 1, 12, 3];

for(let i = 1; i < arr.length - 1; i++) {
    let j = i;
    while(j > 0 && arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        j = j - 1;
    }
    console.log(i, arr)
}
console.log(arr);