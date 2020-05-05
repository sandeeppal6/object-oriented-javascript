"use strict";
const principleAmount = 5000;
function deposit(principleAmount, depositAmount) {
    return principleAmount + depositAmount;
}
const totalAmount = deposit(principleAmount, 4500);
console.log(`Total amount after deposit : ${totalAmount}`);
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(`Full Name : ${fullName("sandeep", "pal")}`);
