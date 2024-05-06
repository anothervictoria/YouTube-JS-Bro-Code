//RANDOM PASSWORD GENERATOR

function generatePassword(
  length,
  includeLowercase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = lowerCaseChars.toUpperCase();
  const numbersChars = "0123456789";
  const symbolChars = "!@#$%^&*())_+-=";

  let allowChars = "";
  let password = "";

  allowChars += includeLowercase ? lowerCaseChars : "";
  allowChars += includeUpperCase ? upperCaseChars : "";
  allowChars += includeNumbers ? numbersChars : "";
  allowChars += includeSymbols ? symbolChars : "";

  // console.log(allowChars);

  if (length <= 0) {
    return `(password length must be at least 1)`;
  }
  if (allowChars.length === 0) {
    return `At least 1 set of character needs to be selected`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowChars.length);
    // console.log(randomIndex);
    password += allowChars[randomIndex];
    // console.log(password);
  }

  return password;
}
const passwordLength = 12;
const includeLowercase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
