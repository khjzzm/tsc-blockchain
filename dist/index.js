"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human2 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human2("Lynnm", 18, "cats");
const name = "kim", age = 31, gender = "male";
const person = {
    name: "nicolas",
    gender: "female",
    age: 22
};
const sayHi = (name, age, gender) => {
    return `hello ${name} you are ${age}, ${gender}`;
};
const sayHi2 = (person) => {
    return `hello ${person.name} you are ${person.age}, ${person.gender}`;
};
console.log(sayHi(name, age, gender));
console.log(sayHi(name, age));
console.log(sayHi2(person));
//# sourceMappingURL=index.js.map