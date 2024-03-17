"use strict";
///**generics  */
//---------------
// reusable components or functions that can work with multiple datatypes
// function doLog(value:number|string):number|string{
//     console.log(value);
//     return value;
// }
// const res=doLog("adit");
// const res2=doLog(2);
function doLog(value) {
    console.log(value);
    return value;
} //here T is a placeholder ...kuch bhi likh do placeholde rme chalega
const res = doLog("adit");
const res2 = doLog(2);
const res3 = doLog(true);
///calling time me nahi likho to bhi chalega inference ho jaega
function addi(a, b) {
    console.log(a, b);
}
const as = addi(2, 4);
const as1 = addi(2, "aditi");
const as3 = addi(2, "aditi");
