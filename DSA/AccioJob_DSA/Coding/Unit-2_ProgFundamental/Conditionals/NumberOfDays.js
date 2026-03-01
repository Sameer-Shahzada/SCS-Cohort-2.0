/*
Number of Days
Given the number of the month, your task is to calculate the number of days present in the particular month.

Note:- Consider non-leap year.

Input Format
An integer M, denoting the number of the month.

Output Format
Return the number of days in the month corresponding to the given number. Consider a non-leap year.

Example 1
Input

1
Output

31
Explanation

January has 31 days.

Example 2
Input

3
Output

31
Explanation

March has 31 days.

Constraints
1 <= M <= 12

Topics
Conditionals

*/

/*
🔎 What does “consider non-leap year” mean?

A leap year affects only February.

Leap year → February has 29 days
Non-leap year → February has 28 days

Since the problem says: Consider non-leap year

You will always assume February = 28 days.

No need to calculate leap year logic.
------------------------------------------------

🧠 Pattern Trick (Easy to Remember)

31 days → 1, 3, 5, 7, 8, 10, 12
30 days → 4, 6, 9, 11
28 days → 2

*/

function numberOfDays(input) {
    if(Number.isNaN(input) || input <= 0) {
        return 'Invalid Input';
    }

    // convert input into integer number
    const month = parseInt(input);

    switch(month) {
        case 1: 
        case 3: 
        case 5: 
        case 7: 
        case 8: 
        case 10: 
        case 12: {
            console.log(31);
            break;
        } 
        case 4:
        case 6:
        case 9:
        case 11: {
            console.log(30);
            break;
        }
        case 2: {
            console.log(28);
            break;
        }
    }
}
numberOfDays(3)
