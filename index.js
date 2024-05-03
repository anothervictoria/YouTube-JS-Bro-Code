// console.log(`Hello!`);
// console.log(`I like pizza!`);

// window.alert(`This is an alert!`);
// window.alert(`I like pizza!`);

//This is a coment

// document.getElementById("myH1").textContent = "Hello!";
// document.getElementById("myP").textContent = "I like pizza!";

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(typeof gpa);
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);

// let firstName = "Bro";
// let favouriteFood = "Pizza";
// let email = "Bro123@gmail.com";

// console.log(typeof firstName);
// console.log(`Your nzme is ${firstName}`);
// console.log(`You like ${favouriteFood}`);
// console.log(`Your email is ${email}`);

// let online = true;
// let forSale = true;
// let isStudent = false;
// console.log(`Bro is online: ${online}`);
// console.log(`is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// let fullName = "Victoria anothervictoria";
// let age = 29;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// let students = 30;
//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2; // степень
////students = students % 2; // remainder after any division

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
// students **= 2;
// students %= 2;

// students ++; increment operator;
// students --; decrement operator

// let result = 1 + 2 * 3 + 4 ** 2;
// result = (12 % 5) + 8 / 2;

// console.log(students);
// console.log(result);

// ACCEPT USER INPUT

//easy way
// let username;
// username = window.prompt(`What's your username?`);
// console.log(username);

//professional way
// let username;
// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   // console.log(username);
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// };

// TYPE CONVERSION

// let age = window.prompt("How old are you?");
// age += 1;
// console.log(age, typeof age);

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// CONSTANTS

const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt(`Enter the radius of a circle`);
// radius = Number(radius);
// circumference = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
};
