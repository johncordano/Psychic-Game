
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






//Loads the variables from the js to the html.
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
 	// Resets the field values when a game session is complete.
 	// if ((guessesLeft) < 0) {
 	// 	(guessesLeft) = 9;
 	// 	(guessesSofar.length) = 0;
 	// }
 	// Determines the number of guesses left.
 	guessesLeft = (guessesLeft - 1);
 	// Updates the "Guesses Left" display.
 	document.getElementById("displayguessesleft").innerHTML = (guessesLeft);
 	//Resets the field values when a game session is complete.
 	// if ((guessesLeft) < 0) {
 	// (guessesLeft) = 9;
 	// (guessesSofar.length) = 0;
 	// }
	// Determines the number of session wins.
	if ((userGuess) == (computerGuess)) {
		wins = (wins + 1);
		//var sessiondone = true;		
		}
	// //Updates the "Wins" display.
	document.getElementById("displaywins").innerHTML = (wins);
	// Determines the number of session losses.
	if ((guessesLeft) == 0) {
		losses = (losses +1);
		//var sessiondone = true;
	}
	//Updates the "Losses" display.
 	document.getElementById("displaylosses").innerHTML = (losses);
 	//Resets the field values when the game session is complete.
 	// if sessiondone = true {
 	// (guessesLeft) = 9;
 	// (guessesSofar.length) = 0;
 	// }


 	

 	console.log(userGuess);
 	console.log(computerGuess);
 	console.log(guessesSofar);
 	console.log(guessesLeft);
 	console.log(losses);
 	console.log(wins);
 	
};

//Resets field values when a game session is complete. This doesn't work.
// if ((guessesLeft) < 1) {
// 		(guessesLeft) = 9;
// 		(guessesSofar.length) = 0;
// }
// else {
// };





