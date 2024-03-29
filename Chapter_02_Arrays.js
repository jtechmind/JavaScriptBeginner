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

// an empty array has been declared, named country
const country = [];

// we can insert elements after declaration
country[0] = "India"; // The index of array starts from zero "0"
country[1] = "USA";

// Access an array elements, by refering index number
let c = country[0];
console.log(c); // c has the value of country index 0
console.log("Length of country array: " + country.length); // length property gives us size of an array

// We can also create array with elements
const programming = ["Java", "Python", "JavaScript", "C++"];

// Create an array using "new" keyword, Array() is a constructor
const products = new Array("Jeans", "Shirt", "T-Shirt", "Phone");

// Array iteration using for loop
for (let i = 0; i < programming.length; i++) {
  console.log(programming[i]);
}

// Iterate using forEach() method
console.log("using forEach() mehtod of array");
programming.forEach(function (p) {
  console.log(p);
});

// use of "for in" loop, it will return key of an object
for (item in products) console.log(products[item]);

// Add and Remove elements:

// push() and pop() method

// The pop() method removes the last element from an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let deletedFruit = fruits.pop();

//The pop() method returns the value that was "popped out":
console.log(deletedFruit);

//The push() method adds a new element to an array (at the end):
const fruits_new = ["Banana", "Orange", "Apple", "Mango"];
let newLenght = fruits_new.push("Kiwi");

// The push() method returns the new array length:
console.log(newLenght);

// Shifting elements
// shifting is equivalent to popping,
// but working on the first element instead of the last

// shift() and unshift() methods are used to shift and unshift
// element from the start

const numbers = [2, 4, 6, 8, 10, 12];
let shift_number = numbers.shift(); // element at the index[0] is popped out
console.log(shift_number); // shifted element return
console.log(numbers); // now array numbers[4,6,8,10,12]

const oddNumbers = [1, 3, 5, 7, 9, 11, 13];
let unshift_odd = oddNumbers.unshift(15); // new element will be added at index[0]
console.log(unshift_odd); // length after adding new element
console.log(oddNumbers);
