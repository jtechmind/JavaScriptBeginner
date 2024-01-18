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
console.log("Length of country array: " + country.length); // length property gives us size of an array

// We can also create array with elements
const programming = ["Java", "Python", "JavaScript", "C++"];

// Create an Array using "new" keyword, Array() is a constructor
const products = new Array("Jeans", "Shirt", "T-Shirt", "Phone");

// Array iteration using for loop
for (let i = 0; i < programming.length; i++) {
  console.log(programming[i]);
}

// use of "for in" loop, it will return key of an object
for (item in products) console.log(products[item]);

// push pop

// The pop() method removes the last element from an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
//The pop() method returns the value that was "popped out":

const fruits_new = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
// The push() method returns the new array length:
