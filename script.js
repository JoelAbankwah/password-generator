// Assignment code here
/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// Get references to the #generate element

var lower = ['abcdefghijklmnopqrstuvwxyz' ]
var upper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ' ]
var numeric = "1234567890"
var specialCharacter = "!@#$%^&*()-+/"
var potentialCharacters = ""
var passwordText = ""
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var password = {
        legnth: 0,
        mixed: false,
        num: false,
        special: false
    }
    var generatePassword = function() {
       password.legnth = window.prompt("Please choose a length for your password of at least 8 characters and no more than 128 characters.")
       var legnth = parseInt(password.legnth)

       if (legnth >= 8 && legnth <= 128) {
            confirmTypes();
       }
       else {
            window.alert("Please enter a valid length")
            generatePassword();
        }
        function confirmTypes() {
            password.mixed = window.confirm("Would you like to include upper and lowercase characters?")
            if (password.mixed === false) {
               var lowerCase = window.confirm("Would you like to include lowercase characters?")
               if (lowerCase === false) {
                   var upperCase = window.confirm("Would you like to include uppercase characters?")
               } 
            }
            password.num = window.confirm("Would you like to include numeric characters?")

            password.special = window.confirm("Would you like to include special characters?")

            if (password.mixed === false && password.num === false && password.special === false && lowerCase === false && upperCase === false) {
                window.alert("You need to select at least 1 character type.")
                confirmTypes();
            } 
            if (password.mixed) {
                potentialCharacters = potentialCharacters.concat(upper, lower)
            }
            if (lowerCase) {
                potentialCharacters = potentialCharacters.concat(lower)    
            }
            if (upperCase) {
                potentialCharacters = potentialCharacters.concat(upper)
            }
            if (password.num) {
                potentialCharacters = potentialCharacters.concat(numeric)
            }
            if (password.special) {
                potentialCharacters = potentialCharacters.concat(specialCharacter)
            }
        }

        for (var i = 0; i <= legnth; i++) {
            var randomNumber = Math.floor(Math.random() * potentialCharacters.length);
            passwordText += potentialCharacters.substring(randomNumber, randomNumber +1);
        }
        document.querySelector("#password").value = passwordText;
    }
    generatePassword(); 

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
