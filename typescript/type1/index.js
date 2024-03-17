"use strict";
//wap to add 2 numbers
// @ts-ignore
// function summ(a:number,b:number):number{
//     return a+b;
// };
// console.log(summ(5,7));
//generating substring
let longText = "this is my learing time";
let shortt = longText.substring(0, 10);
console.log(shortt);
//comparision
let str1 = "aditi";
let str2 = "gup";
let areEqual = str1 == str2;
console.log(areEqual);
//template generation
let fname = "aditii";
let lname = "gupta";
let fullname = `my name is ${fname} ${lname}`;
console.log(fullname);
//!function boolean 
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(5));
function divfour(b) {
    return (b % 4 === 0 && b % 8 === 0);
}
console.log(divfour(8));
//bigint <= Number.MAX_SAFE_INTEGER , bigint ke last me n likhte hai;
let maxxnum = 9007199254740991n;
console.log(maxxnum);
let otherbignum = BigInt("90071992547409924");
console.log(otherbignum);
console.log(maxxnum + otherbignum);
console.log(maxxnum - otherbignum);
console.log(maxxnum / otherbignum);
console.log(maxxnum * otherbignum);
