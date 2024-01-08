/**
 * JavaScript is a Dynamicallay Typed or Loosely Typed programming language. *
 * Two categories of DataTypes
 * Fist Category, Primitive Types
 * Second Category, Objects or References
 */
console.log("Data Types in JavaScript");
console.log("Primitive Types");
console.log("We have 7 Primitive data types in JS.");
console.log(".string .number .bigint .boolean .undefined .symbol .null");

// var is one of the keyword to declare a variable in JS.
var x = 100; // variavle x is created and assigned value 100 to it.

//print the value of x in the console
// console.log(x); // You can just write the variable name
console.log("Value of x: " + x); // print with some message

// Check the data type of x.
// console.log(typeof x);
console.log("Data Type of x: " + typeof x);

var language = "JavaScript"; // String
console.log("Data Type of language: " + typeof language);

var isJSFun = true; //Boolean
console.log("Data Type of isJSFun: " + typeof isJSFun);

// variable population is declared, but has not been assigned value to is.
var population;
console.log(population); // the value will be undefined now

population = null; // null value inserted, (null is an object)
console.log(population);

console.log(typeof undefined);
console.log(typeof null);
console.log(null === undefined);
console.log(null == undefined);

// BigInt and Symbol
/**
 * BigInt: A new JavaScript Datatype
 * JavaScript integer accuracy
 * JS integers are only accurate up to 15 digits:
 *
 * In JavaScript, all numbers are stored in a 64-bit floating-point format
 * (IEEE 754 standard).
 * With this standard, large integer cannot be exactly represented and will be rounded.
 * Because of this, JavaScript can only safely represent integers:
 * Up to 9007199254740991 +(253-1)
 * and
 * Down to -9007199254740991 -(253-1).
 * Integer values outside this range lose precision.
 */
var intVariable_x = 999999999999999;
var intVariable_y = 9999999999999999;
console.log(intVariable_x);
console.log(intVariable_y);

/**
 * How to declare BigInt
 * To create BigInt, append "n" to the end of integer
 * Or call BigInt() method.
 */

let bigIntVariable_x = 1234567890123456789012345n;
let bigIntVariable_y = BigInt("1234567890123456789012345");

console.log(bigIntVariable_x);
console.log(bigIntVariable_y);

console.log(typeof bigIntVariable_x);
console.log(typeof bigIntVariable_y);
