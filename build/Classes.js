"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(accountNumber = 0, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    setAccountNumber(accountNumber) {
        this.accountNumber = accountNumber;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    setBalance(balance) {
        this.accountNumber = balance;
    }
    getBalance() {
        return this.balance;
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance) {
        super(accountNumber, balance);
    }
    deposite(depositeAmount) {
        this.balance = this.balance + depositeAmount;
        return `Account no: ${this.accountNumber} deposited with ${depositeAmount}, having total balance ${this.balance} in account.`;
    }
    getAccountDetail() {
        return `Account no: ${this.accountNumber},  having balance amount ${this.balance} in account.`;
    }
}
const myAccount = new SavingAccount(125, 5000);
console.log(`${myAccount.getAccountDetail()}`);
console.log(`${myAccount.deposite(10000)}`);
console.log(`${myAccount.getAccountDetail()}`);
