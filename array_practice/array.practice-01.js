const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbersMulTwo = numbers.map((n) => n * 2);
console.log(`Numbers * 2  ${numbersMulTwo}`);
console.log(`Numbers: ${numbers}`);

// check if number is odd
function isOdd(n) {
  return n % 2 !== 0;
}

console.log(numbers.map((n) => isOdd(n)));
