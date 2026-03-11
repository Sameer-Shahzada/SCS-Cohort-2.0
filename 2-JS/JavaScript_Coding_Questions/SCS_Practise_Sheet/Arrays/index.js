/*

31. Create an array of movies and print using join(" - ").
32. Print the element at index 1 of an array.
33. Add two elements at the beginning using unshift().
34. Remove the last element using pop().
35. Extract the first three elements using slice().
36. Find the index of number 5 using indexOf().
37. Check if 3 exists using includes().
38. Merge two arrays using concat().
39. Sort an array of numbers in ascending order.
40. Copy an array using spread operator and compare references.

*/

// 31.
let movies = ['TereNaam', 'Dhurandhar', 'IshqVishq', 'Jaanemann', 'Brahamstra', 'Border' ];
let actors = ['SalmanKhan', 'Ranveer', 'Shahid', 'Ranbeer', 'Sunny'];
console.log(movies.join('-'));

// 32.
console.log(movies[1]);

// 33.
movies.unshift('Partner', 'JaiHo');
console.log(movies);

// 34.
movies.pop();
console.log(movies);

// 35.
const slicedArr = movies.slice(0,3);
console.log(slicedArr);

// 36.
console.log(movies.indexOf('Dhurandhar'));

// 37. 
console.log(movies.includes('IshqVishq')) // true 

// 38.
const mixedArr = movies.concat(actors);
console.log(mixedArr)

// 39.
const arr = [4,5,1,2,9,5];
console.log(arr.sort());

// 40.
const actress = ['Hema', 'Rani', 'Kriti', 'Disha'];
const bollywood = [...actors, ...actress];
console.log(bollywood);










