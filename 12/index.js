// // TERNARY OPERATOR
// let age = 21;
// let message = age >= 28 ? `You're an adult` : `You're a minor`;
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? `Good morning!` : `Good afternoon!`;
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? `You are a student` : `You are NOT a student`;
// console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total is $${purchaseAmount - (purchaseAmount * discount) / 100}`
);

////////// SWITCH STATEMENT

let day = 1;
if (day == 1) {
  console.log(`It's Monday`);
} else if (day == 2) {
  console.log(`It's Tuesday`);
} else if (day == 3) {
  console.log(`It's Wednesday`);
} else if (day == 4) {
  console.log(`It's Thursday`);
} else if (day == 5) {
  console.log(`It's Friday`);
} else if (day == 6) {
  console.log(`It's Saturday`);
} else if (day == 7) {
  console.log(`It's Sunday`);
}

switch (day) {
  case 1:
    console.log(`It's Monday`);
    break;
  case 2:
    console.log(`It's Tuesday`);
    break;
  case 3:
    console.log(`It'Wednesday`);
    break;
  case 4:
    console.log(`It's Thursday`);
    break;
  case 5:
    console.log(`It's Friday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 6:
    console.log(`It's Sunday`);
    break;
  default:
    console.log(`${day} is not a day`);
}

let testScore = 92;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

console.log(letterGrade);

////////// STRING METHODS

let userName = "Vic toria";
// userName.charAt(0); //get the character at index 0
// console.log(userName.charAt(0));

// userName.indexOf("i"); //returns the index of this letter
// console.log(userName.indexOf("i"));

// userName.lastIndexOf("i"); //returns the last index of this letter
// console.log(userName.lastIndexOf("i"));
// console.log(userName.length); //returns length of the string

// let userName = "Victoria    "
// userName = userName.trim(); //Removes the leading and trailing white space and line terminator characters from a string.
// console.log();

userName.toUpperCase(); //returns all letter an uppercase
console.log(userName.toUpperCase());
userName.toLowerCase(); //returns all letter an lowercase
userName.repeat(3); //how many times you want to repeat the string

//--------------

// let result = userName.startsWith(" "); //we check if the string starts with (smth in the parameter), returns true or false
// console.log(result);

// if (result) {
//   console.log(`Your username can't began with ' '`);
// } else {
//   console.log(userName);
// }

//---------------------

// let result = userName.endsWith(" "); //we check if the string ends with (smth in the parameter), returns true or false
// console.log(result);

// if (result) {
//   console.log(`Your username can't end with ' '`);
// } else {
//   console.log(userName);
// }

//---------------------

let result = userName.includes(" "); // returns true or false based on if this string contains the part from the parameter

// if (result) {
//   console.log(`Your username can't include ' '`);
// } else {
//   console.log(userName);
// }

//---------------------

let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll("-", ""); //replaces first argument characters with second argument characters
// console.log(phoneNumber);

// phoneNumber = phoneNumber.padStart(15, "0"); //first parameter - how may character should out string contain, second - from with character it has to start (in this case it will fill it with zeros untill it becomes 15 characters long)
// console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15, "0"); //first parameter - how may character should out string contain, second - with which character it has to end (in this case it will fill it with zeros untill it becomes 15 characters long)
console.log(phoneNumber);

//-------------------------------------
//STRING SLICING

const fullName = "Victoria Another";
// console.log(fullName.length);
// let firstName = fullName.slice(0, 8); //ending index is exclusive
// console.log(firstName);
// let lastName = fullName.slice(8, 17);
// console.log(lastName);

// let firstChar = fullName.slice(0, 2); //start — The index to the beginning of the specified portion of stringObj.
// let lastChar = fullName.slice(-3); //if you start with -1 it means you start from the last index

// console.log(firstChar, lastChar);

let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);
let lasName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lasName);

//-------

const email = "zefegegerone@gmail.com";
let myName = email.slice(0, email.indexOf("@"));

console.log(myName);
let extention = email.slice(email.indexOf("@") + 1);
console.log(extention);
