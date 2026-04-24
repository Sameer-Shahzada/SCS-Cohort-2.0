// Move all 0s to one side and 1s to the other (maintain in-place, no extra space ideally).

/*
Approach: Two Pointer (Partitioning)

1. Initialize two pointers:
   - i → traverses array
   - j → tracks position to place next 0

2. Traverse array:
   - If arr[i] == 0:
        → swap arr[i] with arr[j]
        → increment j

3. Key Idea:
   - All elements before j are 0s
   - Elements between j and i are 1s

4. Invariant:
   - [0 ... j-1] → all 0s
   - [j ... i-1] → all 1s

5. Complexity:
   - Time: O(n)
   - Space: O(1)


Initial: [1,1,0,1,0,1,1,0,0]

i=2 → found 0 → swap with j=0
[0,1,1,1,0,1,1,0,0]

i=4 → swap with j=1
[0,0,1,1,1,1,1,0,0]

i=7 → swap with j=2
[0,0,0,1,1,1,1,1,0]

i=8 → swap with j=3
[0,0,0,0,1,1,1,1,1]

*/


const arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];

let i = 0, j = 0;

while (i < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}

console.log(arr)