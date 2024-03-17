"use strict";
// class ia a blue print for creating object or siliar thing
//class name must follow CamelCase
//a person can be a student teacher or principle
//in class you need to initiaize first
/*class Person{
    name:string="a";
    age:number=12;
    hobbies:string[]=["read","draw"]
}
const person1:Person=new Person();
console.log(person1);
console.log(person1.hobbies);*/
//but 2nd person ka data kasai doge ? koe or tarika hona chaia ki jab call kre to define kr de to uske lia use lro constructor , constructor use krne se tumko first initialize nahi krna hoga ..
//data pass krne ke lia constructor chahia hi hoga
// class Person{
//     name:string="a";
//     age:number=12;
//     hobbies:string[]=["read","draw"]
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
// const person2:Person = new Person("adi",12,["read","work"]);
// const person3:Person = new Person("sneha",13,["read","work"]);
// console.log(person2);
// console.log(person3.introduce());
