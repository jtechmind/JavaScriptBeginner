const numbers = [175, 50, 25];

// Subtract the numbers in the array starting from left

function myFunc(total, num) {
  return total - num;
}

console.log(numbers.reduce(myFunc));
