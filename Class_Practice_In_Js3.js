class BankAccount {
    ownerName;
    balance;
    withdrawalAmount;

    constructor(ownerName, balance) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
       this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
             this.balance -= amount;
             this.withdrawalAmount = amount;
        } else {
            console.log("You don't have sufficient balance");
        }
    }
    
    display() {
        if (!this.balance) {
            console.log(`No money is available in your bank`);
        } else {
            console.log(`Current balance is ${this.balance}`);
        }
        
        if (this.withdrawalAmount === undefined) {
            console.log("No withdrawals made");
        } else {
            console.log(`Withdrawal amount: ${this.withdrawalAmount}`);
        }
    }
}

const p1 = new BankAccount("sanjit", 900);
p1.deposit(300);
p1.withdraw(200);

p1.display();
