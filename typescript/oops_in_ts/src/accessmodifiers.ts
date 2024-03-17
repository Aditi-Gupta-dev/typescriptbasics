//isko use kr ke shorthad properties ke dsath deal kr skte hai ...only constructor me linkhna ho accessmodifier and or kuch nahi baki ts infer kr lega
class Person{
    

    constructor(public name:string,public age:number, public hobbies:string[]){}
    //method
    introduce():string{
        return `hi ${this.name} i love ${this.hobbies.join("/")}.`
    }
}

//child class Student
class Student extends Person{


constructor(public name:string,public age:number, public hobbies:string[],public grade:number){
    super(name,age,hobbies);
   
}
introduce():string{
    return `${super.introduce()} and my grade is ${this.grade}.`
}
}
const person1:Person = new Person("adi",12,["read","work"]);
const student1:Person = new Student("sneha",13,["read","work"],111);
console.log(person1);

//students wale introduce ko call krega q ki maine student ka instance create kr ke call kia hai
console.log(student1.introduce());