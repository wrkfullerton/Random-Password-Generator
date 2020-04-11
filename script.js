// Random Password Generator Code
var passwordEl = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", function() {

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Prompt for password character length
var charLength = prompt("How many characters would you like your new password to be? Pick a number between 8 and 128.");

// Run program only if user picks within range
if ((charLength >=8) && (charLength <=128)) {

  // Creating all other variables for password generator
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
  


  // create newPassword out of random string

  let newPassword = "";

  // prompts which allow user to choose which characters to include
  let genLowerCase = confirm("Would you like to use lowercase letters?");
  let genUpperCase = confirm("Would you like to use uppercase letters?");
  let genNumbers = confirm("Would you like to use numeric characters?"); 
  let genSymbols = confirm("Would you like to use special characters? i.e. (!, #, &, $, etc.");
  
  // create variables that adds what ever characters chosen to include in new password 

  var allCharacters = lowerCase + upperCase + numbers + symbols; 
  var a = lowerCase + upperCase + numbers;
  var b = lowerCase + upperCase + symbols; 
  var c = lowerCase + numbers + symbols;
  var d = upperCase + numbers + symbols;
  var e = lowerCase + upperCase;
  var f = lowerCase + numbers; 
  var g = lowerCase + symbols;
  var h = upperCase + numbers; 
  var j = upperCase + symbols;
  var k = numbers + symbols;

  //create if statements with loops that match with any of the combination of passwords

  if ((genLowerCase === true) && (genUpperCase === true) && (genNumbers === true) && (genSymbols === true)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * allCharacters.length);
      newPassword += allCharacters.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === true) && (genUpperCase === true) && (genNumbers === true) && (genSymbols === false)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * a.length);
      newPassword += a.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === true) && (genUpperCase === true) && (genNumbers === false) && (genSymbols === true)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * b.length);
      newPassword += b.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === true) && (genUpperCase === false) && (genNumbers === true) && (genSymbols === true)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * c.length);
      newPassword += c.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === false) && (genUpperCase === true) && (genNumbers === true) && (genSymbols === true)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * d.length);
      newPassword += d.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === true) && (genUpperCase === true) && (genNumbers === false) && (genSymbols === false)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * e.length);
      newPassword += e.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === true) && (genUpperCase === false) && (genNumbers === true) && (genSymbols === false)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * f.length);
      newPassword += f.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === true) && (genUpperCase === false) && (genNumbers === false) && (genSymbols === true)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * g.length);
      newPassword += g.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === false) && (genUpperCase === true) && (genNumbers === true) && (genSymbols === false)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * h.length);
      newPassword += h.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === false) && (genUpperCase === true) && (genNumbers === false) && (genSymbols === true)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * j.length);
      newPassword += j.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === false) && (genUpperCase === false) && (genNumbers === true) && (genSymbols === true)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * k.length);
      newPassword += k.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === true) && (genUpperCase === false) && (genNumbers === false) && (genSymbols === false)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * genLowerCase.length);
      newPassword += genLowerCase.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === false) && (genUpperCase === true) && (genNumbers === false) && (genSymbols === false)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * genUpperCase.length);
      newPassword += genUpperCase.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === false) && (genUpperCase === false) && (genNumbers === true) && (genSymbols === false)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * genNumbers.length);
      newPassword += genNumbers.charAt(character, character + 1);
    }
  }
  else if ((genLowerCase === false) && (genUpperCase === false) && (genNumbers === false) && (genSymbols === true)) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * genSymbols.length);
      newPassword += genSymbols.charAt(character, character + 1);
    }
  }

  // Generate the new password in the text field/area

  passwordEl.textContent = newPassword;

}

})