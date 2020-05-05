"use strict";
function transform(data) {
    return data + "";
}
console.log(`Boolean to String Transform ${transform(true)}`);
console.log(`Number to String Transform ${transform(45)}`);
console.log(`Object to String Transform ${transform({ name: "Sandeep" })}`);
