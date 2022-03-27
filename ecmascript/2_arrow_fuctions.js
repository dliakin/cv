// function sum(a, b) {
//   return a + b;
// }

// function cube(a) {
//   return a ** 3;
// }

// const sum = (a, b) => a + b;

// const cube = (a) => a ** 3;

// setTimeout(() => console.log("After 1 sec"), 1000);

//Context
function log() {
  console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
  name: "Dmitrii",
  age: 20,
  log: log,
  arrowLog: arrowLog,
  delayLog: function () {
    // const self = this;
    setTimeout(() => {
      console.log(this.name + " " + this.age);
    }, 500);
  },
};

person.delayLog();
