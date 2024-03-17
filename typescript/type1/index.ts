//wap to add 2 numbers

// @ts-ignore
// function summ(a:number,b:number):number{
//     return a+b;
// };
// console.log(summ(5,7));


//generating substring
let longText:string="this is my learing time";
let shortt:string=longText.substring(0,10);
console.log(shortt);
 
//comparision
let str1:string="aditi";
let str2:string="gup";
let areEqual:boolean=str1==str2;
console.log(areEqual);


//template generation
let fname:string="aditii";
let lname:string="gupta";
let fullname:string=`my name is ${fname} ${lname}`;
console.log(fullname);


//!function boolean 
function isEven(a:number):boolean{
    return a%2 ===0
}
console.log(isEven(5));

function divfour(b:number):boolean{
    return (b%4===0 && b%8===0)
}
console.log(divfour(8));

//bigint <= Number.MAX_SAFE_INTEGER , bigint ke last me n likhte hai;
let maxxnum:bigint=9007199254740991n;
console.log(maxxnum); 
let otherbignum:bigint=BigInt("90071992547409924");
console.log(otherbignum);

console.log(maxxnum+otherbignum);
console.log(maxxnum-otherbignum);
console.log(maxxnum/otherbignum);
console.log(maxxnum*otherbignum);

