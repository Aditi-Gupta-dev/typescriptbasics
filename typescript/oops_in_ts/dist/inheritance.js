"use strict";
//INHERITANCE and SUPER KEYWORD===>
//--------------------
//it allows the calss to reuse the functionality of an existing class without rewritting it
//child inherits the parent
// class Person{
//     name:string;
//     age:number;
//     hobbies:string[];
//     constructor(n:string,a:number,hob:string[]){
//         this.name=n;
//         this.age=a;
//         this.hobbies=hob;
//     }
//     //method
//     introduce():string{
//         return `hi ${this.name} i love ${this.hobbies.join("/")}.`
//     }
// }
// //child class Student
// class Student extends Person{
// grade:number;
// constructor(n:string,a:number,hob:string[],grade:number){
//     super(n,a,hob);
//     this.grade=grade;
// }
// introduce():string{
//     return `${super.introduce()} and my grade is ${this.grade}.`
// }
// }
// const person1:Person = new Person("adi",12,["read","work"]);
// const student1:Person = new Student("sneha",13,["read","work"],111);
// console.log(person1);
// //students wale introduce ko call krega q ki maine student ka instance create kr ke call kia hai
// console.log(student1.introduce());
