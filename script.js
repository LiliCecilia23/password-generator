// Assignment Code
var generateBtn = document.querySelector("#generate");

var charCount = prompt("How many characters do you want your password to be?");
  if (typeof(charChount) != "number") {
    alert("Please input valid number");
    var charCount = prompt("How many characters do you want your password to be?");
  } 
  else if (charCount === 0){
    alert("Please input valid number");
    var charCount = prompt("How many characters do you want your password to be?");
  } 
  else {
    parseInt(charCount);
  }

var wantUpper = confirm("Do you want upper case characters?");
  if (wantUpper === true){

  }
  else {

  }
var wantLower = confirm("Do you want lower case characters?");
  if (wantLower === ture){

  }
  else {

  }
var wantNum = confirm("Do you want numbers?");
  if (wantNum === true){

  }
  else {

  }
var wantSpec = confirm("Do you want special characters?");
  if (wantSpec === true){

  }
  else {
    
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


