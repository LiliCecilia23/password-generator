// Assignment Code
var generateBtn = document.querySelector("#generate");
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var lcs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ucs = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var syms = ["!","@","#","$","%","^","&","(",")","*","'","+",",",".","-","/",":",";","<",">","=","?","[","]","\\","_","|","}","{","~","\""];
var allchars = [];
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
    var allchars = ucs.concat;
  }

var wantLower = confirm("Do you want lower case characters?");
  if (wantLower === true){
    var allchars = lws.concat;
  }
  
var wantNum = confirm("Do you want numbers?");
  if (wantNum === true){
    var allchars = nums.concat;
  }
  
var wantSpec = confirm("Do you want special characters?");
  if (wantSpec === true){
    var allchars = syms.concat;
  }

if (wantUpper == false && wantLower == false && wantNum == false && wantSpec == false){
  alert("Must choose to include at least one character type.");
}
  
// Write password to the #password input
function generatePassword(l, allchars){
  var pword = "";

  for (var i = 0; i === charCount; i++){
    pword += allchars.charAt(Math.floor(Math.random) * allchars.length)
  }
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


