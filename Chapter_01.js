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

// Remember Primitives are immutable
// Test the immutibility
let varX = 100;
let varY = varX + 400;
varX + 91;
console.log(varX);
console.log(varY);
