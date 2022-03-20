const person = {
  name: "Dmitrii",
  age: 32,
  isDeveloper: true,
  languages: ["Russian", "English"],
  greet() {
    console.log("Hi there!");
  },
  "complex key": "Complex value",
  ["key_" + (1 + 3)]: "Computed key",
  info() {
    console.info(`Information about ${this.name}`);
  },
};

console.log(person);
console.log(person.name);
console.log(person["complex key"]);
person.greet();

person.age++;
console.log(person);

person.languages.push("Italian");
console.log(person);

person["key_4"] = undefined;
console.log(person);

delete person["key_4"];
console.log(person);

const { name: firstName, age: personAge = 10, languages } = person;

console.log(firstName, personAge, languages);

for (key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("key: ", key);
    console.log("value: ", person[key]);
  }
}

const keys = Object.keys(person);
console.log(keys);
keys.forEach((key) => {
  console.log("key: ", key);
  console.log("value: ", person[key]);
});

Object.keys(person).forEach((key) => {
  console.log("key: ", key);
  console.log("value: ", person[key]);
});

//Context
person.info();

const logger = {
  keys(obj) {
    console.log(`Object Keys: `, Object.keys(this));
  },

  //   keysAndValues() {
  //     Object.keys(this).forEach((key) => console.log(`${key}: ${this[key]}`));
  //   },
  keysAndValues() {
    // const self = this;
    Object.keys(this).forEach(
      function (key) {
        console.log(`${key}: ${this[key]}`);
      }.bind(this)
    );
  },

  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("------- START -------");
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`${key}: ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log("-----------------");
      }
    });
    if (bottom) {
      console.log("------- END -------");
    }
  },
};

const bound = logger.keys.bind(person);
bound();

logger.keys.call(person);
logger.keysAndValues.call(person);
logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]);
