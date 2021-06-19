// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword =  function() {



  var uppercase = false;
  var lowercase = false;
  var numeric =  false;
  var special = false;
//These variables are used to see whether or not they want a certain character type in their password

  var length;
//The length the user wants their password to be

  var uppercaseOptions = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseOptions = ["a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
//The options for each character type

  var password = [];
//an array for storing the final product password

  do{
  var userChoice = window.prompt("How long would you like your password to be? (8-128 charcters)*Please use only numbers*");
  var isValid =  false;
  if(userChoice>=8 && userChoice<=128){
    isValid = true;
    length = userChoice;
  }
  }while (!isValid);
//This gets a value for the desired password length

  var chosen = 0;
//This variables makes sure that at least one of the 4 character options are chosen for the password


  do{
  do{
    //This loops checks if lowercase is to be added, and makes sure they typed the correct answer of Y or N
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
       //This loops checks if uppercase is to be added, and makes sure they typed the correct answer of Y or N
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
       //This loops checks if numeric is to be added, and makes sure they typed the correct answer of Y or N
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
       //This loops checks if special is to be added, and makes sure they typed the correct answer of Y or N
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



//This is where the password generation starts.
  var genLength;
//Here, we set up a variable to store the length at which the password generator is at
//Then this loop goes through and checks which options are chosen and generates the password through that
  for(genLength = 0; genLength < length; genLength = genLength){
    if(uppercase && genLength < length){
      var index = Math.floor(Math.random() * uppercaseOptions.length);
    password.push(uppercaseOptions[index]);
    genLength++;
    //adds lowercase if chosen
    }
    if(lowercase && genLength < length){
      var index = Math.floor(Math.random() * lowercaseOptions.length);
      password.push(lowercaseOptions[index]);
    genLength++;
    //adds uppercase if chosen
    }
    if(numeric && genLength < length){
      var index = Math.floor(Math.random() * numericOptions.length);
      password.push(numericOptions[index]);
    genLength++;
    //adds numeric if chosen
    }
    if(special && genLength < length){
      var index = Math.floor(Math.random() * specialOptions.length);
      password.push(specialOptions[index]);
    genLength++;
    //adds special if chosen
    }
  }
  console.log(password.join(''));
  window.alert(password.join(''));
//These last two lines displays the generated password first to the console and then into the window alert









  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
