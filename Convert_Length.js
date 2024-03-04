/**
 * convert fromm feet to other measurements
 */

function feetToMeters(f) {
  return f / 3.2808;
}

let feet = 11;

let meters = feetToMeters(feet).toFixed(4); //
console.log(`${feet} feet = ${meters} meters`);
