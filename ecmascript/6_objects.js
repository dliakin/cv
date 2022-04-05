// const cityField = "city";
// const job = "Frontend";

// const person = {
//   age: 26,
//   name: "Dmitrii",
//   job,
//   [cityField + Date.now()]: "Moscow",
//   "country-live": "Russia",
//   print: () => "Person",
//   toString() {
//     return Object.keys(this)
//       .filter((key) => key !== "toString")
//       .map((key) => this[key])
//       .join(" ");
//   },
// };

// // console.log(person);

//Methosds
const first = { a: 1 };
const second = { b: 2 };

// console.log(Object.is(20, 20));
const obj = Object.assign({}, first, { c: 2, d: 3 });
// console.log(first);
console.log(obj);

console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));

// const rand = Math.random();
// const job = "Frontend";

// const person = {
//   age: 26, //
//   ["RandNum" + rand]: rand, //use function in property name
//   job, //if property name equal variable name with value we can use short syntax
//   ["last name"]: "Liakin", // String with a space or other symbol
// };

// person.name = "Dmitrii"; //Dot syntax

//Create properties with dot-notation
// const person = new Object();
// person.name = "Dmitrii";
// person.lastname = "Liakin";
// person.age = 26;
// person.job = "Frontend";

//Create properties with bracket-notation
//With bracket-notation we can use spaces, function, variables in properties name
// const person = new Object();
// person["first-name"] = "Dmitrii";
// person["last name"] = "Liakin";
// person["age" + Date.now()] = 26;
// person[job] = "Frontend";

// Create properties when initialize object
// const person = {
//   [firstname]: "Dmitrii",
//   ["last name"]: "Liakin",
//   age: 26,
//   job: "Frontend",
// };
