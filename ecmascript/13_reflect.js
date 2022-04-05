class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class ProtoStudent {
  university = "Oxford";
}
// const student = Reflect.construct(Student, ["Dmitrii"], ProtoStudent);
// console.log(student.__proto__ === ProtoStudent.prototype);

const student = Reflect.construct(Student, ["Dmitrii"]);

Reflect.apply(student.greet, { name: "tester" }, []);
console.log(Reflect.ownKeys(student));

Reflect.preventExtensions(student);
student.age = 25;
console.log(student);
console.log(Reflect.isExtensible(student));
