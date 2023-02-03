const prompt = require("prompt-sync")();

function askAboutPizza (){
    const order = prompt ('What size pizza would you like?');
    if (order === 'S'){
        return {size: 'S', price: 5}
    }
}
