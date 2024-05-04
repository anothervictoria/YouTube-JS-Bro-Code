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
