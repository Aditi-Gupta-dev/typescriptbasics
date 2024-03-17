"use strict";
//? ENUMS INTS : datatype
//*--------------------
//- used when u wnat to represent a set of related values and choose 1 value from multi option 
// -provide a way to define a set of named values and associate them with specific meaning
// login usera and admin ==ek hi property ke multiple options
//  //* when enum constants are npt explicitly assigned numeric values ,they are automaticallllly assigned incremental numeric values starting from 0. The default numeric valu for the first enum is 0 and the subsequent enum constants receive values incremented by 1.
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "adi",
    email: "a@gmail.com",
    password: "aaa",
    role: Roles.user
};
const user2 = {
    name: "sne",
    email: "b@gmail.com",
    password: "bbb",
    role: Roles.admin
};
const isAdmin = (user) => {
    const { name, role } = user;
    return role === "admin" ? `${name} is allowed` : `${name} is not allowed`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
