///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 1 /////
///////////////////////////////////////////////////////////////////////////////////////////////

// create a binary tree structure

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // insert values to the binary tree
  insert = (value, current) => {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this.root;
    } else {
      current = current || this.root;

      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this.root;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this.root;
          } else {
            current = current.right;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this.root;
          } else {
            current = current.right;
          }
        }
      }
    }
  };

  // search through the binary tree
  // return the number of times the value appears in the tree
  // return "Your Search Value is not found" if the value is not found
  // SOLUTION //

  searchTree = (value) => {
    let count = 0;
    if (this.root === null) {
      return count;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            return count
              ? `The word '${value}' appeared ${count} times`
              : `The word '${value}' could not be found!}`;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            return count
              ? `The word '${value}' appeared ${count} times`
              : `The word '${value}' could not be found!`;
          } else {
            current = current.right;
          }
        } else if (value === current.value) {
          count++;
          if (current.left === null && current.right === null) {
            return count
              ? `The word '${value}' appeared ${count} times`
              : `The word '${value}' could not be found!`;
          } else {
            current = current.right;
          }
        }
      }
    }
  };
}

let tree = new BinaryTree();
tree.insert('start');
tree.insert('child');
tree.insert('steak');
tree.insert('movie');
tree.insert('menu');
tree.insert('steak');
tree.insert('child');
tree.insert('map');
tree.insert('menu');
tree.insert('map');
tree.insert('pizza');
tree.insert('start');
tree.insert('pizza');
tree.insert('child');
tree.insert('steak');
tree.insert('menu');
tree.insert('steak');
tree.insert('map');

console.log(tree.searchTree('start'));

///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 1 END /////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 2 /////
///////////////////////////////////////////////////////////////////////////////////////////////

// create a function that takes in a csv file and returns an array of objects
// each object should have the following properties
// First Name, Last Name, Age
// SOLUTION //

const csvToObject = (csvFile) => {
  let csvArray = csvFile.split('\n');
  let csvObjectArray = [];
  let csvObject = new Object();
  let csvObjectKeys = csvArray[0].split(',');

  for (let i = 1; i < csvArray.length; i++) {
    let csvObjectValues = csvArray[i].split(',');
    for (let j = 0; j < csvObjectKeys.length; j++) {
      let key = csvObjectKeys[j].trim();
      let value = csvObjectValues[j].trim();

      value = key === 'Age' || key === 'Amount' ? parseInt(value) : value;
      csvObject[key] = value;
    }
    csvObjectArray.push(csvObject);
    csvObject = {};
  }
  return csvObjectArray;
};

// get the csv file from ./staff_records.csv and pass it to the csvToObject function

import fs from 'fs';

const csvFile = fs.readFileSync('./staff_records.csv', 'utf8');
let obj = csvToObject(csvFile);

const sortStaffRecords = (staffRecords, sort) => {
  let what_to_sort =
    sort == 1
      ? 'First_Name'
      : sort == 2
      ? 'Last_Name'
      : sort == 3
      ? 'Age'
      : 'First_Name';
  let sortedStaffRecords = staffRecords.sort((a, b) =>
    a[what_to_sort] > b[what_to_sort]
      ? 1
      : b[what_to_sort] > a[what_to_sort]
      ? -1
      : 0
  );
  return sortedStaffRecords;
};

// console.log(sortStaffRecords(obj, 3));

///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 2 END /////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 3 /////
///////////////////////////////////////////////////////////////////////////////////////////////

// create a function to extract all unique words and output the number of times they appear in the text
// SOLUTION //

const countWords = (text) => {
  let textArray = text.split(' '),
    textObject = {};

  for (let i = 0; i < textArray.length; i++) {
    let word = textArray[i].toLowerCase();
    textObject[word] ? textObject[word]++ : (textObject[word] = 1);
  }

  textObject = Object.fromEntries(
    Object.entries(textObject).sort(([, a], [, b]) => b - a)
  );
  return textObject;
};

// console.log(countWords("to to gh gh sns sljknr fg fg aoenjenwen ty ty ty ty"))

///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 3 END /////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 4 /////
///////////////////////////////////////////////////////////////////////////////////////////////

let wordsDict = [
  'lake',
  'hair',
  'year',
  'road',
  'tale',
  'food',
  'map',
  'ear',
  'poet',
  'hall',
  'sir',
  'menu',
  'son',
  'art',
  'exam',
  'city',
  'ad',
  'goal',
  'gene',
  'way',
  'math',
  'dirt',
  'loss',
  'debt',
  'dad',
  'mall',
  'love',
  'fact',
  'town',
  'king',
  'oven',
  'song',
  'lady',
  'area',
  'mode',
  'girl',
  'gate',
  'bird',
  'poem',
  'mom',
  'news',
  'meat',
  'desk',
  'bath',
  'wife',
  'data',
  'wood',
  'unit',
  'idea',
  'lab',
];

