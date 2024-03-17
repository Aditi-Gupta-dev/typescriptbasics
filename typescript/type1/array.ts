//ARRAY IN TS and array operations

// arrays are containers holding multiple values of same data type
//CREATING AND INITIALIZING ARRAY IN 3 METHODS
//1.square brackets

const arr:number[]=[1,2,3,4];

// 2.using array constructor
const arr2:number[]=new Array(1,2,3,4,5);

// using Array.of method 
const names:string[]=Array.of("adi","viku","sneha")
// console.log(names[1]);
// console.log(names.length);

// **OPERATIONS
const fruits:string[]=["apple","banana","mango","grapes"];

//PUSH for end and shift for start
const fruits2=fruits.push("orange");
console.log(fruits2);
const lastdata=fruits.pop();
console.log(lastdata);
console.log(fruits);

//iterations 
//for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//forin loop=iterates over index
for(let i in fruits ){
    console.log(i,fruits[i]);

}

//forof loop= iterates over  value
for(let i of fruits ){
    console.log(i);

}

//forEach=fat arrow function=iterates over value
fruits.forEach((currvalue:string)=>{console.log(currvalue)});
arr.forEach((value)=>{
    console.log(value)
})


//MAP AND FILTER METHOD

//MAP: creates an new array by applying the provided  function to each element of the array ,transforms the elements and returns a new array.

const array:number[]=[2,3,4,5,6];

// doubling each No. 
const doubledata=array.map((currdata:number)=>{
    return currdata*2;

})
console.log(doubledata);

//ex 2. converting no to string

const numtostr= array.map((currdata:number)=>currdata.toString()
)
console.log(numtostr);
//==>FILTER
//return even no.
const evennum:number[]=array.filter((currdata:number)=>currdata%2===0)
console.log(evennum)
//return num>3
const  greater3:number[]=array.filter((currdata:number)=>currdata>3)
console.log(greater3);

///Q)create an array tat contains string of len>4
const str:string[]=["aditi","sneha","astha","akshay"];
const shortstr:string[]=str.filter((currdata:string)=>currdata.length>5)
console.log(shortstr);
