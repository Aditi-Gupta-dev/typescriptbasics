"use strict";
//OBJECTS IN TS : represent data with keyvalue pairs.key can be a string or symbo; that maps to a value
//real life example of persons info using ts->name, age,isStudent,address{city,country}
//aise tum chage nahi kr skti kisi ka bhi datatype jo tum js me kr rahi thi ...tumko error mil jaega ...
//lwkin ab socho ki tumko aise person name ke bhut sare objects banane hai to kya same declarations bar bar likjogi?   . . , , nahi na ....so we use aliase
const person = {
    name: "aditi",
    age: 22,
    isStudent: true,
    address: { city: "asansol",
        country: "india" }
};
console.log(person);
//
