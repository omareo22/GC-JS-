const prompt = require('prompt-sync')();

let balance = 10;
let updated = balance;



function flipCoin () {
    const flip = Math.random() < 0.5 ? 'H' : 'T';
    return flip
}

function addBet (bet){
    balance = balance + bet;
}

function lostBet (bet) {
    balance = balance - bet;
}

while (balance > 0){
    let bet = +prompt ('Place your wager');
while (bet > balance){
    console.log ('Insufficient Funds');
    bet = +prompt ('Place your wager.');
}
}

