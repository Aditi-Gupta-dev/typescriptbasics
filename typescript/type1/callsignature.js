"use strict";
// function call signature refers to the declaration or defination of a function which includes the function's name,parameters,and return type.it defines the structure and type information of a function without including the function's body or implementation
const employ1 = {
    name: "adi",
    age: 22,
    greet: ((country) => `welcome my name is ${employ1.name} and age is ${employ1.age} i live in ${country}`)
};
const introduction = (employ1) => {
    const { name, age } = employ1;
    return `${name} and ${age}`;
};
console.log(employ1.greet('INDIA'));
