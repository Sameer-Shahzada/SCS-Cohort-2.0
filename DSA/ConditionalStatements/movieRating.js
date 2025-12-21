/* 
    Determine Movie Status Based on Rating

    Write a program that takes a movie rating as input and determines the movie's status 
    based on the following conditions:

    Rating        |   Message to be displayed
    0.0 to 2.0    |   Flop
    2.1 to 3.4    |   Semi-hit
    3.5 to 4.5    |   Hit
    4.6 to 5.0    |   Super Hit

    Example 1 
    Sample Input 
    1.8
    Sample Output 
    Flop 

    Example 2 
    Sample Input 
    3.0
    Sample Output 
    Semi-hit

    Explaination 
    The program reads a movie rating as a floating-point number.
    It then checks the rating against different ranges to determine the movie's status.

    Based on the conditions:

    - A rating between 0.0 and 2.0 is classified as a "Flop". 
    - A rating between 2.1 and 3.4 is classified as a "Semi-hit".
    - A rating between 3.5 and 4.5 is classified as a "Hit". 
    - A rating between 4.6 and 5.0 is classified as a "Super Hit". 

    Constraints 
    - The input rating will be a floating-point number. 
    - The input rating can range from 0.0 to 5.0

*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const rating = Number(prompt("Enter movie rating: "));

// create a function 
function movieRatingStatus(movieRating) {
    // validation
    if(Number.isNaN(movieRating)) {
        return 'Invalid Input';
    }

    if(movieRating >= 0.0 && movieRating <= 2.0) {
        return 'Flop';
    } else if(movieRating >= 2.1 && movieRating <= 3.4) {
        return 'Semi-Hit';
    } else if(movieRating >= 3.5 && movieRating <= 4.5) {
        return 'Hit';
    } else if(movieRating >= 4.6 && movieRating <= 5.0) {
        return 'Super-Hit';
    } else {
        return 'Out of conditions';
    }
}
console.log(movieRatingStatus(rating))