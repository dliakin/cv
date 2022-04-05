//Rest

function average(...args) {
  return args.reduce((acc, i) => (acc += i), 0) / args.length;
}

// console.log(average(10, 20, 30, 40, 50));

//Spread

// const array = [1, 1, 2, 3, 5, 8, 13];
// console.log(...array);
// console.log(Math.max(...array));

//Destructuring
const array = [1, undefined, 2, 3, 5, 8, 13];

// const [a, b = 42, ...c] = array;
// console.log(a, b, c);

const [a, , c] = array;
// console.log(a, c);

const address = {
  country: "Russia",
  city: "Moscow",
  street: "Lenina",
  concat: function () {
    return `${this.country}, ${this.city}, ${this.street}`;
  },
};

// console.log(address.concat());
// const { city, country, street = "Sovetskaya", concat: adressConcat } = address;
// console.log(adressConcat.call(address));
// console.log(street);

const { city, ...rest } = address;
console.log(rest);

const newAdress = { ...address, street: "Tverskaya", code: 123 };
console.log(newAdress);
