// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Variable that holds the generated password
  var generatedPassword = "";

  // All character strings
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "1234567890";
  var specialCharacters = "!@#$%^&*()";

  //String of all chosen criteria
  var requiredCharactersString = "";

  // Prompts the user to select how long they want their password to be
  var passwordLength = prompt(
    "How many characters do you want your password to be?"
  );

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "The password needs to be between 8 and 128 characters."
    );
  }

  // Ask the user if they want to include lowercase characters
  var includeLowerCase = confirm("Do you want to include lowercase characters in your password?");
  // Adds string of lowercase characters to requiredCharactersString if prompt is true
  if(includeLowerCase) {
    requiredCharactersString = requiredCharactersString.concat(lowerCaseCharacters);
  }

  // Ask the user if they want to include uppercase characters
  var includeUpperCase = confirm("Do you want to include uppercase characters in your password?");
  // Adds string of uppercase characters to requiredCharactersString if prompt is true
  if(includeUpperCase) {
    requiredCharactersString = requiredCharactersString.concat(upperCaseCharacters);
  }

  // Ask the user if they want to include number characters
  var includeNumbers = confirm("Do you want to include number characters in your password?");
  // Adds string of number characters to requiredCharactersStrings if prompt is true 
  if(includeNumbers) {
    requiredCharactersString = requiredCharactersString.concat(numberCharacters);
  }

  // Ask user if they want to include special characters
  var includeSpecialCharacters = confirm("Do you want to include special characters?");
  // Adds string of number characters to requiredCharactersStrings if prompt is true
  if(includeSpecialCharacters) {
    requiredCharactersString = requiredCharactersString.concat(specialCharacters);
  }

  // Add a random character from the requiredCharactersString to generatePassword for the remaining password length
  for(var i = 0; i < passwordLength; i++){
    //random number for number of elements in requiredCharactersSTring
    var random = Math.floor(Math.random() * requiredCharactersString.length);

    generatedPassword = generatedPassword.concat(requiredCharactersString.charAt(random));
    console.log("Generated password is: " + generatedPassword);
  }
  return generatedPassword;
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
