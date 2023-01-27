const prompt  = require ('prompt-sync')();

const temp = prompt ('What is the temperature?');
const unit = temp[temp.length -1];

var cur = temp.substring(0,temp.length -1);
var conv = 0; 

if (unit == 'C'){
    conv = (cur*1.8)+32;
    console.log (conv +'F')
}else if (unit == 'F'){
    conv = ((cur -32)*(5/9))
    console.log (conv +'C')
}else {
    console.log ('Please enter temp with unit')
}