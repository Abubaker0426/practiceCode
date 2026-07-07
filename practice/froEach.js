// const num3 = [10, 20, 30, 40, 50];
// const num4 = num3.forEach(myFN)
// function myFN(value,index,arr) {
//     return (
//         value
//     )

// }
// console.log(num4)


// forEach()

// Executes a provided function once for each element in the array.
// Primarily used for side effects like logging, modifying external variables, or updating the DOM.
// 2. Return Value
// forEach()
// Returns undefined. It doesn't create a new array.
// Use .forEach() when you need to perform side effects on each element, such as logging, updating the DOM, or making API calls.
// 
// Let's break down how this code works:

// 1. First, we create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// 2. We use the forEach() method on the numbers array
// forEach() will iterate through each element of the array
// For each element, it executes the provided callback function
// The callback function takes the current element as a parameter (named 'number')
// The callback simply logs each element to the console
numbers.forEach(number => console.log(number));

// Output will be:
// 1
// 2 
// 3
// 4
// 5



















