"use strict";
//===>function declation 
//define krna 
//===>FUNCTION INVOCATION=to execute a  function by using its name follwed by parentheses
//===>greeting function 
// function greet(name:string,id:number){
//     console.log(`welcome ${name} ypur id is ${id}`)
// }
// greet("adi",1);
//==>arrow function:-
const greet = (name, id) => {
    return `welcome ${name} ypur id is ${id}`;
};
const mygreet = greet("adi", 1);
console.log(mygreet);
//palindrome function:-
const ispalindrome = (palin) => {
    let mypalin = palin.split("").reverse().join("");
    return palin === mypalin;
};
console.log(ispalindrome("126721"));
