/**
 * Variable, Value and Data types in JavaScript
 */

// Variavle are container for storing information/value/data.
// Creating a variable in JavaScript is called "declaring" a variable.
// var, let and const are the keywords used to declare an variable.

// Data Types: Primitive and non-primitive are two categories of data types.
// In Primitive we store only single value to it.
// In non-primitive(Object/Reference) we can store complex data.

// Creating or declaring a Variable.

// variable is declared and assign "Undefined" to it
var firstVariable;
// console.log() method use to print value in console.
console.log(firstVariable); // output: undefined
console.log(typeof firstVariable); // typeof keyword is used to find out data type.

// now assign value to the variable usin = operator
firstVariable = 50;
console.log(firstVariable); // value 50 is assined
console.log(typeof firstVariable); // now the type is also changed

/**
 * Data Types:

// JavaScript has several primitive data types and objects.

// Primitive Data Types:

// Number: Represents numeric values (e.g., 42, 3.14).
// String: Represents textual data (e.g., "Hello, World!").
// Boolean: Represents either true or false.
// Undefined: Represents the absence of a value or an uninitialized variable.
// Null: Represents the intentional absence of any object value.
// Symbol: Introduced in ECMAScript 6 (ES6), represents a unique identifier.
 */

// Remember Primitives are immutable
// Test the immutibility
let varX = 100;
let varY = varX + 400;
varX + 91; // this statement will not change the value of varX
console.log(varX); // stil varX has value 100
console.log(varY); // varY has 100 + 400 = 500

// Examples:
let num = 42; // Number
let greeting = "Hello"; // String
let isTrue = true; // Boolean
let empty = null; // Null
let undefinedVar; // Undefined

// Objects are complex data type that holds key-value pairs
// Example:
let person = {
  name: "John",
  age: 30,
  isStudent: false,
};

let colors = ["red", "green", "blue"];

// Functions:
// functions are special types of objects that can be inviked.

function add(a, b) {
  return a + b;
}
