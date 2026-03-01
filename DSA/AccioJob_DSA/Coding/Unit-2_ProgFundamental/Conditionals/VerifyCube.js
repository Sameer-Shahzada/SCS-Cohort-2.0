/*
Verify Cube
Take two positive integers from the user. Verify if (a+b)^3 = a^3 + b^3 + 3a^2b + 3ab^2.

Calculate the Left hand side (LHS) and the right hand side (RHS) of the equation. 
Print the (LHS) and the (RHS).

Print VERIFIED in uppercase if they are equal, otherwise print NOT VERIFIED.

Input Format
The first line contains two integers A and B.

Output Format
Print two integers, the LHS and RHS in separate lines.

Then print "VERIFIED" (without quotes and in uppercase) if they are equal, else print "NOT VERIFIED".

Example 1
Input:

4 5
Output:

729
729
VERIFIED
Explanation:

We have A = 4 and B = 5.

Since, LHS = 729 and RHS = 729, our equation is Verified.

Example 2
Input:

1 2
Output:

27
27
VERIFIED
Explanation:

We have A = 1 and B = 2.

Since, LHS = 27 and RHS = 27, our equation is Verified.

Constraints
1 <= A <= 100000

1 <= B <= 100000

Topics
Math
*/

function verifyCube(a, b) {
    if (Number.isNaN(a) || a <= 0) {
        return 'Invalid Input'
    }

    if (Number.isNaN(b) || b <= 0) {
        return 'Invalid Input'
    }

    a = BigInt(a);
    b = BigInt(b);

    const LHS = (a + b) ** 3n;
    const RHS = (a ** 3n) + (b ** 3n) + (3n * a * a * b) + (3n * a * b * b);

    console.log(LHS.toString());
    console.log(RHS.toString());

    if (LHS === RHS) {
        console.log("VERIFIED");
    } else {
        console.log("NOT VERIFIED");
    }
}
verifyCube(4, 5)
