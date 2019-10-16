import persons from "./main.js"

class DciStudent extends persons{
    constructor(name,job,age){
        super(name,job,age);
    }
}

let person2 = new DciStudent("Ali","DCI Manager","29");
console.log(person2)
person2.calculate_age(1990)
console.log(person2.age)