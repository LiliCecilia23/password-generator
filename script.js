// Assignment Code
var generateBtn = document.querySelector("#generate");
var charCount = prompt("How many characters do you want your password to be?");
var wantUpper = confirm("Do you want upper case characters?");
var wantLower = confirm("Do you want lower case characters?");
var wantNum = confirm("Do you want numbers?");
var wantSpec = confirm("Do you want special characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if (isNAN(charCount.value)) {
  alert("Please input valid number");
} ifelse (charCount.value == 0){
  alert("Please input valid number");
}