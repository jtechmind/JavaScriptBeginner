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
