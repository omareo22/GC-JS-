const prompt = require("prompt-sync")();

const characterName = prompt ("What is your name? ");
const wantsToPlay = prompt(`Welcome ${characterName}, would you like to play a game? [Y/N] `);

if (wantsToPlay === "N") { 
	console.log('Ok');
	process.exit();
}

const guess = prompt("Heads or Tails? [H/T] ");

// this line is ok
const flip = Math.random() < 0.5;

if (flip === guess) {
    console.log('You win!');
    
} else {
	console.log('You lose!');
}