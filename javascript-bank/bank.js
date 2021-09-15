/* exported Bank */

// constructor
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

// prototype methods
Bank.prototype.openAccount = function (holder, balance) {
  if (balance &&
    typeof balance === 'number' &&
    balance > 0 &&
    (balance % 1 === 0)) {
    const newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    const accountNumber = this.nextAccountNumber;
    this.nextAccountNumber++;
    return accountNumber;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  const account = this.accounts.find(account => account.number === number);
  if (account) {
    return account;
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length > 0) {
    let total = 0;
    this.accounts.forEach(account => {
      total += account.getBalance();
    });
    return total;
  }
  return 0;
};
