/**
 * JavaScript Array
 * An array is an special variable, which can hold more than one value:
 * An array can hold many values under a single name,
 * and we can access the values by referring to an index number.
 */

/**
 * Creating an Array
 * Using an array literal is the easiest way to create a JavaScript Array.
 * const array_name = [item1,item2...,item_n]
 */

// an array has been declared, named country
const country = [];
// we can provide elements after declaration
country[0] = "India"; // The index of array starts from zero "0"
country[1] = "USA";

// Access an array elements, by refering index number
let c = country[0];
console.log(c); // c has the value of country index 0
console.log(country.length); // length property gives us size of an array

// We can also create array with elements
const programming = ["Java", "Python", "JavaScript", "C++"];

// Using the JavaScript Keyword new
const products = ["Jeans", "Shirt", "T-Shirt"];
