"use strict";
//type aliase is a way to give a name to a spesific type or combo of types, allows to create custom name for a type,making it easier to reuse and refer to the same type in diff parts of the code.
// type aliase provide better readabillity , organisation and abstraction of complex types.....
const student1 = {
    name: "aditi",
    age: 22,
    isStudent: true,
    // address:{city:"asansol",
    // country:"india"}
};
console.log(student1);
const nameage = (student1) => {
    return `${student1.name} has age ${student1.age}`;
};
console.log(nameage(student1));
