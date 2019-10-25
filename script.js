function pwgenerator () {
    // 4 arrays that have some of the options for the password generator 
    var speChars = ["@", "!","#", "$", "%", "^", "&", "*","~"];
    var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerLetters = ["a","b","c","d","e","f","g","h","i","j", "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    //prompts
    var userLength = prompt("How many characters would you like in your password?");
    var userSpecialChars = confirm("Would you like special characters?");
    var userNumbers = confirm("Would you like numbers?");
    var userUpperLetters = confirm("Would you like capitalized letters?");
    var userLowerLetters = confirm("Would you like lower case letters?");
    //arrays of arrays/outputs
    var userChoices = [userLength, userLowerLetters, userNumbers, userSpecialChars, userUpperLetters];
    var userFinalpw = [];
    var password = [];

    //make sure that length is returned as a number
    function pwValid () {
    //Bring in Test Driven Development (TDD) 
        //add a conditional 
        if (isNaN(userLength) === true) {
        //could omit the === true since it already returns a boolean without it
            alert("Password length must be provided as a number");
            return false
        }
        // ensures a reasonable length is input for the password
        if (userLength < 8 || userLength > 128) {
            alert("Password length may be too long or too short. Please select a number between 8 and 128");
            return false
        }  
    }

    pwValid();
    
    //this is adding the arrays of chosen choices into the options for the function to choose from
    if (userLowerLetters === true ) {
        userFinalpw.push(lowerLetters)
    }
    if (userUpperLetters === true ) {
        userFinalpw.push(upperLetters)
    }
    if (userNumbers === true ) {
        userFinalpw.push(numbers)
    }
    if (userSpecialChars === true ) {
        userFinalpw.push(speChars)
    }


    // this will loop until each random character is chosen
    for (var i = 0; i < userLength; i++) {
        //var that selects the array that the random character will be pulled from
        var ranArraySelector = Math.floor(Math.random() * userFinalpw.length);
        //var for userFinal[ranArraySelector].length
        var innerArrayLength = userFinalpw[ranArraySelector].length;
        
        //randomly picks one of the items in the randomly selected array
        var ranCharSelector = Math.floor(Math.random()* innerArrayLength);
        
        //ranChar should be a random number that is one less than the length of the selected inner array that we can use to...
        var chosenChar = userFinalpw[ranArraySelector][ranCharSelector];
        //Select a random character from the selected interior array
        
        //add the random character to the password array which is where the actual characters to be given to the user will be stored
        password.push(chosenChar);
    }
    // //get the array into a single string
    var pwString = password.join((""));

    // make a var representing the location that the password should be put
    var returnHere = document.getElementById("Textbox");

    //var repping the making pf pwString into a text node that can be added to returnHere
    var passwordGiven =document.createTextNode(pwString);

    //adds pwString to returnHere 
    returnHere.appendChild(passwordGiven)
};

