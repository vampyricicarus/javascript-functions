let loggedIn = true;
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']


if (isLoggedIn) {
    console.log("Your cart contains the following products:");
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i]);
    }
  } else {
    console.log("You need to log in before you can view your cart.");
  }


let bankAccount = {
    balance: 0,  
  };
  
  
  function deposit(amount) {
    if (amount > 0) {
      bankAccount.balance += amount;  
      console.log(`Deposited $${amount}. New balance: $${bankAccount.balance}`);
    } else {
      console.log("Please enter a valid deposit amount.");
    }
  }
  
  
  function withdraw(amount) {
    if (amount > 0 && amount <= bankAccount.balance) {
      bankAccount.balance -= amount;  
      console.log(`Withdrew $${amount}. New balance: $${bankAccount.balance}`);
    } else if (amount > bankAccount.balance) {
      console.log("Insufficient funds for this withdrawal.");
    } else {
      console.log("Please enter a valid withdrawal amount.");
    }
  }
  
  
  function checkBalance() {
    console.log(`Your current balance is: $${bankAccount.balance}`);
  }
  