/*

Question
easy, Max Score: 30
Staircase
In this question, you need to write a program that prints a staircase of size N.

This is a staircase of size n=4:

   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Input Format
A single integer, n, denotes the size of the staircase.

Output Format
Print a staircase of size n using # symbols and spaces.

Note: The last line must not have spaces in it.

Example 1
Input

6
Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6.
You might notice, first line has 5 spaces (n-1) followed by 1 # and the last line has 0 spaces (n-n) and 6 # (n)

Example 2
Input

5
Output

    #
   ##
  ###
 ####
#####
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=5.

You might notice, first line has 4 spaces (n-1) followed by 1 # and the last line has 0 spaces (n-n) and 5 # (n)

Constraints
1 <= n < 100

Topics
Loops, Basics

*/





/*
  - Look the pattern as grid 
  - Ask how many stars and spaces will print 
  - In pattern spaces shift the hash at right side 
  
  So, we need two for loop in single parent for loop 
  1 - to print the spaces  (n - i)
  2 - to print the stars   (i)

  Let's build table 

  rows (i)         spaces (n - 1)      hashes (i)
  1                   5-1 = 4             1
  2                   5-2 = 3             2
  3                   5-3 = 2             3
  4                   5-4 = 1             4
  5                   5-5 = 0             5

*/

function staircaseRightAngledTriangle(n) {
    // outer loop -> control number of rows
    for (let i = 1; i <= n; i++) {
        // to print spaces -> shift the # at right side 
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }

        // to print actual # pattern 
        for (let j = 1; j <= i; j++) {
            process.stdout.write("#");
        }
        // move on the next line after each row 
        console.log()
    }


    // short solution 

    // for (let i = 1; i <= n; i++) {
    //   console.log(" ".repeat(n - i) + "#".repeat(i));
    // }

    // 2nd approach
    //   for (let i = 1; i <= n; i++) {

    //   let line = "";

    //   for (let j = 1; j <= n - i; j++) {
    //     line += " ";
    //   }

    //   for (let j = 1; j <= i; j++) {
    //     line += "#";
    //   }

    //   console.log(line);
    // }

}

staircaseRightAngledTriangle(6)