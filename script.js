// Global variables so that all functions can reach them while generating and writing password
var lowerCase = ["a", "b", "c", "d"];
var upperCase = ["A", "B", "C", "D"];
var numbers = ["1", "2", "3"];
var special = ["!", "@", "#"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt(
    "How many characters do you want your password to be?"
  );
  var lowerCaseOption = confirm("Do you want to include lowercase characters?");
  var upperCaseOption = confirm("Do you want to include uppercase characters?");
  var numbersOption = confirm("Do you want to include numbers characters?");
  var specialCharactersOption = confirm(
    "Do you want to include special characters?"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Oops, your password needs to be between 8 and 128 characters!");
    return;
  }

  if (passwordLength !== typeof number) {
    alert("Oops, that wasn't a number!");
    return;
  }

  if (
    lowerCaseOption === false &&
    upperCaseOption === false &&
    numbersOption === false &&
    specialCharactersOption === false
  ) {
    alert("Oops, you didn't select any password criteria!");
    return;
  }

  var chosenCriteria = {
    passwordLength: passwordLength,
    lowerCaseOption: lowerCaseOption,
    upperCaseOption: upperCaseOption,
    numbersOption: numbersOption,
    specialCharactersOption: specialCharactersOption
  }
  return chosenCriteria;

  // if (lowerCaseOption) {
  //   // Generate random lowercase
  //   console.log("Your password included lowercase characters!");
  //   var randomLowercase =
  //     lowerCase[Math.floor(Math.random() * lowerCase.length)];
  //   password.push(randomLowercase);
  //   console.log(password);
  //   return password;
  // } else {
  //   // Do not include lowercase characters in password
  //   console.log("Your password did not include lowercase characters!");
  //   return "";
  // }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
