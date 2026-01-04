/*
    Armstrong Number Checker 

You are given an integer as input. Your task is to check 
whether the given number is an Armstrong number or not.

An Armstrong number is a number that is equal to the sum of its own 
digits raised to the power of the number of digits.

For example -
- 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.
- 9474 is an Armstrong number because 9^4 + 4^4 + 7^4 + 4^4 = 9474.

If the number is Armstrong, print "Armstrong", otherwise print "Not Armstrong".

Example 1 
Sample Input 
153
Sample Output 
Armstrong

Example 2 
Sample Input 
370 
Sample Output 
Armstrong 
Input Format 
A single integer n. 
Output Format 
Print 'Armstrong' if the number is an Armstrong number, otherwise print 'Not Armstrong'.

Constraints 
-10^6 <= n <= 10^6


Note - 

✅ What an Armstrong Number REALLY Means (Core Idea)

A number is Armstrong if:
                    number = ∑ (each digit)(number of digits)

So there are 3 essential steps:

1-Count the number of digits
2-Extract each digit
3-Add digit ^ digitCount and compare with original number

*/