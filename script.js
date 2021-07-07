// Assignment Code
// Sets button variable, looks for generate id in html
var generateBtn = document.querySelector("#generate");

// User Input
// Sets selection variables
var setLength;
var selectUp;
var selectLow;
var selectNumeric;
var selectSpecial;
var bingo;

// Arrays
eSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
eNumeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
eUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
eLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
/* FUTURE NOTE: This is not the most effective way to do this, but it's the most familiar to me, at this point!
Arrays could easily been *character codes* - which would have been much easier to manage! */

// Event listener for click of the Generate button
// Getit var listens for button click, verifies password generation
var getit = document.querySelector("#generate");

getit.addEventListener("click", function () {
    nPassword = pppassword();
    document.getElementById("password").placeholder = nPassword;
});

// FUNCTION - if else, else if
/* FUTURE NOTES: This could have been drastically simplified, but it's comfortable and it works. */

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
  // CONCAT - as in concatinate
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
  // Parameters indicate iterator is 0, the condition to meet is i should be less than the setLength, i++ indicates the increment should increase
  // We use Math.random to return a random number and Math.floor to return random integers to generate bongo
  // We use bingo.length to specify we want our results to be the length of bingo, which is the result of the user input
  // Push adds to end of bongo
  for (var i = 0; i < setLength; i++){
    var bongo = bingo[Math.floor(Math.random() * bingo.length)];
    password.push(bongo);
  }
  // Join returns our array as a string
  var nPassword = password.join("");
  UserInput(nPassword);
  return nPassword;
}
// Places our fresh password into the textbox
function UserInput(nPassword) {
  document.getElementById("password").textContent = nPassword;
}

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
*/