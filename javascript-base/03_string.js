const firstName = "Dmitrii";
const age = 32;

// const output = "My name is " + firstName + " ,I'm " + age + " years old";
const output = `My name is ${firstName}, I'm ${age} years old`;

console.log(output);

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(2));
console.log(firstName.indexOf("it"));
console.log(firstName.indexOf("!"));
console.log(firstName.startsWith("Dmi"));
console.log(firstName.toLowerCase().startsWith("dmi"));
console.log(firstName.repeat(3));
const password = "     pasword    ";
console.log(password);
console.log(password.trim());

function logPerson(s, name, age) {
  if (age < 0) {
    age = "not born yet";
  }
  console.log(s, name.age);
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const output2 = logPerson`Name: ${firstName}, age: ${age}!`;

const firstName2 = "Maxim";
const age2 = -10;
const output3 = logPerson`Name: ${firstName2}, age: ${age2}!`;

console.log(output2);
console.log(output3);
