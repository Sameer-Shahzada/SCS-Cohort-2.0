function Merge(arr, l, mid, h) {
  let left = l;
  let right = mid + 1;
  let tempArr = [];

  while (left <= mid && right <= h) {
    if (arr[left] <= arr[right]) {
      tempArr.push(arr[left]);
      left++;
    } else {
      tempArr.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    tempArr.push(arr[left]);
    left++;
  }

  while (right <= h) {
    tempArr.push(arr[right]);
    right++;
  }

  for (let i = l; i <= h; i++) {
    arr[i] = tempArr[i - l];
  }
}
function MergeSort(arr, l, h) {
  if (l >= h) return;

  let mid = Math.floor((l + h) / 2);

  MergeSort(arr, l, mid); // left half
  MergeSort(arr, mid + 1, h); // right half
  Merge(arr, l, mid, h); // merge operation
}

let sampleArr = [3, 2, 4, 1, 5, 8, 7, 10, 1, 9];
console.log("unsorted Arr => ", sampleArr);
MergeSort(sampleArr, 0, sampleArr.length - 1);
