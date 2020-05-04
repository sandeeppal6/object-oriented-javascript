// primitve datatypes

// Number
const id: number = 10;
console.log(`id: ${id}`);

// String
const username: string = "sandeep";
console.log(`username: ${username}`);

// Boolean
const isAdmin: boolean = true;
console.log(`Admin: ${isAdmin}`);

// Array's
const languages: Array<string> = [
  "Java",
  "NodeJs",
  "MongoDB",
  "ReactJs",
  "Angular",
];
console.log(`Languages: ${languages}`);

// Tuple
const marks: [string, number] = ["Maths", 45];
console.log(`Marks: ${marks}`);

// Enum
enum Role {
  Admin = "ADMIN",
  HR = "HR",
  Account = "ACCOUNT",
  Transport = "TRANSPORT",
}
console.log(`Role : ${Role.Admin}`);
