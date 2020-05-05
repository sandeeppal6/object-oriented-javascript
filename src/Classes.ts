import AccountTypes from "./AccountTypes";

class Account implements AccountTypes {
  accountNumber: number;
  balance: number;

  constructor(accountNumber: number = 0, balance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  public setAccountNumber(accountNumber: number) {
    this.accountNumber = accountNumber;
  }

  public getAccountNumber() {
    return this.accountNumber;
  }

  public setBalance(balance: number) {
    this.accountNumber = balance;
  }

  public getBalance() {
    return this.balance;
  }
}

class SavingAccount extends Account {
  constructor(accountNumber: number, balance: number) {
    super(accountNumber, balance);
  }

  public deposite(depositeAmount: number) {
    this.balance = this.balance + depositeAmount;
    return `Account no: ${this.accountNumber}, deposited with ${depositeAmount}, having total balance ${this.balance} in account.`;
  }

  public getAccountDetail() {
    return `Account no: ${this.accountNumber}, having balance amount ${this.balance} in account.`;
  }
}

const myAccount = new SavingAccount(125, 5000);
console.log(`${myAccount.getAccountDetail()}`);
console.log(`${myAccount.deposite(10000)}`);
console.log(`${myAccount.getAccountDetail()}`);
