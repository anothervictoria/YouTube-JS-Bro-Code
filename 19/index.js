//WHILE LOOP

// let username = "";
// if (username === "") {
//   console.log(`You didn't enter your name`);
// } else {
//   console.log(`Hello ${username}`);
// }

// let username;
// while (username === "" || username === null) {
//   username = window.prompt("Enter your name");
// }
// console.log(`Hello ${username}`);

// do {
//   username = window.prompt("Enter your name");
// } while (username === "" || username === null);

// console.log(`Hello ${username}`);

//____________________________________

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//   username = window.prompt(`Enter your username`);
//   password = window.prompt(`Enter your password`);

//   if ((username === "myUsername") & (password === "myPassword")) {
//     loggedIn = true;
//     console.log(`You are logged in`);
//   } else {
//     console.log(`Invalid credentials! Please try again!`);
//   }
// }

//_-----------------------------------------------------------
//------------------------------------------------------------
// FOR LOOP
for (let i = 0; i <= 2; i++) {
  console.log(`Hello!`);
}

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    continue;
    // break;
  } else {
    console.log(i);
  }
}
