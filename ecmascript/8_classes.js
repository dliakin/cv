class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`${this.name} says "Hello!"`);
  }

  type = "human";
}

const dmitrii = new Person("Dmirtii");
dmitrii.greet();
console.log(dmitrii);
console.log(dmitrii.type);

console.log(dmitrii.__proto__ === Person.prototype);

class Developer extends Person {
  constructor(name, job) {
    super(name);
    this._job = job;
  }

  get job() {
    return this._job.toUpperCase();
  }

  set job(job) {
    if (job.length < 2) {
      //   throw new Error("Validation failed");
      console.log("Validation failed");
    } else {
      this._job = job;
    }
  }

  greet() {
    super.greet();
    console.log("Rewritten!");
  }
}

const frontend = new Developer("Dmitrii", "Frontend");
console.log(frontend);
frontend.greet();
console.log(frontend.job);

//Static

class Util {
  static average(...args) {
    return args.reduce((acc, i) => (acc += i), 0) / args.length;
  }
}

// const util = new Util();

console.log(Util.average(1, 1, 2, 3, 5, 8));
