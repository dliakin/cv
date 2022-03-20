//Functions

//Function declaration
// function greet(name) {
//   console.log(`Hi ${name}`);
// }

//Function expression
const greet2 = function greet2(name) {
  console.log(`2. Hi ${name}`);
};

greet("Dmitrii");
greet2("Dmitrii");

console.log(typeof greet);
console.dir(greet);

//Anonymous function
// let counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

// Arrow function

function greet(name) {
  console.log(`Hi ${name}`);
}

const arrow = (name) => {
  console.log(`Hi ${name}`);
};
arrow("Dmitrii");

const arrow2 = (name) => console.log(`Hi ${name}`);
arrow2("Dmitrii");

const pow2 = (num) => num ** 2;
console.log(pow2(5));

//Default parameters
const sum = (a = 40, b = 2) => a + b;

console.log(sum(40, 2));
console.log(sum());

function sumAll(...all) {
  let result = 0;
  for (const num of all) {
    result += num;
  }
  return result;
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7);
console.log(res);

//Closures
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithLastName = createMember("Dmitrii");
console.log(logWithLastName);

logWithLastName("Liakin");
logWithLastName("Ivanov");
