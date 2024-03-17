"use strict";
//isko use kr ke shorthad properties ke dsath deal kr skte hai ...only constructor me linkhna ho accessmodifier and or kuch nahi baki ts infer kr lega
class Person {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    //method
    introduce() {
        return `hi ${this.name} i love ${this.hobbies.join("/")}.`;
    }
}
//child class Student
class Student extends Person {
    name;
    age;
    hobbies;
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} and my grade is ${this.grade}.`;
    }
}
const person1 = new Person("adi", 12, ["read", "work"]);
const student1 = new Student("sneha", 13, ["read", "work"], 111);
console.log(person1);
//students wale introduce ko call krega q ki maine student ka instance create kr ke call kia hai
console.log(student1.introduce());
