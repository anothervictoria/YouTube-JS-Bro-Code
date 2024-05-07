// function hello() {
//   setTimeout(function () {
//     console.log("Hello!");
//   }, 3000);
// }

function hello(callback) {
  console.log("Hello!");
  callback();
}

function leave() {
  console.log("Leave!");
}

function wait() {
  console.log("Wait!");
}

function goodbye() {
  console.log("Goodbye!");
}

// hello();
// goodbye();
hello(goodbye);
hello(leave);

//--------------------------------------------------------

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

sum(displayConsole, 5, 6);

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}

sum(displayPage, 3, 4);

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5];

// // numbers.forEach(display);

// function display(element) {
//   console.log(element);
// }

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// numbers.forEach(double);
// numbers.forEach(display);

// numbers.forEach(triple);
// numbers.forEach(display);

//--------------------------------------------------------

let fruits = ["apple", "orange", "banana", "coconut"];
function display(element) {
  console.log(element);
}

fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

fruits.forEach(upperCase);
fruits.forEach(display);

fruits.forEach(lowerCase);
fruits.forEach(display);

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(capitalize);
fruits.forEach(display);
