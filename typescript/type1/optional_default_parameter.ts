// ===>optional n default parameter 
// optional-appending ? after the parameter
// default- providing a defalut value in the parameterdeclaration

const greet2=(name:string,id?:number)=>{
    return `welcome ${name} and ${id}`;

}
console.log(greet2("adi",3));
console.log(greet2("adi"));

