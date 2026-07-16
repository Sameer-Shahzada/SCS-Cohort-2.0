// Write a program to check if given string is palindrome or not by using 2-pointer technique.

/*

Logic

Compare:
first ↔ last
second ↔ second last
- Continue until pointers meet.

*/

function isPalindrome (str) {
    // validation 
    if(typeof str !== 'string') {
        return `Invalid String`;
    }

    let left = 0;
    let right = str.length - 1;

    while(left < right) {
        if(str[left] !== str[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome('madam'))  // true
console.log(isPalindrome('sameer')) // false

/*

6️⃣ Dry Run (Two Pointers)

Input

madam
m a d a m
↑       ↑

Compare

m == m ✅

Move pointers

  a d a
  ↑   ↑

Compare

a == a ✅

Pointers meet

d
↑

Return

true

*/