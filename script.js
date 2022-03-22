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
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = {
        legnth: 0,
        mixedCase: false,
        numChar: false,
        specChar: false
    }
    var password = generatePassword()
    function generatePassword() {
       password.legnth = window.prompt("Please choose a length for your password of at least 8 characters and no more than 128 characters.")
       var legnth = parseInt(password.legnth)

       if (legnth > 8 && legnth < 128) {
            confirmTypes();
       }
       else {
            window.alert("Please enter a valid length")
            generatePassword();
        }
        function confirmTypes() {
            password.mixedCase = window.confirm("Would you like to include upper and lowercase characters?")

            password.numChar = window.confirm("Would you like to include numeric characters?")

            password.specChar = window.confirm("Would you like to include special characters?")

            if (password.mixedCase === false && password.numChar === false && password.specChar === false) {
                window.alert("You need to select at least 1 character type.")
                confirmTypes();
            }
        }
    }                


  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
