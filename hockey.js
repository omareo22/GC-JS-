const prompt = require("prompt-sync")();

//let shotType = prompt("Would you like to shoot high or low?");

// if (shotType.toLowerCase() === "high") {
//   console.log("Goal!");
// } else if (shotType.toLowerCase() === "low") {
//   console.log("You missed, try again");
// } else console.log("Please enter a valid response");
//////////////////////////////////////////////////////////////////////

//regular function

// function onShoot() {
//   let shotType = prompt("Would you like to shoot high or low?");
//   if (shotType.toLowerCase() === "high") {
//     console.log("Goal!");
//   } else if (shotType.toLowerCase() === "low") {
//     console.log("You missed, try again");
//   } else console.log("Please enter a valid response");
// }

// onShoot();

///////////////////////////////////////////////////////////////////////////

//random function
// function randomShot (){
//     return  Math.random() < 0.5 ? 'high' : 'low';
// }

// function doShoot (){
//     const answer = prompt("Would you like to shoot high or low?");
//     if (answer.toLowerCase() === randomShot()) {
//             console.log("Goal!");
//       } else  {
//             console.log("You missed, try again!");
//       }
// }

// doShoot();

///total player

//loop with players function
function randomShot (){
    return  Math.random() < 0.5 ? 'high' : 'low';
}

function doShoot (player){
    const answer = prompt(`Would you like to shoot high or low player ${player}?`);
    if (answer.toLowerCase() === randomShot()) {
            console.log("Goal!");
      } else  {
            console.log("You missed, try again!");
      }
}

const numberOfPlayers = +prompt ('Number of players?')

for (let i = 1; i <= numberOfPlayers; i++){
    doShoot (i);
}

