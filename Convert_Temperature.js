// conver celsius to fahrenheit
// formula f = (c * 1.8) + 32;

function celsiusToFahrenheit(c) {
  return c * 1.8 + 32;
}

let celsius = 51.5;
let converted = celsiusToFahrenheit(celsius);
console.log(`${celsius} celsius = ${converted} fahrenheit`);

// convert Celsius to Kelvin
// k = c + 273.15

function celsiusToKelvin(c) {
  return c + 273.15;
}

let celsiusToKelvinResult = celsiusToKelvin(celsius);
console.log(`${celsius} celsius = ${celsiusToKelvinResult} kelvin`);
