/**
 * The filter() method takes each elements from an array
 * and apply conditional statement against it.
 * if this condition returns true, the elements get pushed to the output array.
 * else skipped the element
 */

// lets we have an array of numbers

const myNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// we want to create a new array from "myNumberArray"
// if the number divided by 2 we will keep it else reject it.

const divideByTwoOnly = myNumberArray.filter((n) => n % 2 === 0);
console.log(`${divideByTwoOnly}`);
