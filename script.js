// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword =  function() {



  var uppercase = false;
  var lowercase = false;
  var numeric =  false;
  var special = false;
  var length;
  var uppercaseOptions = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseOptions = ["a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
  var password = [];
  do{
  var userChoice = window.prompt("How long would you like your password to be? (8-128 charcters)*Please use only numbers*");
  var isValid =  false;
  if(userChoice>=8 && userChoice<=128){
    isValid = true;
    length = userChoice;
  }
  }while (!isValid);
  var chosen = 0;
  do{
  do{
    var userChoice = window.prompt("Would you like lower case characters?(Y/N)");
    var isValid = false;
    userChoice = userChoice.toUpperCase();
    if(userChoice === "Y"){
      isValid = true;
      lowercase = true;
      chosen++;
    }else if(userChoice === "N"){
      isValid = true;
      lowercase = false;
    }
  }while(!isValid);
  do{
    var userChoice = window.prompt("Would you like upper case characters?(Y/N)");
    var isValid = false;
    userChoice = userChoice.toUpperCase();
    if(userChoice === "Y"){
      isValid = true;
      uppercase = true;
      chosen++;
    }else if(userChoice === "N"){
      isValid = true;
      uppercase = false;
    }
  }while(!isValid);
  do{
    var userChoice = window.prompt("Would you like numeric characters?(Y/N)");
    var isValid = false;
    userChoice = userChoice.toUpperCase();
    if(userChoice === "Y"){
      isValid = true;
      numeric = true;
      chosen++;
    }else if(userChoice === "N"){
      isValid = true;
      numeric = false;
    }
  }while(!isValid);
  do{
    var userChoice = window.prompt("Would you like special characters?(Y/N)");
    var isValid = false;
    userChoice = userChoice.toUpperCase();
    if(userChoice === "Y"){
      isValid = true;
      special = true;
      chosen++;
    }else if(userChoice === "N"){
      isValid = true;
      special = false;
    }
  }while(!isValid);
  }while(chosen === 0);

  var genLength;
  for(genLength = 0; genLength < length; genLength = genLength){
    if(uppercase && genLength < length){
      var index = Math.floor(Math.random() * uppercaseOptions.length);
    password.push(uppercaseOptions[index]);

    genLength++;
    }
    if(lowercase && genLength < length){
      var index = Math.floor(Math.random() * lowercaseOptions.length);
      password.push(lowercaseOptions[index]);

    genLength++;
    }
    if(numeric && genLength < length){
      var index = Math.floor(Math.random() * numericOptions.length);
      password.push(numericOptions[index]);

    genLength++;
    }
    if(special && genLength < length){
      var index = Math.floor(Math.random() * specialOptions.length);
      password.push(specialOptions[index]);
    genLength++;
    }
  }
  console.log(password.join(''));
  window.alert(password.join(''));









  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
