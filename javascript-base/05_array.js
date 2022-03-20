const cars = ["Mazda", "Ford", "Nissan", "BMW"];
const fib = [1, 1, 2, 3, 5, 8, 13];

console.log(cars);

cars.push("GM");
console.log(cars);

cars.unshift("Volga");
console.log(cars);

const firstcar = cars.shift();
console.log(firstcar);
console.log(cars);

const lastCar = cars.pop();
console.log(lastCar);
console.log(cars);

console.log(cars.reverse());
console.log(cars);

//Task 1

const text = "Hi! I learn JavaScript!";
const reverseText = text.split("").reverse().join("");
console.log(reverseText);

//======

const index = cars.indexOf("BMW");
cars[index] = "GM";
console.log(cars);

const people = [
  { name: "Dmitrii", budget: 4200 },
  { name: "Elena", budget: 3500 },
  { name: "Alex", budget: 1700 },
];

const pIndex = people.findIndex(function (person) {
  return person.budget === 3500;
});

// const person = people.find(function (person) {
//   return person.budget === 3500;
// });
const person = people.find((person) => person.budget === 3500);

console.log(pIndex);
console.log(person);

let findedPerson;
for (const person of people) {
  console.log(person);
  if (person.budget === 3500) {
    findedPerson = person;
  }
}

console.log(findedPerson);

console.log(cars.includes("Mazda"));

const upperCaseCars = cars.map((car) => car.toUpperCase());
console.log(upperCaseCars);
console.log(cars);

const pow2Fib = fib.map((num) => num ** 2);
console.log(pow2Fib);

const pow2 = (num) => num ** 2;
const sqrt = (num) => Math.sqrt(num);

const pow2Fib_ = fib.map(pow2).map(Math.sqrt);
console.log(pow2Fib_);

const filteredNumbers = pow2Fib.filter((num) => num > 20);
console.log(filteredNumbers);

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => (acc += person.budget), 0);
console.log(allBudget);
