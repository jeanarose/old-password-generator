// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Store how many characters

// Generate random lowercase characters in password
function generateRandomLowercase() {
  var alphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
  var randomLowercase =
    alphabetLowercase[Math.floor(Math.random() * alphabetLowercase.length)];
  return randomLowercase;
}

function generatePassword() {
  var lowercase = prompt("Y / N: Do you want to include lowercase characters?");

  if (lowercase === "y") {
    // Include lowercase characters in password
    console.log("Your password included lowercase characters!");
    return generateRandomLowercase();
  } else {
    // Do not include lowercase characters in password
    console.log("Your password did not include lowercase characters!");
  }
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
