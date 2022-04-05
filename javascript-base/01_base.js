//1. Variables

//var name = "Dmitrii"; // deprecated

// const firstName = "Dmitrii";
// const lastName = "Liakin"; //string
//let age = 32; // number
// const isDeveloper = true; //boolean

// const _private = "private";

// const if = "mkef" // err
// const 5startwithNum = 5 //err

//2. Mutation
//console.log("My name is " + firstName + ", age is " + age);

//3. Operators
// let currentYear = 2022;
// const birthYear = 1989;

// const age = currentYear - birthYear;
// console.log(age);

const a = 10;
const b = 5;

let c = 32;
//c = c + 2;
c += a;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
// console.log(++currentYear);
// console.log(--currentYear);

// 4. Types

// const isDeveloper = true;
// const firstName = "Dmitrii";
// const age = 32;
// let x;

// console.log(typeof isDeveloper);
// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof x);
// console.log(typeof null);

// 5. Operator precedence

const fullAge = 32;
const birthYear = 1989;
const currentYear = 2020;

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const isfullAge = currentYear - birthYear >= fullAge;

// 6. Conditional operator

const courseStatus = "pending"; //ready, fail, pending

if (courseStatus === "ready") {
  console.log("Course is ready!");
} else if (courseStatus === "pending") {
  console.log("Course is creating now!");
} else {
  console.log("Status not found");
}

const num1 = 42;
const num2 = "42";

console.log(num1 == num2); //true
console.log(num1 === num2); //false Use this

const isReady = true;

//Classic condition
if (isReady) {
  console.log("Ready");
} else {
  console.log("Not ready");
}

//Change with ternary operator
isReady ? console.log("Ready") : console.log("Not ready");

// isReady - condition
// ? if the condition is truthy
// : if the condition is falsy

//7. Functions

function calculateAge(year) {
  return 2022 - year;
}

const myAge = calculateAge(1989);
console.log(myAge);

function logInfo(name, year) {
  const age = calculateAge(year);
  if (age > 0) {
    console.log("Man, called " + name + " is " + age + " years old");
  } else {
    console.log("It's a future!");
  }
}

logInfo("Dmitrii", 1989);

// 9. Arrays
// const cars = ["Mazda", "Ford", "Nissan"];

// console.log(cars[0]);
// console.log(cars.length);

// cars[0] = "GM";
// console.log(cars);
// cars[cars.length] = "Mazda";
// console.log(cars);

// 10. Circle
const cars = ["Mazda", "Ford", "Nissan"];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  console.log(car);
}

for (const car of cars) {
  console.log(car);
}

//11. Objects
const person = {
  firstName: "Dmitrii",
  lastName: "Liakin",
  age: "32",
  languages: ["Russian", "English"],
  isMarries: false,
  greet: function () {
    console.log("Greet!");
  },
};

console.log(person.firstName);
person.greet();
