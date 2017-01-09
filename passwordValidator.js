function isPasswordValid(input){
   if (!hasLowercase(input)) {
     console.log("Password needs a lower case.");
    }
  if(!hasUppercase(input)){
    console.log("Password needs a capital letter.");
  }
  if (!isLongEnough(input)) {
        console.log("Password needs to be longer");
    }
  if (!hasSpecialCharacter(input)) {
    console.log("Password needs a special character.");
  }
    if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
        console.log("Password is valid.");
    }

}

function hasUppercase(input){
  for(var i = 0; i < input.length; i++){
    if(input[i] === input[i].toUpperCase()){
      return true;
    }
  }
}

function hasLowercase(input) {
  for (i = 0; i < input.length; i++) {
        if (input[i] === input[i].toLowerCase()) {
            return true;
        }
    }
}


function isLongEnough(input) {
  if (input.length >= 8) {
    return true;
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
        if (input[i] === specialCharacters[j]) {
            return true;
        }
    }
}
}
isPasswordValid("erika");