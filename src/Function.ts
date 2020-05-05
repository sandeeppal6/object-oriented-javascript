const principleAmount: number = 5000;

function deposit(principleAmount: number, depositAmount: number): number {
  return principleAmount + depositAmount;
}

const totalAmount: number = deposit(principleAmount, 4500);
console.log(`Total amount after deposit : ${totalAmount}`);

const fullName: (firstName: string, lastName: string) => string = (
  firstName,
  lastName
) => `${firstName} ${lastName}`;
console.log(`Full Name : ${fullName("sandeep", "pal")}`);
