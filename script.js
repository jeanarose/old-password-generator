// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generates password on a button click following several prompts that collect the password criteria
function generatePassword() {
  // Variable that stores the generated password
  var generatedPassword = "";

  // Strings for all character types. 
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "1234567890";
  var specialCharacters = "!@#$%^&*()";

  //String of all chosen criteria
  var chosenCharactersString = "";

  // Prompts the user to input how long they want their password to be
  var passwordLength = prompt(
    "How many characters do you want your password to be?"
  );

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("The password needs to be a number between 8 and 128 characters.")
    return generatePassword();
  }

  // Ask the user if they want to include lowercase characters
  var includeLowerCase = confirm("Do you want to include lowercase characters in your password?");
  // Adds string of lowercase characters to chosenCharactersString if prompt is true
  if(includeLowerCase) {
    chosenCharactersString = chosenCharactersString.concat(lowerCaseCharacters);
  }

  // Ask the user if they want to include uppercase characters
  var includeUpperCase = confirm("Do you want to include uppercase characters in your password?");
  // Adds string of uppercase characters to chosenCharactersString if prompt is true
  if(includeUpperCase) {
    chosenCharactersString = chosenCharactersString.concat(upperCaseCharacters);
  }

  // Ask the user if they want to include number characters
  var includeNumbers = confirm("Do you want to include number characters in your password?");
  // Adds string of number characters to chosenCharactersStrings if prompt is true 
  if(includeNumbers) {
    chosenCharactersString = chosenCharactersString.concat(numberCharacters);
  }

  // Ask user if they want to include special characters
  var includeSpecialCharacters = confirm("Do you want to include special characters?");
  // Adds string of number characters to chosenCharactersStrings if prompt is true
  if(includeSpecialCharacters) {
    chosenCharactersString = chosenCharactersString.concat(specialCharacters);
  }

  if(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters){
    alert("Oops, you need to select at least one password criteria!")
    return generatePassword();
  }

  // Add a random character from the chosenCharactersString to generatePassword for the remaining password length
  for(var i = 0; i < passwordLength; i++){
    //random number for number of elements in chosenCharactersSTring
    var random = Math.floor(Math.random() * chosenCharactersString.length);

    generatedPassword = generatedPassword.concat(chosenCharactersString.charAt(random));
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
