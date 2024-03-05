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

// Feet to CM
function feetToCM(f) {
  return f / 0.032808;
}

let feet = 11.4;

let meters = feetToMeters(feet).toFixed(4); //
console.log(`${feet} feet = ${meters} meters`);

let inches = feetToInches(feet);
console.log(`${feet} feet = ${inches} inches`);

let cm = feetToCM(feet).toFixed(3);
console.log(`${feet} feet = ${cm} cm`);
