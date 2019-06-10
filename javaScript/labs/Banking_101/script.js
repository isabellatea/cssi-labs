// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let customer_name;
let balance;
let logged_in = false;
let custome_password;

function openAccount(name, startingBalance = 0, password){
  balance = startingBalance;
  // Set the value for customer_name equal to name below
  customer_name = name;
  customer_password = password;

  //write the statment you need to return here
  return `${name} has opened a new account with a balance of $${balance}`

}

function deposit(value){
  if (logged_in === false) {
    return 'User must be logged in';
  } else {
      balance += value;
      return `${customer_name} has deposited ${value}. ${customer_name}'s total balance is $${balance}`;
  }
  // update the value of balance
  //return the correct statement
}

function withdraw(withdrawAmount){
  if (logged_in === false) {
    return 'User must be logged in';
  } else {
  //update the value of balance
  //return the correct statement
    if (withdrawAmount > balance) {
      return `Sorry ${customer_name}, you do not have enough money in your account. You are short by $${withdrawAmount-balance} dollars. `
    } else {
      balance -= withdrawAmount;
      return `${customer_name} has withdrawn ${withdrawAmount}. ${customer_name} has ${balance} remaining.`
    }
  }
}

function login(inputName, inputPassword) {
  if (inputName === customer_name && inputPassword === customer_password) {
    logged_in = true;
    return `${customer_name} has logged in.`
  } else {
    logged_in = false;
    return 'Incorrrect login';
  }
}

function logout() {
  logged_in = false;
  return `${customer_name} has logged out.`
}

// Write your script below
console.log("script is running...?");
