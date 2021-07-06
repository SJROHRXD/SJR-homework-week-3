// Assignment Code
var generateBtn = document.querySelector("#generate");

// User Input
var setLength
var selectUp
var selectLow
var selectNumeric
var selectSpecial
var bingo

eSpecial = []
eNumeric = []
eUp = []
eLow = []


generateBtn.addEventListener("click", writePassword);


// Function

function pppassword() {
  // Prompts for PW length:
  setLength = parseInt(prompt("Please choose between 8 and 128 characters for your password length."))
  
  if (!setLength) {
      alert("This needs a value");
  } else if (setLength < 8 || setLength > 128) {
      setLength = parseInt(prompt("You must choose between 8 and 128"));
  // Prompts for user selections:
  } else {
    selectNumeric = confirm("Will your password contain numbers?");
    selectSpecial = confirm("Will your password contain special characters?");
    selectUp = confirm("Will your password contain uppercase letters?");
    selectLow = confirm("Will your password contain lowercase letters?");
  };
  // If nothing has been selected, this alerts the user!
  if (!selectNumeric && !selectSpecial && !selectUp && !selectLow) {
    bingo = alert("You must make at least (1) selection!");
  }
  // SELECTIONS - All items selected; (4) total
  // CONCAT as in concatinate
  else if (selectNumeric && selectSpecial && selectUp && selectLow) {
    bingo = eSpecial.concat(eNumeric, eUp, eLow);
  }
  // MORE - only 3 of 4 items selected
  else if (selectNumeric && selectSpecial && selectUp) {
    bingo = eNumeric.concat(eSpecial, eUp);
  }
  else if (selectNumeric && selectSpecial && selectLow) {
    bingo = eNumeric.concat(eSpecial, eLow);
  }
  else if (selectNumeric && selectUp && selectLow) {
    bingo = eNumeric.concat(eUp, eLow);
  }
  else if (selectSpecial && selectUp && selectLow) {
    bingo = eSpecial.concat(eUp, eLow);
  }
  // MORE - only 2 of 4 items selected
  else if (selectUp && selectLow) {
    bingo = eUp.concat(eLow);
  }
  else if (selectNumeric && selectSpecial) {
    bingo = eNumeric.concat(eSpecial);
  }
  else if (selectNumeric && selectLow) {
    bingo = eNumeric.concat(eLow);
  }
  else if (selectNumeric && selectUp) {
    bingo = eNumeric.concat(eUp);
  }
  else if (selectSpecial && selectLow) {
    bingo = eSpecial.concat(eLow);
  }
  else if (selectSpecial && selectUp) {
    bingo = eSpecial.concat(eUp);
  }
  // MORE - 1 of 4 items selected
  else if (selectSpecial) {
    bingo = eSpecial;
  }
  else if (selectNumeric) {
    bingo = eNumeric;
  }
  else if (selectUp) {
    bingo = eUp;
  }
  else if (selectLow){
    bingo = eLow;
  };

var password = [];
  // Password variable is an array "placeholder"
  // 
  for (var i = 0; i < setLength; i++){
    var bongo = bingo[Math.floor(Math.random() * bingo.length)];
    password.push(bongo);
  }
  var nPassword = password.join("");
  UserInput(nPassword);
  return nPassword;
}
// Places our fresh password into the textbox
function UserInput(nPassword) {
  document.getElementById("password").textContent = nPassword;






// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;






// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


/*
GIVEN I need a new, secure password
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
```
*/