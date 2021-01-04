interface Human {
    name:string,
    gender: string,
    age:number;
}


class Human2 {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human2("Lynnm", 18, "cats")

const name ="kim",
    age=31,
    gender="male"

const person = {
    name:"nicolas",
    gender:"female",
    age:22
}

const sayHi = (name : string, age:number, gender?:string) : string => {
    return `hello ${name} you are ${age}, ${gender}`
}


const sayHi2 = (person:Human) : string => {
    return `hello ${person.name} you are ${person.age}, ${person.gender}`
}

console.log(sayHi(name, age, gender));
console.log(sayHi(name, age));
console.log(sayHi2(person));

export {};
