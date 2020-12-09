// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  return "temporary password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function passwordCriteria() {
  var characters = prompt("How many characters do you want your password to be?");
  var lowercase = prompt("Do you want to include lowercase characters?");
  var uppercase = prompt("Do you want to include uppercase characters?");
  var numeric = prompt("Do you want to include numeric characters?");
  var special = prompt ("Do you want to include special characters?");

  if(lowercase.toLowerCase === "yes") {
    // Include lowercase characters in password
  } else {
    // Do not include lowercase characters in password
  }

  if(uppercase.toLowerCase === "yes") {
    // Include uppercase characters in password
  } else {
    // Do not include uppercase characters in password
  }

  if(numeric.topLowerCase === "yes") {
    // Include numbers in password
  } else {
    // Do not include numbers in password
  }

  if(special === "yes") {
    // Include special characters
  } else {
    // Do not include special characters
  }
}

passwordCriteria()

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