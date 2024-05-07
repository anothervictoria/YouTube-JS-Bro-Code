// //RANDOM PASSWORD GENERATOR

// function generatePassword(
//   length,
//   includeLowercase,
//   includeUpperCase,
//   includeNumbers,
//   includeSymbols
// ) {
//   const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const upperCaseChars = lowerCaseChars.toUpperCase();
//   const numbersChars = "0123456789";
//   const symbolChars = "!@#$%^&*())_+-=";

//   let allowChars = "";
//   let password = "";

//   allowChars += includeLowercase ? lowerCaseChars : "";
//   allowChars += includeUpperCase ? upperCaseChars : "";
//   allowChars += includeNumbers ? numbersChars : "";
//   allowChars += includeSymbols ? symbolChars : "";

//   // console.log(allowChars);

//   if (length <= 0) {
//     return `(password length must be at least 1)`;
//   }
//   if (allowChars.length === 0) {
//     return `At least 1 set of character needs to be selected`;
//   }

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allowChars.length);
//     // console.log(randomIndex);
//     password += allowChars[randomIndex];
//     // console.log(password);
//   }

//   return password;
// }
// const passwordLength = 12;
// const includeLowercase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(
//   passwordLength,
//   includeLowercase,
//   includeUpperCase,
//   includeNumbers,
//   includeSymbols
// );

// console.log(`Generated password: ${password}`);

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
//RANDOM PASSWORD GENERATOR

const passwordEl = document.querySelector("#password");
const lengthEl = document.querySelector("#length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", GeneratePassword);
const copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", CopyPassword);

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = lowercaseChars.toUpperCase();
const numbersChars = "0123456789";
const symbolChars = "!@#$%^&*())_+-=";

function GeneratePassword() {
  let password = "";
  let length = lengthEl.value;
  let chars = "";

  chars += uppercaseEl.checked ? uppercaseChars : "";
  chars += lowercaseEl.checked ? lowercaseChars : "";
  chars += numbersEl.checked ? numbersChars : "";
  chars += symbolsEl.checked ? symbolChars : "";

  for (let i = 0; i <= length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }

  passwordEl.value = password;
}
async function CopyPassword() {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(passwordEl.value);
    alert("Password copied to clipboard");
  }
}
