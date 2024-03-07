/**
 * The map() method is used to create new array from existing one,
 * applying the function each one of the elements of the given array.
 */

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Doubling of a number
function double(n) {
  return n * 2;
}

// Squaring of a number
function square(n) {
  return n * n;
}

const doubleNumbersArray = numbersArray.map(double);
console.log(`Original Array ${numbersArray}`);
console.log(`Array afrer applying map function ${doubleNumbersArray}`);

// apply square function on map()

const squareNymberArray = numbersArray.map(square);
console.log(`Square the every elements of the array ${squareNymberArray}`);

// We can also write map() like this

const addSomeNumberToArrayElements = numbersArray.map((e) => e + 0.5);
// 0.5 will be added to the every elements and create a new array from it.
console.log(`${addSomeNumberToArrayElements}`);
