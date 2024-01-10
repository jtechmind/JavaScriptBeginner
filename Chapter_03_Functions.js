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

// return keyword will return some value when we call the function.
function additionA(numOne, numTwo) {
  let result = numOne + numTwo;
  return result;
}

// write addition expression directly to return keyword
function additionB(numOne, numTwo) {
  return numOne + numTwo;
}

addition(10, 29);

let resultOfadditionA = additionA(18, 99);
// now resultOfadditionA has the value returned by the function additionA()
console.log("output from additionA(): " + resultOfadditionA);

// we can direct call the function in console.log() to print return value
console.log(additionA(25, 55));

let resultOfadditionB = additionB(28, 199);
// now resultOfadditionB has the value returned by the function additionB()
console.log("output from additionB(): " + resultOfadditionB);
