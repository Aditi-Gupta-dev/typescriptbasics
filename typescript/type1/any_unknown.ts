//ANY type
//flexible type, turns off all type checking for variable and expressions
//!USECASES
//=>working with dynamic data:
//=>migration from js to typescript

//*UNKNOWN TYPE
//safer slternative as still type checking is done
//variables of  this type can hold any value

let mynum:unknown=55;
mynum=true;
mynum=9;
if(typeof mynum==="number"){
    console.log(mynum+2);
}else if(typeof mynum==="boolean"){
    console.log(mynum);
}

async function fetchData(): Promise<unknown>{
const res=await fetch('https://api.example.com/data');
const data=await res.json();
return data;
}
async function processData(){
    const res=await fetchData();
    if(typeof res==='object'){
        console.log(res);
    }
}