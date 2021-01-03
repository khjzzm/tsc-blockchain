const name ="kim",
    age=31,
    gender="male"

const sayHi = (name : string, age:number, gender?:string) : string => {
    return `hello ${name} you are ${age}, ${gender}`
}

console.log(sayHi(name, age, gender));
console.log(sayHi(name, age, gender));
console.log(sayHi(name, age, gender));

export {};
