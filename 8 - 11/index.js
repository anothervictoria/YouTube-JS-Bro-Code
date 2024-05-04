// MATH OBJECT

// let x = 3.99;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x); //floor always rounds down
// z = Math.ceil(x); //ceil rounds up
// z = Math.trunc(x); //eliminates any decimal part
// z = Math.pow(x, y); // increases x to the power of y
// z = Math.sqrt(x); //finds square root
// z = Math.log(x); //returns the natural logarithm (base e) of a number.
// z = Math.sin(x); //Returns the sine of a number. синус
// z = Math.cos(x); //Returns the cosine of a number. косинус
// z = Math.tan(x); //Returns the tangent of a number.
// z = Math.abs(x); //Returns the absolute value of a number (the value without regard to whether it is positive or negative).
// z = Math.sign(x); //Returns the sign of the x, indicating whether x is positive, negative or zero.

// let max = Math.max(x, y, z); //finds max value
// let min = Math.min(x, y, z); //finds min value

// console.log(min);

// RANDOM NUMBER GENERATOR

// Math.random() //generates random number between 0 and 1
// let randomNum = Math.floor(Math.random() * 6); //generates numbers between 1 and 5
// let randomNum = Math.floor(Math.random() * 6) + 1; // gives a number between 1 and 6

// console.log(randomNum);

// create a random number between 50 and 100
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function () {
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;
//   label1.textContent = randomNum1;
//   label2.textContent = randomNum2;
//   label3.textContent = randomNum3;
// };

// IF STATEMENTS ----------------------------------------

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;
// mySubmit.onclick = function () {
//   age = myText.value;
//   age = Number(age);
//   if (age >= 100) {
//     resultElement.textContent = "You are too old to enter this site";
//   } else if (age == 0) {
//     resultElement.textContent = "You can't enter. You were just born";
//   } else if (age >= 18) {
//     resultElement.textContent = "You are old enough to enter this site";
//   } else if (age < 0) {
//     resultElement.textContent = "Your age can't be below 0";
//   } else {
//     resultElement.textContent = "You must be 18+ to enter this site";
//   }
// };

// CHECKED PROPERTY ----------------------------------------

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed`;
  } else {
    subResult.textContent = `You are not subscribed`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  } else {
    paymentResult.textContent = `You must select a payment type`;
  }
};
