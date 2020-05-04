"use strict";
const id = 10;
console.log(`id: ${id}`);
const username = "sandeep";
console.log(`username: ${username}`);
const isAdmin = true;
console.log(`Admin: ${isAdmin}`);
const languages = [
    "Java",
    "NodeJs",
    "MongoDB",
    "ReactJs",
    "Angular",
];
console.log(`Languages: ${languages}`);
const marks = ["Maths", 45];
console.log(`Marks: ${marks}`);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["HR"] = "HR";
    Role["Account"] = "ACCOUNT";
    Role["Transport"] = "TRANSPORT";
})(Role || (Role = {}));
console.log(`Role : ${Role.Admin}`);
