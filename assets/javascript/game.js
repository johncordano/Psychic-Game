
// Creates an array that lists all of the computer choices.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Creates an empty array that will list the user guesses.
var guessesSofar = [];
// Creates a variable for the guesses left from the user.
var guessesLeft = 9;
// Creates variable for the number of times the user guess is incorrect in a game session.
var losses = 0;
//Creates variable for the number of times the user guess is correct in a game session.
var wins = 0;




// Randomly chooses a value from the computerChoices array. This value is the computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// This function is run when the user presses a key.
document.onkeyup = function(event) {

 	// Determines the key that the user pressed.
 	var userGuess = event.key;
 	// Populates GuessesSofar array with the user key.
 	guessesSofar.push(userGuess);
 	// Updates the "Guesses so far" display.
 	document.getElementById("displayuserguesses").innerHTML = (guessesSofar);
 	// Determines the guesses left.
 	guessesLeft = (guessesLeft - 1);
 	// Updates the "Guesses Left" display.
 	document.getElementById("displayguessesleft").innerHTML = (guessesLeft);
 	//Compares the computer guess to the user guess to determine the number of wins and losses.
	if ((userGuess) !== (computerGuess)) {
		losses = (losses + 1);
		}
	else {
		wins = (wins + 1);
		}
	//Updates the "Wins" display.
	document.getElementById("displaywins").innerHTML = (wins);
	//Updates the "Losses" display.
 	document.getElementById("displaylosses").innerHTML = (losses);

 	if ((guessesLeft) < 1) {
 		wins = 0;
 		losses = 0;
 		guessesLeft = 0;
	}

 	console.log(userGuess);
 	console.log(computerGuess);
 	console.log(guessesSofar);
 	console.log(guessesLeft);
 	console.log(losses);
 	console.log(wins);
 	
};


