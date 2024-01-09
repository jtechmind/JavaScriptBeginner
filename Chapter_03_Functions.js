/**
 * JavaScript Functions.
 * A function is a block of code design to perform a particular task.
 * A function is executed when somthing envikes it or call it.
 */

/**
 * Defined with "function keyword followed by name followe by parentheses ()"
 * The code to be executed, by the function is placed inside curly bracket {}.
 *
 * function function_name () {}
 * function function_name (parameter1,parameter2) {}
 * A function may or may not have parameter
 *
 */

// creating or defining a function
// helloWorld() function has no parameter.
function helloWorld() {
  console.log("Hello JavaScript Function");
}

// calling helloWorld() function
helloWorld();

// function to compute addition of two parameter

function addition(numOne, numTwo) {
  let result = numOne + numTwo;
  console.log(`sum of ${numOne} + ${numTwo} = ${result}`);
}

// function additionA(numOne, numTwo) {
//   let result = numOne + numTwo;
//   return result;
// }

// write addition expression directly to return keyword
// function additionB(numOne, numTwo) {
//   return numOne + numTwo;
// }

addition(10, 29);
