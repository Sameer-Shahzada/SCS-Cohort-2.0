// Write a program to reverse the given string

function reverseString(str) {

    // add validation 
    if(typeof str !== 'string') return '';

    let reversed = '';    // an empty string to store the reverse string
    for(let i = str.length - 1; i >= 0; i--) {
        // reversed += str.charAt(i)
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('Sameer'))


/*
reversed = ""
i = 5 → str[5] = 'r'

Iteration Table
i	    str[i]	    reversed
5	    r	           "r"
4	    e	           "re"
3	    e	           "ree"
2	    m	           "reem"
1	    a	           "reema"
0	    S	           "reemaS"

Final Output
"reemaS"

5️⃣ Interview Insight (Very Important)

Your solution is good, but interviewers may ask:

👉 “Can you optimize this?”

⚠️ Problem with your approach
reverse += str[i];

This creates a new string every time (strings are immutable).

✅ Better Approach (Array Method)

function reverseString(str) {
    return str.split('').reverse().join('');
}

Complexity
Time: O(n)
Space: O(n)

*/


// -> 🔥 Best Interview Answer (Manual + Efficient)

function reverseString(str) {
    let arr = str.split('');

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('');
}

/*
Why this is best?

✔ Uses two-pointer technique
✔ Teaches DSA concept
✔ Common interview pattern
✔ Works for arrays too

*/
