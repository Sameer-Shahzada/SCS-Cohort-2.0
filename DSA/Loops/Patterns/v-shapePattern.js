/* Print a V-Shape Pattern
Given a positive integer N (minimum value 3), print a V-shaped pattern with N rows.
- The first and last characters in each row are stars (*)

Example 1
Sample Input 
5
Sample Output


  *            *
    *         *
      *      *
        *   *
           *

Example 2
Sample Input 
3
Sample Output
      *      *
        *   *
           *
Input Format 
- The input consists of a single integer N (number of rows)

Output Format 
- Print a V-shaped pattern with N rows.
- For javascript use process.stdout.write() method to print in same line 

Explaination
The task is to print a symmetric V-shaped pattern where N rows are given. In each row the first and last charcters are stars (*), and the distance between them decreases as we go down the rows. The first row has stars at the farthest position, and the last row has a single star at the center.
Constraints
3 <= N <= 50
*/

function printVShapePattern(n) {
    if (!Number.isInteger(n) || n < 3) {
        return 'Invalid Input';
    }

    for (let i = 0; i < n; i++) {

        // Left spaces (single space per step)
        process.stdout.write(' '.repeat(i));

        // Left star
        process.stdout.write('*');

        // Middle spaces
        let middleSpaces = 2 * (n - i - 1) - 1;

        // Right star (skip for last row)
        if (middleSpaces >= 1) {
            process.stdout.write(' '.repeat(middleSpaces));
            process.stdout.write('*');
        }

        console.log();
    }
}

printVShapePattern(5);
