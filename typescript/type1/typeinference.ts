//===>typeinference: ability of the compiler to automatically determine an dassign the types to variables , expressionand function return values based on their usage and context in code

let myn='adi';
 

// usage 
// in simple cases
// when in doubt provide explicit type conversion to make it clear
// avoid relying too heavily on inference for complex values 


let mess="hello,typescript!";
console.log(typeof mess);

const calarea=(l:number,b:number)=>{
    return l*b;
}
let ans=calarea(3,4);
console.log(typeof ans, ans);