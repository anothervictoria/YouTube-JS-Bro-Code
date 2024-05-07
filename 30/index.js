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
