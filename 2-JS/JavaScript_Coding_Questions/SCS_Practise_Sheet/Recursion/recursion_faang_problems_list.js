/*
Below is a well-known progression of recursion problems commonly used in interview preparation for companies 
like Google, Amazon, Meta, Microsoft, etc. The sequence goes from 
basic recursion thinking → classic recursion → recursion + backtracking.

The idea is to gradually develop recursive reasoning.

1️⃣ Factorial of a Number (Very Basic)

Problem
Write a recursive function to calculate factorial of n.

Example
Input: 5
Output: 120

Concept learned:
Base condition
Simple recursion

Recursive relation

n! = n * (n-1)!

2️⃣ Fibonacci Number

Problem
Return the nth Fibonacci number.

Example
Input: 6
Output: 8

Sequence
0 1 1 2 3 5 8

Recursive relation
F(n) = F(n-1) + F(n-2)

Concept learned:
Multiple recursive calls

3️⃣ Power of a Number

Problem
Calculate x^n using recursion.

Example
Input: x = 2, n = 5
Output: 32

Recursive relation
x^n = x * x^(n-1)

Concept learned:
Recursion with mathematical recurrence

4️⃣ Sum of Array Elements

Problem
Find the sum of elements in an array using recursion.

Example
Input: [1,2,3,4]
Output: 10

Concept learned:
Recursion with arrays

Passing index

5️⃣ Reverse a String

Problem
Reverse a string using recursion.

Example
Input: "hello"
Output: "olleh"

Concept learned:
Recursion with strings
Building result while backtracking

6️⃣ Check Palindrome (String)

Problem
Check if a string is palindrome using recursion.

Example
Input: "racecar"
Output: true

Concept learned:
Two pointer recursion

7️⃣ Generate All Subsets (Power Set)

Problem
Given an array, generate all possible subsets.

Example
Input: [1,2]
Output:
[]
[1]
[2]
[1,2]

Concept learned:
Recursion tree

Decision making
This is very common in FAANG interviews.

8️⃣ Generate All Permutations of a String

Problem
Return all permutations of a string.

Example
Input: "ABC"

Output:
ABC
ACB
BAC
BCA
CAB
CBA

Concept learned:
Backtracking
Swapping recursion

9️⃣ Combination Sum

Problem
Find all combinations of numbers that sum to a target.

Example
Input:
candidates = [2,3,6,7]
target = 7

Output:
[2,2,3]
[7]

Concept learned:
Recursion + backtracking
Decision tree

Very common LeetCode interview question.

🔟 Tower of Hanoi (Classic Recursion Problem)

Problem
Move n disks from one rod to another using recursion.

Rules
Only one disk can move at a time

A larger disk cannot be placed on a smaller disk

Concept learned:
Recursive decomposition
Divide problem into subproblems

Why These 10 Problems Matter

If you can solve these comfortably, you will understand:

Recursion fundamentals
Recursive relations
Call stack behavior
Recursion tree
Backtracking

These concepts are heavily used in:

Tree problems
Graph traversal
Dynamic Programming
Backtracking problems

Recommended Practice Order

Follow this sequence:

1 Factorial
2 Fibonacci
3 Power (x^n)
4 Sum of array
5 Reverse string
6 Palindrome
7 Subsets
8 Permutations
9 Combination Sum
10 Tower of Hanoi

💡 Pro tip (very important for mastering recursion):

Before writing code, always identify:

1. Base case
2. Recursive relation
3. What smaller problem you are solving
*/