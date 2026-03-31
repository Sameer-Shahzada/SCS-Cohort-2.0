// Write a program to check if string is palindrome or not.

function palindromeString(str) {
    let reversed = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    // Dont compare inside loop -> build first then compare 
    if (str === reversed) {
        return 'palindrome';
    } else {
        return 'not palindrome';
    }

}

console.log(palindromeString('madam'));


// Interview preferred approach is here by using two pointer 

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

/*
7️⃣ Why This is Better
Approach	Time	Space
Your approach	O(n)	O(n)
Two pointer	O(n)	O(1) ✅


🚀 Next Challenge (Important)

Modify your function to handle:

"A man a plan a canal Panama"

Output:

true

👉 Ignore:

spaces
case sensitivity
*/

// Note -> Dont forgot to learn two pointer technique and implement 
// abovr challenging question "A man a plan a canal Panama"