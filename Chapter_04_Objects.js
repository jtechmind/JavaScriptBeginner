/**
 * Object Creation:
 * Objects in JavaScript can be created using
 * literal notation or constructor notation.
 *
 * */

// Literal Notation

let myObject = { id: "1", info: "Object one" };

console.log(myObject);
console.log(myObject.info);

let student = { first_name: "Karan", last_name: "singh", age: 22 };
console.log("Student Information:");
console.log(student.first_name + " " + student.last_name + " " + student.age);

/**
 * Creating object with a constructor
 * One of the easiest ways to instantiate an object is in JavaScript.
 * Constructor is nothing but a function
 */

function vehicale(name, maker, engine) {
  this.naem = name;
  this.maker = maker;
  this.engine = engine;
}

// now we will use "new" keyword to create an object
let car = new vehicale("Harrier", "TATA", "1956cc");
console.log("Car Name: " + car.naem);
console.log("Maker: " + car.maker);
console.log("Engine: " + car.engine);

// Creating Object using object literal and Add method
let carMahindra = {
  name: "Thar",
  maker: "Mahindra",
  engine: "1495cc",
  start: function () {
    console.log("Starting the engine..");
  },
};

carMahindra.start();
// add stop() method to carMahindra object later
carMahindra.stop = function () {
  console.log("Applying Break..");
};
carMahindra.stop();
