/**
 * convert from feet to other measurements
 */

// Feet to meters
function feetToMeters(f) {
  return f / 3.2808;
}

// Feet to inches
function feetToInches(f) {
  return f * 12;
}

let feet = 11.4;

let meters = feetToMeters(feet).toFixed(4); //
console.log(`${feet} feet = ${meters} meters`);

let inches = feetToInches(feet);
console.log(`${feet} feet = ${inches} inches`);
