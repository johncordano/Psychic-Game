
// Creates an array that lists out all of the computer options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Creates an empty array that will list the user guesses.
var guessesSofar = [];



 // This function is run when the user presses a key.
 document.onkeyup = function(event) {

 	// Determines which key was pressed.
 	var userGuess = event.key;
 	guessesSofar.push(userGuess);
 	document.getElementById("displayuserguesses").innerHTML = (guessesSofar);
 	console.log(userGuess);
 	console.log(guessesSofar);
 	// console.log(guessesSofar.length);

	// Randomly chooses a choice from the options array. This choice is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
 };
