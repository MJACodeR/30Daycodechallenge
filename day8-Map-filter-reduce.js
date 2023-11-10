/*
The map function applies a given function to each element in an array and returns a new array with the results
The filter function creates a new array with all elements that pass a certain condition
The reduce function reduces an array to a single value, accumulating the results of applying a function against each element.
*/


//map used for transforms elements
const arr = [2,3,6]
const sq_arr = arr.map((arr)=>arr*arr);
console.log(sq_arr)
//filter used for elects elements
const nums =[10, 5, 8, 9];
let evens =nums.filter(num => num % 2 === 0 );
console.log(evens);
//Reduce used for aggregates elements
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15
