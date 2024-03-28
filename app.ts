#! usr/bin/env


import * as readlinesync from "readline-sync";

function getUserInputNum(inp: string): number {
  const num = readlinesync.question(inp);
  return parseFloat(num);
}

function getUserInputStr(inp: string): string {
  const num = readlinesync.question(inp);
  return num;
}

// Authentication
let pin = 1994;
while (true) {
  let password = getUserInputNum("Enter your 4 digit pin: ");

  if (password === pin) {
    console.log("Welcome admin! You are in.");
    break;
  } else {
    console.log("Your pin is incorrect. Please enter correct pin.\n");
  }
}

let balance = 10000;

// Transactions
while (true) {
  let choice =
    readlinesync.keyInSelect(
      ["Withdraw", "Fast Cash", "Balance Check"],
      "What you want to do now?\n"
    ) + 1;

  // console.log(choice); //Debug Code

  if (choice === 0) {
    console.log("Thank You for using ATM. \nGood Bye!");
    break;
  }

  /*
  // Using if else statement
  else if(choice===1){
    console.log("Withdraw");
    
  }
  else if(choice===2){
    console.log("Fast Cash");
    
  }
  else if(choice===3){
    console.log("Balance Check");
    
  } else{
    console.log('Invalid Choice.');
    
  }
*/
  // Using switch sase statement
  switch (choice) {
    case 1:
      console.log("Withdraw");
      let cash = getUserInputNum('How much do you want to withdraw?\n');
      
      while(true){
        if (cash>balance || cash<0){
          console.log("Insufficient Balance.");
          break;
          
        } else{
          balance-=cash;
          console.log(`$${cash} have been deducted from your account. \nYour new account balance is $${balance}.`);
        break;
        }
        
      }
      

      break;

    case 2:
      console.log("Fast Cash");
      let fastCash =
        readlinesync.keyInSelect(
          ["$100","$500", "$1000", "$5000", "$10000"],
          "How much do you want withdraw using Fast Cash?"
        ) + 1;
        while(true){
        if (fastCash>balance){
          console.log('Insufficient Balance.');
          break;
        }
        else if(fastCash===0){
          break;
        }
        else if(fastCash===1){
          balance-=100;
          console.log(`$100 have been deducted from your account. \nYour new account balance is $${balance}.`);
          
          break;
        }
        else if(fastCash===2){
          balance-=500;
          console.log(`$500 have been deducted from your account. \nYour new account balance is $${balance}.`);
          
          break;
        }
        else if(fastCash===3){
          balance-=1000;
          console.log(`$1000 have been deducted from your account. \nYour new account balance is $${balance}.`);
          
          break;
        }
        else if(fastCash===4){
          balance-=5000;
          console.log(`$5000 have been deducted from your account. \nYour new account balance is $${balance}.`);
          break;
        }
      
        
        else if(fastCash===5){
          balance-=10000;
          console.log(`$10000 have been deducted from your account. \nYour new account balance is $${balance}.`);
          
          break;
        }
      }
      break;

    case 3:
      console.log("Balance Check");
      console.log(`Your Balance is $${balance}.`);

      break;

    default:
      break;
  }
}
