function factorial(x) {
  if (x === 0 || x === 1) {
    return 1;
  } else return factorial(x - 1) * x;
}

let num = 6;
let factorialOfNum = factorial(num);
console.log(`Factorial of ${num} =  ${factorialOfNum}`);
