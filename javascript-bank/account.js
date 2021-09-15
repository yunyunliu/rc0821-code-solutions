/* exported Account */
// constructor
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

// prototype methods
Account.prototype.deposit = function (amount) {
  if (amount &&
    typeof amount === 'number' &&
    amount > 0 &&
    (amount % 1 === 0)) {
    const transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount &&
    typeof amount === 'number' &&
    amount > 0 &&
    (amount % 1 === 0)) {
    const transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  let balance = 0;
  this.transactions.forEach(transaction => {
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
  });
  return balance;
};
