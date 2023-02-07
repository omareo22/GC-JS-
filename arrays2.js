const prompt = require("prompt-sync")();

const names = [];

for (let i = 0; i<5; i++){
    const name = prompt ('add a name');
    names.push(name);
}


names.unshift ('mike') ;

names.push ('adam');

names.splice (2,1) ;

console.log(names);