
// Creates an array that lists all of the choices for the computer guess.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Creates an empty array that will list the user guesses.
var guessesSofar = [];
// Creates a variable for the guesses left from the user.
var guessesLeft = 9;
// Creates variable for the number of times the user losses a game session.
var losses = 0;
// Creates variable for the number of times the user wins a game session.
var wins = 0;


// Loads four of the above variables from the JavaScript to the html file.
function loadvar () {
	var guessesLeft = 9;
	document.getElementById("displayguessesleft").innerHTML = (guessesLeft);
	var losses = 0;
	document.getElementById("displaylosses").innerHTML = (losses);
	var wins = 0;
	document.getElementById("displaywins").innerHTML = (wins);
	var guessesSofar = [];
	document.getElementById("displayuserguesses").innerHTML = (guessesSofar);
}


// Randomly chooses a value (the computer's guess) from the computerChoices array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// When a user presses a key, this function determines that key.
document.onkeyup = function(event) {

 	// Populates the userGuess variable with the key that the user presses.
 	var userGuess = event.key;

 	// Populates GuessesSofar array with the userGuess variable.
 	guessesSofar.push(userGuess);

 	// Clears the GuessesSofar array when a game session is complete.
 	if ((guessesSofar.length) == 9) {
 		(guessesSofar.length) = 0;
 	}

 	// Updates the "Guesses so far" display.
 	document.getElementById("displayuserguesses").innerHTML = (guessesSofar);

 	// Determines the guesses left from the user and the number of session losses, and resets the 
 	// guessesLeft variable and the computerGuess variable when the user losses a game session.
 	if ((guessesLeft) == 1) {
		losses = (losses + 1);
		(computerGuess) = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
		(guessesLeft) = 9;
	}
	else {
		guessesLeft = (guessesLeft - 1);
	}

	// Updates the "Losses" display.
 	document.getElementById("displaylosses").innerHTML = (losses);

 	// Updates the "Guesses Left" display.
 	document.getElementById("displayguessesleft").innerHTML = (guessesLeft);

	// Determines the number of session wins, resets the guessesLeft variable and the computerGuess 
	// variable when the user wins a game session, and clears the guessesSofar array when the user
	// wins a game session.
	if ((userGuess) == (computerGuess)) {
		wins = (wins + 1);
		(computerGuess) = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		(guessesLeft) = 9;
		(guessesSofar.length) = 0; 		
		}

	// Updates the "Wins" display.
	document.getElementById("displaywins").innerHTML = (wins);

	// Updates the "Guesses Left" display.
 	document.getElementById("displayguessesleft").innerHTML = (guessesLeft);

	// Updates the "Guesses so far" display.
 	document.getElementById("displayuserguesses").innerHTML = (guessesSofar);

 	// Console.logs used for debugging.
 		// console.log(userGuess);
 		// console.log(computerGuess);
 		// console.log(guessesSofar);
 		// console.log(guessesLeft);
 		// console.log(losses);
 		// console.log(wins);
 	
};
