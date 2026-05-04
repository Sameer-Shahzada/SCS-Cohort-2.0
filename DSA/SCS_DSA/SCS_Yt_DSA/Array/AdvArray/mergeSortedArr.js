let merge = new Array(arr1.length + arr2.length)
let i = j = k = 0;

while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
        merge[k++] = arr[i++]
    } else {
        merge[k++] = arr[j++]
    }
}

while(j < arr2.length) {
    merge[k++] = arr2[j++]
}

while(i < arr1.length) {
    merge[k++] = arr1[j++]
}

console.log(merge)