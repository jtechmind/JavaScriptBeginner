// conver celsius to fahrenheit

function celsiusToFahrenheit(c) {
  return c * 1.8 + 32;
}

let celsius = 51.5;
let converted = celsiusToFahrenheit(celsius);
console.log(`${celsius} celsius = ${converted} fahrenheit`);
