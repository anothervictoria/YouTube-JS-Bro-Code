// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelcius = document.getElementById("toCelcius");
// const result = document.getElementById("result");
// let temp;

// function convert() {
//   if (toFahrenheit.checked) {
//     temp = Number(textBox.value);
//     temp = (temp * 9) / 5 + 32;
//     result.textContent = temp.toFixed(1) + "°F";
//   } else if (toCelcius.checked) {
//     temp = Number(textBox.value);
//     temp = (temp - 32) * (5 / 9);
//     result.textContent = temp.toFixed(1) + "°C";
//   } else {
//     result.textContent = "Select a unit";
//   }
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ARRAYS
// let fruits = ["apple", "orange", "banana", "peach", "avocado", "strawberry"];
// console.log(fruits);
// fruits[2] = "coconut";
// console.log(fruits);

// fruits.push("cherry"); //adds an elements at the end of the array
// fruits.pop(); //removes the last element of the array
// fruits.unshift("mango"); //adds an element to the beginning of the array
// fruits.shift(); //removes the first element of the array

// let numOfFruits = fruits.length;
// console.log(numOfFruits);

// let index = fruits.indexOf("apple");
// console.log(index);
// index = fruits.indexOf("cucumber"); //if elements doesn't exist in the array it returns -1
// console.log(index);

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }

// fruits.sort(); //sort elements in an alphabetical order
// fruits.sort().reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// } //like a shortcut to display elements of an array

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// SPREAD OPERATOR
// ... - spreads an array intp differrent elements

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// // let maximum = Math.max(numbers); //Numeric expressions to be evaluated.
// // console.log(maximum);

// let maximum = Math.max(...numbers); //imagine like you are opening the box and taking out smth
// let minimum = Math.min(...numbers);
// console.log(maximum, minimum);

// let username = "another";
// let letters = [...username].join("-");
// console.log(letters);

// let fruits = ["apple", "orange", "banana", "peach", "avocado", "strawberry"];
// let newFruits = [...fruits]; //copies the elements of the array in the new array
// console.log(fruits);
// console.log(newFruits);

// let vegetables = ["carrots", "celery", "potatoes"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"]; //combine 2 or more arrays
// console.log(foods);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// REST PARAMETERS

const food1 = "pizza";
const food2 = "humburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods) {
  //combines separate elements into an array
  console.log(...foods); //same 3 dots divide an existing array into separate elements
}

function getFood(...foods) {
  return foods;
}

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

//---------------------------------------------------------------------------------------

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

// const total = sum(1, 2, 3, 4);
// console.log(`Your total is $${total}`);

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  console.log(result);
  console.log(numbers);
  return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);
console.log(`The average is ${total}`);

//---------------------------------------------------------------------------------------

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

function combineStrings(...strings) {
  return strings.join(" ");
}

console.log(fullName);