// Given a dictionary of words. Write a program that will ask a user to enter a string or alphabets of any length and output the words that can be formed based on the list of words in the dictionary (think Scrabble). Letters that are not used should also be displayed to the user. Only words that appear in the dictionary can be formed with letters of alphabets entered by the user.

// In the string of alphabets that will be accepted by your application, you are only allowed to use each letter once. Once a letter has been used to form a word, you shouldn’t use that specific letter to form another word.

// SOLUTION //

const scrabble = (letters) => {};

// console.log(scrabble("lakem"));

///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 4 END /////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 5 /////
///////////////////////////////////////////////////////////////////////////////////////////////

// convert customer account info from csv to an array of objects

const CustomerInfoCsvFile = fs.readFileSync(
  './customer_account_info.csv',
  'utf8'
);
let CustomerInfoCsvData = csvToObject(CustomerInfoCsvFile);

const CustomerTrxnCsvFile = fs.readFileSync(
  './customer_account_trns.csv',
  'utf8'
);
let CustomerTrxnCsvData = csvToObject(CustomerTrxnCsvFile);

// check account balance
const checkAccBal = (acc_no) => {
  let acc_bal = 0;
  let customer_name = '';

  let acc_deatils = checkAccDetails(acc_no);

  if (acc_deatils.first_name) {
    customer_name = `${acc_deatils.last_name} ${acc_deatils.first_name}`;
  } else {
    return acc_deatils;
  }

  for (let i = 0; i < CustomerTrxnCsvData.length; i++) {
    let trxn = CustomerTrxnCsvData[i];
    if (trxn.AccountNumber == acc_no) {
      trxn.CreditDebit === 'Credit'
        ? (acc_bal += trxn.Amount)
        : (acc_bal -= trxn.Amount);
    }
  }

  let message = `Account Name: ${customer_name}\nAccount Balance: ${acc_bal}`;
  return message;
};

// check account details

const checkAccDetails = (acc_no) => {
  let first_name = '';
  let last_name = '';
  let phone_number = '';
  let user_exists = false;

  for (let i = 0; i < CustomerInfoCsvData.length; i++) {
    let customer = CustomerInfoCsvData[i];
    if (customer.AccountNumber == acc_no) {
      first_name = customer.FirstName;
      last_name = customer.LastName;
      phone_number = customer.PhoneNumber;
      user_exists = true;
    }
  }

  if (!user_exists) {
    return 'User does not exist';
  }

  let message = {
    first_name: first_name,
    last_name: last_name,
    phone_number: phone_number,
    text: `First Name: ${first_name}\nLast Name: ${last_name}\nPhone Number: ${phone_number}`,
  };

  return message;
};

// print user details

const printUserDetails = (acc_no) => {
  let acc_details = checkAccDetails(acc_no);
  return acc_details.text;
};

// print last three transactions

const printLastThreeTrxns = (acc_no) => {
  let trxn_details = [];
  let trxn_count = 0;

  for (let i = CustomerTrxnCsvData.length - 1; i >= 0; i--) {
    let trxn = CustomerTrxnCsvData[i];
    if (trxn.AccountNumber == acc_no) {
      trxn_details.push(trxn);
      trxn_count++;
    }

    if (trxn_count == 3) {
      break;
    }
  }

  let message = `Last three transactions:\n`;
  for (let i = 0; i < trxn_details.length; i++) {
    let trxn = trxn_details[i];
    message += `Transaction Amount: ${trxn.Amount}\nTransaction Type: ${trxn.CreditDebit}\n\n`;
  }

  return message;
};

// change phone number

const changePhoneNumber = (acc_no, old_phone_number, new_phone_number) => {
  let acc_details = checkAccDetails(acc_no);

  if (acc_details.phone_number == old_phone_number) {
    for (let i = 0; i < CustomerInfoCsvData.length; i++) {
      let customer = CustomerInfoCsvData[i];
      if (customer.AccountNumber == acc_no) {
        customer.PhoneNumber = new_phone_number;
      }
    }

    let message = `Phone number changed from ${old_phone_number} to ${new_phone_number}`;
    return message;
  } else {
    return 'Phone number does not match';
  }
};

// console.log(changePhoneNumber(6972, "07015181324", "08087654321"));
// console.log(printLastThreeTrxns(6972));
// console.log(printUserDetails(6972));
// console.log(checkAccBal(6972));

///////////////////////////////////////////////////////////////////////////////////////////////
///// Question 5 END /////
///////////////////////////////////////////////////////////////////////////////////////////////

// Start the project with "node index.js" in the terminal
