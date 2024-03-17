// function call signature refers to the declaration or defination of a function which includes the function's name,parameters,and return type.it defines the structure and type information of a function without including the function's body or implementation

//object ke ander function=method, us function ka structure or type define krna=call signature
type Employ={
    name:string;
    age:number;
    gender?:string
    greet:(country:string)=>string //method call signature 
    // (country:string):string    //pure call signature
}

const employ1:Employ={
    name:"adi",
    age:22,
    greet:((country)=>`welcome my name is ${employ1.name} and age is ${employ1.age} i live in ${country}` )

}
const introduction=(employ1:Employ)=>{
    const {name,age}=employ1
    return `${name} and ${age}`
}
console.log(employ1.greet('INDIA'));
