/*

Basic Coding Questions | From SCS_Practise_Sheet
Loops
22. Calculate the sum of numbers from 1 to 10 using a while loop.
23. Print each character of "JavaScript" using for...of.
26. Calculate the factorial of 5 using a loop.
27. Print a 3×3 grid using nested loops.
28. Reverse an array manually using a loop.
Arrays 
98. Return total characters in a string.
39. Sort an array of numbers in ascending order.
40. Copy an array using spread operator and compare references.
48. Write a function that returns the largest number in an array.
58. Remove falsy values from an array.
81. Return only even numbers from an array.
82. Count occurrences of a value in an array.
89. Rotate an array right by one position.
96. Remove duplicate values from an array.




43. Write a function that returns the sum of an array.
44. Write a function to check if a string starts with a character.
94. Divide two numbers with error handling.


Recursion 
46. Write a recursive function to calculate factorial.
93. Return first n Fibonacci numbers.

String 
98. Return total characters in a string.
47. Write a function to reverse a string.
49. Write a function that converts a string to kebab-case.
54. Check if a string is a palindrome.
56. Count total words in a sentence. (3 approaches available)
57. Return the longest word from a string.
59. Convert a string to camelCase.
71. Print the length of a string.
72. Print last 4 characters using slice().
73. Convert a string to lowercase.
74. Split a string into an array of words.
75. Find index of a character using indexOf().
76. Replace a word in a string.
77. Repeat a string three times.
78. Check if a word exists in a string.
79. Remove all spaces from a string.
80. Count the number of vowels in a string.
83. Reverse each word in a sentence.

// ---------------- 
🔥 Top 10 Important String Problems (Interview-Oriented)
1️⃣ Find Length of a String

Concept: String property

Input: "Sameer"
Output: 6
2️⃣ Reverse a String

Concept: Loop / Two-pointer

Input: "hello"
Output: "olleh"
3️⃣ Check Palindrome String

Concept: Comparison

Input: "madam"
Output: true
4️⃣ Count Vowels in a String

Concept: Traversal + condition

Input: "javascript"
Output: 3
5️⃣ Count Occurrence of a Character

Concept: Frequency counting

Input: "hello", 'l'
Output: 2
6️⃣ Convert First Letter to Uppercase

Concept: String manipulation

Input: "sameer"
Output: "Sameer"
7️⃣ Check if String Starts With a Character

Concept: Index / built-in

Input: "Hello", 'H'
Output: true
8️⃣ Remove Spaces from String

Concept: Replace / loop

Input: "hello world"
Output: "helloworld"
9️⃣ Find Largest Word in a String

Concept: Split + traversal

Input: "I love javascript"
Output: "javascript"
🔟 Count Words in a String

Concept: Split

Input: "I love coding"
Output: 3
🧠 Recommended Practice Order (Very Important)

Follow this exact order:

1 Length
2 Reverse
3 Palindrome
4 Count vowels
5 Character frequency
6 Capitalize first letter
7 Starts with
8 Remove spaces
9 Largest word
10 Count words


----- /


52. Convert Celsius to Fahrenheit using a function.
55. Check whether a number is prime.
60. Generate a random number between two values.
91. Format date as DD/MM/YYYY.

Pattern 
84. Print a right-angled triangle pattern.

Adil Basic Coding Question Sheet 
1- Reverse String:
2- Check Palindrome:
3- Factorial:
4- Fibonacci Series:
5- Anagram Check:
6- Reverse an Integer:
7- Max Character:
8- Fizz Buzz:
9- Array Chunking:
10- Reverse Words:
11- Capitalize Letter:
12- Caesar Cipher:
13- Validate Palindrome:
14- Merge Sorted Arrays:
15- Flatten Array:
16- Validate Email:
17- Get Primes:
18- Linked List Reversal:
19- Binary Search:
20- Two Sum:
21- Pythogorean Triples:
22- Find Missing Number in Array:
23- Flatten Array:
24- Debounce Function
25- Throttle Function:
26- Find Longest Word in a String:
27- Remove Duplicates from Array:
28- Find Intersection of Two Arrays:
29- Implement Memoization:
30- Count Vowels in a String:


1- Reverse String:
function reverseString(str) {
return str.split('').reverse().join('');
}

2- Check Palindrome:
function isPalindrome(str) {
const reversed = str.split('').reverse().join('');
return str === reversed;
}

3- Factorial:
function factorial(n) {
if (n === 0 || n === 1) return 1;
return n * factorial(n - 1);
}

4- Fibonacci Series:
2/29/24, 4:15 PM OneNote
https://onedrive.live.com/redir?resid=E4AE742DD575137F%21128&page=Edit&wd=target%28Quick Notes.one%7Ce9700b7b-eaa0-491b-921c-… 2/8
function fibonacci(n) {
if (n <= 1) return n;
return fibonacci(n - 1) + fibonacci(n - 2);
}

5- Anagram Check:
function isAnagram(str1, str2) {
return str1.split('').sort().join('') === str2.split('').sort().join('');
}

6- Reverse an Integer:
function reverseInteger(num) {
return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

7- Max Character:
function maxCharacter(str) {
const charMap = {};
let maxChar = '';
let maxCount = 0;
for (let char of str) {
charMap[char] = charMap[char] + 1 || 1;
if (charMap[char] > maxCount) {
maxChar = char;
maxCount = charMap[char];
}
}
return maxChar;
}

8- Fizz Buzz:
function fizzBuzz(n) {
for (let i = 1; i <= n; i++) {
if (i % 3 === 0 && i % 5 === 0) {
console.log('FizzBuzz');
} else if (i % 3 === 0) {
console.log('Fizz');
} else if (i % 5 === 0) {
console.log('Buzz');
} else {
console.log(i);
}

}
}

9- Array Chunking:
function chunkArray(arr, size) {
const chunkedArr = [];
let index = 0;
while (index < arr.length) {
chunkedArr.push(arr.slice(index, index + size));
index += size;
}
return chunkedArr;
}

10- Reverse Words:
function reverseWords(str) {
return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

11- Capitalize Letter:
function capitalizeLetters(str) {
return str.toLowerCase().replace(/\b[a-z]/g, char =>
char.toUpperCase());
}

12- Caesar Cipher:
function caesarCipher(str, shift) {
return str
.split('')
.map(char => {
const code = char.charCodeAt(0);
if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
let shiftedCode = code + shift;
if ((code <= 90 && shiftedCode > 90) || (code <= 122 &&
shiftedCode > 122)) {
shiftedCode -= 26;
}
return String.fromCharCode(shiftedCode);
}
return char;
})
.join('');
}

13- Validate Palindrome:
function isPalindrome(str) {
const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
return cleaned === cleaned.split('').reverse().join('');
}

14- Merge Sorted Arrays:
function mergeSortedArrays(arr1, arr2) {
return [...arr1, ...arr2].sort((a, b) => a - b);
}

15- Flatten Array:
function flattenArray(arr) {
return arr.reduce((acc, val) => Array.isArray(val) ?
acc.concat(flattenArray(val)) : acc.concat(val), []);
}

16- Validate Email:
function validateEmail(email) {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|
(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-
9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

17- Get Primes:
function getPrimes(n) {
const primes = [];
for (let i = 2; i <= n; i++) {
let isPrime = true;
for (let j = 2; j <= Math.sqrt(i); j++) {
if (i % j === 0) {
isPrime = false;
break;
}
}
if (isPrime) primes.push(i);
}
return primes;
}

18- Linked List Reversal:
function reverseLinkedList(head) {

let prev = null;
let current = head;
while (current !== null) {
let next = current.next;
current.next = prev;
prev = current;
current = next;
}
return prev;
}

19- Binary Search:
function binarySearch(arr, target) {
let left = 0;
let right = arr.length - 1;
while (left <= right) {
const mid = Math.floor((left + right) / 2);
if (arr[mid] === target) return mid;
if (arr[mid] < target) left = mid + 1;
else right = mid - 1;
}
return -1;
}

20- Two Sum:
function twoSum(nums, target) {
const map = {};
for (let i = 0; i < nums.length; i++) {
const complement = target - nums[i];
if (map.hasOwnProperty(complement)) {
return [map[complement], i];
}
map[nums[i]] = i;
}
return null;
}

21- Pythogorean Triples:
function findPythagoreanTriples(arr) {
const triples = [];
for (let i = 0; i < arr.length - 2; i++) {
const a = arr[i];

const b = arr[i + 1];
const c = arr[i + 2];
if (a ** 2 + b ** 2 === c ** 2) {
triples.push([a, b, c]);
}
}
return triples;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const pythagoreanTriples = findPythagoreanTriples(array);
console.log("Pythagorean triples:", pythagoreanTriples);

22- Find Missing Number in Array:
function findMissingNumber(arr) {
const n = arr.length + 1; // Including the missing number
const totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
const arraySum = arr.reduce((sum, num) => sum + num, 0); // Sum of
numbers in the array
return totalSum - arraySum;
}
// Example usage:
const array = [1, 2, 3, 5, 6, 7, 8]; // Missing number: 4
console.log("Missing number:", findMissingNumber(array)); // Output:
4

23-Flatten Array:

24- Debounce Function  // Add own debounce here

function debounce(func, delay) {
let timeoutId;
return function() {
const context = this;
const args = arguments;
clearTimeout(timeoutId);
timeoutId = setTimeout(() => {

func.apply(context, args);
}, delay);
};
}

// Example usage:
function handleInput() {
console.log("Input handled");
}

const debouncedHandleInput = debounce(handleInput, 300); //
Debounce with a delay of 300 milliseconds

// Simulating multiple rapid inputs
debouncedHandleInput(); // Only this call will trigger the actual
'handleInput' function
debouncedHandleInput(); // This call will be ignored due to debounce
debouncedHandleInput(); // This call will also be ignored due to
debounce.

25-Throttle Function:

function throttle(func, delay) {
let lastExecuted = 0;
return function() {
const context = this;
const args = arguments;
const now = Date.now();
if (now - lastExecuted >= delay) {
func.apply(context, args);
lastExecuted = now;
}
};
}

// Example usage:
function handleScroll() {
console.log("Scrolled");
}

const throttledHandleScroll = throttle(handleScroll, 1000); // Throttle
with a delay of 1000 milliseconds
// Simulating multiple rapid scrolls
throttledHandleScroll(); // This call will trigger the 'handleScroll' function

throttledHandleScroll(); // This call will be ignored due to throttle
throttledHandleScroll(); // This call will also be ignored due to throttle


*/