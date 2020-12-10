# Password Generator
[![GitHub issues](https://img.shields.io/github/issues/jeanarose/password-generator)](https://github.com/jeanarose/password-generator/issues)

## Description 
[Password Generator](https://jeanarose.github.io/password-generator/) was created to generate a random password when the button "Generate Password" is clicked. The password is dependent on answers to a series of prompts that the user receives when the button is clicked. The user chooses:

* The password length
* Inclusion of lowercase characters
* Inclusion of uppercase characters
* Inclusion of number characters
* Inclusion of special characters 

A password is generated based on the user's chosen criteria. Checks were also put in place to ensure that the user 1) had to input a number for the password length and 2) had to choose at least one kind of password character.

Password Generator utilized functions, variables, prompts, confirms, conditionals, and a for loop. 

View the deployed application here: https://jeanarose.github.io/password-generator/

## Password Generator

![Screenshot of My Portfolio webpage.](./assets/images/password-generator-screenshot.png)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Tests](#tests)


## Installation
1. Go to the [GitHub repository for Password Generator](https://github.com/jeanarose/password-generator).
2. Click the green **Code** button.
3. Copy the SSH key.
4. In your terminal, go into the directory that you want to host Password Generator. 
5. Use the command **git clone [insert SSH key URL]** and click **Enter** (Requires Git).

## Usage 
Password Generator can be used to generate a random password based on specific criteria that the user wishes to include. The use of passwords created from Password Generator can increase security and ease of password creation.

## Credits
* Pete Kriengsiri
* John Erler

## License
MIT License

Copyright (c) [2020] [Jeana Rose Mathis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests
Interested in testing Password Generator?

Check to see that the code accounts for the following:
1. When a non-numerical value is inputted into the prompt for **password length**, the user is asked to use a numerical value and is redirected.
2. When a number that is less than 8 or greater than 128 is inputted into the prompt for **password length**, the user is asked to input a number that is between 8 and 128 and is redirected. 
3. When no password criteria is selected, the user is asked to use at least one character type and is redirected.  

---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.