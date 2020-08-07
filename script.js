// Assignment Code
document.querySelector("#generate").addEventListener("click", generatePassword());

//arrays for possible characters
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var lcs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ucs = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var syms = ["!","@","#","$","%","^","&","(",")","*","'","+",",",".","-","/",":",";","<",">","=","?","[","]","_","|","}","{","~"];
var allchars = [];


//defines length of password and verifies validity of user input
function generatePassword(){  
  var charCount = prompt("How many characters do you want your password to be?");
    while (isNaN(charCount) || charCount == 0 || charCount > 128 || charCount < 8) {
      alert("Please input valid number between 8 and 128");
      var charCount = prompt("How many characters do you want your password to be?");
    } 
  
  //checks what kind of characters the user wants
  var wantUpper = confirm("Do you want upper case characters?");
  var wantLower = confirm("Do you want lower case characters?");
  var wantNum = confirm("Do you want numbers?");
  var wantSpec = confirm("Do you want special characters?");
 
  //makes sure user has selected at least one character type
  if (wantUpper == false && wantLower == false && wantNum == false && wantSpec == false){
    alert("Must choose to include at least one character type.");
    location.reload();
  }
  //puts together arrays of wanted characters into allchars array
  else if (wantUpper === true){
    var allchars = allchars += ucs;
  }
  else if (wantLower === true){
    var allchars = allchars += lcs;
  }
  else if (wantNum === true){
    var allchars = allchars += nums;
  }
  else if (wantSpec === true){
    var allchars = allchars += syms;
  }

  
    var pwd = "";
    for (var i = 0; i < charCount; i++){
    pwd == pwd + allchars[Math.floor(Math.random() * allchars.length)];
    }
    var passwordText = document.querySelector("#password");
    passwordText.innerHTML = pwd;
    

console.log(pwd);
} 
