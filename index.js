/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age 
  this.stomach = []
  // this. is the function showing you specific within it's function.   **********
}
// You call the name of the function "Person" than use Prototype to add inhiratance and name what you would like to connect to "person" (family tree style)  **********
Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food)
    // if statement to show the proccess you want it to take  **********
    // when the proccess returns true, it ".pushes" "food" to the "this.stomach" empty array (adds to the array).   **********
  }
};
Person.prototype.poop = function() {
  this.stomach = [];
};
// Preparing for an exit... lol   **********
Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
  // This same type of proccess as above but given out the name and age within the backticks   **********
};
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.tank = 0;
  this.odometer = 0; 
  this.model = model; 
  this.milesPerGallon = milesPerGallon;
}
// .this shows up what the car has aka can easily be presented whenever by calling ".this"   **********
Car.prototype.fill = function(gallons) {
  return (this.tank += gallons);
  // Adding "fill" as an inheratance to the "car" family tree style     **********
  // Doing simple math to add action when "tank" is introduced to "gallons"   **********
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
  // I used the ".call" the call the "person" and use it's ".this" values   **********
  // Created babies own ".this" (defintiely not putting baby in the corner)  **********
}
Baby.prototype = Object.create(Person.prototype);
// Created an "object.create" using exciting material       ***********
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
  // using backticks to display the above         **********
}
// 
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/



///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
